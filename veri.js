/* =====================================================================
   DİJİTAL AHLAK PUSULASI — İÇERİK DOSYASI (veri.js)

   Oyunun bütün içeriği bu dosyadadır: filozoflar, siber ikilemler, karar sonrası tepki
   cümleleri ve rozet metinleri. Uygulamanın kodu (index.html) bu verilerden üretilir.
   İçerik güncellemek için yalnızca bu dosyayı değiştirmeniz yeterlidir.

   DEĞİŞTİRDİKTEN SONRA MUTLAKA:
     1. kontrol.html'i açın (dosyaya çift tıklayın). Denge, uzunluk ve yazım hatası
        denetimi yapar; kırmızı bir madde varsa düzeltin.
     2. index.html'i açıp bir tur oynayın.
     3. GitHub Desktop → Commit → Push origin ile yayınlayın.

   Yazım kuralları (JavaScript):
     - Metinler çift tırnak içindedir: "…". Metnin içinde çift tırnak gerekiyorsa ' kullanın.
     - Her öğeden sonra virgül gelir; son öğeden sonra gelmesi de sorun değildir.
     - Bir şey bozulursa uygulama açılışta "veri.js okunamadı" uyarısı gösterir;
       kontrol.html hatanın satırını söyler.

   PHILOSOPHERS: { <id>: { id, direction, name, title, color, motto, desc }, ... }
     id        : küçük harf, boşluksuz, benzersiz (örn. "kant"); sorulardaki puan anahtarı
     direction : "YÖN (Ekol)" biçiminde. YÖN pusuladaki yeri belirler: KUZEY, KUZEYDOĞU,
                 DOĞU, GÜNEYDOĞU, GÜNEY, GÜNEYBATI, BATI, KUZEYBATI. Yön verilmezse
                 filozoflar kadrana eşit aralıkla dizilir.
     title     : sonuç ekranındaki profil unvanı
     color     : #RRGGBB (koyu zeminde okunur, açık bir ton)
     İsteğe bağlı: shortName, initial, headline, bearing (0-359 derece)

   QUESTIONS: [{ id, category, title, scenario,
                 leftChoice:  { label, summary, scores: { <filozofId>: puan, ... } },
                 rightChoice: { label, summary, scores: { ... } },
                 icon? }]
     Puanlar eksi olabilir. icon isteğe bağlıdır (car, eye, lock, shield, network, mask,
     cap, heart, chip, vr, speech, scale, spark, compass, palette, bolt); verilmezse
     kategoriden seçilir. Sol/sağ seçenekler her oyunda dengeli biçimde karıştırılır.
     Sorular değişince ortak istatistik kendiliğinden yeni bir sürüm olarak sıfırdan başlar.

   Denge ilkesi (kontrol.html denetler): her filozof çifti eşit sayıda soruda karşılaşmalı,
   her seçeneğin tek bir "sahibi" (+20) olmalı, her filozof eşit sayıda seçeneğe sahip olmalı.
   ===================================================================== */

const PHILOSOPHERS = {
  kant: {
    id: "kant",
    direction: "KUZEY (Ödev Etiği)",
    name: "Immanuel Kant",
    title: "Dijital İlke ve Hak Muhafızı",
    color: "#38bdf8", // Mavi
    motto: "İnsan ve onun dijital verisi asla bir amacın aracı olamaz!",
    desc: "Kararlarında sonuçların getireceği kârdan çok, eylemin ahlaki doğruluğuna ve evrensel ilkelere bakıyorsun. Mahremiyet, dürüstlük ve insan onuru senin için hiçbir algoritmaya feda edilemez."
  },
  bentham: {
    id: "bentham",
    direction: "GÜNEY (Faydacılık)",
    name: "Jeremy Bentham",
    title: "Siber Toplum ve Fayda Mimarı",
    color: "#34d399", // Yeşil
    motto: "En fazla sayıda insan için en büyük dijital fayda!",
    desc: "Pragmatik ve sonuç odaklısın. Bir teknoloji toplumun genel güvenliğini, sağlığını ve mutluluğunu artırıyorsa bireysel ayrıcalıklardan ve katı kurallardan taviz verilebileceğini düşünüyorsun."
  },
  aristoteles: {
    id: "aristoteles",
    direction: "DOĞU (Erdem Etiği)",
    name: "Aristoteles",
    title: "Dijital Bilgelik ve Denge Yolcusu",
    color: "#fbbf24", // Altın/Kehribar
    motto: "Teknoloji insanın efendisi değil, erdemli yaşamın aracı olmalıdır.",
    desc: "Aşırılıklardan kaçınıyor, 'Altın Orta'yı arıyorsun. Yapay zekânın insanın ahlaki sorumluluğunu, emeğini ve karakter gelişimini elinden almasına izin vermeyen dengeli bir duruşun var."
  },
  nietzsche: {
    id: "nietzsche",
    direction: "BATI (Radikal Otonomi)",
    name: "Friedrich Nietzsche",
    title: "Siber Özgürlük ve Öncü Kaşif",
    color: "#f43f5e", // Kırmızı/Pembe
    motto: "Algoritmaların sürüsü olma; kendi dijital değerlerini kendin yarat!",
    desc: "Sınırları aşmayı, radikal özgürlüğü ve insanın teknolojiyle kendini güçlendirmesini savunuyorsun. Seni korumak adına bile olsa yapay zekânın veya otoritelerin özgür iradeni kısıtlamasına tahammülün yok."
  }
};

const QUESTIONS = [
  // Kant × Bentham
  {
    id: 1,
    category: "Tıbbi Yapay Zekâ",
    title: "Acil Serviste Algoritmik Triyaj",
    scenario: "Acil serviste tek solunum cihazı kaldı. İlk sırada 80 yaşında ağır bir hasta var. Ancak hastane yapay zekâsı, 5 dakika sonra gelen 20 yaşındaki gencin kurtulma ve uzun yaşama ihtimalinin 4 kat yüksek olduğunu hesapladı.",
    leftChoice: {
      label: "Sıraya ve Eşitliğe Uy (80 Yaş)",
      summary: "Her insanın yaşam hakkı eşittir; yaş veya kalan ömür hesabıyla insan hayatının değeri tartılamaz.",
      scores: { kant: 20, bentham: -5, aristoteles: 5, nietzsche: 0 }
    },
    rightChoice: {
      label: "Şansı Yüksek Olana Ver (20 Yaş)",
      summary: "Tıbbi kaynaklar kıt olduğunda, kurtarılacak toplam yaşam süresini ve yaşam gücünü en çoğa çıkarmak gerekir.",
      scores: { kant: -5, bentham: 20, aristoteles: 0, nietzsche: 5 }
    }
  },
  // Kant × Aristoteles
  {
    id: 2,
    category: "Dijital İletişim Etiği",
    title: "Dürüst Yapay Zekâ Eleştirmeni",
    scenario: "Önemli bir sınav öncesi aylarca uğraştığın resmini yapay zekâ koçuna gösterdin. Algoritma çalışmanın zayıf olduğunu tespit etti; ancak şu an çok stresli ve kırılgan olduğunu da biliyor.",
    leftChoice: {
      label: "Her Durumda Tam Gerçeği Söyle",
      summary: "Teselli etmek için bile olsa gerçek eğip bükülmemelidir; açık sözlülük insanın gerçekle yüzleşip güçlenmesini sağlar.",
      scores: { kant: 20, bentham: 0, aristoteles: -5, nietzsche: 5 }
    },
    rightChoice: {
      label: "Duruma Uygun ve Yapıcı Konuş",
      summary: "Kırılgan bir anda yıkıcı olmak yerine doğru zamanı ve ölçülü üslubu seçmek, insanın gelişimini ve moralini korur.",
      scores: { kant: -5, bentham: 5, aristoteles: 20, nietzsche: 0 }
    }
  },
  // Kant × Nietzsche
  {
    id: 3,
    category: "Yapay Zekâ ve Sanat",
    title: "İzinsiz Eserlerle Eğitilen Model",
    scenario: "Geliştirdiğin yapay zekâ, tarihte görülmemiş güzellikte özgün müzik ve tablolar üretiyor. Ancak model, binlerce sanatçının internetteki açık eserlerini onlardan tek tek izin almadan analiz ederek öğrendi.",
    leftChoice: {
      label: "Rıza Alınmadan Kullanmayı Durdur",
      summary: "Eser sahiplerinin açık onayı ve emeği, ortaya çıkacak sonuç ne kadar büyüleyici olursa olsun araçsallaştırılamaz.",
      scores: { kant: 20, bentham: 5, aristoteles: 0, nietzsche: -5 }
    },
    rightChoice: {
      label: "Yaratıcı Dönüşümü Serbest Bırak",
      summary: "Büyük sanatsal sıçramalar önceki birikimi aşarak doğar; geçmişin kalıpları yeni çağın özgün üretimini durdurmamalıdır.",
      scores: { kant: -5, bentham: 0, aristoteles: 5, nietzsche: 20 }
    }
  },
  // Bentham × Aristoteles
  {
    id: 4,
    category: "Yapay Zekâ ve Adalet",
    title: "Mahkemelerde Yapay Zekâ Yargıç",
    scenario: "Mahkemelerdeki davaların yıllarca sürmesini önlemek için yorulmayan, rüşvet yemeyen ve dosyaları saniyeler içinde karara bağlayan tam otomatik 'Yapay Zekâ Yargıç' sistemine geçilmesi oylanıyor.",
    leftChoice: {
      label: "Yapay Zekâ Yargıca Geç",
      summary: "Geciken adalet adalet değildir; hızlı, tarafsız ve yüksek verimli karar sistemi toplumdaki mağduriyetleri en aza indirir.",
      scores: { kant: 5, bentham: 20, aristoteles: -5, nietzsche: 0 }
    },
    rightChoice: {
      label: "Adaleti İnsana Bırak",
      summary: "Yargılama yalnız soğuk hesap değildir; her olayın kendine özgü bağlamını anlamak insani sağduyu ve vicdan gerektirir.",
      scores: { kant: 0, bentham: -5, aristoteles: 20, nietzsche: 5 }
    }
  },
  // Bentham × Nietzsche
  {
    id: 5,
    category: "Algoritmik Rehberlik",
    title: "Meslek Seçen Kariyer Yapay Zekâsı",
    scenario: "Okulundaki yapay zekâ, tüm notlarını ve yeteneklerini analiz ederek hangi meslekte %99 başarılı ve huzurlu olacağını belirledi. Ancak senin gönlünde çok daha riskli ve belirsiz bir hayal var.",
    leftChoice: {
      label: "Algoritmanın Seçimine Güven",
      summary: "Veriye dayalı yüksek başarı, kalıcı huzur ve toplumsal uyum, sonu belirsiz maceralardan çok daha akılcıdır.",
      scores: { kant: 0, bentham: 20, aristoteles: 5, nietzsche: -5 }
    },
    rightChoice: {
      label: "Kendi Hayalinin Peşinden Git",
      summary: "Yanılsam bile kendi yolumu kendim seçmeliyim; başkalarının çizdiği garantili ve konforlu rota insanı köreltir.",
      scores: { kant: 5, bentham: -5, aristoteles: 0, nietzsche: 20 }
    }
  },
  // Aristoteles × Nietzsche
  {
    id: 6,
    category: "İnsan ve Teknoloji",
    title: "Beyne Zekâ Çipi Takılması",
    scenario: "Hafızayı 10 kat güçlendiren ve öğrenme hızını katlayan bir beyin çipi geliştirildi. Uzun vadeli etkileri tam bilinmese de çipi taktıranlar normal insanlara karşı büyük bir zihinsel üstünlük kuracak.",
    leftChoice: {
      label: "Doğal Dengeyi Koru ve Sınırla",
      summary: "İnsan doğasının ölçüsünü bozmak ve toplumu biyolojik uçurumlara sürüklemek karakter bütünlüğünü tehlikeye atar.",
      scores: { kant: 5, bentham: 0, aristoteles: 20, nietzsche: -5 }
    },
    rightChoice: {
      label: "Biyolojik Sınırları Cesurca Aş",
      summary: "İnsan olduğu yerde saymamalı; teknolojiyi kullanarak kendi kapasitesini ve potansiyelini bir üst aşamaya taşımalıdır.",
      scores: { kant: 0, bentham: 5, aristoteles: -5, nietzsche: 20 }
    }
  },
  // Kant × Bentham
  {
    id: 7,
    category: "Siber Güvenlik ve Hukuk",
    title: "Suç İşlenmeden Önce Müdahale",
    scenario: "Emniyetin yeni yapay zekâsı, mesaj ve konum verilerini tarayarak bir kişinin 24 saat içinde ağır bir suç işleyeceğini %98 olasılıkla hesapladı. Ancak şüpheli henüz hiçbir yasa dışı eylemde bulunmadı.",
    leftChoice: {
      label: "Suç İşlenmeden Müdahale Etme",
      summary: "Henüz gerçekleşmemiş bir eylem için ceza verilemez; insanın özgür iradesi ve masumiyet hakkı olasılıklara feda edilemez.",
      scores: { kant: 20, bentham: -5, aristoteles: 0, nietzsche: 10 }
    },
    rightChoice: {
      label: "Önleyici Gözaltı Uygula",
      summary: "Masum insanların zarar görmesini engellemek ve toplumsal huzuru korumak, soyut kuralları beklemekten daha önemlidir.",
      scores: { kant: -5, bentham: 20, aristoteles: 10, nietzsche: 0 }
    }
  },
  // Kant × Aristoteles
  {
    id: 8,
    category: "Okul ve Siber Kurallar",
    title: "Şifresini Paylaşan Öğrenci",
    scenario: "Okulun siber güvenlik botu, hasta arkadaşının ödevini zamanında yükleyebilmesi için ona kendi giriş şifresini veren bir öğrenciyi yakaladı. Yönetmeliğe göre şifre paylaşmanın cezası sistemden 1 ay uzaklaştırmadır.",
    leftChoice: {
      label: "Kuralı İstisnasız Uygula",
      summary: "Kurallar herkes için eşit ve kesin olmalıdır; iyi niyetle bile olsa ayrıcalık tanımak sistemin güvenilirliğini bozar.",
      scores: { kant: 20, bentham: 10, aristoteles: -5, nietzsche: 0 }
    },
    rightChoice: {
      label: "Niyeti ve Dostluğu Gözet",
      summary: "Yardımlaşma niyetiyle yapılan bir davranışı bağlamından koparıp katı biçimde cezalandırmak hakkaniyete sığmaz.",
      scores: { kant: -5, bentham: 0, aristoteles: 20, nietzsche: 10 }
    }
  },
  // Kant × Nietzsche
  {
    id: 9,
    category: "Siber Güvenlik Etiği",
    title: "İzinsiz Güvenlik Açığı Testi",
    scenario: "Bir şehir hastanesinin sunucusunda tehlikeli bir güvenlik açığı fark ettin. Resmi izin süreci haftalar sürecek; ancak kendi uzmanlığınla sisteme şimdi izinsiz girip açığı kanıtlayarak hemen kapanmasını sağlayabilirsin.",
    leftChoice: {
      label: "Resmi İzin Sürecini Bekle",
      summary: "Amacın iyi olsa bile başkasının sistemine izinsiz girmek yanlıştır; meşru sınırlar ve kurumsal sorumluluk korunmalıdır.",
      scores: { kant: 20, bentham: 0, aristoteles: 10, nietzsche: -5 }
    },
    rightChoice: {
      label: "İnisiyatif Al ve Açığı Kanıtla",
      summary: "Hantal prosedürlere boyun eğmek yerine kendi yeteneğinle harekete geçmek, hem engelleri aşar hem de sistemi kurtarır.",
      scores: { kant: -5, bentham: 10, aristoteles: 0, nietzsche: 20 }
    }
  },
  // Bentham × Aristoteles
  {
    id: 10,
    category: "Akademik ve Kişisel Gelişim",
    title: "Her İşi Yapan Yapay Zekâ Asistan",
    scenario: "Yeni nesil bir yapay zekâ asistanı; kitap özetlerinden proje yazımına kadar tüm zorlu zihinsel görevleri senin yerine saniyeler içinde hatasız tamamlayıp sana bolca boş vakit ve yüksek puan kazandırabiliyor.",
    leftChoice: {
      label: "Tam Otomasyonla Hız Kazan",
      summary: "En az zahmetle en yüksek sonuca ulaşmak ve kazanılan zamanı yeni hedefler için kullanmak teknolojiyi doğru kullanmaktır.",
      scores: { kant: 0, bentham: 20, aristoteles: -5, nietzsche: 10 }
    },
    rightChoice: {
      label: "Kendi Çabanla Öğrenerek İlerle",
      summary: "Zihinsel emek ve düzenli alışkanlık olmadan kazanılan başarı kalıcı değildir; insanı geliştiren şey sürecin kendisidir.",
      scores: { kant: 10, bentham: -5, aristoteles: 20, nietzsche: 0 }
    }
  },
  // Bentham × Nietzsche
  {
    id: 11,
    category: "Dijital Kaynak Yönetimi",
    title: "Eşit İşlem Gücü ve Enerji Kotası",
    scenario: "Küresel enerji krizini önlemek için tüm bilgisayar ve sunuculara eşit bir günlük işlem kotası getirilmesi planlanıyor. Bu sayede kesintiler bitecek; ancak büyük ve çığır açıcı projeler geliştirenler yavaşlayacak.",
    leftChoice: {
      label: "Herkes İçin Eşit Kotayı Onayla",
      summary: "Ortak kaynakları adil paylaşmak ve toplumun tamamını kesintilerden korumak, ayrıcalıklı projelerden daha önceliklidir.",
      scores: { kant: 10, bentham: 20, aristoteles: 0, nietzsche: -5 }
    },
    rightChoice: {
      label: "Öncü Çalışmaları Sınırlandırma",
      summary: "Herkesi aynı ortalamada eşitleyen tavan sınırlar, insanlığın ufkunu açacak olağanüstü atılımları ve ustalığı boğar.",
      scores: { kant: 0, bentham: -5, aristoteles: 10, nietzsche: 20 }
    }
  },
  // Aristoteles × Nietzsche
  {
    id: 12,
    category: "Sosyal Medya Etiği",
    title: "Ekran Süresine Otomatik Sınır",
    scenario: "Gençleri saatlerce ekrana bağlayan sonsuz kaydırma algoritmaları dikkat dağınıklığını artırıyor. Tüm sosyal medya uygulamalarına 'günlük 1 saat sonunda otomatik kapanma' zorunluluğu getirilmesi tartışılıyor.",
    leftChoice: {
      label: "Süre Sınırını Destekle",
      summary: "Dikkat sömürüsüne karşı koruyucu sınırlar koymak, toplum sağlığını ve dengeli yaşam alışkanlıklarını güçlendirir.",
      scores: { kant: 0, bentham: 10, aristoteles: 20, nietzsche: -5 }
    },
    rightChoice: {
      label: "Bireysel İradeye Karışma",
      summary: "Kimseye zamanını nasıl yöneteceği dışarıdan dikte edilemez; insan kendi iradesini dış yasaklarla değil seçimleriyle sınar.",
      scores: { kant: 10, bentham: 0, aristoteles: -5, nietzsche: 20 }
    }
  }
];

// Karar sonrası tepki: seçilen kararın arkasındaki filozof bu cümlelerden birini söyler.
// Birebir alıntı değil, filozofun bakışının sade bir özeti (felsefe ekibi, Gemini ile).
const REACTIONS = {
  kant: [
    "Hiçbir insanı başka bir hedefin aracı yapmadın, onurunu korudun.",
    "Herkes senin gibi davransaydı da bu seçim evrensel bir yasa olurdu.",
    "Fayda sağlasa bile gerçeği eğip bükmedin; dürüstlükten şaşmadın.",
    "Açık rızayı ve insan iradesini her türlü hesabın üstünde tuttun.",
    "Sonuç ne getirirse getirsin, doğru niyetten ve ilkeden ayrılmadın."
  ],
  bentham: [
    "En çok insana en büyük iyiliği sağlayacak yolu tercih ettin.",
    "Toplamdaki acıyı azaltıp huzur ve mutluluğu çoğaltmayı seçtin.",
    "Sözlere veya niyetlere değil, kararın ürettiği somut sonuca baktın.",
    "Kimseye ayrıcalık tanımadın; herkesin payını eşit teraziye koydun.",
    "Kıt kaynakları en verimli şekilde kullanarak ortak refahı büyüttün."
  ],
  aristoteles: [
    "İki uç arasında savrulmadın; sağduyulu ve ölçülü olanı buldun.",
    "Kolaycılığa kaçmadın; sağlam karakter doğru alışkanlıklarla kurulur.",
    "Kalıplara sıkışmadın; olayın bağlamına uygun bilgece kararı verdin.",
    "Soğuk kuralların ötesine geçip dostluğu ve insani bağı gözettin.",
    "Bireyin iyiliğini, içinde yaşadığı toplumun uyumundan ayrı görmedin."
  ],
  nietzsche: [
    "Olduğun yerde saymadın; insanın sınırlarını aşma iradesini seçtin.",
    "Hazır reçeteleri reddettin; kendi özgün değerlerini kendin kurdun.",
    "Kalabalığın güvenli limanına sığınmadın, bağımsız rotanı çizdin.",
    "Garantili konfor yerine belirsizlikle yüzleşme cesareti gösterdin.",
    "Korkuya kapılmadın; yaratıcı gücü ve hayatın coşkusunu onayladın."
  ]
};

// Oyun sonu rozetleri. Kazanma koşulları koddadır (app.computeBadges); başlık ve açıklamalar
// buradan değiştirilebilir (felsefe ekibi, Gemini ile).
const BADGES = {
  tutarli:  { title: "Sarsılmaz Pusula",    desc: "Ana filozofunun yer aldığı ikilemlerin en az %80'inde onun yolunu seçtin." },
  dengeli:  { title: "Çok Yönlü Bilge",     desc: "Tek bir bakışa hapsolmadın; pusulanın dört yönünü de birbirine yakın tuttun." },
  kasif:    { title: "Kusursuz Simetri",    desc: "Çok nadir bir denge yakaladın; kararların dört filozof arasında eşit dağıldı." },
  ikilem:   { title: "İki Yönlü Derinlik",  desc: "İki güçlü felsefi bakışı başa baş taşıdın; ilk iki yönün arasında fark çok az." },
  azinlik:  { title: "Özgün Rotalar",       desc: "En az dört ikilemde fuardaki genel eğilimden ayrılıp bağımsız bir yol seçtin." },
  cogunluk: { title: "Ortak Vicdanın Sesi", desc: "Kararlarının üçte ikisinden fazlasında fuardaki ortak sağduyuyla buluştun." },
  yolcu:    { title: "Siber Etik Öncüsü",   desc: "On iki zorlu siber ikilemin tamamıyla yüzleşip kendi ahlak pusulanı keşfettin." }
};
