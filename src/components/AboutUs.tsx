/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Building2, ShieldCheck, HeartHandshake, Eye, ListChecks, 
  Calculator, HardHat, FileSignature, CheckCircle2, ChevronRight 
} from 'lucide-react';
import { BRAND_CONFIG } from '../config';

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState('hakkimizda');

  const aboutTabs = [
    { id: 'hakkimizda', title: 'Hakkımızda', icon: Building2 },
    { id: 'yaklasim', title: 'Hizmet Yaklaşımımız', icon: HeartHandshake },
    { id: 'anlayis', title: 'Çalışma Anlayışımız', icon: Eye },
    { id: 'kalite', title: 'Kalite Yaklaşımımız', icon: ShieldCheck },
    { id: 'isg', title: 'İş Güvenliği (İSG)', icon: HardHat },
    { id: 'planlama', title: 'Planlama & Saha Koordinasyonu', icon: ListChecks },
    { id: 'metraj', title: 'Metraj & Teklif Süreci', icon: Calculator },
    { id: 'kontrol', title: 'Uygulama Kontrolü', icon: FileSignature },
    { id: 'kurumsal-cozum', title: 'Kurumsal Çözümler', icon: Building2 },
    { id: 'bireysel-cozum', title: 'Bireysel Çözümler', icon: CheckCircle2 }
  ];

  return (
    <div className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-orange-500/10 text-orange-600 font-extrabold text-xs uppercase px-3.5 py-1.5 rounded-full border border-orange-500/20 mb-3 tracking-wider">
            Kurumsal Vizyon & Değerlerimiz
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Planlı İnce Yapı Yönetim Modeli
          </h2>
          <p className="mt-3 text-slate-600 text-sm max-w-2xl mx-auto font-medium">
            MHG İnşaat, sektörde belirsizliği silen, şeffaf süreçleri ve teknik uzmanlığıyla öne çıkan, hem büyük şantiyelere hem de butik konutlara özel çözümler üreten bir uygulama yüklenicisidir.
          </p>
        </div>

        {/* Tab Selection layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tabs sidebar selection */}
          <div className="lg:col-span-4 space-y-1.5 bg-white border border-slate-200 p-3 rounded-2xl shadow-sm">
            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">
              Kurumsal Konular
            </span>
            {aboutTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between group ${
                    activeTab === tab.id
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <Icon className={`w-4.5 h-4.5 ${activeTab === tab.id ? 'text-orange-500' : 'text-slate-400'}`} />
                    {tab.title}
                  </span>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${
                    activeTab === tab.id ? 'text-orange-500 translate-x-0.5' : 'text-slate-400 group-hover:translate-x-0.5'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Details Content Pane */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl shadow-sm p-6 sm:p-10 min-h-[450px] flex flex-col justify-between animate-in fade-in duration-200">
            
            <div className="space-y-6">
              
              {/* Tab 1: Hakkımızda */}
              {activeTab === 'hakkimizda' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                    <Building2 className="w-5.5 h-5.5 text-orange-500" />
                    Biz Kimiz?
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    MHG İnşaat, İstanbul genelinde inşaat ve ince yapı taahhüt alanında faaliyet göstermektedir. Geleneksel, belirsiz ve plansız çalışma sistemlerinin mülk sahiplerine ve müteahhitlere verdiği bütçesel ve takvimsel zararların bilincindeyiz.
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Firmamız; alçı, sıva, bölme duvar, asma tavan, şap, boya ve ısı yalıtımı (mantolama) gibi tüm ince iş uygulamalarını tek noktadan organize eder. En önemli önceliğimiz, işe başlamadan önceki keşif ve teklif sürecini mühendislik hassasiyetiyle yöneterek müşteriye sürpriz bütçe çıkarmamaktır.
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Güvenli yarınlar inşa etmek, temiz ve kaliteli bir ince işçilikle yapıların ömrünü uzatmak, haklarınızı ve paranızı korumak bizim ana misyonumuzdur.
                  </p>
                </div>
              )}

              {/* Tab 2: Hizmet Yaklaşımı */}
              {activeTab === 'yaklasim' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                    <HeartHandshake className="w-5.5 h-5.5 text-orange-500" />
                    Hizmet Yaklaşımımız
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    "Doğru teşhis, kaliteli malzeme ve noksansız işçilik." Hizmet yaklaşımımızın merkezinde bu üçlü formül yer alır. Bir yapıda nem, rutubet, çatlak veya kot bozukluğu varsa, bu sorunu doğrudan boyayarak gizlemek yerine mühendislik yaklaşımıyla kök sebebini buluyoruz.
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Gereken tüm izolasyon, sıva tanzimi ve astarlama işlemlerini yapmadan son kat boyaya veya zemin kaplamasına geçmeyiz. Bu dürüst ve teknik yaklaşımımız, yaptığımız işin yıllarca deforme olmadan ilk günkü kalitesinde kalmasını sağlar.
                  </p>
                </div>
              )}

              {/* Tab 3: Çalışma Anlayışımız */}
              {activeTab === 'anlayis' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                    <Eye className="w-5.5 h-5.5 text-orange-500" />
                    Çalışma Anlayışımız
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Usta veya ekip aramaktan yorulan iş sahiplerinin yükünü tamamen üstleniyoruz. Çalışma anlayışımızın temel ilkeleri ulaşılabilirlik, düzen ve kurumsal ciddiyettir.
                  </p>
                  <ul className="space-y-2.5 text-xs text-slate-600 pl-4 list-disc font-medium">
                    <li>Saha şeflerimizin gözetiminde planlı ve temiz şantiye ortamları oluşturuyoruz.</li>
                    <li>Sözleşmeye ve teknik şartnamelere harfiyen sadık kalıyoruz.</li>
                    <li>Müşterimize her aşamada yazılı ve fotoğraflı raporlama sunuyoruz.</li>
                    <li>Yaptığımız her imalatın arkasında durarak teslimat sonrasında da teknik desteğimizi esirgemiyoruz.</li>
                  </ul>
                </div>
              )}

              {/* Tab 4: Kalite Yaklaşımı */}
              {activeTab === 'kalite' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                    <ShieldCheck className="w-5.5 h-5.5 text-orange-500" />
                    Kalite Yaklaşımımız
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Kalite tesadüfen elde edilmez. Kalite yaklaşımımız, yalnızca premium markalar kullanmaktan ibaret değildir; aynı zamanda bu malzemelerin üretici firmanın belirttiği teknik detaylara ve kuruma sürelerine uygun olarak uygulanmasıdır.
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Örneğin, kaba sıva kurumadan saten alçı katlarına geçmiyoruz; yalıtım levhaları yapıştırıldıktan sonra rüzgar yükü hesaplarına göre doğru sıklıkta dübelleme yapıyoruz. Malzeme sarfiyat oranlarını milimetrik takip ederek yapının teknik ömrünü maksimize ediyoruz.
                  </p>
                </div>
              )}

              {/* Tab 5: İş Güvenliği (İSG) */}
              {activeTab === 'isg' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                    <HardHat className="w-5.5 h-5.5 text-orange-500" />
                    İş Güvenliği Yaklaşımımız (İSG)
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Şantiyelerimizde sıfır kaza hedefiyle çalışıyoruz. İster bir daire içi tadilat olsun, ister yüksek katlı dış cephe mantolaması; tüm personellerimizin iş güvenliği eğitimleri, yüksekte çalışabilir sağlık raporları ve kişisel koruyucu donanımları (KKD) eksiksizdir.
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Tüm dış cephe iskelelerimiz bakanlık ve TSE onaylı, çelik gövdelidir. İSG uzmanlarımız sahada düzenli risk analizleri gerçekleştirerek hem çalışanlarımızın hem de şantiyenizin can ve mal güvenliğini en üst seviyede tutar.
                  </p>
                </div>
              )}

              {/* Tab 6: Planlama ve Saha Koordinasyonu */}
              {activeTab === 'planlama' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                    <ListChecks className="w-5.5 h-5.5 text-orange-500" />
                    Planlama ve Saha Koordinasyonu
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    İnce işlerde en büyük sorun, farklı usta ve ekiplerin çalışma takvimlerinin çakışması veya gecikmesidir. MHG İnşaat bünyesinde, işin ilk gününden son gününe kadar geçerli olan detaylı bir <strong>İş Programı (Takvim)</strong> hazırlanır.
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Elektrik kanalı açma, duvar örme, sıva kuruma süresi ve boya katları takvimsel bir koordinasyonla yürütülür. Böylece usta bekleme veya malzemenin şantiyeye geç girmesi gibi takvimi aksatacak tüm verimsizliklerin önüne geçilir.
                  </p>
                </div>
              )}

              {/* Tab 7: Metraj ve Teklif Süreci */}
              {activeTab === 'metraj' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                    <Calculator className="w-5.5 h-5.5 text-orange-500" />
                    Metraj ve Teklif Sürecimiz
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Süreçlerimiz tamamen şeffaf ve ölçülebilirdir. Sitede yer alan teklif asistanımızı veya formlarımızı kullandıktan sonra teknik ofisimiz sizinle ücretsiz bir keşif randevusu planlar.
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Saha ekibimiz lazer metreler yardımıyla milimetrik ölçüleri alır. Yapılacak iş kalemleri, kullanılacak malzemeler ve metrajlar Excel tabloları halinde size açık bir teklif mektubu olarak sunulur. Onayınızın ardından fiyat sözleşmeyle sabitlenir; sonradan sürpriz ek maliyetler çıkartılmaz.
                  </p>
                </div>
              )}

              {/* Tab 8: Uygulama Kontrolü */}
              {activeTab === 'kontrol' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                    <FileSignature className="w-5.5 h-5.5 text-orange-500" />
                    Uygulama Kontrolü
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    İnce iş uygulamalarında kontrol her şeydir. Saha mühendislerimiz ve deneyimli şeflerimiz, her aşamada uygulamaları denetler. Sıva yapıldıktan sonra mastar kontrolleri, boya öncesi zımpara kalitesi, şap döküldükten sonra terazi ve kot hassasiyeti bizzat test edilir.
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Tüm bu ara kontroller tamamlanmadan bir sonraki imalat aşamasına geçilmez. Bu sıkı kontrol mekanizmamız, işin hata payını sıfıra indirger.
                  </p>
                </div>
              )}

              {/* Tab 9: Kurumsal Müşterilere Çözümler */}
              {activeTab === 'kurumsal-cozum' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                    <Building2 className="w-5.5 h-5.5 text-orange-500" />
                    Kurumsal İnce İş Taşeronluğu Çözümleri
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Müteahhit ve ana yüklenici firmaların toplu konut, rezidans, otel, hastane, okul, fabrika, depo ve kamu binaları gibi büyük metrajlı projelerinde ince iş taşeronluğunu profesyonelce üstleniyoruz.
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Teknik ofisimiz, birim fiyat tekliflerini, hakediş metraj tablolarını ve iş programı raporlamalarını kurumsal müteahhitlik disiplinine tam uyumlu şekilde yönetir. Sıkı İSG evrak takibi ve şantiye koordinasyonuyla işveren teknik ofislerinin yükünü azaltıyoruz.
                  </p>
                </div>
              )}

              {/* Tab 10: Bireysel Müşterilere Çözümler */}
              {activeTab === 'bireysel-cozum' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                    <CheckCircle2 className="w-5.5 h-5.5 text-orange-500" />
                    Bireysel Müşterilere Çözümlerimiz
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Dairesini, villasını veya dükkanını tadilat yaptırmak, oda bölmek, duvar ördürmek, boyatmak veya ısı yalıtımı yaptırmak isteyen bireysel mülk sahipleri için stressiz, temiz ve profesyonel bir taahhüt hizmeti sunuyoruz.
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Usta aramakla veya malzeme seçmekle uğraşmadan, projenizi şantiye şefimizin denetimine bırakırsınız. Belirttiğimiz teslim tarihinde dairenizi inşaat pisliklerinden arındırılmış, pırıl pırıl temizlenmiş ve anahtar teslim olarak teslim alırsınız.
                  </p>
                </div>
              )}

            </div>

            {/* Bottom Safe Seal Stamp */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                🛡️ MHG İnşaat Resmi Güvence Taahhüdü
              </span>
              <span className="text-[11px] font-semibold text-slate-500 font-mono">
                Kadıköy / İstanbul
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
