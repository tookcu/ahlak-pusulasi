-- =====================================================================
-- Dijital Ahlak Pusulası — ortak canlı istatistik (Supabase / PostgreSQL)
--
-- Kullanım: Supabase → SQL Editor → New query → bu dosyanın tamamını yapıştır → Run
-- Tekrar çalıştırmak güvenlidir: tablolar korunur, fonksiyonlar güncellenir.
--
-- Gizlilik: ad, cihaz, konum gibi kişisel veri tutulmaz; yalnızca anonim kararlar ve sonuçlar.
-- Güvenlik: tablolara doğrudan erişim kapalıdır. Uygulama yalnızca iki fonksiyonu çağırabilir:
--   submit_game(payload) → biten bir oyunu kaydeder
--   get_stats(p_version) → toplu sayıları döndürür (tek tek kayıtlar asla dışarı verilmez)
-- Rapor için ham veri: Supabase → Table Editor → games / decisions → Export to CSV
-- =====================================================================

-- Her tamamlanan oyun bir satır
create table if not exists public.games (
    id              uuid primary key default gen_random_uuid(),
    created_at      timestamptz not null default now(),
    content_version text not null check (char_length(content_version) between 1 and 40),
    source          text not null check (source in ('kiosk', 'web')),
    dominant        text not null check (char_length(dominant) between 1 and 40),
    secondary       text check (char_length(secondary) <= 40),
    shares          jsonb not null default '{}'::jsonb check (pg_column_size(shares) < 2000)
);

-- Her kartta verilen karar bir satır. choice, sorunun ekranda değil verideki özgün
-- tarafıdır (leftChoice = 'left'); sol/sağ karıştırması istatistiği bozmaz.
create table if not exists public.decisions (
    id              bigint generated always as identity primary key,
    game_id         uuid not null references public.games (id) on delete cascade,
    created_at      timestamptz not null default now(),
    content_version text not null check (char_length(content_version) between 1 and 40),
    question_id     text not null check (char_length(question_id) between 1 and 40),
    choice          text not null check (choice in ('left', 'right'))
);

create index if not exists games_version_idx on public.games (content_version);
create index if not exists decisions_version_question_idx on public.decisions (content_version, question_id);

-- Satır düzeyi güvenlik açık ve hiç politika yok: tablolar dışarıya tamamen kapalı
alter table public.games enable row level security;
alter table public.decisions enable row level security;
revoke all on public.games, public.decisions from anon, authenticated;

-- Biten bir oyunu tek seferde (oyun + kararları) kaydeder
create or replace function public.submit_game(payload jsonb)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
    v_game    uuid := gen_random_uuid();
    v_version text := payload ->> 'version';
begin
    if jsonb_typeof(payload -> 'decisions') is distinct from 'array'
       or jsonb_array_length(payload -> 'decisions') > 50 then
        raise exception 'decisions en fazla 50 öğeli bir dizi olmalı';
    end if;

    insert into public.games (id, content_version, source, dominant, secondary, shares)
    values (v_game, v_version, coalesce(payload ->> 'source', 'web'), payload ->> 'dominant',
            payload ->> 'secondary', coalesce(payload -> 'shares', '{}'::jsonb));

    insert into public.decisions (game_id, content_version, question_id, choice)
    select v_game, v_version, d ->> 'q', d ->> 'c'
    from jsonb_array_elements(payload -> 'decisions') as d;
end;
$$;

-- Bir içerik sürümü için toplu sayılar:
-- { games: 123, dominant: { kant: 40, ... }, choices: { "1": { left: 70, right: 53 }, ... } }
create or replace function public.get_stats(p_version text)
returns jsonb
language sql
stable
security definer
set search_path = public
as $$
    select jsonb_build_object(
        'games', (select count(*) from public.games where content_version = p_version),
        'dominant', coalesce((
            select jsonb_object_agg(dominant, n)
            from (select dominant, count(*) as n
                  from public.games
                  where content_version = p_version
                  group by dominant) as t
        ), '{}'::jsonb),
        'choices', coalesce((
            select jsonb_object_agg(question_id, counts)
            from (select question_id, jsonb_object_agg(choice, n) as counts
                  from (select question_id, choice, count(*) as n
                        from public.decisions
                        where content_version = p_version
                        group by question_id, choice) as c
                  group by question_id) as q
        ), '{}'::jsonb)
    );
$$;

revoke all on function public.submit_game(jsonb) from public;
revoke all on function public.get_stats(text) from public;
grant execute on function public.submit_game(jsonb) to anon, authenticated;
grant execute on function public.get_stats(text) to anon, authenticated;

-- Fuardan önce deneme kayıtlarını silmek için (DİKKAT: tüm kayıtları siler):
-- truncate public.games cascade;
