# Dijital Ahlak Pusulası — Yol Haritası

Son durum (23.10.2026 gecesi): Site yayında → https://tookcu.github.io/ahlak-pusulasi/
4 filozoflu pusula, dengelenmiş 12 soru, QR sertifika sayfası, "Telefonunda oyna",
çevrimdışı önbellek ve Supabase ortak canlı istatistik çalışıyor ve test edildi.

## 1. Oyunlaştırma (sıradaki iş)
- [x] Her karardan sonra filozof tepki kartı + "aynı kararı verenler" oranı
- [x] Oyun sonunda rozetler (Tutarlı Pusula, Dengeli Gezgin, Dört Yön Kâşifi, İkilemin Ustası, Azınlığın Sesi, Toplumun Nabzı)
- [x] Sonuç pusulasında fuardaki ziyaretçilerin dağılımı (kesikli çizgi, en az 5 oyun birikince)
- [ ] Stantta büyük ekran için canlı "fuarın ortak pusulası" sayfası
- [ ] Tepki cümleleri (`REACTIONS`) ve rozet metinleri (`BADGES`) şu an taslak — felsefe ekibi gözden geçirecek

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
