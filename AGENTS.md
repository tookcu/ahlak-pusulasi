# Yapay zekâ kod araçları için proje talimatları

Bu dosya Claude, Gemini, Copilot ve benzeri yapay zekâ araçlarına projenin kurallarını anlatır.
Değişiklik yapmadan önce bütününü oku. İnsanlar için ayrıntılı rehber: `DEVIR-TESLIM.md`.

## Proje

"Dijital Ahlak Pusulası": TÜBİTAK destekli lise bilim fuarı projesi. Ziyaretçi 12 siber etik ikilemde
kartı sola/sağa kaydırır; seçenekler dört filozofa (Kant, Bentham, Aristoteles, Nietzsche) puan verir;
sonuçta pusula, rozetler ve QR kodlu sertifika gösterilir. Kullanıcılar ve geliştiriciler Türkçe konuşur:
arayüz metinleri, yorumlar ve commit mesajları Türkçe yazılır.

- Yayın: GitHub Pages (`main` dalı, kök klasör). Değişiklikler GitHub Desktop ile push edilir.
- Stant cihazı: 9. nesil iPad, Safari, yatay (1080×810; Safari çubukları açıkken ~1080×740),
  "Ana Ekrana Ekle" ile tam ekran. Ziyaretçiler kendi telefonlarından da oynar (~390×660).

## Dosyalar

- `veri.js` — tüm içerik: `PHILOSOPHERS`, `QUESTIONS`, `REACTIONS`, `BADGES`. Biçim dosyanın başında anlatılır.
  Felsefe ekibi bu biçimi yapay zekâ ile üretip olduğu gibi yapıştırır; biçimi bozma, alan adlarını değiştirme.
- `index.html` — uygulamanın tamamı: CSS tasarım değişkenleri (`:root`), gömülü yazı tipleri, QR üretici,
  ses, veri dönüştürme (`PHILOSOPHER_LIST`, `normalizeQuestion`), puanlama (`SCORING`, `rankPhilosophers`),
  ortak istatistik (`SHARED_STATS`, `sharedStats`) ve `app` nesnesi. Derleme adımı yok; düz HTML/CSS/JS.
- `kontrol.html` — `veri.js` denetimi (yazım hatası, uzunluk, 4096 kombinasyonla denge). Puanlama kurallarını
  kopyalar; `index.html`'deki `SCORING`/`rankPhilosophers` değişirse burayı da güncelle.
- `sw.js` — çevrimdışı önbellek (önce ağ). Yeni bir dosya eklenirse `ASSETS`'e ekle ve `CACHE` adını artır.
- `supabase/schema.sql` — veritabanı: tablolar RLS ile kapalı, yalnızca `submit_game(payload)` ve
  `get_stats(p_version)` fonksiyonları çağrılabilir.
- `.github/workflows/supabase-canli-tut.yml` — Supabase'in uyutulmaması için 3 günde bir sorgu ve
  aylık "nabız" commit'i. Çalışmaya başlamadan önce `git pull` yap.

## Değişmez kurallar

1. **İnternetsiz çalışma.** `index.html` dosyadan açıldığında da çalışmalı. Dışarıdan yazı tipi, CSS,
   kütüphane ya da CDN ekleme. Yeni bir yerel dosya eklersen `sw.js`'teki `ASSETS`'e de ekle.
2. **Kişisel veri yok.** Ziyaretçi adı ya da kimliğini belirleyecek hiçbir bilgi sunucuya (Supabase)
   gönderilmez. Sertifika bağlantısında ad adresin `#` kısmında taşınır. Ziyaretçilerin çoğu reşit değildir.
3. **Gizli anahtar yok.** Kodda yalnızca Supabase *publishable* anahtarı bulunabilir. `service_role`/secret
   anahtarı ya da veritabanı şifresi asla depoya girmez.
4. **Denge.** İçerik değişikliği `kontrol.html`'de yeşil olmalı: her filozof ~%25 ± 5 ana profil; her çift
   eşit sayıda soruda karşılaşır; her seçeneğin tek bir +20 "sahibi" vardır.
5. **Ekrana sığma.** Karşılama, 12 kartın tamamı ve sonuç ekranının profil bölümü iPad yatayda kaydırmadan
   sığmalı; oyun ekranı telefonda (390×660) kaydırmadan sığmalı. Görsel değişiklikten sonra bu boyutlarda
   bütün kartları gezerek ölç.
6. **Veri sürümü.** Ortak istatistik, soru verisinin parmak izine (`CONTENT_VERSION`) göre ayrılır. İçeriği
   değiştirmeyen bir yeniden düzenleme bu değeri değiştirmemeli.
7. **Kimlikler sabit.** Filozof `id`'leri ve rozet anahtarları (`tutarli`, `dengeli`, `kasif`, `ikilem`,
   `azinlik`, `cogunluk`, `yolcu`) kodda kullanılır; yeniden adlandırma.

## Kod biçimi

- Mevcut stile uy: CSS değişkenleri ve bileşen sınıfları (Tailwind yok), `app` nesnesinin yöntemleri,
  Türkçe açıklama satırları, kısa ve amaca yönelik yorumlar.
- Kullanıcıya görünen metinler Türkçe; yüzdeli cümlelerde Türkçe ek sorununa dikkat ("%63'ü / %50'si"):
  mümkünse eksiz yapı kullan ("Aynı kararı verenler: %63").
- Yeni arayüz metinleri `escapeHtml` ile basılır; `innerHTML`'e ham kullanıcı/veri metni koyma.

## Doğrulama

- `kontrol.html` → "Yayına hazır".
- `index.html` → baştan sona bir oyun; konsolda hata olmamalı.
- Web özellikleri (QR bağlantısı, servis çalışanı, ortak istatistik) yalnızca http(s) üzerinden çalışır;
  yerel bir sunucuyla ya da canlı sitede dene. Supabase'e test verisi yazacaksan gerçek sürümü kirletme:
  testte `sharedStats.enabled = false` kullan ya da istekleri ayrı bir test sürümüne yönlendir.
