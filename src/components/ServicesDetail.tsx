/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Sparkles, Layers, ShieldCheck, ChevronRight, HelpCircle, 
  CheckCircle2, AlertTriangle, ArrowRight, ClipboardCheck,
  Building, UserCheck, Flame, Trees, Hammer, Lightbulb
} from 'lucide-react';
import { SERVICES_DATA } from '../config';

interface ServicesDetailProps {
  initialServiceId?: string | null;
  onSelectServiceForAi: (services: string[]) => void;
}

export default function ServicesDetail({ initialServiceId, onSelectServiceForAi }: ServicesDetailProps) {
  const [activeCategoryId, setActiveCategoryId] = useState(SERVICES_DATA[0].id);

  // Switch category if initial ID is supplied
  useEffect(() => {
    if (initialServiceId) {
      const exists = SERVICES_DATA.some(s => s.id === initialServiceId);
      if (exists) {
        setActiveCategoryId(initialServiceId);
      }
    }
  }, [initialServiceId]);

  const activeCategory = SERVICES_DATA.find(s => s.id === activeCategoryId) || SERVICES_DATA[0];

  const handleTriggerEstimation = () => {
    onSelectServiceForAi([activeCategory.title]);
  };

  return (
    <div className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-orange-500/10 text-orange-600 font-extrabold text-xs uppercase px-3.5 py-1.5 rounded-full border border-orange-500/20 mb-3 tracking-wider">
            Saha Teknik Dosyaları & Şartnameler
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            10 Temel İnce Yapı Uygulama Alanımız
          </h2>
          <p className="mt-3 text-slate-600 text-sm max-w-2xl mx-auto font-medium">
            Hizmetlerimizi yalnızca "boya-badana" veya basit tadilat işleri olarak görmüyoruz. Mühendislik normlarına, kuruma sürelerine, yalıtım katsayılarına ve İSG kurallarına uyarak çalışıyoruz.
          </p>
        </div>

        {/* Categories Sidebar & Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sidebar Navigation */}
          <div className="lg:col-span-4 space-y-2">
            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">
              Uygulama Kategorileri
            </span>
            <div className="flex flex-col gap-1.5 bg-white border border-slate-200 p-2.5 rounded-2xl shadow-sm">
              {SERVICES_DATA.map((service, idx) => (
                <button
                  key={service.id}
                  onClick={() => setActiveCategoryId(service.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between group ${
                    activeCategoryId === service.id
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                      activeCategoryId === service.id ? 'bg-orange-500 text-slate-950' : 'bg-slate-100'
                    }`}>
                      {idx + 1}
                    </span>
                    {service.title}
                  </span>
                  <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                    activeCategoryId === service.id ? 'text-orange-500 translate-x-0.5' : 'text-slate-400 group-hover:translate-x-0.5'
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* Detailed Content Pane */}
          <div className="lg:col-span-8 space-y-8 bg-white border border-slate-200 rounded-2xl shadow-sm p-6 sm:p-10 animate-in fade-in duration-200">
            
            {/* Category Title & Summary */}
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0" />
                {activeCategory.title}
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                {activeCategory.fullDescription}
              </p>
            </div>

            {/* Sub-Services Checklist */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5 uppercase tracking-wider">
                <ClipboardCheck className="w-4.5 h-4.5 text-orange-500" />
                Kapsamlı Alt Hizmet Listemiz
              </h4>
              <p className="text-slate-500 text-xs font-semibold">Bu kategoride gerçekleştirdiğimiz tüm teknik alt imalat işleri şunlardır:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {activeCategory.subServices.map((sub, i) => (
                  <div key={i} className="flex items-start gap-2.5 bg-slate-50 border border-slate-100 p-3 rounded-xl text-xs font-semibold text-slate-800">
                    <span className="text-orange-600 font-bold shrink-0">✓</span>
                    <span className="leading-normal">{sub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Timeline of stages */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5 uppercase tracking-wider">
                <Layers className="w-4.5 h-4.5 text-orange-500" />
                Şantiye Uygulama ve İlerleme Safhaları
              </h4>
              <p className="text-slate-500 text-xs font-semibold">Her şantiyede uyguladığımız mühendislik sırası ve katı kalite kontrol aşamaları sırasıyla:</p>
              
              <div className="relative pl-6 border-l-2 border-slate-200 space-y-6 pt-2">
                {activeCategory.stages.map((stage, i) => (
                  <div key={i} className="relative">
                    <span className="absolute -left-9 top-0.5 bg-slate-950 text-orange-500 border border-slate-800 w-6 h-6 rounded-full flex items-center justify-center font-bold text-[10px]">
                      {i + 1}
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      {stage}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Split grids for Corporate vs Individual usecases */}
            <div className="space-y-4 pt-6 border-t border-slate-100">
              <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5 uppercase tracking-wider">
                <Lightbulb className="w-4.5 h-4.5 text-orange-500" />
                Uygulama Alanları ve Projelendirme Çözümleri
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Corporate */}
                <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 space-y-2.5">
                  <div className="flex items-center gap-1.5 text-orange-500 font-extrabold text-xs uppercase tracking-wider">
                    <Building className="w-4 h-4" />
                    Kurumsal Uygulama Alanı
                  </div>
                  <ul className="space-y-2 text-[11px] text-slate-300 font-semibold">
                    {activeCategory.useCases.corporate.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5 leading-relaxed">
                        <span className="text-orange-500 font-bold shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Individual */}
                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2.5">
                  <div className="flex items-center gap-1.5 text-orange-700 font-extrabold text-xs uppercase tracking-wider">
                    <UserCheck className="w-4 h-4" />
                    Bireysel Kullanım Alanı
                  </div>
                  <ul className="space-y-2 text-[11px] text-slate-600 font-semibold">
                    {activeCategory.useCases.individual.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5 leading-relaxed">
                        <span className="text-orange-600 font-bold shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Approved materials brands */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5 uppercase tracking-wider">
                <ShieldCheck className="w-4.5 h-4.5 text-orange-500" />
                Tavsiye Edilen Onaylı Kaliteli Markalar
              </h4>
              <p className="text-slate-500 text-xs font-semibold">Şartnamelerimizde bizzat tercih ettiğimiz ve kalitesini garanti ettiğimiz lisanslı markalar:</p>
              
              <div className="flex flex-wrap gap-2 pt-1">
                {activeCategory.materials.map((mat, i) => (
                  <span 
                    key={i} 
                    className="bg-slate-100 border border-slate-200/80 rounded-xl px-3.5 py-1.5 text-xs font-bold text-slate-700 font-mono tracking-tight"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>

            {/* Pre-work Tips and precautions */}
            <div className="p-4 sm:p-5 bg-orange-50 border-l-4 border-orange-500 rounded-2xl space-y-2">
              <h5 className="font-extrabold text-orange-800 text-xs uppercase tracking-wider flex items-center gap-1">
                <AlertTriangle className="w-4 h-4 shrink-0 text-orange-600" />
                Uygulama Öncesi Teknik Uyarılar (Keşif Öncesi Önemli Notlar)
              </h5>
              <ul className="space-y-1.5 text-xs text-orange-900 pl-4 list-disc font-bold leading-relaxed">
                {activeCategory.prepWorkTips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>

            {/* Service FAQ */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5 uppercase tracking-wider">
                <HelpCircle className="w-4.5 h-4.5 text-orange-500" />
                Sık Sorulan Sorular
              </h4>
              
              <div className="space-y-3 pt-1">
                {activeCategory.faqs.map((faq, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-150 p-4 rounded-xl space-y-1.5">
                    <span className="font-extrabold text-xs text-slate-900 block">
                      ? {faq.question}
                    </span>
                    <p className="text-[11px] text-slate-600 leading-relaxed font-semibold pl-3 border-l border-slate-300">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA specifically for this active category */}
            <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row justify-between items-center gap-6 shadow-md border border-slate-800">
              <div className="space-y-1">
                <h4 className="font-extrabold text-white text-base">Bu Hizmet İçin Ücretsiz Keşif & Teklif Alın</h4>
                <p className="text-slate-400 text-xs font-semibold">
                  "{activeCategory.title}" uygulaması için yerinde ücretsiz ölçü alalım, şeffaf hakediş ve metraj tablonuzu hazırlayalım.
                </p>
              </div>
              <button
                onClick={handleTriggerEstimation}
                className="bg-orange-500 hover:bg-orange-600 text-slate-950 font-black text-xs py-3.5 px-6 rounded-xl flex items-center gap-1.5 shrink-0 transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <ClipboardCheck className="w-4 h-4 text-slate-950" />
                Keşif & Teklif İste
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
