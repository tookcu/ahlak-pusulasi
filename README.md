# Dijital Ahlak Pusulası

Felsefe × Bilişim etkileşimli etik simülasyonu. Ziyaretçiler siber ikilemleri (otonom araçlar, yapay zekâ
gözetimi, deepfake, veri mahremiyeti…) sola ya da sağa kaydırarak yanıtlar; sonunda dört yönlü bir ahlak
pusulasında **Ana Profil** ve **İkincil Yönelim** olarak hangi filozofa yakın düşündüklerini görürler.

| Yön | Filozof | Ekol |
|---|---|---|
| Kuzey | Immanuel Kant | Ödev Etiği |
| Güney | Jeremy Bentham | Faydacılık |
| Doğu | Aristoteles | Erdem Etiği |
| Batı | Friedrich Nietzsche | Radikal Otonomi |

## Kullanım

- **Web:** GitHub Pages adresinden açılır. Sayfa bir kez internetle açıldıktan sonra bağlantı kesilse de
  çalışmaya devam eder (çevrimdışı önbellek). Tarayıcı menüsünden "Uygulamayı yükle" ile tam ekran kurulabilir.
- **İnternetsiz (yedek):** `index.html` dosyasına çift tıklamak yeterli; tüm yazı tipleri ve stiller dosyanın içindedir.
- **Kiosk:** Üst bardaki tam ekran düğmesi; işlem yapılmazsa oturum kendiliğinden sıfırlanır.
- **Telefonunda oyna:** Web sürümünde üst bardaki düğme, uygulamanın adresini büyük bir QR olarak gösterir
  (afiş olarak basılabilir).
- **Sertifika QR'ı:** Web sürümünde kişisel sertifika sayfasına bağlanır. Ad ve sonuçlar adresin `#` kısmında
  taşınır; bu kısım sunucuya gönderilmez, sunucuda hiçbir kişisel veri tutulmaz.

## Soruları ve filozofları düzenlemek

Tüm içerik `index.html` içindeki **"3. VERİ BÖLÜMÜ"** başlığı altındadır (`PHILOSOPHERS` ve `QUESTIONS`).
Biçim o bölümün açıklamasında anlatılır; filozof sayısı sabit değildir, arayüz veriden üretilir.

Puanlama: her filozof 20 puanla başlar, puanlar her karardan sonra 5–250 arasında tutulur, yüzdeler toplam
100 olacak şekilde hesaplanır. Eşitlikte kararların daha çoğu hangi filozofa yöneldiyse o öne geçer.

## Yönetim paneli

Üst bardaki ayar düğmesi PIN ister (varsayılan değer `index.html` içinde `KIOSK_CONFIG.defaultAdminPin`).
Panelden yapılan soru ve istatistik değişiklikleri yalnızca o cihazın tarayıcısında saklanır.

## Dosyalar

| Dosya | Görev |
|---|---|
| `index.html` | Uygulamanın tamamı (stiller, gömülü yazı tipleri, veri ve kod) |
| `sw.js` | Çevrimdışı önbellek (yalnızca web sürümünde çalışır) |
| `manifest.webmanifest`, `icon.svg` | Kurulabilir uygulama (PWA) bilgileri ve simgesi |

Yazı tipleri: Inter, Space Grotesk, Cinzel (SIL Open Font License 1.1).
