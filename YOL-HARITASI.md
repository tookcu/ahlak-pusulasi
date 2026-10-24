# Dijital Ahlak Pusulası — Yol Haritası

Son durum (23.10.2026 gecesi): Site yayında → https://tookcu.github.io/ahlak-pusulasi/
4 filozoflu pusula, dengelenmiş 12 soru, QR sertifika sayfası, "Telefonunda oyna",
çevrimdışı önbellek ve Supabase ortak canlı istatistik çalışıyor ve test edildi.

## 1. Oyunlaştırma (sıradaki iş)
- [ ] Her karardan sonra kısa filozof tepki kartı ("Kant burada şöyle derdi…")
- [ ] Oyun sonunda rozetler (ör. "Tutarlı Kantçı", "Dengeli Gezgin", "Azınlığın Sesi")
- [ ] Kendi pusulanı fuar ortalamasıyla karşılaştırma (sonuç ekranında ikinci iğne)
- [ ] Stantta büyük ekran için canlı "fuarın ortak pusulası" sayfası
- Tepki cümleleri ve rozet adları için felsefe ekibine (Gemini) içerik istemi hazırlanacak

## 2. Küçük iyileştirmeler
- [ ] Telefonda en uzun kartta hafif kaydırma (~80 px) — kart ve seçenekler sıkılaştırılabilir
- [ ] Bazı sorulara özel ikon (sanat, enerji kotası şu an genel ikon alıyor)
- [ ] İsteğe bağlı: commit e-postasını GitHub "noreply" adresine çevirmek

## 3. Fuardan önce mutlaka (prova listesi)
- [ ] Supabase → SQL Editor: `truncate public.games cascade;` (deneme kayıtlarını siler)
- [ ] Supabase'in açık olduğunu kontrol et. `.github/workflows/supabase-canli-tut.yml` 3 günde bir
      sorgu atarak uyutulmayı önler; GitHub → Actions'ta son çalışmaların yeşil olduğuna bak
- [ ] Kiosk tabletinde siteyi aç → "Uygulamayı yükle" → interneti kesip dene
- [ ] Yönetim panelinden yönetici PIN'ini değiştir (varsayılan kodda görünür)
- [ ] "Telefonunda oyna" QR'ını afiş olarak bas
- [ ] Sertifika QR'ını iPhone ve Android telefonlarla okut
- [ ] Ses açık/kapalı ve tam ekran (kiosk) modunu dene

## Çalışma düzeni
- Kod: `index.html` (tek dosya). Sorular/filozoflar: "3. VERİ BÖLÜMÜ".
- Değişiklikler Claude ile yapılır, commit'lenir; GitHub'a gönderme GitHub Desktop → "Push origin".
- Veritabanı şeması: `supabase/schema.sql`. İçerik dengesi istemi: `gemini-denge-istemi.md`.
