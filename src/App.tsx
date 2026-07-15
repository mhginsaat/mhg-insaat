/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ServicesDetail from './components/ServicesDetail';
import ProjectsGallery from './components/ProjectsGallery';
import BlogSection from './components/BlogSection';
import FaqSection from './components/FaqSection';
import ProposalForm from './components/ProposalForm';
import AiAssistant from './components/AiAssistant';
import { 
  Building2, Phone, Mail, MapPin, Calculator, Sparkles, 
  ChevronRight, Calendar, Layers, ShieldCheck, HardHat, FileText, ArrowRight
} from 'lucide-react';
import { BRAND_CONFIG, SERVICES_DATA } from './config';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [initialServiceId, setInitialServiceId] = useState<string | null>(null);
  
  // Data tunnel to pass standard form values to the AI Estimator
  const [estimateTunnelData, setEstimateTunnelData] = useState<any | null>(null);

  // Simple pure React rotating keyword engine for the Hero Section
  const [keywordIndex, setKeywordIndex] = useState(0);
  const rotatingKeywords = [
    'Alçı Sıva & Boya Uygulamaları',
    'Alçıpan Bölme Duvar & Asma Tavan',
    'Isı Yalıtımı & Dış Cephe Mantolama',
    'Şap & Zemin Tesviye İşleri',
    'Kurumsal İnce Yapı Taşeronluğu'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setKeywordIndex((prev) => (prev + 1) % rotatingKeywords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Listen to hash changes for browser native link backing and routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        if (hash.startsWith('services-')) {
          const subServiceId = hash.replace('services-', '');
          setActivePage('services');
          setInitialServiceId(subServiceId);
        } else {
          setActivePage(hash);
          setInitialServiceId(null);
        }
      } else {
        setActivePage('home');
        setInitialServiceId(null);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Run on mount
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (pageId: string) => {
    if (pageId.startsWith('services-')) {
      const subId = pageId.replace('services-', '');
      setActivePage('services');
      setInitialServiceId(subId);
      window.location.hash = pageId;
    } else {
      setActivePage(pageId);
      setInitialServiceId(null);
      window.location.hash = pageId === 'home' ? '' : pageId;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Callback to receive proposal form details and handle redirect
  const handleEstimateTunnelRequested = (data: any) => {
    setEstimateTunnelData(data);
    // Directly stay on home or scroll to thank you
  };

  const handleSelectServiceForAi = (services: string[]) => {
    setActivePage('home');
    window.location.hash = '';
    setTimeout(() => {
      const element = document.getElementById('teklif-istegi-formu');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans antialiased text-slate-800">
      
      {/* Header element */}
      <Header activePage={activePage} onPageChange={handlePageChange} />

      {/* Main Body */}
      <main className="flex-grow">
        
        {/* Render HOME view */}
        {activePage === 'home' && (
          <div className="flex flex-col">
            
            {/* ================= HERO SECTION ================= */}
            <section className="bg-[#0b1329] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-800">
              {/* Decorative Subtle Grid overlay */}
              <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
              
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                {/* Hero left texts */}
                <div className="lg:col-span-7 space-y-6">
                  
                  <div className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-500 font-extrabold text-xs uppercase px-3.5 py-1.5 rounded-full border border-amber-500/20 tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    İstanbul'un Mühendislik Temelli İnce İş Yüklenicisi
                  </div>

                  <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight text-white">
                    İnce Yapıda <span className="text-amber-500">Mühendislik Hassasiyeti</span>, Şeffaf Metraj Güvencesi.
                  </h1>

                  {/* Rotating keywords container */}
                  <div className="h-8 flex items-center">
                    <p className="text-sm sm:text-base text-slate-300 font-bold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                      Hizmet Alanımız: <span className="text-amber-400 font-extrabold border-b border-amber-500/30 pb-0.5">{rotatingKeywords[keywordIndex]}</span>
                    </p>
                  </div>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl font-medium">
                    MHG İnşaat, kaba inşaatı tamamlanmış yapılarınızın tüm sıva, asma tavan, bölme duvar, boya ve ısı yalıtım işlerini milimetrik lazerli keşiflerle planlar. Sürpriz bütçe artışlarına son veren Excel hakediş tabloları ve sözleşmeli teslimat ilkeleriyle çalışıyoruz.
                  </p>

                  {/* Hero Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <button 
                      onClick={() => {
                        const element = document.getElementById('teklif-istegi-formu');
                        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }}
                      className="bg-orange-500 hover:bg-orange-600 text-slate-950 font-black text-xs py-4 px-8 rounded-xl shadow-xl flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95"
                    >
                      <FileText className="w-4.5 h-4.5 text-slate-950" />
                      Ücretsiz Keşif & Teklif İste
                    </button>
                    <button 
                      onClick={() => handlePageChange('projects')}
                      className="bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-extrabold text-xs py-4 px-8 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <span>Tamamlanan Uygulamaları Gör</span>
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </button>
                  </div>

                  {/* Quality indicators bar */}
                  <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    <div>
                      <span className="text-amber-500 block text-base font-black mb-0.5">TSE / CE</span>
                      Onaylı Markalar
                    </div>
                    <div>
                      <span className="text-amber-500 block text-base font-black mb-0.5">SÖZLEŞMELİ</span>
                      Bütçe & Süre Garantisi
                    </div>
                    <div>
                      <span className="text-amber-500 block text-base font-black mb-0.5">İSG</span>
                      %100 Uyumlu Şantiyeler
                    </div>
                  </div>

                </div>

                {/* Hero right side graphic illustration */}
                <div className="lg:col-span-5 hidden lg:block">
                  <div className="relative">
                    {/* Visual Card simulation */}
                    <div className="bg-[#111a36] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative z-10">
                      
                      <div className="border-b border-slate-800 pb-4">
                        <span className="text-[10px] text-orange-500 font-extrabold tracking-widest uppercase block mb-1">MHG İNŞAAT GÜVENCE ŞARTNAMESİ</span>
                        <h3 className="text-lg font-black text-white tracking-tight">Mühendislik Standartları</h3>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-orange-500/10 text-orange-500 p-2 rounded-xl border border-orange-500/20 shrink-0 mt-0.5">
                            <ShieldCheck className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-xs font-extrabold text-white">Lazerli Milimetrik Ölçüm</h4>
                            <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">Duvar, şap ve asma tavan imalatlarında sıfır hata hedefiyle lazer terazili hassas ölçüm ve saha kontrolü.</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="bg-orange-500/10 text-orange-500 p-2 rounded-xl border border-orange-500/20 shrink-0 mt-0.5">
                            <Layers className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-xs font-extrabold text-white">Çatlak ve Nem Koruma Sistemi</h4>
                            <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">Sıva öncesi yüksek aderans astar katmanları ve birleşim noktalarında çatlak önleyici derz filesi kullanımı.</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="bg-orange-500/10 text-orange-500 p-2 rounded-xl border border-orange-500/20 shrink-0 mt-0.5">
                            <Building2 className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-xs font-extrabold text-white">Onaylı Sertifikalı Markalar</h4>
                            <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">Sadece TSE / CE tescilli ve kendini ispatlamış birinci sınıf markaların (Jotun, Knauf, Dalsan, Kalekim) kullanımı.</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="bg-orange-500/10 text-orange-500 p-2 rounded-xl border border-orange-500/20 shrink-0 mt-0.5">
                            <FileText className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-xs font-extrabold text-white">Resmi Sözleşme ve Sabit Fiyat</h4>
                            <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">İş teslim tarihli, gecikme cezalı ve süreç boyunca asla değişmeyen sabit fiyat garantili yasal taahhütname.</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-orange-500/10 border border-orange-500/20 p-3.5 rounded-2xl flex items-center justify-between text-xs font-extrabold text-orange-500">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          Ücretsiz Teknik Keşif
                        </span>
                        <span className="bg-orange-500 text-slate-950 px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider">
                          7/24 İRTİBAT
                        </span>
                      </div>
                      
                    </div>
                    {/* Ambient Glow effect */}
                    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-600 to-amber-500 opacity-20 blur-xl z-0" />
                  </div>
                </div>
              </div>
            </section>

            {/* ================= 3-STEP SYSTEM BENTO SECTION ================= */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
              <div className="text-center">
                <span className="bg-amber-500/10 text-amber-600 font-extrabold text-[10px] uppercase px-3 py-1 rounded-full border border-amber-500/20 tracking-wider">
                  Çalışma Sistemimiz
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                  Nasıl Çalışıyoruz? Belirsizliklere Nasıl Son Veriyoruz?
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
                  Sektördeki en büyük şikayet usta araması, eksik metraj veya sonradan artan fiyattır. MHG İnşaat bu sorunları 3 aşamalı şeffaf sistemiyle ortadan kaldırır.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Step 1 */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0b1329] text-amber-500 flex items-center justify-center font-black text-sm">
                    1
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-base">Milimetrik Lazerli Keşif</h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Saha ekibimiz adresinizi bizzat ziyaret ederek lazer metreler yardımıyla tüm duvar, zemin ve asma tavan ölçülerini alır. Çatlak, rutubet ve nem testleri yapılarak alt yüzey kalitesi raporlanır.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0b1329] text-amber-500 flex items-center justify-center font-black text-sm">
                    2
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-base">Açık Excel Metrajı ve Şeffaf Teklif</h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Alınan ölçülere göre kullanılacak malzemenin markası, sarfiyat miktarı ve işçilik süreleri kalem kalem Excel listesi olarak hazırlanır. Sürpriz bütçe artışı barındırmayan teklif mektubumuz tarafınıza iletilir.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0b1329] text-amber-500 flex items-center justify-center font-black text-sm">
                    3
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-base">Sabit Fiyat Güvenceli Sözleşme</h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Karşılıklı onaylanan teknik teklif; iş programını (takvimi), İSG yükümlülüklerini ve gecikme cezalarını barındıran yasal bir sözleşmeye bağlanır. Sahada imalat bitene kadar fiyatlar kesinlikle değiştirilmez.
                  </p>
                </div>
              </div>
            </section>

            {/* ================= 10 SERVICES HIGHLIGHT ================= */}
            <section className="bg-slate-100 py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-200">
              <div className="max-w-7xl mx-auto space-y-10">
                <div className="text-center">
                  <span className="bg-amber-500/10 text-amber-600 font-extrabold text-[10px] uppercase px-3 py-1 rounded-full border border-amber-500/20 tracking-wider">
                    Uygulama Alanlarımız
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                    Profesyonel İnce Yapı Çözümleri
                  </h2>
                  <p className="text-slate-500 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
                    Kaba inşaatı tamamlanmış şantiyenizin veya tadilat yapılacak mülkünüzün tüm ince yapı gereksinimlerini tek elden çözüyoruz.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {SERVICES_DATA.map((service) => (
                    <div 
                      key={service.id}
                      className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-2">
                        <span className="bg-amber-500/10 text-amber-700 font-extrabold text-[9px] uppercase px-2 py-0.5 rounded tracking-wide inline-block">
                          Mühendislik Standartlı
                        </span>
                        <h4 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug">
                          {service.title}
                        </h4>
                        <p className="text-slate-600 text-xs leading-relaxed font-medium">
                          {service.shortDescription}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <button
                          onClick={() => handlePageChange(`services-${service.id}`)}
                          className="text-amber-600 hover:text-amber-700 font-bold text-xs flex items-center gap-1"
                        >
                          Detaylı Şartnameyi Gör
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4">
                  <button 
                    onClick={() => handlePageChange('services')}
                    className="bg-[#0b1329] hover:bg-[#070b14] text-white font-extrabold text-xs py-3.5 px-8 rounded-xl shadow-lg transition-all"
                  >
                    Tüm Hizmet Şartnamelerini Detaylı İncele →
                  </button>
                </div>
              </div>
            </section>

            {/* ================= BEFORE/AFTER SLIDER HIGHLIGHT ================= */}
            <ProjectsGallery />

            {/* ================= REGULAR FORM AND CONTACT SECTOR ================= */}
            <div id="teklif-istegi-formu">
              <ProposalForm onEstimateRequested={handleEstimateTunnelRequested} />
            </div>

          </div>
        )}

        {/* Render ABOUT view */}
        {activePage === 'about' && (
          <AboutUs />
        )}

        {/* Render SERVICES view */}
        {activePage === 'services' && (
          <ServicesDetail 
            initialServiceId={initialServiceId} 
            onSelectServiceForAi={handleSelectServiceForAi} 
          />
        )}

        {/* Render PROJECTS view */}
        {activePage === 'projects' && (
          <ProjectsGallery />
        )}

        {/* Render BLOG view */}
        {activePage === 'blog' && (
          <BlogSection />
        )}

        {/* Render FAQ view */}
        {activePage === 'faq' && (
          <FaqSection />
        )}

      </main>

      {/* Footer element */}
      <Footer onPageChange={handlePageChange} />

      {/* Floating WhatsApp Button */}
      <a 
        href={BRAND_CONFIG.whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 group active:scale-95"
        title="WhatsApp ile İletişime Geçin"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.755.002-2.61-1.01-5.063-2.853-6.908C16.64 2.1 14.191 1.082 12.01 1.082c-5.437 0-9.863 4.37-9.866 9.756-.001 1.905.5 3.754 1.454 5.4l-.957 3.493 3.41-.895z"/>
        </svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out font-extrabold text-xs uppercase tracking-wider whitespace-nowrap group-hover:ml-2">
          WhatsApp Destek
        </span>
      </a>

    </div>
  );
}
