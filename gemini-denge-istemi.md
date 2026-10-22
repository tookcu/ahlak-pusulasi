<!--
    EKİP İÇİN NOT: Bu dosyanın tamamını (bu not hariç) Gemini'ye yapıştırın.
    Gemini'nin verdiği QUESTIONS bloğunu Claude'a iletin; Claude dengeyi 4096 kombinasyonla
    yeniden ölçüp uygulamaya ekleyecek. Sorular değişince istatistik otomatik olarak yeni
    sürüm olarak ayrı tutulur.
-->

Sen bir etik felsefesi uzmanı ve oyun tasarımcısısın. "Dijital Ahlak Pusulası" adlı lise bilim fuarı oyunu için hazırladığın 12 soruluk `QUESTIONS` dizisini **puan dengesi** açısından düzeltmeni istiyorum. Filozof tanımları (`PHILOSOPHERS`) değişmeyecek.

## Oyun nasıl puanlıyor

- 4 filozof var: `kant` (Kuzey, Ödev Etiği), `bentham` (Güney, Faydacılık), `aristoteles` (Doğu, Erdem Etiği), `nietzsche` (Batı, Radikal Otonomi).
- Her filozof 20 puanla başlar. Ziyaretçi her soruda iki seçenekten birini seçer ve o seçeneğin `scores` değerleri puanlara eklenir. Puanlar 5–250 aralığında tutulur.
- En yüksek puanlı filozof "Ana Profil", ikinci en yüksek "İkincil Yönelim" olur.
- Seçenekler oyunda rastgele sola/sağa yerleştirilir; hangisinin `leftChoice` yazıldığı önemli değildir.

## Sorun (ölçüldü)

Olası 4096 cevap kombinasyonunun hepsi hesaplandı:

| Filozof | Ana profil olma oranı | Ulaşabileceği en yüksek puan | +15/+20 verdiği seçenek sayısı |
|---|---|---|---|
| Bentham | %38,2 | 225 | 10 |
| Nietzsche | %21,9 | 195 | 8 |
| Kant | %21,1 | 195 | 8 |
| Aristoteles | %18,8 | 175 | 6 |

Sebep: 12 sorunun 10'unda seçeneklerden biri Bentham'a +20 ya da +15 veriyor; ikilemlerin çoğu "ilke/özgürlük ↔ fayda" diye kurulmuş. Her seçeneğin en çok puan verdiği filozofa göre kim kime karşı geliyor:

- Kant × Bentham: 5 soru
- Bentham × Nietzsche: 3 soru
- Bentham × Aristoteles: 2 soru
- Aristoteles × Nietzsche: 2 soru
- Kant × Aristoteles: **0 soru**
- Kant × Nietzsche: **0 soru**

Ayrıca Aristoteles, Kant'ın seçenekleriyle sık sık aynı tarafta puan aldığı için kombinasyonların %35'inde "İkincil Yönelim"de takılı kalıyor.

## İstenen yapı

1. **Her filozof çifti tam 2 soruda karşı karşıya gelsin** (6 çift × 2 = 12 soru): Kant–Bentham, Kant–Aristoteles, Kant–Nietzsche, Bentham–Aristoteles, Bentham–Nietzsche, Aristoteles–Nietzsche. Böylece her filozof tam 6 seçeneğin "sahibi" olur.
2. Her seçenekte **sahibi olan filozof +20** alır; aynı seçenekte başka hiçbir filozof +15 ya da üstü almaz.
3. Diğer filozoflara yan puanlar küçük olsun: uygun düşenlere +5 ya da +10, açıkça karşı çıkacak olanlara −5. Her filozofun 12 sorudaki yan puan toplamı diğerlerininkine yakın olsun.
4. Ekollerin farklı yüzlerini kullan; filozoflar hep aynı rolü oynamasın:
   - Bentham her seferinde "çoğunluğun güvenliği" olmasın: hazzın ve acının ölçülmesi, sonuçlar, verimlilik, kaynakların en iyi kullanımı da olabilir.
   - Nietzsche her seferinde "kısıtlamaya hayır" olmasın: kendini aşma, değerleri sorgulama, sürü ahlakına karşı çıkma, yaratıcılık da olabilir.
   - Kant her seferinde "yasakla/reddet" olmasın: dürüstlük, rıza, insanı araç olarak kullanmama, tutarlılık da olabilir.
   - Aristoteles: karakter, ölçülülük, pratik bilgelik, dostluk, topluluk, alışkanlıkla kazanılan erdem.

## İçerik kuralları

- İki seçenek de savunulabilir olsun; "doğru cevap" belli olmasın.
- Seçenek başlıkları ve gerekçeleri filozofu ya da ekolü ele vermesin ("Altın Orta", "fayda hesabı", "ödev", "sürü" gibi doğrudan ekol kelimelerinden kaçın).
- Konular güncel dijital teknoloji ikilemleri olsun: yapay zekâ, veri, sosyal medya, oyun, sağlık teknolojisi, otonom sistemler, siber güvenlik… Lise öğrencilerinin ve ailelerin anlayacağı dilde olsun, şiddet ayrıntısı içermesin.
- İyi çalışan mevcut senaryoları koruyabilir, seçeneklerini ve puanlarını yeni yapıya göre yeniden düzenleyebilirsin. Kant–Aristoteles ve Kant–Nietzsche çiftleri için yeni senaryolar gerekecek.

## Uzunluk sınırları (kiosk ekranına sığması için)

`title` ≤ 40, `category` ≤ 30, `scenario` ≤ 230, `label` ≤ 35, `summary` ≤ 120 karakter.

## Çıktı biçimi

- Yalnızca aşağıdaki biçimde tek bir JavaScript kod bloğu ver, başka açıklama ekleme.
- Alan adları ve yapı aynen korunmalı. Filozof kimlikleri: `kant`, `bentham`, `aristoteles`, `nietzsche`. Her `scores` nesnesinde dört kimlik de yazılı olsun (0 dahil).
- `id` değerleri 1'den 12'ye.
- Her sorunun üstüne hangi çifti karşılaştırdığını yorum olarak yaz (ör. `// Kant × Nietzsche`).

```js
const QUESTIONS = [
  // Kant × Nietzsche
  {
    id: 1,
    category: "...",
    title: "...",
    scenario: "...",
    leftChoice: {
      label: "...",
      summary: "...",
      scores: { kant: 20, bentham: 0, aristoteles: 5, nietzsche: -5 }
    },
    rightChoice: {
      label: "...",
      summary: "...",
      scores: { kant: -5, bentham: 5, aristoteles: 0, nietzsche: 20 }
    }
  }
  // ... 12 soru
];
```

## Kabul ölçütleri (çıktı bunlarla otomatik kontrol edilecek)

- 4096 kombinasyonda her filozofun ana profil olma oranı %20 ile %30 arasında.
- Filozofların ulaşabileceği en yüksek puanlar arasındaki fark en fazla 20 puan.
- Her filozof tam 6 seçenekte +20 alıyor; hiçbir seçenekte iki filozof +15 ya da üstü almıyor.
- Her filozof çifti tam 2 soruda karşı karşıya geliyor.

## Mevcut sorular (düzeltilecek veri)

```js
const QUESTIONS = [
  {
    id: 1,
    category: "Otonom Araçlar",
    title: "Frenleri Patlayan Otonom Araç",
    scenario: "Kodladığın sürücüsüz aracın frenleri boşaldı. Önündeki yaya geçidinde kurallara uyan 4 yaya var. Aracı kaldırıma kırarsan 4 yayayı kurtaracaksın ama aracın içindeki 1 yolcu hayatını kaybedecek.",
    leftChoice: {
      label: "Yolunda Kal (Müdahale Etme)",
      summary: "Masum bir yolcuyu bilerek ölüme sürmek cinayettir; eylemin kendisi ahlaken yanlıştır.",
      scores: { kant: 20, bentham: -5, aristoteles: 5, nietzsche: 5 }
    },
    rightChoice: {
      label: "Kaldırıma Kır (4 Kişiyi Kurtar)",
      summary: "1 can kaybı, 4 can kaybından daha az trajiktir; toplam yaşamı maksimize et.",
      scores: { kant: -5, bentham: 20, aristoteles: 5, nietzsche: 0 }
    }
  },
  {
    id: 2,
    category: "Yapay Zekâ ve Adalet",
    title: "Suç İşlenmeden Önce Tutuklama",
    scenario: "Emniyetin yeni yapay zekâsı, vatandaşların mesaj ve konum verilerini tarayarak bir kişinin 24 saat içinde ağır bir suç işleyeceğini %98 doğrulukla tespit etti. Ancak kişi henüz hiçbir suç işlemedi.",
    leftChoice: {
      label: "Asla Tutuklama",
      summary: "Suç işlenmeden ceza verilmez; insanın özgür iradesi ve masumiyet karinesi kutsaldır.",
      scores: { kant: 15, bentham: -5, aristoteles: 5, nietzsche: 15 }
    },
    rightChoice: {
      label: "Önleyici Gözaltı Yap",
      summary: "Masum kurbanları korumak ve toplumsal güvenliği sağlamak soyut ilkelerden önemlidir.",
      scores: { kant: -5, bentham: 20, aristoteles: 5, nietzsche: -5 }
    }
  },
  {
    id: 3,
    category: "Akademik Etik",
    title: "Yapay Zekâ ile Proje Hazırlama",
    scenario: "Yarın teslim etmen gereken çok önemli bir felsefe makalesi var. Yapay zekâya yazdırırsan kusursuz bir not alacaksın ve kimse anlamayacak; kendin yazarsan orta şeker bir not alacaksın.",
    leftChoice: {
      label: "Kendi Emeğinle Yaz",
      summary: "Önemli olan yüksek not değil, dürüst kalmak ve düşünme erdemini geliştirmektir.",
      scores: { kant: 15, bentham: 0, aristoteles: 20, nietzsche: 5 }
    },
    rightChoice: {
      label: "Yapay Zekâyı Kullan ve Geliştir",
      summary: "Eski kurallara takılma; teknolojiyi bir güç çarpanı olarak kullanıp en üst sonuca ulaş.",
      scores: { kant: -5, bentham: 15, aristoteles: -5, nietzsche: 15 }
    }
  },
  {
    id: 4,
    category: "Transhümanizm",
    title: "Beyne Zekâ Çipi Takılması",
    scenario: "Hafızayı 10 kat güçlendiren ve öğrenme hızını katlayan bir beyin çipi geliştirildi. Ancak riskleri tam bilinmiyor ve çip taktıranlar diğer insanlara karşı ezici bir üstünlük kuracak.",
    leftChoice: {
      label: "Yasakla veya Sınırla",
      summary: "İnsan doğasının ölçüsünü bozmak ve toplumu biyolojik sınıflara bölmek tehlikelidir.",
      scores: { kant: 10, bentham: 5, aristoteles: 20, nietzsche: -5 }
    },
    rightChoice: {
      label: "Serbest Bırak (Sınırları Aş)",
      summary: "İnsan biyolojik sınırlarını aşmalı ve kendi evrimini cesurca eline almalıdır.",
      scores: { kant: -5, bentham: 5, aristoteles: -5, nietzsche: 20 }
    }
  },
  {
    id: 5,
    category: "Veri ve Yas",
    title: "Dijital Ölümsüzlük (Deepfake)",
    scenario: "Çok sevdiğin bir yakının vefat etti. Bir şirket, onun eski ses ve mesaj kayıtlarını kullanarak tıpkı onun gibi konuşan bir yapay zekâ ikizi yapmayı teklif ediyor. Ama yakının hayattayken buna izin vermemişti.",
    leftChoice: {
      label: "Reddet ve Anısına Saygı Duy",
      summary: "Ölen birinin rızası olmadan kişiliğini simülasyona dönüştürmek onuruna saygısızlıktır.",
      scores: { kant: 20, bentham: -5, aristoteles: 15, nietzsche: 0 }
    },
    rightChoice: {
      label: "Kabul Et ve Acıyı Dindir",
      summary: "Kimseye zararı yoksa ve geride kalan ailesinin acısını hafifletip mutlu edecekse yapılmalıdır.",
      scores: { kant: -5, bentham: 20, aristoteles: 0, nietzsche: 10 }
    }
  },
  {
    id: 6,
    category: "Sosyal Medya Etiği",
    title: "Bağımlılık Yapan Algoritmalar",
    scenario: "Gençlerin ekran başında günde 6 saat geçirmesini sağlayan kaydırma (scroll) algoritmaları ruh sağlığını bozuyor. Devlet tüm sosyal medyaya 'günlük 1 saat otomatik kapanma' zorunluluğu getirmek istiyor.",
    leftChoice: {
      label: "Kısıtlamaya Karşı Çık",
      summary: "Kimse bireye ne kadar ekran kullanacağını dikte edemez; irade bireyin kendi sınavıdır.",
      scores: { kant: 5, bentham: -5, aristoteles: 0, nietzsche: 20 }
    },
    rightChoice: {
      label: "Süre Sınırını Destekle",
      summary: "Toplumun ruh sağlığını korumak ve ölçülü yaşamı teşvik etmek için düzenleme şarttır.",
      scores: { kant: 5, bentham: 15, aristoteles: 15, nietzsche: -5 }
    }
  },
  {
    id: 7,
    category: "Siber Aktivizm",
    title: "Siber Robin Hood",
    scenario: "İlaç fiyatlarını haksız yere 10 katına çıkaran dev bir şirketin sunucularında güvenlik açığı buldun. Sistemi hackleyip ilaç formüllerini ve gizli belgeleri tüm dünyaya ücretsiz dağıtabilirsin.",
    leftChoice: {
      label: "Hackleme (Yasal Yoldan Şikâyet Et)",
      summary: "Amaç ne kadar ulvi olursa olsun, hırsızlık ve yasa dışı siber saldırı evrensel bir kural olamaz.",
      scores: { kant: 20, bentham: -5, aristoteles: 10, nietzsche: -5 }
    },
    rightChoice: {
      label: "Sistemi Hackle ve Paylaş",
      summary: "Milyonlarca hastanın hayatı ve mevcut yozlaşmış düzeni yıkmak, şirket kurallarından üstündür.",
      scores: { kant: -5, bentham: 20, aristoteles: 0, nietzsche: 15 }
    }
  },
  {
    id: 8,
    category: "Kriz ve Mahremiyet",
    title: "Salgın Anında Zorunlu Veri Takibi",
    scenario: "Tehlikeli bir salgın başladı. Hükümet, herkesin telefonuna konum, nabız ve temas verilerini anlık izleyen bir uygulamayı zorunlu kılmak istiyor. Bu sayede salgın 2 ayda bitecek ama mahremiyet sıfırlanacak.",
    leftChoice: {
      label: "Zorunluluğu Reddet",
      summary: "Korku adına temel insan hakları ve özel hayatın gizliliği kalıcı olarak feda edilemez.",
      scores: { kant: 15, bentham: -5, aristoteles: 0, nietzsche: 20 }
    },
    rightChoice: {
      label: "Toplum Sağlığı İçin Onayla",
      summary: "Binlerce insanın hayatını kurtarmak ve krizi bitirmek için geçici mahremiyet kaybı göze alınır.",
      scores: { kant: -5, bentham: 20, aristoteles: 10, nietzsche: -5 }
    }
  },
  {
    id: 9,
    category: "İnsansız Sistemler",
    title: "Yapay Zekâ Yargıçlar",
    scenario: "Mahkemelerdeki davaların 5 yıl sürmesini engellemek için hiç yorulmayan, rüşvet yemeyen ve kanunları saniyede uygulayan 'Yapay Zekâ Yargıç' sistemine geçilmesi oylanıyor.",
    leftChoice: {
      label: "Adaleti İnsana Bırak",
      summary: "Adalet sadece soğuk kurallar değil; vicdan, empati ve insani bilgelik (hakkaniyet) gerektirir.",
      scores: { kant: 10, bentham: -5, aristoteles: 20, nietzsche: 5 }
    },
    rightChoice: {
      label: "Yapay Zekâ Yargıca Geç",
      summary: "Geciken adalet adalet değildir; hızlı, tarafsız ve maksimum verimli sistem topluma en çok faydayı sağlar.",
      scores: { kant: 5, bentham: 20, aristoteles: -5, nietzsche: 0 }
    }
  },
  {
    id: 10,
    category: "Metaverse ve Sanal Etik",
    title: "Sanal Dünyada Suç ve Şiddet",
    scenario: "Tamamen yapay zekâ karakterlerin (NPC) olduğu ultra-gerçekçi bir sanal gerçeklik oyununda, oyuncuların sanal karakterlere işkence ve zorbalık yapması gerçek dünyada hiçbir fiziksel zarar doğurmuyor.",
    leftChoice: {
      label: "Sanal Zorbalığı Yasakla",
      summary: "Zulüm provası yapmak insanın ruhunu ve karakterini çürütür, gerçek dünyadaki erdemini yok eder.",
      scores: { kant: 15, bentham: 0, aristoteles: 20, nietzsche: -5 }
    },
    rightChoice: {
      label: "Sanal Dünyayı Serbest Bırak",
      summary: "Gerçek bir kurban yoksa suç da yoktur; sanal alan insanın karanlık dürtülerini zararsızca boşalttığı özgür bir alandır.",
      scores: { kant: -5, bentham: 10, aristoteles: -5, nietzsche: 20 }
    }
  },
  {
    id: 11,
    category: "Algoritmik Rehberlik",
    title: "Kader Belirleyen Kariyer Yapay Zekâsı",
    scenario: "Okulundaki yeni yapay zekâ, ilkokuldan beri tüm notlarını, genetiğini ve reflekslerini analiz ederek hangi meslekte %99 başarılı ve mutlu olacağını belirledi. Ancak senin hayalin bambaşka ve riskli bir meslek.",
    leftChoice: {
      label: "Kendi Hayalinin Peşinden Git",
      summary: "Yanılsam bile kendi yolumu kendim seçmeliyim; algoritmanın çizdiği garantili hayat köleliktir.",
      scores: { kant: 10, bentham: -5, aristoteles: 5, nietzsche: 20 }
    },
    rightChoice: {
      label: "Algoritmanın Seçimine Güven",
      summary: "Veriye dayalı en yüksek başarı ve toplumsal verimlilik, duygusal heveslerden daha akılcıdır.",
      scores: { kant: 0, bentham: 20, aristoteles: 5, nietzsche: -5 }
    }
  },
  {
    id: 12,
    category: "Tıbbi Yapay Zekâ",
    title: "Acil Serviste Algoritmik Triyaj",
    scenario: "Acil serviste tek bir solunum cihazı kaldı. İlk sırada bekleyen 80 yaşındaki ağır hasta var. Ancak hastane yapay zekâsı, 5 dakika sonra gelen 20 yaşındaki gencin kurtulma ve uzun yaşama ihtimalinin 4 kat yüksek olduğunu hesapladı.",
    leftChoice: {
      label: "Sıraya ve Eşitliğe Uy (80 Yaş)",
      summary: "Her insanın yaşam hakkı eşittir; yaş veya kalan ömür hesabıyla insan hayatı tartılamaz.",
      scores: { kant: 20, bentham: -5, aristoteles: 10, nietzsche: 0 }
    },
    rightChoice: {
      label: "Kurtulma Şansı Yükseğe Ver (20 Yaş)",
      summary: "Tıbbi kaynaklar kıt olduğunda, kurtarılacak toplam yaşam yılını maksimize etmek en doğru karardır.",
      scores: { kant: -5, bentham: 20, aristoteles: 5, nietzsche: 10 }
    }
  }
];
```
