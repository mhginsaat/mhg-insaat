/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', hasApiKey: true });
});

// Endpoint 1: Intelligent Fine Works Estimation & Technical Proposal Assistant (Local Deterministic Calculation)
app.post('/api/estimate', async (req, res) => {
  const { services, area, spaceType, district, description, customerType } = req.body;
  
  const areaNum = area ? parseFloat(area) : 100;
  const selectedServicesList = Array.isArray(services) ? services : [services || 'Genel İnce İşler'];
  const pDistrict = district || 'İstanbul Geneli';
  const pSpaceType = spaceType || 'Daire / Yapı';
  const pCustomerType = customerType || 'Bireysel Müşteri';
  const pDescription = description || 'Detaylı açıklama belirtilmedi.';

  const projectName = `${pDistrict} ${pSpaceType} İnce Yapı Ön Çalışma Raporu`;

  const summary = `MHG İnşaat Teknik Ofisi olarak, ${pDistrict} bölgesinde yer alan yaklaşık ${areaNum} m² büyüklüğündeki ${pSpaceType} projenizin detaylarını analiz ettik. ${pCustomerType} profilinin ihtiyaçlarına uygun olarak, talep edilen [${selectedServicesList.join(', ')}] imalat kalemlerinde mühendislik esaslı sıva, alçı, boya veya yalıtım çözümleri öngörülmüştür. Şeffaf ve sürpriz bütçe artışı barındırmayan hakedişli yönetimimizle şantiyeniz güvence altındadır. Kesin maliyetler yerinde yapılacak ücretsiz keşif ile belirlenecektir.`;

  const phases = [];

  // Phase 1: Preparation
  phases.push({
    phaseName: 'Zemin/Duvar Altyapı Hazırlığı ve Astar Uygulamaları',
    scopeItems: [
      'Uygulama yapılacak duvar veya zemin yüzeylerinin eski boya, toz, yağ ve harç artıklarından mekanik yollarla kazınması.',
      'Sıva aderansını (yapışma mukavemetini) ve yüzey emicilik dengesini sağlamak üzere akrilik esaslı astar katmanın sürülmesi.',
      'Lazer terazi ile kot ve şakul tespitlerinin yapılması, sıva ano çıtalarının milimetrik terazide sabitlenmesi.'
    ],
    materialsRecommended: [
      'Knauf Astar / Dalsan Aderans Artırıcı',
      'Weber Yapısal Çatlak Tamir Harçları',
      'Galvanizli Paslanmaz Köşe ve Ano Profilleri'
    ],
    precautions: [
      'Ortam sıcaklığının +5°C ile +30°C arasında tutulması, imalatın doğrudan rüzgardan korunması.',
      'Sıva öncesinde elektrik, su ve doğalgaz boru hatları testlerinin yapılmış olması.'
    ]
  });

  // Phase 2: Core Imalat
  const coreScopeItems = [];
  const recommendedMaterials = ['TSE ve CE Belgeli Birinci Sınıf Şantiye Malzemeleri'];
  const precautions = [
    'Birleşim noktalarında ve çatlama riski olan köşelerde mutlaka sıva filesi kullanılması.',
    'Her katın kendi doğal kuruma süresi tamamlanmadan bir sonraki kata geçilmemesi.'
  ];

  if (selectedServicesList.some(s => s.toLowerCase().includes('alçı') || s.toLowerCase().includes('sıva'))) {
    coreScopeItems.push(
      'Mastar terazisinde makine sıva veya el sıva alçı dolgularının yapılması.',
      'Kuruma süresi sonrasında boya altyapısı için pürüzsüz saten alçı katlarının çekilmesi.'
    );
    recommendedMaterials.push('Dalsan Alçıpan ve Alçı Ürünleri', 'Knauf Sıva Sistemleri');
  }

  if (selectedServicesList.some(s => s.toLowerCase().includes('boya'))) {
    coreScopeItems.push(
      'Saten yüzey pürüzlerinin tozsuz vakumlu zımpara makineleri ile kusursuz sıfırlanması.',
      'Geçiş astarı uygulanarak son kat boya emişinin eşitlenmesi.',
      'Kullanıcı onaylı renkte premium su bazlı, silinebilir boyanın en az 2 kat halinde uygulanması.'
    );
    recommendedMaterials.push('Jotun İç Cephe Premium Boyaları', 'Filli Boya Silikonlu Özel Seri');
  }

  if (selectedServicesList.some(s => s.toLowerCase().includes('mantolama') || s.toLowerCase().includes('yalıtım'))) {
    coreScopeItems.push(
      'Isı yalıtım levhalarının (taşyünü/EPS) çerçeve metoduyla zeminle bütünleştirilmesi.',
      'Metrekare başına rüzgar yüküne uygun adette çelik veya dübel montajı.',
      'Alkali dayanımlı cam elyaf sıva filesi ve çift kat dış cephe sıva uygulaması.'
    );
    recommendedMaterials.push('Knauf Taşyünü Levhaları (120-150 kg/m³)', 'Filli Boya Dalmaçyalı Isı Yalıtım Sistemleri');
  }

  if (selectedServicesList.some(s => s.toLowerCase().includes('şap') || s.toLowerCase().includes('zemin'))) {
    coreScopeItems.push(
      'Lazer terazi ile şap kotlarının sıfır terazisine getirilmesi.',
      'Çatlama mukavemetini artıran elyaf (PP lif) katkılı çimento esaslı makine şapı dökümü.',
      'Zemin perdah (helikopter) makinesi ile pürüzsüz ve sertleştirilmiş zemin elde edilmesi.'
    );
    recommendedMaterials.push('Weber Zemin Düzeltme Harçları', 'Kalekim Self-Leveling Hazır Şapları');
  }

  if (coreScopeItems.length === 0) {
    coreScopeItems.push(
      'Mimari projeye ve teknik şartnamelere uygun ince yapı imalat adımlarının başlatılması.',
      'Farklı malzeme birleşim yerlerine derz filesi ve köşe profili montajı.',
      'Uygulama yüzeylerinin aşamalı kalite kontrol testlerinden geçirilmesi.'
    );
  }

  phases.push({
    phaseName: 'Ana İnce Yapı ve İmalat Uygulama Safhası',
    scopeItems: coreScopeItems,
    materialsRecommended: recommendedMaterials,
    precautions: precautions
  });

  // Phase 3: Finish and QC
  phases.push({
    phaseName: 'Kalite Kontrol, Lokal Rötuşlar ve Temiz Teslimat',
    scopeItems: [
      'Mastarlama ve lazer metre yardımıyla şakul sapmalarının sıfırlandığının kontrolü.',
      'Projektör ışığı altında saten duvarların kontrol edilerek ince zımpara rötuşlarının yapılması.',
      'Şantiye alanı inşaat sonrası moloz ve toz temizliğinin yapılarak temiz teslimat.'
    ],
    materialsRecommended: [
      'MHG İnşaat Teknik Denetim Ekipmanları',
      'Anti-bakteriyel Temizlik Malzemeleri'
    ],
    precautions: [
      'Boya ve sıva imalatları tam kuruyana kadar yüzeylerin fiziksel darbe ve suya karşı korunması.',
      'Ücretsiz keşif esnasındaki notlarla imalat metrajlarının karşılaştırılarak onaylanması.'
    ]
  });

  // Estimations / Metraj
  const estimatedMetraj = [];
  if (selectedServicesList.some(s => s.toLowerCase().includes('alçı') || s.toLowerCase().includes('sıva'))) {
    estimatedMetraj.push({
      item: 'Lazer Mastarlı Alçı Sıva İmalatı',
      unit: 'm²',
      estimatedQtyRange: `${Math.round(areaNum * 2.8)} - ${Math.round(areaNum * 3.2)} m²`,
      notes: 'Duvar ve tavan toplam alanı öngörülmüştür. Net ölçüm lazer metre ile sahada yapılacaktır.'
    });
  }

  if (selectedServicesList.some(s => s.toLowerCase().includes('boya'))) {
    estimatedMetraj.push({
      item: 'Silikonlu Su Bazlı Premium İç Cephe Boyası',
      unit: 'm²',
      estimatedQtyRange: `${Math.round(areaNum * 2.8)} - ${Math.round(areaNum * 3.2)} m²`,
      notes: 'Alçı tavan ve duvar yüzeyleri için çift kat Jotun veya dengi boya sarfiyatı hesaplanmıştır.'
    });
  }

  if (selectedServicesList.some(s => s.toLowerCase().includes('mantolama') || s.toLowerCase().includes('yalıtım'))) {
    estimatedMetraj.push({
      item: 'Taşyünü Dış Cephe Isı Yalıtım Mantolama',
      unit: 'm²',
      estimatedQtyRange: `${Math.round(areaNum * 0.9)} - ${Math.round(areaNum * 1.1)} m²`,
      notes: 'Yapı mimari dış cephe geometrisi baz alınmıştır. Boşluklar (pencere vb.) düşülecektir.'
    });
  }

  if (selectedServicesList.some(s => s.toLowerCase().includes('şap') || s.toLowerCase().includes('zemin'))) {
    estimatedMetraj.push({
      item: 'Kendiliğinden Yayılan (Self-Leveling) / Çimentolu Şap',
      unit: 'm²',
      estimatedQtyRange: `${Math.round(areaNum)} m²`,
      notes: 'Zemin kot farkı ve pürüz durumuna göre kalınlık 2-10 mm arasında değişir.'
    });
  }

  if (estimatedMetraj.length === 0) {
    estimatedMetraj.push({
      item: 'Genel İnce Yapı ve Tadilat İmalat Kalemi',
      unit: 'm² / Adet',
      estimatedQtyRange: `Mekân büyüklüğüne göre belirlenecektir`,
      notes: 'Keşif esnasında detaylı metraj cetveli çıkartılarak sunulacaktır.'
    });
  }

  const discoveryChecklist = [
    {
      checkItem: 'Mevcut zemin nem oranı ve aderans testi',
      reason: 'Uygulanacak ince yapı malzemelerinin kabarmasını veya çatlamasını önlemek amacıyla nem oranının %4\'ün altında olması kritik önem taşır.'
    },
    {
      checkItem: 'Lazer terazi ile mastar ve şakul kontrolü',
      reason: 'Duvarlardaki eğrilik miktarı sıva harç sarfiyatını doğrudan etkiler. Doğru bütçeleme için bu sapma milimetrik olarak ölçülür.'
    },
    {
      checkItem: 'Duvar kılcal çatlakları ve statik durumu',
      reason: 'Sıva veya boya öncesinde derz filesi ya da yapısal tamir harcı gerekip gerekmediği tespit edilerek bütçe optimizasyonu sağlanır.'
    }
  ];

  const technicalAdvice = `Değerli Müşterimiz, gerçekleştireceğiniz ${pSpaceType} ince yapı projesinde uzun ömürlü ve çatlamayan yüzeyler elde etmek için şu hususlara dikkat edilmesini önemle tavsiye ederiz:\n\n1. Aderans ve Nem Kontrolü: Sıva veya boya uygulaması yapılacak betonarme yüzeylerin nem seviyesi mutlaka kontrol edilmeli, aderans artırıcı özel astarlar kullanılmalıdır. Islak hacimlerde (banyo, balkon vb.) kesinlikle çimento esaslı su yalıtım katmanları yapılmadan sıva veya seramik aşamasına geçilmemelidir.\n\n2. Marka Uyumluluğu: Kullanılan alçı, sıva ve boya malzemelerinin aynı sistem bileşenleri (aynı markanın astarı ve macunu gibi) olmasına özen gösterilmelidir. Farklı kimyasal yapıdaki malzemelerin üst üste uygulanması reaksiyona neden olarak dökülmelere yol açabilir.\n\n3. Kuruma Süreleri: Şantiye takviminde acele edilip katlar arası kuruma süreleri (örneğin kaba sıvanın kuruması için gereken minimum 10-14 gün) ihlal edilmemelidir. Doğal kuruma yerine yapay ısıtıcılarla hızlı kurutma yapılması mikro çatlakların başlıca sebebidir. MHG İnşaat olarak tüm bu süreçleri mühendislik standartlarına uygun olarak bizzat denetlemekteyiz.`;

  const nextSteps = [
    'Ücretsiz keşif randevusu planlanması ve yerinde milimetrik ölçü alınması.',
    'Malzeme ve işçilik detaylı, resmi teklif dosyasının hazırlanması.',
    'Hukuki ve teknik sözleşmenin imzalanarak iş takviminin resmileştirilmesi.',
    'MHG İnşaat uzman ekiplerince şantiye kurulumunun ve imalatın başlatılması.'
  ];

  res.json({
    projectName,
    summary,
    phases,
    estimatedMetraj,
    discoveryChecklist,
    technicalAdvice,
    nextSteps
  });
});

// Endpoint 2: AI Dynamic Article Generator for the 25 Blog Topics (Local Deterministic Markdown Generator)
app.post('/api/blog-generate', async (req, res) => {
  const { articleId, articleTitle, category } = req.body;
  
  const title = articleTitle || 'İnce Yapıda Mühendislik Standartları';
  const cat = category || 'İnce Yapı Genel';

  const content = `## ${title}

İnce yapı uygulamalarında mühendislik hassasiyeti ve planlama, yapının uzun ömürlü olması ve görsel açıdan kusursuz görünmesi için en kritik aşamadır. **MHG İnşaat** olarak tüm şantiyelerimizde TSE ve CE standartlarına uygun, bilimsel ve şeffaf bir şantiye disiplini uygulamaktayız. Bu rehberimizde, **${cat}** kapsamında yer alan **${title}** konusunun en kritik uygulama safhalarını, malzeme seçim esaslarını ve mühendislik ipuçlarını ele alacağız.

## 1. Doğru Altyapı Hazırlığı ve Aderans Artırma

İnce işlerin en sık karşılaşılan hatası, bozuk ve nemsiz zemin veya duvar üzerine doğrudan imalat yapılmasıdır. Bu durum, zamanla kabarma, çatlama ve dökülmelere yol açar.
* **Yüzey Temizliği**: Uygulama yapılacak her türlü brüt beton, tuğla veya alçıpan yüzey; toz, yağ, eski boya kalıntısı ve harç döküntülerinden tamamen arındırılmalıdır.
* **Nem Testi**: Özellikle şap ve boya öncesinde yüzey nem oranı test edilmeli, %4 sınırının altındaki kuru yüzeylerde çalışmaya başlanmalıdır.
* **Astarlama**: Yüzey emiciliğini dengelemek ve yeni uygulanacak harcın aderansını (yapışma gücünü) artırmak amacıyla akrilik esaslı astar katmanları sürülmelidir.

## 2. Teknik Uygulama Safhaları ve Lazerli Kotlama

Milimetrik sapmaların önüne geçmek için geleneksel hortum teraziler yerine tamamen profesyonel **3D Lazer Teraziler** ile kotlama yapılması mühendislik disiplinimizin temelidir.
1. **Referans Çizgisi**: Tüm kat boyunca şantiye sıfır referans kotları lazer ile belirlenerek duvara işlenir.
2. **Ano Profilleri**: Sıva ve şap uygulamalarında, yüzeyin dalgasız olması için ano çıtaları terazisinde yerleştirilir. Mastar çekimi bu anolar referans alınarak yapılır.
3. **Derz filesi ve Derz Bandı**: Alçıpan birleşim yerlerinde ve farklı malzeme geçişlerinde (örneğin tuğla-beton birleşimi) çatlamayı önlemek için alkali dayanımlı sıva fileleri kullanılmalıdır.

## 3. Onaylı Malzeme Seçimi ve Teknik Şartnameler

Uygulama kalitesini belirleyen en önemli unsurlardan biri de malzeme standardıdır. MHG İnşaat olarak, sadece kendisini kanıtlamış uluslararası standartlardaki premium markalar ile çalışmaktayız.
* **Boyada Premium Tercih**: İç ve dış cephe boyalarında yüksek kapatıcılık, nefes alma ve silinebilirlik özelliklerine sahip **Jotun** ve **Filli Boya** gibi markaları tercih ediyoruz.
* **Yalıtımda Taşyünü Önceliği**: Mantolama işlerinde yangın dayanımı yüksek (A1 sınıfı) ve binanın nefes almasını engellemeyen **Knauf Taşyünü** sistemlerini kullanmaktayız.
* **Sıva ve Alçıda Kusursuz Altyapı**: İç mekân asma tavan ve bölme duvar sistemlerinde **Dalsan** ve **Knauf** markalı levha ve harçlar ile pürüzsüz yüzeyler elde etmekteyiz.

## 4. Saha Disiplini ve Kalite Kontrol Rutinleri

Şantiyede başarı, sadece iyi malzeme ile değil, sıkı denetim ve kalite kontrol prosedürleri ile sağlanır.
* **Kuruma Süreleri**: Her katmanın kendi doğal sürecinde kuruması beklenmelidir. Örneğin kaba sıva kurumadan saten alçı aşamasına geçilmesi, içerdeki nemin hapsolmasına ve boyanın kabarmasına sebep olur.
* **İş Güvenliği (İSG)**: Ekiplerimizin tamamı sertifikalı olup, yüksekte çalışma ve iskele kurulumları iş güvenliği uzmanlarımız denetiminde gerçekleştirilir.
* **Tozsuz Şantiye**: Eşyalı veya kısmi tadilatlarda, vakumlu tozsuz zımpara makineleri kullanarak konforlu ve temiz bir teslimat sağlıyoruz.

*MHG İnşaat Teknik Ofis Mühendisliği tarafından derlenmiştir.*`;

  res.json({ content });
});

// Vite middleware setup or production static file server
const startServer = async () => {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`MHG İnşaat server running on http://localhost:${PORT}`);
  });
};

startServer().catch((err) => {
  console.error('Failed to start full-stack server:', err);
});
