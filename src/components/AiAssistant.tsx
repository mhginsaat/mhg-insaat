/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Sparkles, Layers, Calculator, MapPin, ClipboardList, 
  HelpCircle, ChevronDown, CheckCircle2, ShieldCheck, 
  Loader2, Printer, Share2, PhoneCall, ArrowRight, BookOpen, AlertCircle
} from 'lucide-react';
import { SERVICES_DATA, BRAND_CONFIG } from '../config';

interface AiAssistantProps {
  initialData?: {
    services: string[];
    area: string;
    spaceType: string;
    district: string;
    description: string;
    customerType: string;
  } | null;
}

export default function AiAssistant({ initialData }: AiAssistantProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [area, setArea] = useState('');
  const [spaceType, setSpaceType] = useState('Daire');
  const [district, setDistrict] = useState('');
  const [description, setDescription] = useState('');
  const [customerType, setCustomerType] = useState('Bireysel Müşteri / Ev Sahibi');

  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [report, setReport] = useState<any | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const loadingSteps = [
    'Mühendislik projesi ve girdi verileri teknik ofise ulaştırılıyor...',
    'TSE / CE standartları ve malzeme birleşim uyumlulukları analiz ediliyor...',
    'Alan ölçülerine göre tahmini metraj ve malzeme sarfiyat aralıkları hesaplanıyor...',
    'Saha disiplini, astar kuruma süreleri ve iş güvenliği kriterleri doğrulanıyor...',
    'Keşif denetim listesi ve teknik tavsiye raporu tanzim ediliyor...'
  ];

  // Load initial data if passed from the standard form
  useEffect(() => {
    if (initialData) {
      setSelectedServices(initialData.services || []);
      setArea(initialData.area || '');
      setSpaceType(initialData.spaceType || 'Daire');
      setDistrict(initialData.district || '');
      setDescription(initialData.description || '');
      setCustomerType(initialData.customerType || 'Bireysel Müşteri / Ev Sahibi');
      
      // Auto run estimation when redirected with form data
      runAiEstimation(
        initialData.services,
        initialData.area,
        initialData.spaceType,
        initialData.district,
        initialData.description,
        initialData.customerType
      );
    }
  }, [initialData]);

  // Loading animation simulation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLoading) {
      interval = setInterval(() => {
        setLoadingStep((prev) => (prev < loadingSteps.length - 1 ? prev + 1 : prev));
      }, 2500);
    } else {
      setLoadingStep(0);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  const handleServiceSelect = (title: string) => {
    const isSelected = selectedServices.includes(title);
    setSelectedServices(
      isSelected 
        ? selectedServices.filter(s => s !== title) 
        : [...selectedServices, title]
    );
  };

  const runAiEstimation = async (
    overrideServices?: string[],
    overrideArea?: string,
    overrideSpaceType?: string,
    overrideDistrict?: string,
    overrideDesc?: string,
    overrideCustType?: string
  ) => {
    setErrorMsg('');
    setReport(null);

    const s = overrideServices || selectedServices;
    const a = overrideArea || area;
    const st = overrideSpaceType || spaceType;
    const d = overrideDistrict || district;
    const desc = overrideDesc || description;
    const ct = overrideCustType || customerType;

    if (s.length === 0) {
      setErrorMsg('Lütfen ön teklif raporu için en az bir adet ince yapı hizmet alanı seçiniz.');
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch('/api/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          services: s,
          area: a,
          spaceType: st,
          district: d,
          description: desc,
          customerType: ct
        })
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Bilinmeyen sunucu hatası.');
      }

      const data = await res.json();
      setReport(data);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || 'Ön teklif raporu hazırlanırken teknik bir hata meydana geldi. Lütfen daha sonra tekrar deneyiniz.');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShareToWhatsapp = () => {
    if (!report) return;
    const text = `Merhaba MHG İnşaat, sitemizden oluşturduğumuz Akıllı İnce İş Ön Teklif Raporu detayları aşağıdadır:\n\n*Proje:* ${report.projectName}\n*Özet:* ${report.summary}\n*Konum:* ${district || 'İstanbul'}\n*Hizmetler:* ${selectedServices.join(', ')}\n\nBu rapor doğrultusunda ücretsiz yerinde keşif randevusu planlamak istiyoruz.`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/905536974904?text=${encodedText}`, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      
      {/* Intro Header */}
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-1.5 bg-orange-500/10 text-orange-600 font-extrabold text-xs uppercase px-3.5 py-1.5 rounded-full border border-orange-500/20 mb-3 tracking-wider animate-pulse">
          <Sparkles className="w-3.5 h-3.5" />
          Yapay Zeka Destekli Mühendislik Ofisi
        </span>
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">
          Akıllı İnce İş Teklif Asistanı
        </h2>
        <p className="mt-3 text-slate-600 text-sm max-w-2xl mx-auto font-medium">
          İhtiyacınız olan ince yapı işlerini ve alan ölçülerinizi belirtin; yapay zeka destekli teknik ofisimiz, onaylı malzemeleri, uygulama safhalarını ve sahada bizzat denetleyeceğimiz kontrol listelerini barındıran <strong>mühendislik ön raporunu</strong> saniyeler içinde hazırlasın.
        </p>
      </div>

      {/* Input Form Panel */}
      {!report && !isLoading && (
        <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-6 sm:p-8 space-y-6">
          {errorMsg && (
            <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4.5 h-4.5 text-red-500 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Core Service Multi-Select */}
          <div className="space-y-3">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              1. Uygulama Kategorileri (En az 1 adet seçiniz)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVICES_DATA.map((service) => {
                const isSelected = selectedServices.includes(service.title);
                return (
                  <div
                    key={service.id}
                    onClick={() => handleServiceSelect(service.title)}
                    className={`p-3 border rounded-xl cursor-pointer select-none transition-all flex items-center gap-2.5 ${
                      isSelected 
                        ? 'border-orange-500 bg-orange-500/5 text-orange-950 font-bold shadow-sm' 
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                      isSelected ? 'border-orange-600 bg-orange-500 text-slate-950' : 'border-slate-300'
                    }`}>
                      {isSelected && <span className="text-[10px] font-bold">✓</span>}
                    </div>
                    <span className="text-xs text-slate-900 font-bold">{service.title}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Grid fields */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Müşteri Profili</label>
              <select
                value={customerType}
                onChange={(e) => setCustomerType(e.target.value)}
                className="w-full text-xs rounded-lg border-slate-300 border p-3 focus:ring-1 focus:ring-orange-500 focus:outline-none bg-white font-semibold text-slate-800"
              >
                <option value="Bireysel Müşteri / Ev Sahibi">Bireysel Müşteri / Ev Sahibi</option>
                <option value="Kurumsal Müşteri / Ana Yüklenici">Kurumsal Müşteri / Müteahhit</option>
                <option value="Site Yönetimi / Apartman Yöresetici">Site / Apartman Yönetimi</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Mekân Türü</label>
              <select
                value={spaceType}
                onChange={(e) => setSpaceType(e.target.value)}
                className="w-full text-xs rounded-lg border-slate-300 border p-3 focus:ring-1 focus:ring-orange-500 focus:outline-none bg-white font-semibold text-slate-800"
              >
                <option value="Daire">Daire / Konut</option>
                <option value="Villa">Müstakil Villa</option>
                <option value="Ofis">Kurumsal Ofis</option>
                <option value="Mağaza">Mağaza / Showroom</option>
                <option value="Fabrika/Depo">Fabrika / Depo / Hangarlar</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Tahmini Alan (m²)</label>
              <input
                type="number"
                placeholder="Örn: 150"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="w-full text-xs rounded-lg border-slate-300 border p-3 focus:ring-1 focus:ring-orange-500 focus:outline-none text-slate-800 font-semibold"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="sm:col-span-1">
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">İstanbul İçi Bölge / Semt</label>
              <input
                type="text"
                placeholder="Örn: Kadıköy Göztepe"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full text-xs rounded-lg border-slate-300 border p-3 focus:ring-1 focus:ring-orange-500 focus:outline-none text-slate-800 font-semibold"
              />
            </div>
            
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Ek Proje Notları veya Yaşanan Sorunlar</label>
              <input
                type="text"
                placeholder="Duvarlarda kılcal çatlaklar mevcut, koridorda asma tavan istiyoruz."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full text-xs rounded-lg border-slate-300 border p-3 focus:ring-1 focus:ring-orange-500 focus:outline-none text-slate-800 font-semibold"
              />
            </div>
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => runAiEstimation()}
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-950 text-white font-extrabold text-xs py-4 px-10 rounded-xl shadow-md flex items-center justify-center gap-2 mx-auto cursor-pointer transition-all active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-orange-500" />
              Anında Ön Teklif Raporu Oluştur
            </button>
            <p className="text-[10px] text-slate-400 mt-2.5 leading-relaxed font-medium">
              * Bu rapor bir bütçe taahhüdü değildir. Doğru maliyet çalışması, yerinde yapılacak ücretsiz keşif sonrasında kalem kalem resmi teklife dönüştürülecektir.
            </p>
          </div>
        </div>
      )}

      {/* Loading Screen */}
      {isLoading && (
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-12 text-center flex flex-col items-center justify-center gap-6 min-h-[350px]">
          <Loader2 className="w-10 h-10 text-orange-500 animate-spin" />
          <div className="space-y-2">
            <h4 className="text-base font-extrabold text-slate-900 animate-pulse">
              MHG Yapay Zeka Teknik Ofisi Çalışıyor...
            </h4>
            <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed font-semibold">
              {loadingSteps[loadingStep]}
            </p>
          </div>
          {/* Progress Indicators */}
          <div className="flex gap-1.5">
            {loadingSteps.map((_, idx) => (
              <div 
                key={idx} 
                className={`w-3.5 h-1.5 rounded-full transition-all duration-300 ${
                  idx <= loadingStep ? 'bg-orange-500' : 'bg-slate-200'
                }`} 
              />
            ))}
          </div>
        </div>
      )}

      {/* REPORT DISPLAY PANEL */}
      {report && (
        <div className="space-y-6 animate-in zoom-in-95 duration-200">
          
          {/* Action Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-200 p-3.5 rounded-xl border border-slate-300/40">
            <button
              onClick={() => setReport(null)}
              className="text-slate-700 hover:text-slate-950 font-extrabold text-xs flex items-center gap-1 py-1.5 px-3 hover:bg-slate-300/60 rounded"
            >
              ← Yeniden Rapor Hazırla
            </button>
            <div className="flex gap-2">
              <button
                onClick={handlePrint}
                className="bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-bold text-xs py-2 px-4 rounded-lg flex items-center gap-1.5 transition-colors"
              >
                <Printer className="w-4 h-4 text-slate-500" />
                Yazdır / PDF Kaydet
              </button>
              <button
                onClick={handleShareToWhatsapp}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-2 px-4 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <Share2 className="w-4 h-4" />
                WhatsApp'tan Paylaş
              </button>
            </div>
          </div>

          {/* PDF/Proposal Styled Report Card */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden p-6 sm:p-10 space-y-8 print:border-none print:shadow-none print:p-0">
            
            {/* Header Stamp */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 border-b border-slate-100 pb-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="bg-orange-500 p-1.5 rounded text-slate-950">
                    <Calculator className="w-5 h-5 text-slate-950" />
                  </div>
                  <span className="text-sm font-black text-slate-900 tracking-wider">MHG İNŞAAT</span>
                </div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                  Mühendislik & İnce Yapı Teknik Ofis Raporu
                </p>
              </div>
              <div className="text-left sm:text-right text-xs text-slate-500 font-mono">
                <p>Tarih: {new Date().toLocaleDateString('tr-TR')}</p>
                <p>Rapor No: MHG-AI-{Math.floor(100000 + Math.random() * 900000)}</p>
                <p>Durum: Taslak Ön Değerlendirme</p>
              </div>
            </div>

            {/* Project Name and Summary */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {report.projectName}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed italic bg-slate-50 p-4 border-l-4 border-orange-500 rounded font-medium">
                "{report.summary}"
              </p>
            </div>

            {/* SECTION 2.1: Estimations / Metraj */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                <ClipboardList className="w-5 h-5 text-amber-500" />
                <h4 className="font-extrabold text-slate-900 text-base">Tahmini Metraj ve Ölçüm Çalışması</h4>
              </div>
              <p className="text-slate-500 text-xs">Aşağıdaki rakamlar alan girdilerinize göre teknik ofisimizce hesaplanan yaklaşık imalat metrajlarıdır. Yerinde yapılacak milimetrik ölçümlerle netleştirilir.</p>
              
              <div className="overflow-x-auto border border-slate-200 rounded-xl bg-slate-50">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-200/60 border-b border-slate-200 text-slate-700 font-black">
                      <th className="p-3">Yapılacak İş / İmalat Kalemi</th>
                      <th className="p-3 w-20">Birim</th>
                      <th className="p-3 w-36">Öngörülen Metraj</th>
                      <th className="p-3">Teknik Ofis Ölçüm Notu</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-600">
                    {report.estimatedMetraj?.map((m: any, idx: number) => (
                      <tr key={idx} className="hover:bg-white transition-colors font-medium">
                        <td className="p-3 font-bold text-slate-900">{m.item}</td>
                        <td className="p-3 font-mono">{m.unit}</td>
                        <td className="p-3 font-bold text-amber-600 font-mono">{m.estimatedQtyRange}</td>
                        <td className="p-3 text-[11px] text-slate-500 leading-normal">{m.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* SECTION 2.2: Phases & Technical Steps */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                <Layers className="w-5 h-5 text-amber-500" />
                <h4 className="font-extrabold text-slate-900 text-base">Teknik Uygulama Safhaları ve İş Akışı</h4>
              </div>
              <p className="text-slate-500 text-xs">Saha disiplinimiz gereğince projenizde uygulanacak mühendislik adımları ve kullanılacak onaylı malzemeler.</p>
              
              <div className="space-y-5">
                {report.phases?.map((phase: any, idx: number) => (
                  <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                    <div className="bg-[#0b1329] text-white p-3 font-extrabold text-xs flex justify-between items-center">
                      <span>SAFHA {idx + 1}: {phase.phaseName}</span>
                      <span className="bg-amber-500 text-slate-950 font-black px-2 py-0.5 rounded text-[10px] tracking-wide uppercase">
                        Planlı Akış
                      </span>
                    </div>
                    <div className="p-4 sm:p-5 space-y-4 bg-slate-50/50">
                      
                      {/* Scope list */}
                      <div className="space-y-1.5">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Yapılacak Teknik İşler:</span>
                        <ul className="space-y-1.5 text-xs text-slate-700 pl-4 list-disc">
                          {phase.scopeItems?.map((item: string, i: number) => (
                            <li key={i} className="leading-relaxed">{item}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Materials & Precautions grids */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-200/60 text-xs">
                        <div className="bg-white border border-slate-200/80 p-3 rounded-lg">
                          <span className="font-bold text-amber-700 block mb-1">✓ Önerilen Kaliteli Markalar:</span>
                          <p className="text-slate-600 font-semibold leading-relaxed">
                            {Array.isArray(phase.materialsRecommended) ? phase.materialsRecommended.join(', ') : phase.materialsRecommended}
                          </p>
                        </div>
                        <div className="bg-white border border-slate-200/80 p-3 rounded-lg">
                          <span className="font-bold text-slate-800 block mb-1">⚠ Alınacak Kalite / İSG Önlemleri:</span>
                          <p className="text-slate-600 leading-relaxed">
                            {Array.isArray(phase.precautions) ? phase.precautions.join(', ') : phase.precautions}
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 2.3: Discovery Checklist */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                <ClipboardList className="w-5 h-5 text-amber-500" />
                <h4 className="font-extrabold text-slate-900 text-base">Ücretsiz Keşifte Ekibimizin İnceleyeceği Noktalar</h4>
              </div>
              <p className="text-slate-500 text-xs">Keşif randevusu günü adresinizi ziyaret eden teknik ekibimiz bizzat aşağıdaki kriterleri inceleyerek bütçenizi optimize edecektir.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {report.discoveryChecklist?.map((check: any, idx: number) => (
                  <div key={idx} className="border border-slate-200/80 p-4 rounded-xl hover:border-slate-300 transition-colors bg-slate-50/50">
                    <span className="font-extrabold text-xs text-slate-900 flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-[10px]">
                        ?
                      </span>
                      {check.checkItem}
                    </span>
                    <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed pl-5 font-medium">
                      {check.reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 2.4: Engineering Advice */}
            <div className="p-5 sm:p-6 bg-amber-500/5 border border-amber-500/10 rounded-2xl space-y-2">
              <div className="flex items-center gap-1.5 text-amber-700 font-extrabold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                Teknik Ofis Mühendislik Önerisi
              </div>
              <div className="text-xs text-slate-700 leading-relaxed space-y-3 pt-1">
                {report.technicalAdvice ? (
                  report.technicalAdvice.split('\n\n').map((p: string, i: number) => (
                    <p key={i} className="font-medium">{p}</p>
                  ))
                ) : (
                  <p>Mevcut yapının fiziki koşulları ve taşıyıcı elemanların konumu incelendikten sonra en optimum yalıtım ve ince sıva uygulaması bütçelendirilecektir.</p>
                )}
              </div>
            </div>

            {/* SECTION 2.5: Next Steps */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                <CheckCircle2 className="w-5 h-5 text-amber-500" />
                <h4 className="font-extrabold text-slate-900 text-base">MHG İnşaat Şeffaf Onboarding Akışı</h4>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                {report.nextSteps?.map((step: string, idx: number) => (
                  <div key={idx} className="bg-slate-50 border border-slate-100 p-3 rounded-lg flex flex-col items-center justify-center">
                    <span className="text-[10px] font-mono text-amber-500 font-bold uppercase tracking-wider mb-1">
                      ADIM {idx + 1}
                    </span>
                    <span className="text-[11px] font-bold text-slate-800 leading-normal">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer and signature */}
            <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-400 gap-4">
              <p className="text-center sm:text-left">
                * Bu belge yapay zeka destekli bir ön değerlendirme tanzimidir. Resmileştirilmiş bütçe kalemleri içermez.
              </p>
              <div className="text-center sm:text-right">
                <p className="font-bold text-slate-600">MHG İnşaat Teknik Ofis Mühendisliği</p>
                <p>İstanbul / Türkiye</p>
              </div>
            </div>

          </div>

          {/* Prompt Discovery Call Button */}
          <div className="bg-[#0b1329] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl">
            <div className="space-y-1.5 shrink">
              <h4 className="text-lg font-black text-white">Bu Raporu Şantiyede Fiili Keşfe Dönüştürelim mi?</h4>
              <p className="text-slate-400 text-xs leading-relaxed max-w-xl">
                MHG İnşaat teknik ekibimiz adresinize ücretsiz gelerek tüm duvarları lazer terazi ile ölçecek, sızıntı ve rutubet testlerini gerçekleştirecek ve size <strong>kesin fiyat garantili resmi teklifi</strong> sunacaktır.
              </p>
            </div>
            <a
              href={`tel:${BRAND_CONFIG.phoneRaw}`}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs py-3.5 px-6 rounded-lg flex items-center gap-1.5 transition-colors shadow-lg active:scale-[0.98] shrink-0"
            >
              <PhoneCall className="w-4 h-4" />
              Ücretsiz Keşif Randevusu Al
            </a>
          </div>

        </div>
      )}

    </div>
  );
}
