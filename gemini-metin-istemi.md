<!--
    EKİP İÇİN NOT: Bu dosyanın tamamını (bu not hariç) Gemini'ye yapıştırın.
    Yeniden kullanırken "Mevcut taslaklar" bölümüne veri.js'teki güncel REACTIONS ve BADGES
    bloklarını yapıştırın. Gelen blokları veri.js'e koyup kontrol.html'de uzunlukların yeşil
    olduğunu doğrulayın (bkz. DEVIR-TESLIM.md).
-->

Sen bir etik felsefesi uzmanı ve oyun metni yazarısın. "Dijital Ahlak Pusulası" adlı lise bilim fuarı oyunu için iki kısa metin setini yeniden yazmanı istiyorum. Taslakları bir yazılımcı yazdı; felsefi doğruluk ve dil açısından senin elinden geçmeleri gerekiyor.

## Oyun bağlamı

Ziyaretçi 12 siber ikilemde (yapay zekâ, veri, sosyal medya, sağlık teknolojisi…) iki seçenekten birini seçer. Dört filozof pusulanın dört yönündedir:

- `kant` — Kuzey, Ödev Etiği. Unvanı: "Dijital İlke ve Hak Muhafızı"
- `bentham` — Güney, Faydacılık. Unvanı: "Siber Toplum ve Fayda Mimarı"
- `aristoteles` — Doğu, Erdem Etiği. Unvanı: "Dijital Bilgelik ve Denge Yolcusu"
- `nietzsche` — Batı, Radikal Otonomi. Unvanı: "Siber Özgürlük ve Öncü Kaşif"

## 1. Tepki cümleleri (`REACTIONS`)

Ziyaretçi bir kararı verdiği anda, o kararın arkasındaki filozofun madalyonu ve "{Filozof} bu kararın arkasında" başlığıyla birlikte **tek bir kısa cümle** ekranda 3 saniye görünür. Aynı filozof bir oyunda 3–6 kez çıkabildiği için her filozofa **5 farklı cümle** yaz.

Kurallar:

- Cümle, ziyaretçiye dönük bir onay ya da yorum olsun ("…seçtin", "…baktın" gibi) ya da filozofun bakışını özetleyen kısa bir düstur olsun.
- **Uydurma alıntı olmasın.** Filozofun gerçekten söylediği bir sözse anlamı korunarak sadeleştirilebilir; değilse alıntı gibi sunulmasın. Her cümle o filozofun öğretisine sadık olsun.
- Ekol adlarını doğrudan kullanma ("faydacılık", "ödev etiği", "erdem etiği" demeden anlat).
- Bir filozofun 5 cümlesi birbirini tekrar etmesin; öğretinin farklı yönlerine değsin (Kant: insan onuru, evrenselleştirme, dürüstlük, rıza, iyi niyet; Bentham: haz/acı, sonuçlar, en çok kişi, tarafsız hesap, verimlilik; Aristoteles: ölçülülük, alışkanlık, pratik bilgelik, dostluk, topluluk; Nietzsche: kendini aşma, kendi değerlerini yaratma, kalabalığa uymama, cesaret, yaşamı olumlama).
- Lise öğrencisinin hemen anlayacağı, sıcak ve sade Türkçe.
- **Her cümle en fazla 70 karakter** (ekrandaki küçük karta sığması için).

## 2. Rozet metinleri (`BADGES`)

Oyun sonunda ziyaretçi oynayışına göre en fazla 3 rozet kazanır. Rozetlerin **kazanılma koşulları sabit** (yazılım belirliyor); sen yalnızca **başlık** (`title`) ve **açıklama** (`desc`) yaz. Kimliklere (`tutarli`, `dengeli`…) dokunma.

| Kimlik | Kazanılma koşulu |
|---|---|
| `tutarli` | Ana filozofunun seçenek sunduğu ikilemlerin en az %80'inde onun tarafını seçti |
| `dengeli` | Hiçbir filozofun payı %32'yi geçmedi (dört yön de yakın) |
| `kasif` | Kararları dört filozof arasında tam eşit dağıldı (nadir: oyuncuların yaklaşık %4'ü) |
| `ikilem` | Ana profil ile ikincil yönelim arasındaki fark en fazla 3 puan |
| `azinlik` | En az 4 kararda fuardaki ziyaretçilerin çoğunluğundan farklı seçim yaptı |
| `cogunluk` | Kararlarının en az üçte ikisinde fuardaki çoğunlukla aynı seçimi yaptı |
| `yolcu` | Başka hiçbir rozet kazanmadıysa verilir: 12 ikilemi tamamladı |

Kurallar:

- Başlık en fazla 22 karakter, akılda kalıcı ve övücü; açıklama en fazla 80 karakter, koşulu doğru anlatsın.
- `azinlik` ile `cogunluk` birbirinin tersi; ikisi de olumlu bir dille yazılsın (azınlıkta kalmak da çoğunlukla aynı düşünmek de "kusur" gibi sunulmasın).
- `yolcu` teselli rozeti gibi değil, gerçek bir başarı gibi dursun.

## Çıktı biçimi

Yalnızca aşağıdaki iki bloğu, bu biçimde, tek bir JavaScript kod bloğu içinde ver; başka açıklama ekleme.

```js
const REACTIONS = {
  kant: ["...", "...", "...", "...", "..."],
  bentham: ["...", "...", "...", "...", "..."],
  aristoteles: ["...", "...", "...", "...", "..."],
  nietzsche: ["...", "...", "...", "...", "..."]
};

const BADGES = {
  tutarli:  { title: "...", desc: "..." },
  dengeli:  { title: "...", desc: "..." },
  kasif:    { title: "...", desc: "..." },
  ikilem:   { title: "...", desc: "..." },
  azinlik:  { title: "...", desc: "..." },
  cogunluk: { title: "...", desc: "..." },
  yolcu:    { title: "...", desc: "..." }
};
```

## Mevcut taslaklar (düzeltilecek)

```js
const REACTIONS = {
  kant: [
    "İnsanı asla yalnızca bir araç olarak görme.",
    "Herkes böyle davransaydı da doğru olur muydu? Senin cevabın evet.",
    "Sonuç ne olursa olsun, ilkeden şaşmadın."
  ],
  bentham: [
    "En çok insana en büyük iyiliği tarttın.",
    "Acıyı azaltıp mutluluğu artıran seçim, iyi seçimdir.",
    "Niyetlere değil, sonuçlara baktın."
  ],
  aristoteles: [
    "Aşırılıklar arasında ölçülü olanı aradın.",
    "İyi karakter, doğru alışkanlıklarla kurulur.",
    "Doğru şeyi, doğru zamanda ve doğru ölçüde yapmak bilgeliktir."
  ],
  nietzsche: [
    "Hazır kalıpları değil, kendi yolunu seçtin.",
    "Kalabalıktan ayrılmak cesaret ister.",
    "Sınırını zorladın; insan aşılması gereken bir şeydir."
  ]
};

const BADGES = {
  tutarli:  { title: "Tutarlı Pusula",   desc: "Ana filozofunun yer aldığı ikilemlerin neredeyse hepsinde onun yanında durdun." },
  dengeli:  { title: "Dengeli Gezgin",   desc: "Hiçbir filozof öne kaçmadı; dört yönü de dinledin." },
  kasif:    { title: "Dört Yön Kâşifi",  desc: "Kararların dört filozof arasında eşit dağıldı." },
  ikilem:   { title: "İkilemin Ustası",  desc: "Ana profilin ile ikincil yönelimin neredeyse başa baş." },
  azinlik:  { title: "Azınlığın Sesi",   desc: "En az dört kararda fuardaki çoğunluktan ayrıldın." },
  cogunluk: { title: "Toplumun Nabzı",   desc: "Kararlarının çoğunda fuardaki çoğunlukla aynı yöndeydin." },
  yolcu:    { title: "Pusula Yolcusu",   desc: "Bütün siber ikilemleri sonuna kadar tamamladın." }
};
```
