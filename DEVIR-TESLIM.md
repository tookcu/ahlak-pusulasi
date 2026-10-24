# Devir Teslim Rehberi — Dijital Ahlak Pusulası

Bu proje her yıl yeni bir öğrenci ekibine geçecek şekilde hazırlandı. Rehberin ilk bölümü **felsefe
ekibi**, ikinci bölümü **bilişim ekibi** içindir. Son bölüm her yılın döngüsünü ve sık sorunları anlatır.

- Canlı site: https://tookcu.github.io/ahlak-pusulasi/
- İçerik kontrolü: https://tookcu.github.io/ahlak-pusulasi/kontrol.html
- Depo: https://github.com/tookcu/ahlak-pusulasi

> Depo ve Supabase hesabı başka bir hesaba/organizasyona taşınırsa yukarıdaki adresleri güncelleyin.

---

## Proje kısaca

Ziyaretçi 12 siber ikilemde kartı sola ya da sağa kaydırır. Her seçenek dört filozofa
(Kuzey **Kant**, Güney **Bentham**, Doğu **Aristoteles**, Batı **Nietzsche**) puan verir. Sonunda
"Ana Profil" ve "İkincil Yönelim", bir pusula, rozetler ve QR kodlu bir sertifika görür.
Tüm cihazların sonuçları anonim olarak tek bir veritabanında (Supabase) toplanır.

| Dosya | Ne işe yarar | Kim değiştirir |
|---|---|---|
| `veri.js` | Filozoflar, sorular, tepki cümleleri, rozet metinleri | Felsefe ekibi |
| `kontrol.html` | `veri.js`'i denetler: yazım hatası, uzunluk, denge | (açıp bakmak yeterli) |
| `index.html` | Uygulamanın kendisi (tasarım + kod) | Bilişim ekibi |
| `gemini-denge-istemi.md`, `gemini-metin-istemi.md` | Yapay zekâya içerik ürettirmek için hazır istemler | Felsefe ekibi |
| `sw.js`, `manifest.webmanifest`, `icon.svg`, `apple-touch-icon.png` | İnternetsiz çalışma ve "Ana Ekrana Ekle" | Bilişim ekibi (nadiren) |
| `supabase/schema.sql` | Ortak istatistik veritabanının kurulumu | Bilişim ekibi (bir kez) |
| `.github/workflows/supabase-canli-tut.yml` | Veritabanının uyutulmasını önleyen zamanlanmış iş | Dokunmayın |
| `YOL-HARITASI.md` | Yapılanlar ve fuar öncesi prova listesi | Herkes |

---

## 1. Felsefe ekibi için: içeriği güncellemek

Kod bilmenize gerek yok; yalnızca `veri.js` dosyasıyla çalışırsınız.

### Yeni sorular ya da filozoflar

1. `gemini-denge-istemi.md` dosyasını açın. İçindeki "Mevcut sorular" bölümünü `veri.js`'teki güncel
   `QUESTIONS` bloğuyla değiştirin ve dosyanın tamamını Gemini'ye (ya da başka bir yapay zekâya) yapıştırın.
   İstem; dengeyi, uzunluk sınırlarını ve çıktı biçimini zaten anlatıyor.
2. Gelen `QUESTIONS` bloğunu `veri.js`'teki eski bloğun yerine yapıştırın.
3. **`kontrol.html`'i açın** (dosyaya çift tıklayın).
   - **Yeşil "Yayına hazır":** devam edin.
   - **Sarı uyarılar:** uygulama çalışır, ama denge ya da ekrana sığma bozulmuş olabilir; mümkünse düzeltin.
   - **Kırmızı:** yayınlamayın. Yazım hatasıysa sayfa hatalı satırı gösterir.
4. `index.html`'i açıp bir tur oynayın.
5. Bilişim ekibine haber verin ya da GitHub Desktop ile kendiniz yayınlayın (bkz. 2. bölüm).

### Tepki cümleleri ve rozet metinleri

Aynı yol, istem dosyası `gemini-metin-istemi.md`. Rozetlerin **kimlikleri** (`tutarli`, `dengeli`…)
değiştirilmez; yalnızca başlık ve açıklamalar değişir.

### Denge neden önemli?

Bir filozof diğerlerinden çok daha sık çıkarsa sonuçlar ziyaretçinin kararlarını değil soruların
eğilimini yansıtır. `kontrol.html` olası bütün cevap kombinasyonlarını hesaplar; her filozof yaklaşık
eşit oranda (%25 ± 5) ana profil çıkmalıdır. Bunun en kolay yolu: **her filozof çifti eşit sayıda soruda
karşılaşsın, her seçeneğin tek bir "sahibi" (+20) olsun.**

### Yazarken dikkat

- Metinler çift tırnak içindedir: `"…"`. Metnin içinde tırnak gerekiyorsa tek tırnak (`'`) kullanın.
- Her satırın sonundaki virgülleri koruyun.
- Uzunluk sınırları kiosk ve telefon ekranında denenmiştir (senaryo ≤ 230, seçenek başlığı ≤ 35,
  gerekçe ≤ 125, tepki ≤ 70 karakter).
- Sorular değiştiğinde ortak istatistik kendiliğinden **sıfırdan** başlar (eski yanıtlarla karışmaz).
  Bu yüzden içerik fuardan önce kesinleşmeli.

---

## 2. Bilişim ekibi için

### Araçlar

- **GitHub Desktop** (değişiklikleri yayınlamak için) ve depoya yazma yetkisi.
- Bir metin düzenleyici (VS Code önerilir).
- Supabase panelinde ekip üyeliği (istatistik ve rapor için).

### Değişikliği denemek ve yayınlamak

1. GitHub Desktop'ta önce **Fetch origin / Pull origin** yapın. Bir bot her ayın 1'inde depoya küçük
   bir commit atar; çekmeden çalışırsanız çakışma yaşarsınız.
2. Değişikliği yapın. `index.html`'i tarayıcıda açarak deneyin. Dosyadan açıldığında internet gerekmez;
   bu durumda web'e özgü özellikler (sertifika bağlantısı QR'ı, "Telefonunda oyna", ortak istatistik
   gönderimi) kendiliğinden kapanır ya da sonraya ertelenir.
3. Web özelliklerini denemek için dosyaları bir yerel sunucudan açın (ör. VS Code "Live Server"),
   ya da yayınladıktan sonra canlı sitede deneyin.
4. GitHub Desktop → özet yazın → **Commit to main** → **Push origin**. Yaklaşık bir dakika içinde canlı
   site güncellenir.

### Ekranlar

Uygulama stantta **9. nesil iPad, yatay** (1080×810) için ayarlıdır. Ziyaretçiler kendi telefonlarından
da oynayabilir (≈390×660). Görsel değişiklikten sonra bu iki boyutta, tarayıcının geliştirici
araçlarındaki cihaz görünümüyle, bütün kartları gezerek kontrol edin.

### Ortak istatistik (Supabase)

- Proje: `ujsixenkmskagvktloim` (Frankfurt). Adres ve **publishable** anahtar `index.html` içindeki
  `SHARED_STATS` ayarındadır; bu anahtar herkese açık olacak şekilde tasarlanmıştır.
- Tablolar dışarıya kapalıdır; uygulama yalnızca `submit_game` ve `get_stats` fonksiyonlarını çağırır
  (`supabase/schema.sql`). **Secret / service_role anahtarını ve veritabanı şifresini asla koda koymayın.**
- Ad, cihaz, konum gibi kişisel veri gönderilmez. Sertifika bağlantısındaki ad adresin `#` kısmında durur
  ve sunucuya gitmez. Bu ilkeyi koruyun; ziyaretçilerin çoğu reşit değildir.
- **Rapor için veri:** Supabase → Table Editor → `games` ve `decisions` → Export to CSV.
- **Fuardan önce deneme kayıtlarını silmek:** SQL Editor → `truncate public.games cascade;`
- **Uyutma:** Ücretsiz proje 7 gün sorgu almazsa uyutulur. `.github/workflows/supabase-canli-tut.yml`
  3 günde bir sorgu atar; GitHub → Actions'ta çalışmalar yeşil olmalı. Kırmızıysa Supabase panelinden
  projeyi "Restore" edin.
- Veritabanı ulaşılamazsa uygulama durmaz: sonuçları cihazda bekletir, bağlantı gelince gönderir.
  Yönetim panelindeki "Ortak canlı istatistik" bölümü durumu gösterir.

### Yönetim paneli

Üst bardaki ayar düğmesi PIN ister (varsayılan değer `KIOSK_CONFIG.defaultAdminPin`). Panelden
yapılan PIN, soru ve istatistik değişiklikleri **yalnızca o cihazın tarayıcısında** saklanır. Kalıcı içerik
değişikliği her zaman `veri.js` üzerinden yapılmalıdır.

### Koruma altındaki kurallar

Bunlar projenin temel kararlarıdır; değiştirmeden önce ekipçe konuşun:

- Uygulama **internetsiz de çalışmalıdır** (dışarıdan yazı tipi, CSS ya da kütüphane yüklenmez).
- **Kişisel veri** sunucuya gönderilmez.
- Puanlama: 20 taban puan, puanlar 5–250 arasında, eşitlikte kararların çoğunun yöneldiği filozof öne
  geçer. `kontrol.html` aynı kuralları kullanır; birini değiştirirseniz ikisini birlikte güncelleyin.
- Sol/sağ seçenekler her oyunda dengeli karıştırılır; istatistik kararın verideki özgün tarafını kaydeder.

---

## 3. Her yılın döngüsü

1. **Eylül–Ekim:** Ekip ve hesap erişimleri devredilir (GitHub, Supabase). Bu rehber birlikte okunur.
2. **Kasım–Şubat:** Felsefe ekibi soruları/metinleri günceller → `kontrol.html` yeşil → yayın.
3. **Mart–Nisan:** Bilişim ekibi yeni özellikleri ekler; iPad ve telefonda denenir.
4. **Fuardan 1–2 hafta önce:** `YOL-HARITASI.md`'deki prova listesi (deneme kayıtlarını silme, iPad'i
   "Ana Ekrana Ekle" + Rehberli Erişim ile kurma, PIN değiştirme, QR afişi basma).
5. **Fuardan sonra:** Supabase'den CSV alınır, TÜBİTAK raporu için özetlenir; bu rehbere o yılın notları eklenir.

## 4. Sık sorunlar

| Belirti | Sebep ve çözüm |
|---|---|
| Uygulama "veri.js okunamadı" diyor | `veri.js`'te yazım hatası var ya da dosya yanında değil → `kontrol.html` hatalı satırı gösterir |
| Kontrol sayfası sarı "denge" uyarısı veriyor | Bir filozof fazla/az çıkıyor → `gemini-denge-istemi.md` ile soruları yeniden dengeleyin |
| Canlı site güncellenmedi | Push yapıldı mı? GitHub → Actions'ta "pages build and deployment" yeşil mi? Sayfayı yenileyin |
| iPad eski sürümü gösteriyor | İnternet varken uygulamayı kapatıp açın; önbellek önce internete bakar |
| "Fuarda N kişi" yerine "Bu standda" yazıyor | Veritabanına ulaşılamıyor → Supabase uyutulmuş olabilir, Actions'a bakın |
| QR telefonda açılmıyor | QR web linki modundaysa telefonda internet gerekir; yönetim panelinden bağlantı durumunu kontrol edin |
| Yönetici PIN'i unutuldu | O cihazda uygulamanın verilerini silin (iPad'de ana ekran simgesini silip yeniden ekleyin); PIN varsayılana döner |

## 5. Yapay zekâ ile çalışmak

Depoda `AGENTS.md` (ve `CLAUDE.md`) dosyası, Claude, Gemini, Copilot gibi araçlara projenin kurallarını
anlatır. Bir yapay zekâ aracıyla çalışırken ona önce bu dosyayı okutun; çıkan değişikliği her zaman
`kontrol.html` ve iPad/telefon görünümünde kendiniz doğrulayın.
