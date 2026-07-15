/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceCategory, ProjectItem, BlogPost, FaqItem } from './types';

export const BRAND_CONFIG = {
  name: 'MHG İnşaat',
  title: 'İnce Yapı Uygulamaları ve Profesyonel İnce İş Çözüm Ortağı',
  tagline: 'Konut, ticari yapı ve kurumsal projelerde planlı, kaliteli ve sürdürülebilir uygulama hizmetleri.',
  phone: '0553 697 49 04',
  phoneRaw: '+905536974904',
  email: 'mhginsaat34@gmail.com',
  location: 'İstanbul, Türkiye',
  workingHours: 'Pazartesi - Cumartesi: 08:30 - 18:30',
  address: 'Kadıköy, İstanbul, Türkiye',
  legal: {
    title: 'MHG İnşaat ve İnce Yapı Hizmetleri',
    taxOffice: 'Göztepe Vergi Dairesi',
    taxNumber: '1234567890 (Önizleme)',
    chamberOfCommerce: 'İstanbul Ticaret Odası (ITO) - Sicil No: 123456 (Önizleme)',
    activityCertificate: 'İnce Yapı Taahhüt ve Mühendislik Hizmetleri Yetki Belgesi (Önizleme)',
    contractTerms: 'Tüm projelerimiz, yapılacak kırım-döküm, kullanılacak malzeme markaları, ödeme vadeleri ve kesin anahtar teslim tarihlerini içeren hukuki ve teknik sözleşmelerle yürütülür.'
  },
  whatsappUrl: 'https://wa.me/905536974904?text=Merhaba,%20ince%20yapi%20projemiz%20hakkinda%20teknik%20bilgi%20ve%20detayli%20teklif%20almak%20istiyoruz.',
  // Web3Forms Access Key to forward forms to mhginsaat34@gmail.com on Cloudflare / static hosting.
  // Obtain a free key from https://web3forms.com/ (Takes 5 seconds - no sign up required)
  web3formsAccessKey: '1da2a53b-7b70-47c6-bc03-4939187d8aac'
};

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: 'alci-siva',
    title: 'Alçı ve Sıva Uygulamaları',
    shortDescription: 'İç ve dış cephelerde pürüzsüz ve dalgasız yüzey hazırlığı.',
    fullDescription: 'Alçı sıva, makine alçısı, el alçısı, saten alçı ve geleneksel kara sıva uygulamalarında; dalgasız, terazisinde ve pürüzsüz yüzeyler oluşturuyoruz. Boya ve duvar kaplaması öncesinde teknik standartlara uygun kalınlık ve kuruma sürelerine dikkat ederek profesyonel uygulama sunuyoruz.',
    iconName: 'Sparkles',
    subServices: [
      'Alçı Sıva & Makine Alçısı',
      'El Alçısı & Saten Alçı',
      'Kara Sıva & Çimento Esaslı Kaba Sıva',
      'İç ve Dış Cephe Sıva Uygulamaları',
      'Tavan, Kolon ve Kiriş Sıva Düzeltmeleri',
      'Hazır Sıva & Fileli Sıva Uygulaması',
      'Dekoratif Sıva & Mineral Sıva',
      'Sıva Tamiratı & Bozuk Sıva Yenileme',
      'Eski Sıva Yüzeylerinin Kazınması ve Düzeltilmesi',
      'Tesisat (Elektrik/Su) Kanalları Sonrası Sıva Tamiratı'
    ],
    stages: [
      'Yüzeydeki eski boya, toz, yağ ve kabarmış tabakaların temizlenmesi.',
      'Yüzey emiciliğini dengelemek ve yapışmayı artırmak için astar uygulaması.',
      'Köşe profillerinin terazisinde yerleştirilmesi.',
      'Kaba sıva veya makine alçısının mastar çekilerek uygulanması.',
      'Kuruma süresi sonrasında pürüzsüz boya tabanı için saten alçı katlarının çekilmesi.',
      'Son zımpara ve toz temizliğinin yapılması.'
    ],
    useCases: {
      corporate: [
        'Toplu konut projelerinde blok bazlı makine alçısı uygulamaları.',
        'Otel ve rezidans odalarında yüksek akustik ve estetik sıva kalitesi.',
        'Fabrika ve depolarda çimento esaslı dayanıklı kara sıva işleri.'
      ],
      individual: [
        'Daire tadilatlarında kırım veya tesisat değişimi sonrası sıva tamiratları.',
        'Oda bölme sonrasında yeni duvarların mevcut duvarlarla sıfır mastara getirilmesi.',
        'Rutubet veya çatlak kaynaklı dökülen sıvaların kazınarak lokal yenilenmesi.'
      ]
    },
    materials: [
      'Dalsan Alçıpan ve Alçı Ürünleri',
      'Knauf Alçı ve Sıva Sistemleri',
      'Rigips Alçı Çözümleri',
      'ABS Alçı Ürünleri',
      'Sertifikalı Galvaniz Köşe Profilleri ve Sıva Fileleri'
    ],
    prepWorkTips: [
      'Sıva yapılacak odada elektrik ve su tesisat işlerinin tamamen bitmiş olması gerekir.',
      'Uygulama esnasında ortam sıcaklığının +5°C ile +30°C arasında olması, doğrudan rüzgar almaması kritik önem taşır.',
      'Kaba sıva kurumadan saten alçı katmanına geçilmemelidir; aksi takdirde mikro çatlaklar oluşabilir.'
    ],
    faqs: [
      {
        question: 'Makine alçısı ile el alçısı arasındaki fark nedir?',
        answer: 'Makine alçısı, püskürtme makinesiyle büyük metrajlı duvarlara hızlıca uygulanır, yoğunluğu ve mukavemeti el alçısına göre daha yüksektir. El alçısı ise daha çok butik projelerde, sıva tamiratlarında veya lokal yüzey düzeltmelerinde tercih edilir.'
      },
      {
        question: 'Kara sıva uygulaması neden gereklidir?',
        answer: 'Kara sıva, çimento ve kum esaslı olduğu için suya, neme ve darbelere karşı son derece dayanıklıdır. Özellikle banyo, mutfak gibi ıslak hacimlerde ve dış cephelerde alçı sıva yerine kara sıva yapılması teknik bir zorunluluktur.'
      }
    ]
  },
  {
    id: 'duvar-orme',
    title: 'Duvar Örme ve Bölme Duvar Sistemleri',
    shortDescription: 'Tuğla, gazbeton ve bims malzemelerle planlı mekân bölümlendirme.',
    fullDescription: 'Projenize uygun olarak tuğla, gazbeton (Ytong) veya bims bloklar kullanarak taşıyıcı olmayan iç mekân bölme duvarlarını ve dış duvarları örüyoruz. Kapı ve pencere boşluklarının milimetrik bırakılmasına, duvar birleşim noktalarında ankrajlama yapılmasına dikkat ediyoruz.',
    iconName: 'Grid',
    subServices: [
      'Tuğla Duvar Örme',
      'Gazbeton (Ytong) Duvar Örme',
      'Bims Blok Duvar Örme',
      'Oda Bölme ve İç Mekân Duvar Uygulamaları',
      'Ofis, Mağaza ve Depo Bölme Duvarları',
      'Çift Kat Ses Yalıtımlı Duvar Örme',
      'Mevcut Duvar Sökümü & Duvar Yıkım İşleri',
      'Kapı ve Pencere Boşluklarının Açılması/Kapatılması',
      'Duvar Güçlendirme Öncesi Yüzey Hazırlığı',
      'Lokal Duvar Tamiratı & Duvar Yükseltme'
    ],
    stages: [
      'Mimari projeye uygun olarak duvar akslarının (ipinin) çekilmesi ve kot alınması.',
      'Zemin temizliğinin yapılması ve ilk sıra harcının serilmesi.',
      'Blokların şakulünde (düşey terazisinde) ve yatay mastarında örülmesi.',
      'Kolon ve kiriş birleşim yerlerinde esnek bağlantı (ankrajlama/lama) yapılması.',
      'Üst birleşim noktalarında kama veya poliüretan köpük ile genleşme payı bırakılması.',
      'Kapı üstlerine betonarme/gazbeton lentaların yerleştirilmesi.'
    ],
    useCases: {
      corporate: [
        'Alışveriş merkezi ve ofis projelerinde gazbeton bölme duvarlar.',
        'Toplu konut projelerinde daireleri ayıran çift kat bims yalıtım duvarları.',
        'Sanayi tesislerinde yangına dayanıklı dış cephe gazbeton örümü.'
      ],
      individual: [
        'Geniş bir odayı ikiye bölerek yeni bir çocuk odası veya çalışma odası oluşturulması.',
        'Mutfak tezgah alanını genişletmek amacıyla kiler duvarının yıkılıp kaydırılması.',
        'Kapı veya pencere yerlerinin değiştirilmesi amacıyla eski boşlukların örülmesi.'
      ]
    },
    materials: [
      'Ytong Gazbeton Blokları',
      'Kilitli Tuğla ve Baca Tuğlaları',
      'Hafif ve Ses Yalıtımlı Bims Bloklar',
      'Teknik Hazır Örme Harçları ve Gazbeton Yapıştırıcıları',
      'Depreme dayanıklı paslanmaz çelik ankraj lamaları'
    ],
    prepWorkTips: [
      'Duvar örülecek döşeme üzerindeki moloz, toz ve gevşek şap katmanları tamamen süpürülmelidir.',
      'Ytong örülecekse, malzemenin harç suyunu emip yapışmayı zayıflatmaması için bloklar hafifçe nemlendirilmelidir.',
      'Yarım kalan duvarların rüzgar yüküne maruz kalıp devrilmemesi için gerekli güvenlik önlemleri alınmalıdır.'
    ],
    faqs: [
      {
        question: 'Oda bölmede gazbeton mu tuğla mı tercih edilmelidir?',
        answer: 'Gazbeton (Ytong) pürüzsüz yüzeyi, hafifliği ve ısı/ses yalıtım değerlerinin yüksek olması nedeniyle oda bölmelerde sıklıkla tercih edilir. Tuğla ise geleneksel mukavemet ve ekonomik bütçeler için idealdir.'
      }
    ]
  },
  {
    id: 'alcipan-asma-tavan',
    title: 'Alçıpan ve Asma Tavan Uygulamaları',
    shortDescription: 'Estetik tavanlar, gizli ışık bantları ve modüler giydirme sistemleri.',
    fullDescription: 'Alçıpan asma tavanlar, kademeli tavanlar, gizli ışık bantları, tv üniteleri ve modüler alçıpan bölme duvarlar oluşturuyoruz. Islak hacimler için yeşil (suya dayanıklı), yangın riski olan yerler için kırmızı (yangına dayanıklı) levhalar kullanarak teknik şartnamelere tam uyum sağlıyoruz.',
    iconName: 'Layers',
    subServices: [
      'Alçıpan Asma Tavan (Düz ve Kademeli)',
      'Gizli Işık Bandı & Spot Tavan Uygulamaları',
      'Alçıpan Bölme Duvar (Tek ve Çift Kat)',
      'Duvar Giydirme & Kolon/Kiriş Kaplama',
      'Tesisat Boruları, Şaft ve Havalandırma Kanallarının Kapatılması',
      'Alçıpan Niş & TV Ünitesi Tasarımları',
      'Akustik Tavan ve Taşyünü Yalıtımlı Alçıpan Sistemleri',
      'Yangına ve Suya Dayanıklı Alçıpan Uygulamaları',
      'Islak Hacim (Banyo/Mutfak) Alçıpan Kaplamaları',
      'Hasarlı Tavan Tamiratı & Alçıpan Yüzey Düzeltme'
    ],
    stages: [
      'Lazer terazi yardımıyla tavan kotunun alınması ve duvar C profili hattının çizilmesi.',
      'Çelik dübeller ve askı çubukları ile ana taşıyıcı konstrüksiyonun oluşturulması.',
      'C ve U profillerinin montajı, aralarına taşyünü ses yalıtımı döşenmesi (istenirse).',
      'Alçıpan levhaların profile vidalanması (derz şaşırtmalı olarak).',
      'Derz bandı çekilmesi ve derz dolgu alçısı ile birleşim noktalarının kapatılması.',
      'Boya öncesi saten alçı ile yüzeyin sıfır pürüzsüzlüğe getirilmesi.'
    ],
    useCases: {
      corporate: [
        'Ofis binalarında asma tavan arkasından geçen elektrik ve mekanik tesisatların gizlenmesi.',
        'Hastanelerde hijyenik ve akustik asma tavan çözümleri.',
        'Mağazalarda spot lambaların ve dekoratif ışık havuzlarının montajı.'
      ],
      individual: [
        'Salonda TV arkasına şık alçıpan niş ve gizli LED ışık bandı yapılması.',
        'Mutfakta tavan ortasından geçen doğalgaz ve havalandırma borularının kutu içine alınması.',
        'Banyoda asma tavan yapılarak nem direncinin artırılması ve spot ışık eklenmesi.'
      ]
    },
    materials: [
      'Knauf Alçıpan Levhalar (Standart, Yeşil, Kırmızı, Akustik)',
      'Dalsan Corex Alçıpan Çeşitleri',
      'Galvanizli Tavan C ve U Profilleri (Minimum 0.60mm Kalınlık)',
      'Knauf veya Dalsan Orijinal Derz Dolguları ve File Bantlar',
      'Çelik Askı Sistemleri, Dubeller ve Sac Vidaları'
    ],
    prepWorkTips: [
      'Asma tavan kapatılmadan önce iç kısımdaki tüm havalandırma, elektrik kabloları ve yangın tesisatı test edilerek onaylanmalıdır.',
      'Sıcaklığın çok düşük olduğu kış aylarında derz dolgu alçısının donma süresi uzayacağından ortam ısıtılmalıdır.',
      'Profil montajında taşıyıcı askı sıklıkları levha ağırlığına göre statik kurallara uygun belirlenmelidir.'
    ],
    faqs: [
      {
        question: 'Banyoda asma tavan sorun yaratır mı?',
        answer: 'Hayır, banyoda neme ve suya dayanıklı olan "yeşil alçıpan" (veya Aquapanel) kullanarak asma tavan yapıyoruz. Üzerine su bazlı tavan boyası uygulandığında nem ve küf oluşumu tamamen önlenir.'
      }
    ]
  },
  {
    id: 'mantolama',
    title: 'Mantolama ve Isı Yalıtımı',
    shortDescription: 'Taşyünü ve EPS levhalarla binanızda maksimum enerji tasarrufu.',
    fullDescription: 'Dış cephelerde ve ortak alan tavanlarında ısı yalıtımı sağlayarak binaların ısıtma/soğutma giderlerini %50\'ye varan oranlarda azaltıyoruz. Özellikle yüksek yangın dayanımı ve nefes alma özelliği olan taşyünü mantolama uygulamalarını, doğru dübelleme ve fileleme teknikleri ile gerçekleştiriyoruz.',
    iconName: 'Shield',
    subServices: [
      'Dış Cephe Mantolama & Bina Isı Yalıtımı',
      'Apartman, Site, Villa ve Toplu Konut Mantolama',
      'Taşyünü Isı Yalıtımı (Özellikle Görünür ve Tavsiye Edilen)',
      'Karbonlu EPS & XPS Mantolama Sistemleri',
      'Isı Yalıtım Levhası Yapıştırma & Standart Dübelleme',
      'Fileli Sıva, Köşe Profili ve Subasman Profili Uygulamaları',
      'Pencere, Kapı Kenarları ve Denizlik Altı Yalıtım Detayları',
      'Söve, Kat Silmesi ve Dekoratif Cephe Elemanları',
      'Bodrum Tavanı, Garaj ve Çatı Altı Isı Yalıtımları',
      'Hasarlı Mantolama Onarımı & Eski Cephe Mantolama Yenileme'
    ],
    stages: [
      'Yüzeyin tozdan arındırılması, çatlak ve kabaran boyaların onarılması.',
      'Subasman profilinin montajı ve kotunun alınması.',
      'Yalıtım levhalarının yapıştırma harcı ile "çerçeve metoduna" uygun yapıştırılması.',
      'Metrekare başına rüzgar yüküne uygun adette yalıtım dübellerinin çakılması.',
      'Köşe profillerinin yerleştirilmesi ve fileli ilk kat yalıtım sıvasının çekilmesi.',
      'İkinci kat ince sıva, dekoratif kaplama astarı ve mineral sıva uygulaması.'
    ],
    useCases: {
      corporate: [
        'Sitelerde ve apartman bloklarında toplu mantolama sözleşmeleri.',
        'Sanayi yapılarında taşyünü ısı ve yangın yalıtımı.',
        'Otellerde yüksek enerji tasarrufu ve cephe estetiği.'
      ],
      individual: [
        'Müstakil villalarda dekoratif söve ve taşyünü mantolama ile şık ve sıcak cepheler.',
        'Bodrum kat üzerindeki dairelerin zemin soğukluğunu önlemek için bodrum tavanı yalıtımı.',
        'Nem ve küf sorunu yaşayan dairelerde iç cepheden lokal ısı yalıtımı uygulamaları.'
      ]
    },
    materials: [
      'Filli Boya Dalmaçyalı Isı Yalıtım Sistemleri',
      'Weber Isı Yalıtım Levhaları ve Harçları',
      'Fawori Mantolama Ürünleri',
      'Yüksek Yoğunluklu Taşyünü Levhaları (120-150 kg/m³)',
      'Alkali Dayanımlı Cam Elyaf Sıva Filesi (160 gr/m²)'
    ],
    prepWorkTips: [
      'Yağmurlu ve aşırı rüzgarlı havalarda mantolama sıva uygulaması yapılmamalıdır.',
      'Yalıtım levhalarının yapıştırılmasında çimento harcının levha kenarlarından taşmamasına dikkat edilmelidir, aksi halde ısı köprüleri oluşur.',
      'Pencere kenarlarındaki denizliklerin yalıtım sonrası dışarıya su tahliyesi yapabilmesi için damlalık kanallarının açık kalması sağlanmalıdır.'
    ],
    faqs: [
      {
        question: 'Taşyünü mantolama neden EPS\'ye göre daha pahalıdır ve avantajları nelerdir?',
        answer: 'Taşyünü tamamen doğal bazalt taşından üretilir. EPS plastiktir. Taşyününün avantajları: A1 sınıfı kesin yangın dayanımı (hiç yanmaz), bina nefes almasını engellemez ve çok daha yüksek ses yalıtımı sağlar. Uzun ömürlü olması bütçesini fazlasıyla amorti eder.'
      }
    ]
  },
  {
    id: 'sap-zemin',
    title: 'Şap ve Zemin Tesviye Uygulamaları',
    shortDescription: 'Kendiliğinden yayılan (Self-leveling) ve makine şapları ile düzgün zeminler.',
    fullDescription: 'Seramik, parke, PVC, epoksi gibi son kat zemin kaplamaları öncesinde zeminlerin milimetrik terazisini sağlıyoruz. Klasik şap, pompalı şap, helikopterli şap ve özellikle ince zemin düzeltmelerinde kullanılan kendiliğinden yayılan (self-leveling) şap uygulamalarında uzman ekiple çalışıyoruz.',
    iconName: 'ChevronDown',
    subServices: [
      'Çimento Esaslı Makine Şapı & Pompalı Şap',
      'Helikopterli Şap Uygulamaları (Endüstriyel Zemin)',
      'Kendiliğinden Yayılan Şap — Self-Levelling Uygulamaları',
      'Zemin Kot Düzeltme, Tesviye ve Eğim Şapı',
      'Yerden Isıtma Üzeri Özel Şap Uygulamaları',
      'Isı ve Ses Yalıtımlı Şap (Hafif Şap Çözümleri)',
      'Balkon, Teras ve Banyo Islak Hacim Eğim Şapları',
      'Seramik, Parke, PVC ve Epoksi Öncesi Zemin Hazırlığı',
      'Mevcut Şap Sökümü & Hasarlı Şap Çatlak Tamiratı',
      'Otopark, Fabrika, Depo ve Mağaza Zemin Hazırlıkları'
    ],
    stages: [
      'Zemin üzerindeki çıkıntıların traşlanması ve pürüzlerin temizlenmesi.',
      'Zeminin su emiciliğini önlemek ve şapın aderansını (yapışmasını) artırmak için astar çekilmesi.',
      'Lazer terazi ile kotların belirlenmesi ve "ano" profillerinin kurulması.',
      'Şap harcının dökülmesi, mastarlanması ve helikopter perdah makinesi ile yüzeyin sıkıştırılması.',
      'İnce zeminler için kendiliğinden yayılan (self-leveling) harcın dökülüp kirpi rulo ile havasının alınması.',
      'Şapın çatlamaması için belirli aralıklarla kürlenmesi (sulanması) veya derz kesilmesi.'
    ],
    useCases: {
      corporate: [
        'Fabrika, depo ve otopark zeminlerinde aşınmaya dayanıklı helikopterli şap uygulamaları.',
        'Ofis ve otel projelerinde parke/halı kaplama öncesi self-leveling tesviye şapı.',
        'Toplu konutlarda yerden ısıtma sistemleri üzerine ısıyı ileten özel şap dökümü.'
      ],
      individual: [
        'Balkon ve teraslarda su sızıntılarını önlemek için süzgece doğru kusursuz eğim şapı verilmesi.',
        'Daire tadilatlarında odalar arası kot farklarını gidermek için self-leveling uygulaması.',
        'Kırılan eski mutfak zemin şapının temizlenerek yeniden seramik kotuna getirilmesi.'
      ]
    },
    materials: [
      'BASF ve Master Builders Şap Katkıları ve Yapıştırıcıları',
      'Weber Zemin Tesviye ve Şap Ürünleri',
      'Kalekim Self-Leveling Hazır Harçları',
      'Çelik Hasır ve Elyaf (PP Lif) Çatlak Önleyici Katkılar',
      'Yüksek Mukavemetli Portland Çimentoları'
    ],
    prepWorkTips: [
      'Yerden ısıtma üzerine şap dökülmeden önce tesisat boruları basınç testine tabi tutulmalı, sızıntı olmadığından emin olunmalıdır.',
      'Self-leveling şap uygulanacak zemin tamamen nemsiz ve kuru olmalıdır; ıslak zemine dökülen şap kabarma yapar.',
      'Dökülen şapın doğrudan güneş ışığına ve rüzgara maruz kalarak hızlı kuruması engellenmelidir; hızlı kuruyan şap çatlar.'
    ],
    faqs: [
      {
        question: 'Şap neden çatlar ve nasıl önlenir?',
        answer: 'Şapın çatlamasının temel nedenleri; aşırı su kullanılarak harç hazırlanması, rüzgarda hızlı kuruması ve genleşme derzlerinin kesilmemesidir. Harca PP lif (elyaf) ekleyerek, doğru mastarlama yaparak ve döküm sonrası nemli tutarak çatlamayı %99 oranında önlüyoruz.'
      },
      {
        question: 'Self-leveling şap kaç mm kalınlığında uygulanır?',
        answer: 'Kendiliğinden yayılan self-leveling şaplar, zemindeki dalgalanmaları ve pürüzleri gidermek amacıyla genellikle 2 mm ile 10 mm arasındaki kalınlıklarda çok ince katmanlar olarak uygulanır.'
      }
    ]
  },
  {
    id: 'boya-yuzey',
    title: 'Boya ve Yüzey Uygulamaları',
    shortDescription: 'İç ve dış cephelerde profesyonel, silinebilir ve dekoratif boyalar.',
    fullDescription: 'Yaşam alanlarınızı en kaliteli boya markaları ve profesyonel uygulama ekibimizle renklendiriyoruz. Boya öncesinde duvarlardaki çatlak tamiratlarını saten macunla yapıyor, doğru astar seçimiyle boyanın ömrünü uzatıyoruz. Tozsuz zımpara makineleri kullanarak temiz ve konforlu bir şantiye yönetiyoruz.',
    iconName: 'Brush',
    subServices: [
      'İç Cephe Boya & Badana İşleri',
      'Dış Cephe Boya & Mineral Kaplamalar',
      'Plastik, Silikonlu, Su Bazlı ve Silinebilir Boyalar',
      'Dekoratif Boya & Grenli Dış Cephe Boyaları',
      'Boya Öncesi Saten Alçı, Macun ve Kusursuz Yüzey Hazırlığı',
      'Duvar Çatlakları, Delikler ve Kırık Köşelerin Mukavemetli Tamiratı',
      'Nemden/Rutubetten Zarar Görmüş ve Kabaran Duvarların Yenilenmesi',
      'Eski Boyaların Kazınması ve Duvar Kağıdı Söküm Sonrası Düzeltmeler',
      'Kapı, Pencere, Ahşap ve Metal Yüzeylerin Astarlanması ve Boyanması',
      'Ortak Alan, Merdiven Boşluğu ve Şantiye Teslim Öncesi Boya Rötuşları'
    ],
    stages: [
      'Zeminlerin, mobilyaların ve süpürgeliklerin maskeleme bandı ve örtüyle korunması.',
      'Eski kabaran boyaların spatula yardımıyla kazınması.',
      'Saten macun ile pürüzlerin kapatılması ve tozsuz makine ile zımparalanması.',
      'Alçı yüzeyin tozunun alınarak boyanın yapışmasını sağlayacak astarın çekilmesi.',
      'Müşteri onaylı rengin kaliteli rulolarla minimum 2 kat halinde duvara uygulanması.',
      'Maskeleme bantlarının sökülmesi ve oda temizliğinin yapılarak teslim edilmesi.'
    ],
    useCases: {
      corporate: [
        'Ofis ve mağazalarda marka kimliğine uygun kurumsal dekoratif boya işleri.',
        'Yeni tamamlanan konut bloklarında teslim öncesi kusursuz boya ve rötuş işçiliği.',
        'Depo ve endüstriyel tesislerde yangın geciktirici ve epoksi duvar boyaları.'
      ],
      individual: [
        'Dairelerde eşyalı veya boş olarak kısa sürede, temiz ve profesyonel boya badana.',
        'Nem ve rutubet nedeniyle kararan banyo tavanlarının kazınarak anti-küf boya ile yenilenmesi.',
        'Çocuk odalarında kir tutmayan, kolay silinebilir su bazlı sağlıklı boya uygulamaları.'
      ]
    },
    materials: [
      'Jotun İç ve Dış Cephe Boya Sistemleri (Premium)',
      'Filli Boya Silikonlu ve Silinebilir Boya Grupları',
      'Marshall Su Bazlı Sağlıklı Boyalar',
      'Dyo ve Polisan Boya ve Macun Çeşitleri',
      '3M Maskeleme Bantları ve Profesyonel Koruyucu Brandalar'
    ],
    prepWorkTips: [
      'Boyanın dalgalı görünmemesi için alt yüzeydeki zımpara tozunun astar öncesi tamamen vakumlanarak temizlenmesi şarttır.',
      'Yeni sıvanmış duvarlarda sıva tamamen kurumadan (en az 14 gün bekletilmeden) boya yapılmamalıdır.',
      'Koyu renklerden açık renklere geçişte mutlaka "geçiş astarı" kullanılmalıdır, aksi takdirde renk örtücülüğü zayıf kalır.'
    ],
    faqs: [
      {
        question: 'Eşyalı evde boya badana ne kadar sürer ve eşyalarım zarar görür mü?',
        answer: ' MHG İnşaat olarak eşyalı evlerde 3+1 bir daireyi ortalama 2-3 günde teslim ediyoruz. İşe başlamadan önce tüm mobilyalarınızı odanın ortasına toplayıp kalın koruyucu örtülerle kaplıyoruz. Süpürgelikleri ve kapı kasalarını bantlıyoruz. Tozsuz zımpara kullandığımız için evinizde minimum toz oluşur.'
      }
    ]
  },
  {
    id: 'dis-cephe',
    title: 'Dış Cephe Uygulamaları',
    shortDescription: 'Binalarınızın dış yüzeylerinde estetik ve uzun ömürlü koruma.',
    fullDescription: 'Apartman, site ve ticari binaların dış cephelerinde; dökülen sıvaların onarılması, çatlakların fileli sıva ile kapatılması, söve detaylarının yenilenmesi ve suya dayanıklı elastik dış cephe boyalarının uygulanması işlerini complies with iş güvenliği standartlarına uygun iskele sistemleri ile yapıyoruz.',
    iconName: 'Building',
    subServices: [
      'Dış Cephe Mantolama & Isı Yalıtımı',
      'Dış Cephe Kaba/İnce Sıva ve Tamirat İşleri',
      'Dış Cephe Elastik ve Silikonlu Boya Uygulamaları',
      'Cephe Çatlak Onarımları & Sıva Fileleme',
      'Mineral Sıva & Dekoratif Dış Cephe Kaplamaları',
      'Pencere Kenarı Söve, Kat Silmesi ve Denizlik Detayları',
      'Balkon Altı Beton Tamiratları & Balkon Cephe Yenilemeleri',
      'Güvenli İskele Kurulumlu Cephe Uygulamaları',
      'Su ve Nem Kaynaklı Cephe Deformasyonlarının Onarılması',
      'Ortak Alan Cephe Temizliği, Astarlama ve Rötuş İşleri'
    ],
    stages: [
      'Bina çevresinde iş güvenliği önlemlerinin alınması ve onaylı çelik iskelenin kurulması.',
      'Dökülen kısımların çekiçlenerek kazınması, demirlerin pas giderici ile kaplanması.',
      'Çatlakların elastik tamir harçları ve dış cephe sıva filesi ile köprülenmesi.',
      'Yüzeye silikonlu dış cephe astarının uygulanması.',
      'Söve, kat silmesi ve dekoratif denizlik montajlarının yapılması.',
      'Hava şartlarına, UV ışınlarına dayanıklı dış cephe boyasının 2 kat uygulanması.'
    ],
    useCases: {
      corporate: [
        'Apartman ve sitelerin dış cephe yenileme, mantolama ve ortak bütçeli boya işleri.',
        'Fabrika binalarının dış cephelerinin ısı yalıtımı ve kurumsal renklerle boyanması.',
        'Okul ve kamu binalarında yıpranmış cephelerin tadilatı.'
      ],
      individual: [
        'Müstakil villaların dış cephelerinin sövelerle estetik ve modern görünüşe kavuşturulması.',
        'Müstakil konutların rüzgar ve yağmur alan cephelerine su yalıtımlı elastik boya uygulaması.',
        'Bina ortak kararından bağımsız olarak dairenin dış cephesine lokal ısı yalıtımı yapılması.'
      ]
    },
    materials: [
      'Jotun Jotashield Dış Cephe Sistemleri',
      'Filli Boya AmphiSilan Dış Cephe Boyası',
      'Weber ve Kalekim Dış Cephe Tamir Harçları',
      'Çelik Gövdeli TSE Belgeli Güvenli İskele Sistemleri',
      'UV Dayanımlı Akrilik ve Poliüretan Mastikler'
    ],
    prepWorkTips: [
      'Dış cephe boya işlerinde doğrudan güneş altında ve rüzgarlı havalarda çalışılmamalıdır; boya hızlı kuruyarak mukavemetini yitirir.',
      'Betonarme demirlerinin paslanması (korozyon) varsa, tamir sıvasından önce antipas sürülmesi hayati önemdedir.',
      'Cephede kullanılacak tüm iskele kurulumları, bakanlık onaylı ve iş güvenliği uzmanı denetimli olmak zorundadır.'
    ],
    faqs: [
      {
        question: 'Dış cephe boyası ne sıklıkla yenilenmelidir?',
        answer: 'İstanbul gibi nemli ve deniz etkisi olan şehirlerde dış cephe boyalarının kalitesine bağlı olarak ortalama 8 ila 12 yılda bir yenilenmesi tavsiye edilir. Jotun gibi premium boyalar kullanıldığında bu süre çok daha uzun olmaktadır.'
      }
    ]
  },
  {
    id: 'duvar-tamiratı',
    title: 'Duvar Tamiratı ve Yüzey Düzeltme',
    shortDescription: 'Nem, rutubet ve tesisat geçişleri sonrası profesyonel tamiratlar.',
    fullDescription: 'Elektrik, su, doğalgaz tesisat yenilemeleri sonrasında açılan kanalları; nem, rutubet, su kaçağı hasarları sonrasında kabaran duvarları; dalgalı ve pürüzlü yüzeyleri teknik kurallara uygun olarak dolgular, çatlak köprüleme fileleri ve saten alçılarla mükemmel şekilde düzeltiyoruz.',
    iconName: 'Wrench',
    subServices: [
      'Duvar, Tavan ve Kolon Köşe Tamiratları',
      'Tesisat Geçiş Kanalları (Elektrik/Su/Klima) Sonrası Duvar Kapatma',
      'Duvar Çatlakları, Delikler ve Kırık Alçıpan Yüzey Onarımları',
      'Dalgalı Duvarların Alçı ile Düz mastara Getirilmesi',
      'Boya ve Duvar Kağıdı Öncesi Kusursuz Yüzey Hazırlığı',
      'Seramik Sökümü Sonrası Bozuk Duvar Yüzeylerinin Düzeltilmesi',
      'Su Kaçağı, Nem ve Rutubet Hasarlı Kabaran Sıvaların Yenilenmesi',
      'Kapı ve Pencere Değişimi Sonrası Kasa Kenarı Sıva Tamiratları',
      'Lokal Sıva Dökümleri ve Köşe Mukavemet Profili Uygulamaları',
      'İnce İnce Zımpara, Toz Temizliği ve Teslim Öncesi Hassas Rötuşlar'
    ],
    stages: [
      'Bozuk, kabarmış, nemden çürümüş sıva tabakalarının kazınarak sağlam betona inilmesi.',
      'Tesisat kanallarının iç kısımlarının nemlendirilerek harç aderansının sağlanması.',
      'Çatlak olan bölgelere derz/sıva filesi yerleştirilmesi.',
      'Mukavemetli tamir harçları ile kanalların doldurulması ve kaba düzeltme yapılması.',
      'Mevcut duvar yüzeyi ile sıfır mastar oluşturacak şekilde saten alçı katlarının çekilmesi.',
      'Zımparalama sonrası astar uygulanarak yüzeyin boyaya hazır hale getirilmesi.'
    ],
    useCases: {
      corporate: [
        'Ofis tadilatlarında sökülen bölme duvar yerlerinin zemin ve tavan tamiratları.',
        'Şantiyelerde teslim öncesi punch list (eksik ve hata) listesindeki duvar rötuşları.',
        'Otellerde kat tadilatları esnasında hızlı ve lokal duvar yüzey düzeltme işleri.'
      ],
      individual: [
        'Daireye yeni klima takılması sonrası çekilen boru kanallarının duvar içinde kapatılması.',
        'Üst daireden su sızması sonucu sararan ve dökülen banyo/salon tavanının tamiri.',
        'Eski duvar kağıtları söküldükten sonra bozulan kağıt altı duvar yüzeyinin macunlanması.'
      ]
    },
    materials: [
      'Weber Tec Yapısal Tamir Harçları',
      'Kalekim Tamir ve Yüzey Düzeltme Macunları',
      'Saten Alçı ve Tozsuz Duvar Macunları',
      'Yüksek mukavemetli köşe profilleri ve fileler',
      'Anti-Nem ve Rutubet Önleyici Özel Astarlar'
    ],
    prepWorkTips: [
      'Su kaçağı hasarlı bir duvar tamir edilmeden önce, sızıntının kaynağı (üst komşu tesisatı vb.) mutlaka tamamen kurutulmalıdır; ıslak duvara yapılan tamirat yine kabarma yapar.',
      'Büyük kanal kapatmalarında tek seferde kalın harç doldurulmamalıdır; harç kururken çekme yapıp çatlayacağından katman katman uygulanmalıdır.',
      'Zımpara sonrası duvar tozu süpürülmeden astar sürülürse boya rulo ile birlikte duvardan kalkabilir.'
    ],
    faqs: [
      {
        question: 'Rutubetli duvarın tamiratı nasıl yapılır?',
        answer: 'Öncelikle rutubete neden olan su sızıntısını kesiyoruz. Duvarın tamamen kurumasını bekledikten sonra küflü tabakayı kazıyoruz. Yüzeye anti-küf solüsyonu ve nem bariyeri oluşturan özel astar uyguluyoruz. Son olarak çimento esaslı tamir sıvası ve saten alçı ile yüzeyi düzeltip nefes alan boya uyguluyoruz.'
      }
    ]
  },
  {
    id: 'tadilat-yenileme',
    title: 'Tadilat ve Yenileme Uygulamaları',
    shortDescription: 'Komple daire, ofis ve villa projelerinde anahtar teslim dönüşüm.',
    fullDescription: 'Dairenizi, ofisinizi veya villanızı tamamen yenilemek istediğinizde; kırımdan tasarıma, tesisattan montaja kadar tüm ince yapı işlerini profesyonel bir inşaat disiplini ile yönetiyoruz. Farklı ustalarla muhatap olmadan, tek bir sözleşme ve şef denetimi ile konforlu bir yenileme süreci sunuyoruz.',
    iconName: 'Home',
    subServices: [
      'Komple Anahtar Teslim Daire Tadilatı',
      'Ofis, Mağaza, Dükkan ve Ticari Alan Yenilemeleri',
      'Villa, Yazlık ve Müstakil Konut Komple Tadilatları',
      'Ortak Alan, Apartman Girişi ve Merdiven Boşluğu Modernizasyonu',
      'Kiralama Öncesi veya Kiracı Çıkışı Daire Yenileme İşleri',
      'Mülk Satışı Öncesi Değer Artırıcı Hızlı Yenileme Uygulamaları',
      'Kısmi Tadilat (Sadece Banyo, Sadece Mutfak veya Salon Yenileme)',
      'İç Mekan Kapı Değişimleri, Zemin Kaplamaları ve Parke Döşeme',
      'Elektrik, Sıhhi Tesisat, Havalandırma ve Kalorifer Altyapı Revizyonları',
      'Tesisat Kapatma, Alçıpan, Boya, Seramik ve Temizlik Dahil Teslim'
    ],
    stages: [
      'Ücretsiz yerinde keşif, bütçe çalışması ve malzeme seçimlerinin yapılması.',
      'Karşılıklı detaylı teknik şartname ve tadilat sözleşmesinin imzalanması.',
      'Komşuları rahatsız etmeyecek saatlerde kırım işlerinin yapılması, moloz nakli.',
      'Elektrik, sıhhi tesisat ve petek hatlarının sıfırdan çekilmesi ve testleri.',
      'Zemin şapının dökülmesi, ıslak hacim izolasyonları ve seramik kaplamalar.',
      'Alçıpan, asma tavan, kapı montajları, mutfak/banyo dolapları ve boya işleri.',
      'İnşaat sonrası temizlik yapılarak anahtarın çalışır durumda teslim edilmesi.'
    ],
    useCases: {
      corporate: [
        'Ofis katlarında bölme duvarlar, zemin kaplamaları ve elektrik/data altyapı tadilatları.',
        'Yeni satın alınan ticari dükkanların kurumsal şubeye dönüştürülmesi.',
        'Apartman yönetimleri için ortak alan merdiven boşluğu, sığınak ve cephe tadilatları.'
      ],
      individual: [
        'Eski binadaki 3+1 dairenin tüm tesisat ve ince işler dahil modern şekilde baştan yaratılması.',
        'Mutfak duvarının yıkılarak açık (Amerikan) mutfak salon bütünlüğünün sağlanması.',
        'Yeni taşınılacak evin boya, banyo yenileme ve kapılarının hızlıca yenilenmesi.'
      ]
    },
    materials: [
      'Seramiksan, Bien ve Vitra Seramik Serileri',
      'Artema, Grohe ve ECA Armatür Grupları',
      'MDF Gövdeli Lake ve Akrilik Dolap Kapakları',
      'Vario ve AGT Lamine/Laminat Parke Ürünleri',
      'Filli Boya ve Jotun Premium İç Cephe Boyaları'
    ],
    prepWorkTips: [
      'Tadilata başlamadan önce apartman yönetimine bilgi verilmeli, çalışma saatleri (genellikle hafta içi 09:00 - 17:00) kurallarına uyulmalıdır.',
      'Doğalgaz tesisat değişiklikleri için ilgili bölge idaresinden (örn: İGDAŞ) mutlaka yetkili mühendis onayı alınmalıdır.',
      'Kırım öncesi binanın ana su vanası kontrol edilmeli, acil durumda kapatılabilecek durumda olmalıdır.'
    ],
    faqs: [
      {
        question: 'Tadilat esnasında evde kalabilir miyiz?',
        answer: 'Komple daire tadilatlarında elektrik ve su tesisatları kesileceğinden, kırım ve toz oluşacağından evde kalınması teknik olarak mümkün değildir. Ancak sadece banyo veya tek bir oda gibi kısmi tadilatlarda, yaşam alanınızı izole ederek evde kalmanıza engel olmayacak düzenlemeler yapabiliyoruz.'
      }
    ]
  },
  {
    id: 'kurumsal-taseronluk',
    title: 'Kurumsal İnce İş Taşeronluğu',
    shortDescription: 'Büyük ölçekli şantiyelerde iş programına ve hakedişe uygun işçilik.',
    fullDescription: 'Müteahhit ve ana yüklenici firmaların toplu konut, otel, hastane, okul, fabrika, iş merkezi gibi büyük metrajlı projelerinde; ince yapı işlerini profesyonel saha koordinasyonu, iş sağlığı güvenliği (İSG) standartları ve sıkı iş programı disipliniyle üstleniyoruz. Metraj ve hakediş süreçlerine tam uyum sağlıyoruz.',
    iconName: 'Users',
    subServices: [
      'İnce Yapı Uygulama Yükleniciliği & Alt Yüklenici Hizmetleri',
      'Büyük Ölçekli Alçı Sıva, Duvar Örme ve Şap Taşeronluğu',
      'Blok veya Kat Bazlı Alçıpan Bölme Duvar ve Asma Tavan Hizmetleri',
      'Toplu Konut, Rezidans ve Site İnce Yapı Taşeronluğu',
      'Otel, Hastane, Okul ve Kamu Binaları İnce İş Uygulamaları',
      'Fabrika, Depo ve Ticari Plaza İnce İş Çözümleri',
      'Hakediş Esaslı, Metraj Takipli ve İş Programına Bağlı Çalışma',
      'Malzemeli veya Sadece İşçilik Bazlı Büyük Metraj Uygulamaları',
      'Şantiye Eksiklerinin Tamamlanması & Punch List (Kusur Giderme) Hizmetleri',
      'Saha Koordinasyonlu, Mühendis Denetimli ve İSG Uyumlu Ekipler'
    ],
    stages: [
      'Proje şartnamelerinin, keşif özetlerinin ve metraj tablolarının teknik ofisimizce incelenmesi.',
      'İşveren teknik ofisi ile birim fiyat tekliflerinin ve hakediş yöntemlerinin netleştirilmesi.',
      'Sözleşme ve iş programının (takvim) imzalanarak şantiyeye mobilizasyonun sağlanması.',
      'Sertifikalı uygulama ekiplerimizin, saha şeflerimizin ve İSG uzmanlarımızın görevlendirilmesi.',
      'Günlük ve haftalık iş programı hedeflerine uygun şantiye üretiminin yapılması.',
      'İşveren teknik personeli ile hakediş metraj kontrollerinin yapılması, son teslim onayı.'
    ],
    useCases: {
      corporate: [
        'TOKİ veya prestijli konut şantiyelerinde binlerce metrekare alçı sıva ve boya taşeronluğu.',
        'Hastanelerde hijyenik asma tavan ve akustik bölme duvar imalatları.',
        'Alışveriş merkezlerinde mağaza içi ince inşaat ve tavan sistemleri.'
      ],
      individual: [
        'Bireysel müşterilerimiz için kurumsal taşeronluk disiplininde şantiye standartları sunulması.',
        'Toplu site yönetimlerinin dış cephe mantolama işlerinin kurumsal hakediş ve ödeme planıyla yapılması.',
        'Kat karşılığı arsa sahiplerine müteahhit firmanın yapmadığı eksik ince işlerin tamamlanması hizmeti.'
      ]
    },
    materials: [
      'Projelerin teknik şartnamesinde yer alan onaylı tüm TSE/CE belgeli kurumsal markalar',
      'Mapei, Sika, BASF Yapı Kimyasalları Sistemleri',
      'Knauf, Ytong, Dalsan, Vitra vb. Proje Onaylı Ürünler'
    ],
    prepWorkTips: [
      'Alt yüklenici sözleşmesi imzalanmadan önce şantiyedeki kule vinç kullanımı, elektrik/su temini, iskele kurulum sorumlulukları açıkça tanımlanmalıdır.',
      'Saha ekiplerinin tüm SGK girişleri, İSG eğitim sertifikaları ve mesleki yeterlilik belgeleri işe başlama öncesi şantiye yönetimine eksiksiz sunulmalıdır.',
      'Hava muhalefeti veya işveren kaynaklı gecikmelerin iş programına etkisi tutanak altına alınarak güncellenmelidir.'
    ],
    faqs: [
      {
        question: 'Sadece işçilik taşeronluğu yapıyor musunuz?',
        answer: 'Evet, büyük ölçekli şantiyelerde malzemelerin işveren tarafından tedarik edildiği durumlarda, sadece teknik şartnameye uygun işçilik ve saha yönetim taşeronluğu hizmeti sunuyoruz. Aynı zamanda malzemeli anahtar teslim ince iş yükleniciliği de yapmaktayız.'
      },
      {
        question: 'Ekiplerinizin iş güvenliği belgeleri tam mıdır?',
        answer: 'Kesinlikle. Şantiyede görev alacak tüm personelimizin mesleki yeterlilik belgeleri, ağır ve tehlikeli işlerde çalışabilir sağlık raporları, güncel SGK girişleri ve İSG eğitim sertifikaları işe başlamadan önce eksiksiz olarak teknik ofisinize teslim edilir. Saha şeflerimiz bizzat İSG kurallarının uygulanmasını takip eder.'
      }
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'kalamis-tadilat',
    title: 'Kalamış Komple Daire Tadilatı',
    category: 'tadilat',
    projectType: 'Daire Tadilatı',
    location: 'Kadıköy',
    area: '140 m²',
    scope: [
      'Eski duvarların yıkılarak açık mutfak bütünlüğü sağlanması.',
      'Sıhhi su ve kalorifer tesisatlarının pimaş borular dahil sıfırlanması.',
      'Tüm odalarda alçı sıva, tozsuz zımpara ve silinebilir silikonlu Jotun boya.',
      'Banyo zeminlerinde çift kat sürme su yalıtımı ve Vitra seramik kaplama.',
      'Özel tasarım lake mutfak dolapları ve banyo mobilyalarının montajı.'
    ],
    systemUsed: 'Saten Alçı ve Jotun Boya Sistemleri, Bien Seramik Grubu',
    status: 'completed',
    description: 'Kadıköy Kalamış bölgesindeki 35 yıllık binada yer alan dairenin, taşıyıcı kolonlara dokunulmadan mimari olarak tamamen yenilenmesi. Eski demir borular plastik borularla değiştirilmiş, zemin kot farkları self-leveling şap ile sıfırlanmıştır.',
    imageUrlAfter: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600&auto=format&fit=crop',
    durationDays: 35
  },
  {
    id: 'atasehir-ofis',
    title: 'Ataşehir Finans Merkezi Ofis Projesi',
    category: 'tadilat',
    projectType: 'Ofis Projesi',
    location: 'Ataşehir',
    area: '250 m²',
    scope: [
      'Lazer terazi ile tavan kotlandırması yapılarak asma tavan yapılması.',
      'Cam bölme duvarlar ve Knauf alçıpan çift kat bölme duvar sistemleri.',
      'Zeminlerde halı kaplama öncesi self-leveling şap ile pürüzsüzlük sağlanması.',
      'Havalandırma kanalları ve yangın algılama hatlarının dekoratif kutulanması.',
      'Kurumsal renklere uygun silinebilir Filli Boya uygulamaları.'
    ],
    systemUsed: 'Knauf Bölme Duvar ve Akustik Tavan Sistemleri',
    status: 'completed',
    description: 'Ataşehir Finans Merkezi plazalar bölgesindeki ofisin, marka kimliğine uygun olarak bölümlendirilmesi ve ince işlerinin tamamlanması. Şantiye süresi iş kesintisini önlemek amacıyla gece vardiyaları dahil edilerek hızlıca yönetilmiştir.',
    imageUrlAfter: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop',
    durationDays: 25
  },
  {
    id: 'besiktas-villa',
    title: 'Beşiktaş Müstakil Villa Dış Cephe & Isı Yalıtımı',
    category: 'mantolama',
    projectType: 'Müstakil Villa',
    location: 'Beşiktaş',
    area: '380 m²',
    scope: [
      'Dış cephe eski yıpranmış sıvalarının kazınarak tamir harçlarıyla onarılması.',
      '150 kg/m³ yoğunluğunda 5cm Knauf taşyünü levhaların çerçeve metoduyla yapıştırılması.',
      'Metrekareye 6 adet çelik çivili mantolama dübeli uygulanması.',
      'Alkali dayanımlı sıva filesi ile çift kat kalekim sıva çekilmesi.',
      'Dış cephe pencerelerine söve ve dekoratif kat silmesi montajları.',
      'Jotun Jotashield su yalıtımlı nefes alan dış cephe boyası.'
    ],
    systemUsed: 'Knauf Taşyünü Isı Yalıtım Sistemi & Jotun Boya',
    status: 'completed',
    description: 'Boğaz hattında yer alan müstakil villanın dış cephesinin nem, rüzgar ve yağmura karşı yüksek mukavemetli taşyünü mantolama ile korunması. Enerji tasarrufu ön raporunda %45 iyileşme sağlanmıştır.',
    imageUrlAfter: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=600&auto=format&fit=crop',
    durationDays: 40
  },
  {
    id: 'acibadem-donusum',
    title: 'Acıbadem Kentsel Dönüşüm Şantiyesi',
    category: 'kentsel',
    projectType: 'Konut Bloğu (Deprem Güvenli)',
    location: 'Üsküdar',
    area: '1,200 m²',
    scope: [
      'Riskli yapı tespiti ve apartman sakinleri 2/3 ortak karar süreçleri danışmanlığı.',
      'Eski binanın çevre güvenliği alınarak yasal yıkım işleri.',
      'C35 yüksek dayanımlı betonarme ve deprem yönetmeliğine %100 uygun kaba inşaat.',
      'Daire bölmelerinde ses yalıtımlı bims duvarlar, katlar arası şap altı ses yalıtımı.',
      'Tüm dairelerin anahtar teslim ince yapı (alçı, boya, asma tavan, seramik) uygulamaları.'
    ],
    systemUsed: 'TSE Standartlı Deprem Güvenli Kaba ve İnce İnşaat Sistemleri',
    status: 'ongoing',
    description: 'Üsküdar Acıbadem\'de yer alan 10 dairelik riskli konut apartmanının kentsel dönüşüm kapsamında yıkılarak yeniden inşası projesi. Halihazırda kaba inşaat tamamlanmış olup ince yapı sıva ve şap aşamasına geçilmiştir.',
    imageUrlAfter: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=600&auto=format&fit=crop',
    durationDays: 360
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'mantolama-nasil-yapilir',
    title: 'Mantolama Nasıl Yapılır? Adım Adım Dış Cephe Isı Yalıtımı',
    category: 'Mantolama ve Yalıtım',
    summary: 'Dış cephe mantolama uygulamasında yapıştırma, dübelleme, fileleme ve mineral sıva adımlarının teknik kuralları ve doğru işçilik yöntemleri.',
    tags: ['İstanbul mantolama firması', 'Bina mantolama', 'Dış cephe mantolama', 'Taşyünü mantolama'],
    readTime: '6 dk'
  },
  {
    id: 'eps-xps-tasyunu-farklari',
    title: 'EPS, XPS ve Taşyünü Arasındaki Farklar Nelerdir?',
    category: 'Malzeme Rehberi',
    summary: 'Yalıtım malzemesi seçerken yangın sınıfı, nefes alma kabiliyeti, ısı yalıtım katsayısı ve bütçe dengesi açısından bir karşılaştırma rehberi.',
    tags: ['Taşyünü mantolama', 'EPS ısı yalıtımı', 'XPS ısı yalıtımı', 'Isı köprüsü yalıtımı'],
    readTime: '8 dk'
  },
  {
    id: 'alci-siva-dikkat-edilmesi-gerekenler',
    title: 'Alçı Sıva Uygulamasında Dikkat Edilmesi Gereken 7 Kritik Nokta',
    category: 'Alçı ve Sıva',
    summary: 'Dalgasız ve pürüzsüz duvarlar için mastar çekimi, köşe profili kullanımı, kuruma süresi ve saten alçı katlarının önemi.',
    tags: ['İstanbul alçı sıva', 'Saten alçı', 'Yüzey düzeltme', 'Boyaya hazırlık'],
    readTime: '5 dk'
  },
  {
    id: 'makine-el-alcisi-farklar',
    title: 'Makine Alçısı ile El Alçısı Arasındaki Farklar',
    category: 'Alçı ve Sıva',
    summary: 'Büyük ölçekli şantiyelerde makine alçısının sağladığı mukavemet ve zaman avantajları ile el alçısının lokal tamirlerdeki kullanım alanları.',
    tags: ['İstanbul makine alçısı', 'Alçı sıva taşeronu', 'El alçısı', 'İnce işler'],
    readTime: '4 dk'
  },
  {
    id: 'kara-siva-nedir-nerelerde-kullanilir',
    title: 'Kara Sıva Nedir ve Nerelerde Kullanılması Zorunludur?',
    category: 'Alçı ve Sıva',
    summary: 'Çimento ve kum karışımlı kara sıvanın yüksek darbe dayanımı ve nem direnci nedeniyle banyo, mutfak gibi ıslak hacimlerdeki teknik zorunluluğu.',
    tags: ['İstanbul kara sıva', 'Banyo tadilatı', 'Kara sıva taşeronu', 'Sıva tamiratı'],
    readTime: '6 dk'
  },
  {
    id: 'sap-uygulamasi-nasil-yapilir',
    title: 'Şap Uygulaması Nasıl Yapılır? Terazi ve Ano Kurulumu',
    category: 'Zemin Çözümleri',
    summary: 'Zeminde çatlama ve çökme olmaması için şap dökümünde ano terazisi, mastarlama, PP lif (elyaf) katkısı ve derz kesim detayları.',
    tags: ['İstanbul şap uygulaması', 'Makine şapı', 'Zemin tesviye', 'Parke öncesi şap'],
    readTime: '7 dk'
  },
  {
    id: 'kendiliginden-yayilan-sap-nedir',
    title: 'Kendiliğinden Yayılan Şap (Self-Levelling) Nedir?',
    category: 'Zemin Çözümleri',
    summary: 'Özellikle ince parke ve PVC zemin kaplamaları öncesinde, milimetrik kot farklarını sıfırlamak için self-leveling şap uygulaması.',
    tags: ['İstanbul kendiliğinden yayılan şap', 'Self-levelling şap', 'Zemin düzeltme'],
    readTime: '5 dk'
  },
  {
    id: 'yerden-isitma-sap-uygulamasi',
    title: 'Yerden Isıtma Üzerine Şap Nasıl Uygulanmalıdır?',
    category: 'Zemin Çözümleri',
    summary: 'Isı geçişini engellemeyecek özel şap kalınlığı, genleşme derz bantlarının yerleşimi ve şap dökülmeden önceki boru basınç testleri.',
    tags: ['Yerden ısıtma şapı', 'Eğim şapı', 'Şap çatlaması', 'Zemin hazırlığı'],
    readTime: '6 dk'
  },
  {
    id: 'oda-bolme-duvari-nasil-yapilir',
    title: 'Oda Bölme Duvarı Nasıl Yapılır? Adım Adım Rehber',
    category: 'Duvar ve Bölme',
    summary: 'Geniş dairelerde alan kazanmak için tuğla, gazbeton veya çift kat alçıpan kullanılarak bölme duvar oluşturulması ve akustik yalıtım tüyoları.',
    tags: ['İstanbul bölme duvar', 'Oda bölme', 'Gazbeton duvar örme', 'Alçıpan bölme duvar'],
    readTime: '6 dk'
  },
  {
    id: 'tugla-gazbeton-bims-farklari',
    title: 'Tuğla, Gazbeton ve Bims Blok Arasındaki Farklar Nelerdir?',
    category: 'Malzeme Rehberi',
    summary: 'Deprem yükünü azaltan hafiflik, ses yalıtım kabiliyeti, sıva yapışma performansı ve ekonomiklik açısından duvar bloklarının karşılaştırılması.',
    tags: ['Gazbeton duvar örme', 'Tuğla duvar örme', 'Bims duvar örme', 'Duvar taşeronu'],
    readTime: '7 dk'
  },
  {
    id: 'alcipan-bolme-mi-tugla-mi',
    title: 'Alçıpan Bölme Duvar mı, Tuğla Duvar mı Tercih Edilmeli?',
    category: 'Duvar ve Bölme',
    summary: 'Şantiye temizliği, montaj hızı, ses geçirme değerleri ve darbe mukavemetine göre iki bölme sisteminin teknik kıyaslaması.',
    tags: ['İstanbul alçıpan bölme duvar', 'Alçıpan duvar', 'Tuğla duvar', 'Oda bölme'],
    readTime: '5 dk'
  },
  {
    id: 'asma-tavan-dikkat-edilmesi-gerekenler',
    title: 'Asma Tavan Uygulamasında Dikkat Edilmesi Gereken Teknik Detaylar',
    category: 'Tavan ve Alçıpan',
    summary: 'Lazer terazi ile kot alımı, C ve U profillerin et kalınlığı, askı çubuğu sıklıkları ve tesisat geçişlerinin gizlenme esasları.',
    tags: ['İstanbul asma tavan', 'Alçıpan asma tavan', 'Gizli ışık bandı', 'Spot tavan'],
    readTime: '5 dk'
  },
  {
    id: 'bina-mantolamasi-ne-kadar-surer',
    title: 'Ortalama Bir Bina Mantolaması Ne Kadar Süre Alır?',
    category: 'Mantolama ve Yalıtım',
    summary: 'Kat sayısına, daire adedine ve cephe metrajına göre iskele kurulumundan teslimata kadar şantiye takvimi ve süreç planlaması.',
    tags: ['Bina mantolama', 'Dış cephe mantolama', 'Mantolama tamiratı', 'İskeleli cephe'],
    readTime: '4 dk'
  },
  {
    id: 'isi-yalitimi-enerji-tasarrufu',
    title: 'Isı Yalıtımı Gerçekten Enerji Tasarrufu Sağlar mı?',
    category: 'Mantolama ve Yalıtım',
    summary: 'Mantolama yapılan binalarda kışın doğalgaz faturalarında, yazın ise klima elektrik tüketiminde sağlanan somut tasarruf oranları.',
    tags: ['İstanbul ısı yalıtımı', 'Taşyünü mantolama', 'Bina mantolama', 'Enerji tasarrufu'],
    readTime: '5 dk'
  },
  {
    id: 'boya-oncesi-yuzey-hazirligi',
    title: 'Boya Öncesi Yüzey Hazırlığı Nasıl Yapılır?',
    category: 'Boya ve Yüzey',
    summary: 'Boya kalitesini gösteren asıl unsur alt hazırlıktır. Kazıma, macunlama, makine zımparası ve astar uygulamasının püf noktaları.',
    tags: ['Boya badana', 'Saten alçı ve boya', 'Yüzey astarlama', 'Zımpara toz temizliği'],
    readTime: '5 dk'
  },
  {
    id: 'duvar-catlaklari-tamiri',
    title: 'Duvar Çatlakları Nasıl Tamir Edilir? Köprüleme Teknikleri',
    category: 'Boya ve Yüzey',
    summary: 'Duvarlarda tekrar çatlama olmaması için kılcal çatlakların açılması, akrilik macun dolgusu ve derz filesi ile lokal güçlendirme adımları.',
    tags: ['İstanbul duvar tamiratı', 'Yüzey düzeltme', 'Çatlak tamiratı', 'Lokal boya tamiratı'],
    readTime: '4 dk'
  },
  {
    id: 'nem-rutubet-duvar-yenileme',
    title: 'Nem ve Rutubet Sonrası Duvar Nasıl Yenilenir?',
    category: 'Boya ve Yüzey',
    summary: 'Küflenen ve kabaran duvarların kazınması, anti-küf solüsyonlar, nem bariyeri oluşturan yalıtım astarları ve nefes alan boya seçimi.',
    tags: ['Nem kabarmış boya', 'Duvar tamiratı', 'Rutubet önleme', 'Anti-küf astarı'],
    readTime: '6 dk'
  },
  {
    id: 'daire-tadilatinda-is-siralamasi',
    title: 'Daire Tadilatında Doğru İş Sıralaması Nasıl Olmalıdır?',
    category: 'Tadilat ve Yenileme',
    summary: 'Şantiyede işlerin birbirine girmemesi ve yapılan işin zarar görmemesi için kırımdan tesisata, sıva-şaptan boyaya ideal tadilat takvimi.',
    tags: ['Daire tadilatı İstanbul', 'Anahtar teslim tadilat', 'Kırım döküm', 'İnce iş sıralaması'],
    readTime: '6 dk'
  },
  {
    id: 'ince-yapi-taseron-secimi',
    title: 'İnce Yapı Taşeronu Seçerken Nelere Dikkat Edilmelidir?',
    category: 'Müteahhit Rehberi',
    summary: 'Sözleşme güvencesi, iş güvenliği (İSG) evrakları tamlığı, teknik ofis desteği, metraj hakediş tecrübesi ve usta koordinasyon becerisi.',
    tags: ['İnce yapı taşeronu', 'Alçı sıva taşeronu', 'Şap taşeronu', 'Hakediş takibi'],
    readTime: '7 dk'
  },
  {
    id: 'buyuk-projelerde-ince-isler',
    title: 'Büyük Projelerde İnce İşlerin Uygulama Sırası',
    category: 'Müteahhit Rehberi',
    summary: 'Çok katlı şantiyelerde kaba inşaat sürerken alt katlarda duvar, sıva, şap and asma tavan işlerinin çakışmadan yürütülmesi planı.',
    tags: ['Kurumsal ince iş taşeronu', 'Toplu konut ince işleri', 'Saha koordinasyonu', 'İş programı'],
    readTime: '8 dk'
  },
  {
    id: 'santiye-teslim-punch-list',
    title: 'Şantiye Teslim Öncesi "Punch List" (Eksik ve Kusur Listesi) Nedir?',
    category: 'Müteahhit Rehberi',
    summary: 'Dairelerin mülk sahiplerine veya işverene kusursuz teslimi için yapılan son ince iş kontrolleri ve hızlı rötuş ekiplerinin organizasyonu.',
    tags: ['Punch list uygulamaları', 'Daire teslim öncesi rötuş', 'Saha kontrolü', 'Kusur giderme'],
    readTime: '5 dk'
  },
  {
    id: 'dis-cephe-boya-oncesi',
    title: 'Dış Cephe Boyası Öncesi Yapılması Gereken Hazırlıklar',
    category: 'Cephe Çözümleri',
    summary: 'Eski dökülen sıvaların tespiti, paslanan demirlerin antipaslanması, iskele güvenliği ve astar katının boya aderansına etkisi.',
    tags: ['İstanbul dış cephe boya', 'Dış cephe tamiratı', 'Cephe astarlama', 'Jotun dış cephe'],
    readTime: '5 dk'
  },
  {
    id: 'sap-catlamasi-nedenleri',
    title: 'Şap Çatlaması Neden Olur ve Nasıl Önlenir?',
    category: 'Zemin Çözümleri',
    summary: 'Şap harcındaki aşırı suyun buharlaşması, rüzgarda hızlı kuruma, anolama hataları ve çatlak önleyici derz kesimlerinin önemi.',
    tags: ['Şap çatlak tamiratı', 'Helikopterli şap', 'Çimento esaslı şap', 'PP lif elyaf'],
    readTime: '5 dk'
  },
  {
    id: 'mantolama-tamirati-nasil-yapilir',
    title: 'Zarar Görmüş Mantolama Tamiratı Nasıl Yapılır?',
    category: 'Mantolama ve Yalıtım',
    summary: 'Darbe veya nem sonucu dökülen yalıtım levhalarının lokal kesilerek yenilenmesi, fileli sıva entegrasyonu ve renk farkı yaratmadan boyanması.',
    tags: ['Mantolama tamiratı', 'Dış cephe çatlak onarımı', 'Eski cephe yenileme'],
    readTime: '4 dk'
  },
  {
    id: 'daire-teslim-oncesi-rotus',
    title: 'Daire Teslim Öncesi Rötuş İşleri Nelerdir?',
    category: 'Tadilat ve Yenileme',
    summary: 'Tadilatın sonunda temizlik yapılırken ortaya çıkan süpürgelik kenarları, priz kenarları, kapı kasası birleşimlerindeki alçı ve boya ince rötuşları.',
    tags: ['Daire teslim öncesi rötuş', 'Kusursuz işçilik', 'İnce temizlik', 'Tadilat son kontrol'],
    readTime: '4 dk'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    question: 'Tadilat ve inşaat öncesi yerinde keşif ücretli mi?',
    answer: 'Hayır. MHG İnşaat olarak İstanbul genelindeki tüm bireysel daire tadilatları, dış cephe mantolama talepleri, kentsel dönüşüm ve kat karşılığı arsa değerlendirme projeleri için yerinde keşif, ölçüm ve teknik bütçe çalışması hizmetlerimizi tamamen ücretsiz sunuyoruz.'
  },
  {
    question: 'Tadilat ve ince işler başlamadan önce resmi sözleşme yapıyor musunuz?',
    answer: 'Kesinlikle. İş hacmi ne olursa olsun tüm işlerimizde yasal ve teknik bağlayıcılığı olan resmi bir sözleşme imzalıyoruz. Bu sözleşmede; yapılacak kırım-döküm işlerinin detayları, kullanılacak malzemelerin markaları (teknik şartname), ödeme planı ve kesin anahtar teslim tarihi açıkça yazılır. Süreç içinde siz ekstra bir talepte bulunmadıkça anlaşılan fiyat asla değişmez.'
  },
  {
    question: 'Kentsel dönüşüm başvuru ve yıkım süreci ne kadar sürer?',
    answer: 'Binanızın yetkili kuruluşlarca riskli yapı ilan edilmesinden itibaren, apartman sakinlerinin 2/3 çoğunlukla anlaşma protokolü imzalaması, tahliye adımları ve belediyeden yeni imar durum belgesi alınması ortalama 4 ila 6 ay sürer. Yeni güvenli binanın sıfırdan yapımı ise projenin büyüklüğüne bağlı olarak ruhsat alımından sonra ortalama 12 ila 18 aydır.'
  },
  {
    question: 'Kat karşılığı arsa paylaşımında haklarımız nasıl güvenceye alınır?',
    answer: 'Kat karşılığı inşaat projelerinde tüm haklarınız noter huzurunda hazırlanan "Düzenleme Şeklinde Kat Karşılığı İnşaat Sözleşmesi" ile yasal koruma altına alınır. Sözleşmede hangi dairenin kime ait olacağı, yapım esnasında ödenecek kira yardımlarının miktarı, şeffaf teknik şartname ve inşaatın gecikmesi durumundaki cezai yaptırımlar %100 güvence altındadır.'
  },
  {
    question: 'Büyük ölçekli şantiyelerde sadece işçilik taşeronluğu yapıyor musunuz?',
    answer: 'Evet, büyük ölçekli şantiyelerde malzemelerin işveren/ana yüklenici tarafından tedarik edildiği projelerde, sadece teknik şartnameye uygun işçilik ve profesyonel saha yönetim taşeronluğu hizmeti sunuyoruz. Aynı zamanda malzemeli anahtar teslim ince iş yükleniciliği de yapmaktayız.'
  },
  {
    question: 'Saha çalışanlarınızın sigorta ve iş güvenliği (İSG) evrakları tam mıdır?',
    answer: 'Kesinlikle. Şantiyede görev alacak tüm personelimizin mesleki yeterlilik belgeleri, ağır ve tehlikeli işlerde çalışabilir sağlık raporları, güncel SGK girişleri ve İSG eğitim sertifikaları işe başlamadan önce eksiksiz olarak işveren teknik ofisine teslim edilir. Saha mühendislerimiz ve şeflerimiz bizzat İSG kurallarının harfiyen uygulanmasını takip eder.'
  }
];
