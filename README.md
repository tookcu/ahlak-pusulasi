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

## Stantta iPad ile kullanım (9. nesil iPad için denendi)

Uygulama iPad'de **yatay** kullanım için tasarlandı (1080×810); karşılama, 12 kartın tamamı ve sonuç
ekranı kaydırmadan sığar. Dikey kullanımda oyun sığar ama karşılama ekranı kaydırma ister.

1. **Kurulum (internet varken, bir kez):** Safari'de siteyi aç → Paylaş düğmesi → **Ana Ekrana Ekle**.
   Ana ekrandaki "Ahlak Pusulası" simgesinden açıldığında tarayıcı çubukları olmadan tam ekran çalışır
   ve çevrimdışı önbelleğe alınır. Ana ekrandan bir kez açıp bütün ekranları gezmek yeterli.
2. **Kilitleme:** Ayarlar → Erişilebilirlik → **Rehberli Erişim**'i aç; uygulamadayken yan/üst düğmeye üç kez
   basıp başlat. Ziyaretçi uygulamadan çıkamaz; ekran yönü de kilitlenebilir (yatay).
3. **Ekranın kapanmaması:** Ayarlar → Ekran ve Parlaklık → **Otomatik Kilit: Asla**. Şarj kablosu takılı kalsın.
4. **Ses:** Yan anahtar/ses düzeyi açık olmalı; uygulamadaki ses düğmesiyle efektler kapatılabilir.
5. **Yönetici PIN'i:** Ana ekrandan açılan uygulama, Safari'den ayrı bir depolama kullanır; PIN değişikliğini
   ana ekrandaki uygulamanın içinden yapın.

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
