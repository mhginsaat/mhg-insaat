/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { 
  Building2, User, Phone, Mail, MapPin, Calendar, 
  UploadCloud, FileCheck, Layers, Sparkles, CheckCircle2, 
  Trash2, AlertCircle, RefreshCw, Eye, ArrowRight 
} from 'lucide-react';
import { SERVICES_DATA, BRAND_CONFIG } from '../config';

interface ProposalFormProps {
  onEstimateRequested: (estimateData: {
    services: string[];
    area: string;
    spaceType: string;
    district: string;
    description: string;
    customerType: string;
  }) => void;
}

export default function ProposalForm({ onEstimateRequested }: ProposalFormProps) {
  const [formType, setFormType] = useState<'individual' | 'corporate'>('individual');
  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; size: string; type: string }[]>([]);
  const [isDragging, setIsFilesDragging] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form states
  const [individualData, setIndividualData] = useState({
    fullName: '',
    phone: '',
    email: '',
    district: '',
    address: '',
    services: [] as string[],
    area: '',
    spaceType: 'Daire',
    description: '',
    preferredDiscoveryDate: '',
    contactPreference: 'phone'
  });

  const [corporateData, setCorporateData] = useState({
    companyName: '',
    contactName: '',
    title: '',
    phone: '',
    email: '',
    projectName: '',
    projectType: 'Toplu Konut',
    location: '',
    services: [] as string[],
    area: '',
    pricingPreference: 'materials-and-labor',
    startDate: '',
    deadlineDate: '',
    paymentMethod: 'Hakediş Usulü',
    description: '',
    contactPreference: 'phone'
  });

  const districtsOfIstanbul = [
    'Adalar', 'Arnavutköy', 'Ataşehir', 'Avcılar', 'Bağcılar', 'Bahçelievler', 'Bakırköy',
    'Başakşehir', 'Bayrampaşa', 'Beşiktaş', 'Beykoz', 'Beylikdüzü', 'Beyoğlu', 'Büyükçekmece',
    'Çatalca', 'Çekmeköy', 'Esenler', 'Esenyurt', 'Eyüpsultan', 'Fatih', 'Gaziosmanpaşa',
    'Güngören', 'Kadıköy', 'Kağıthane', 'Kartal', 'Küçükçekmece', 'Maltepe', 'Pendik',
    'Sancaktepe', 'Sarıyer', 'Silivri', 'Sultanbeyli', 'Sultangazi', 'Şile', 'Şişli',
    'Tuzla', 'Ümraniye', 'Üsküdar', 'Zeytinburnu'
  ];

  // Services toggle helpers
  const handleServiceToggle = (serviceTitle: string) => {
    if (formType === 'individual') {
      const isSelected = individualData.services.includes(serviceTitle);
      const nextServices = isSelected
        ? individualData.services.filter(s => s !== serviceTitle)
        : [...individualData.services, serviceTitle];
      setIndividualData({
        ...individualData,
        services: nextServices
      });
      setCorporateData(prev => ({
        ...prev,
        services: nextServices
      }));
    } else {
      const isSelected = corporateData.services.includes(serviceTitle);
      const nextServices = isSelected
        ? corporateData.services.filter(s => s !== serviceTitle)
        : [...corporateData.services, serviceTitle];
      setCorporateData({
        ...corporateData,
        services: nextServices
      });
      setIndividualData(prev => ({
        ...prev,
        services: nextServices
      }));
    }
  };

  // Drag and drop simulator
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsFilesDragging(true);
  };

  const handleDragLeave = () => {
    setIsFilesDragging(false);
  };

  const processUploadedFiles = (files: FileList) => {
    const fileListArray = Array.from(files).map(f => ({
      name: f.name,
      size: (f.size / (1024 * 1024)).toFixed(2) + ' MB',
      type: f.name.split('.').pop()?.toUpperCase() || 'DOSYA'
    }));
    setUploadedFiles([...uploadedFiles, ...fileListArray]);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsFilesDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processUploadedFiles(e.dataTransfer.files);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processUploadedFiles(e.target.files);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };

  // Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Validation
    const phoneNum = formType === 'individual' ? individualData.phone : corporateData.phone;
    const email = formType === 'individual' ? individualData.email : corporateData.email;
    const selectedServices = formType === 'individual' ? individualData.services : corporateData.services;

    // Check if at least 1 service is checked
    if (selectedServices.length === 0) {
      setErrorMsg('Lütfen en az bir adet ince yapı hizmet alanı seçiniz.');
      return;
    }

    // Phone simple check: should start with 05 or 5 and have length >= 10 digits
    const cleanedPhone = phoneNum.replace(/\D/g, '');
    if (cleanedPhone.length < 10) {
      setErrorMsg('Lütfen geçerli bir telefon numarası giriniz (Örn: 0553 697 49 04).');
      return;
    }

    // Email optional syntax check
    if (email && !email.includes('@')) {
      setErrorMsg('Lütfen geçerli bir e-posta adresi yazınız.');
      return;
    }

    // Build the payload for Netlify / Web3Forms
    const payload: { [key: string]: string } = {
      "form-name": "kesif-taleb-formu",
      "customer_type": formType === 'individual' ? 'Bireysel' : 'Kurumsal',
      "services": selectedServices.join(', '),
      "fullName": formType === 'individual' ? individualData.fullName : corporateData.contactName,
      "companyName": formType === 'individual' ? '' : corporateData.companyName,
      "projectName": formType === 'individual' ? '' : corporateData.projectName,
      "title": formType === 'individual' ? '' : corporateData.title,
      "phone": phoneNum,
      "email": email,
      "district": formType === 'individual' ? individualData.district : corporateData.location,
      "address": formType === 'individual' ? individualData.address : '',
      "spaceType_or_projectType": formType === 'individual' ? individualData.spaceType : corporateData.projectType,
      "area": formType === 'individual' ? individualData.area : corporateData.area,
      "preferred_date": formType === 'individual' ? individualData.preferredDiscoveryDate : corporateData.startDate,
      "pricingPreference": formType === 'individual' ? '' : corporateData.pricingPreference,
      "paymentMethod": formType === 'individual' ? '' : corporateData.paymentMethod,
      "description": formType === 'individual' ? individualData.description : corporateData.description,
      "uploadedFilesList": uploadedFiles.map(f => f.name).join(', ')
    };

    // 1. Submit to Netlify (legacy preservation / fallback)
    const encode = (data: { [key: string]: string }) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(payload)
    }).catch((err) => {
      console.warn("Netlify form local fallback active:", err);
    });

    // 2. Submit to Web3Forms for Cloudflare email delivery to mhginsaat34@gmail.com
    const web3FormsKey = ((import.meta as any).env.VITE_WEB3FORMS_ACCESS_KEY || BRAND_CONFIG.web3formsAccessKey || "").trim();
    if (web3FormsKey) {
      // Ensure we always pass a syntactically valid email format to the standard 'email' field of Web3Forms to prevent API validation rejection.
      const customerEmail = (payload.email && payload.email.trim().includes('@'))
        ? payload.email.trim()
        : "info@mhginsaat.com";

      // Build a beautifully formatted, highly readable text report for the email message.
      const formattedMessage = `
==================================================
YENİ KEŞİF VE TEKLİF TALEBİ - MHG İNŞAAT
==================================================

• Müşteri Türü: ${payload.customer_type}
• Müşteri Adı / Yetkili: ${payload.fullName}
${payload.companyName ? `• Firma Adı: ${payload.companyName}` : ''}
${payload.projectName ? `• Proje Adı: ${payload.projectName}` : ''}
${payload.title ? `• Görevi / Ünvanı: ${payload.title}` : ''}
• Telefon Numarası: ${payload.phone}
• E-posta Adresi: ${payload.email || 'Belirtilmedi'}
• İlçe / Konum: ${payload.district}
${payload.address ? `• Açık Adres: ${payload.address}` : ''}
• Mekan / Proje Sınıfı: ${payload.spaceType_or_projectType}
• Yaklaşık Alan: ${payload.area ? `${payload.area} m²` : 'Belirtilmedi'}
• Tercih Edilen Tarih: ${payload.preferred_date || 'Belirtilmedi'}
${payload.pricingPreference ? `• Teklif Tercihi: ${payload.pricingPreference}` : ''}
${payload.paymentMethod ? `• Ödeme Tercihi / Vade: ${payload.paymentMethod}` : ''}

--------------------------------------------------
SEÇİLEN HİZMETLER
--------------------------------------------------
${payload.services}

--------------------------------------------------
AÇIKLAMA / PROJE NOTLARI
--------------------------------------------------
${payload.description || 'Açıklama girilmedi.'}

--------------------------------------------------
YÜKLENEN DOSYALAR
--------------------------------------------------
${payload.uploadedFilesList || 'Yüklenmedi'}

==================================================
Bu form, MHG İnşaat web sitesi üzerinden gönderilmiştir.
==================================================
`.trim();

      const emailPayload = {
        access_key: web3FormsKey,
        subject: `Yeni Keşif Talebi: ${payload.fullName} - ${payload.district}`,
        from_name: "MHG İnşaat Web Sitesi",
        name: payload.fullName,
        email: customerEmail,
        phone: payload.phone,
        message: formattedMessage,
        customer_type: payload.customer_type,
        services: payload.services,
        company_name: payload.companyName || 'Bireysel',
        project_name: payload.projectName || '-',
        district: payload.district,
        address: payload.address || 'Belirtilmedi',
        space_type: payload.spaceType_or_projectType,
        area: payload.area,
        preferred_date: payload.preferred_date,
        files_list: payload.uploadedFilesList || 'Yüklenmedi'
      };

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(emailPayload)
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            console.log("Web3Forms form submission forwarded successfully to mhginsaat34@gmail.com!");
          } else {
            console.error("Web3Forms API error:", data.message);
          }
        })
        .catch((err) => {
          console.error("Web3Forms connection error:", err);
        });
    }

    setIsSubmitted(true);
  };

  // Trigger Gemini calculation instantly based on form content
  const triggerAiEstimationInstant = () => {
    if (formType === 'individual') {
      onEstimateRequested({
        services: individualData.services,
        area: individualData.area,
        spaceType: individualData.spaceType,
        district: individualData.district,
        description: `Bireysel talep. ${individualData.spaceType} türü alan. Açık Adres: ${individualData.address}. Ek Müşteri Notları: ${individualData.description}`,
        customerType: 'Bireysel Müşteri / Ev Sahibi'
      });
    } else {
      onEstimateRequested({
        services: corporateData.services,
        area: corporateData.area,
        spaceType: corporateData.projectType,
        district: corporateData.location,
        description: `Kurumsal Proje: ${corporateData.projectName} (${corporateData.companyName}). Teklif Tipi: ${corporateData.pricingPreference === 'materials-and-labor' ? 'Malzemeli ve İşçilikli' : 'Sadece İşçilik'}. Planlanan Başlama: ${corporateData.startDate}. Hakediş Ödeme Tercihi: ${corporateData.paymentMethod}. Proje Dosyaları Adedi: ${uploadedFiles.length}. Proje Açıklaması: ${corporateData.description}`,
        customerType: 'Kurumsal Müşteri / Ana Yüklenici'
      });
    }
    // Scroll smoothly to top where App.tsx will switch page state to 'calculator'
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="max-w-4xl mx-auto">
        
        {/* Title & SEO Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-orange-500/10 text-orange-600 font-extrabold text-xs uppercase px-3 py-1 rounded-full border border-orange-500/20 mb-3 tracking-wider">
            Ücretsiz Yerinde Keşif & Detaylı Bütçe Çalışması
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Projeniz İçin Teknik Teklif İsteyin
          </h2>
          <p className="mt-3 text-slate-600 text-sm max-w-2xl mx-auto font-medium">
            İster tek bir dairenin banyo/mutfak tadilatı olsun, ister binlerce metrekarelik kurumsal konut şantiyesi; her projeyi mühendislik hassasiyetiyle planlıyoruz.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex p-1.5 bg-slate-200 rounded-xl max-w-md mx-auto mb-10 border border-slate-300/40">
          <button
            onClick={() => { setFormType('individual'); setIsSubmitted(false); setErrorMsg(''); }}
            className={`flex-1 text-center py-2.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
              formType === 'individual'
                ? 'bg-slate-900 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Bireysel Keşif Talebi
          </button>
          <button
            onClick={() => { setFormType('corporate'); setIsSubmitted(false); setErrorMsg(''); }}
            className={`flex-1 text-center py-2.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
              formType === 'corporate'
                ? 'bg-slate-900 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Kurumsal Proje / Taşeronluk
          </button>
        </div>

        {/* Success Screen */}
        {isSubmitted ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-sm animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-500 border border-emerald-500/20">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">Talebiniz Başarıyla Alındı!</h3>
            <p className="mt-3 text-slate-600 text-sm max-w-lg mx-auto leading-relaxed font-semibold">
              Teknik ofis ekiplerimiz paylaştığınız detayları ve metrajları incelemeye aldı. İstanbul genelindeki mobil uygulama ekibimiz <strong>en geç 24 saat içinde</strong> yerinde keşif tarihi planlamak için sizinle irtibata geçecektir.
            </p>

            <div className="mt-8 pt-8 border-t border-slate-100 max-w-xl mx-auto">
              <span className="inline-block bg-emerald-500/10 text-emerald-700 font-extrabold text-[10px] uppercase px-3.5 py-1.5 rounded-full mb-3 tracking-wider border border-emerald-500/20">
                ★ Hızlı İrtibat & Anında Değerlendirme
              </span>
              <h4 className="text-sm font-extrabold text-slate-900 mb-2">Elinizde Mimari Proje veya Görseller mi Var?</h4>
              <p className="text-slate-500 text-xs mb-6 leading-relaxed font-semibold">
                Eğer elinizde hazır bir mimari plan, rölöve ölçüleri, DWG dosyası veya uygulama yapılacak alanın fotoğrafları mevcutsa; teknik ofisimizin hızlıca incelemesi için doğrudan <strong>WhatsApp hattımızdan</strong> bizimle paylaşabilirsiniz.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href={BRAND_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer active:scale-95"
                >
                  <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.755.002-2.61-1.01-5.063-2.853-6.908C16.64 2.1 14.191 1.082 12.01 1.082c-5.437 0-9.863 4.37-9.866 9.756-.001 1.905.5 3.754 1.454 5.4l-.957 3.493 3.41-.895z"/>
                  </svg>
                  WhatsApp ile Proje Gönder
                  <ArrowRight className="w-4 h-4 text-white" />
                </a>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs py-3.5 px-5 rounded-xl transition-all cursor-pointer"
                >
                  Forma Geri Dön
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Core Forms */
          <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 sm:p-10 space-y-8">
            
            {errorMsg && (
              <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded text-red-700 text-xs flex items-center gap-2 animate-pulse">
                <AlertCircle className="w-4.5 h-4.5 text-red-500 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* SECTION 1: Service Selection */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                <Layers className="w-5 h-5 text-orange-500" />
                <h3 className="font-extrabold text-slate-900 text-base">
                  Hizmet Almak İstediğiniz Alanlar <span className="text-red-500">*</span>
                </h3>
              </div>
              <p className="text-slate-500 text-xs font-semibold">Birden fazla alan seçebilirsiniz. Seçtiğiniz hizmetlere göre alt detaylar bütçelendirilecektir.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {SERVICES_DATA.map((service) => {
                  const isChecked = formType === 'individual' 
                    ? individualData.services.includes(service.title)
                    : corporateData.services.includes(service.title);

                  return (
                    <div 
                      key={service.id}
                      onClick={() => handleServiceToggle(service.title)}
                      className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer select-none transition-all ${
                        isChecked 
                          ? 'border-orange-500 bg-orange-500/5 text-orange-950 shadow-sm' 
                          : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                      }`}
                    >
                      <div className={`w-4.5 h-4.5 rounded border shrink-0 mt-0.5 flex items-center justify-center transition-all ${
                        isChecked ? 'border-orange-600 bg-orange-500 text-slate-950' : 'border-slate-300'
                      }`}>
                        {isChecked && <span className="text-[10px] font-bold">✓</span>}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-900">{service.title}</span>
                        <span className="text-[10px] text-slate-500 mt-0.5 font-medium">{service.shortDescription}</span>
                      </div>
                    </div>
                  );
                })}

                {/* Custom 'Other' Option */}
                {(() => {
                  const otherTitle = "Diğer / Özel İnce İş Talebi";
                  const isChecked = formType === 'individual' 
                    ? individualData.services.includes(otherTitle)
                    : corporateData.services.includes(otherTitle);

                  return (
                    <div 
                      onClick={() => handleServiceToggle(otherTitle)}
                      className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer select-none transition-all ${
                        isChecked 
                          ? 'border-orange-500 bg-orange-500/5 text-orange-950 shadow-sm' 
                          : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                      }`}
                    >
                      <div className={`w-4.5 h-4.5 rounded border shrink-0 mt-0.5 flex items-center justify-center transition-all ${
                        isChecked ? 'border-orange-600 bg-orange-500 text-slate-950' : 'border-slate-300'
                      }`}>
                        {isChecked && <span className="text-[10px] font-bold">✓</span>}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-900">{otherTitle}</span>
                        <span className="text-[10px] text-slate-500 mt-0.5 font-medium">Listede yer almayan diğer özel restorasyon, yıkım-kırım ve ince yapı işleri.</span>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* SECTION 2: Target-specific Fields */}
            {formType === 'individual' ? (
              /* INDIVIDUAL FORM FIELDS */
              <div className="space-y-6 pt-2 border-t border-slate-100">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Mekân Türü</label>
                    <select
                       value={individualData.spaceType}
                       onChange={(e) => setIndividualData({ ...individualData, spaceType: e.target.value })}
                       className="w-full text-xs rounded-lg border-slate-300 border p-3 focus:ring-1 focus:ring-orange-500 focus:outline-none bg-white font-semibold text-slate-800"
                    >
                      <option value="Daire">Apartman Dairesi</option>
                      <option value="Villa">Müstakil Villa</option>
                      <option value="Ofis">Butik Ofis / Ofis Odası</option>
                      <option value="Mağaza">Mağaza / Dükkan</option>
                      <option value="Bahçe/Teras">Teras / Balkon</option>
                      <option value="Diğer">Diğer / Özel Mekan</option>
                    </select>
                  </div>
                  
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Yaklaşık Alan (m²)</label>
                    <input
                      type="number"
                      placeholder="Örn: 120"
                      value={individualData.area}
                      onChange={(e) => setIndividualData({ ...individualData, area: e.target.value })}
                      className="w-full text-xs rounded-lg border-slate-300 border p-3 focus:ring-1 focus:ring-orange-500 focus:outline-none text-slate-800 font-semibold"
                    />
                  </div>

                  <div className="sm:col-span-1">
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Tercih Edilen Keşif Tarihi</label>
                    <div className="relative">
                      <input
                        type="date"
                        value={individualData.preferredDiscoveryDate}
                        onChange={(e) => setIndividualData({ ...individualData, preferredDiscoveryDate: e.target.value })}
                        className="w-full text-xs rounded-lg border-slate-300 border p-3 focus:ring-1 focus:ring-orange-500 focus:outline-none text-slate-800 font-semibold bg-white"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Adınız Soyadınız *</label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder="Örn: Ahmet Yılmaz"
                        value={individualData.fullName}
                        onChange={(e) => setIndividualData({ ...individualData, fullName: e.target.value })}
                        className="w-full text-xs rounded-lg border-slate-300 border pl-10 pr-4 py-3 focus:ring-1 focus:ring-orange-500 focus:outline-none text-slate-800 font-semibold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Telefon Numaranız *</label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                      <input
                        type="tel"
                        required
                        placeholder="Örn: 0553 697 49 04"
                        value={individualData.phone}
                        onChange={(e) => setIndividualData({ ...individualData, phone: e.target.value })}
                        className="w-full text-xs rounded-lg border-slate-300 border pl-10 pr-4 py-3 focus:ring-1 focus:ring-orange-500 focus:outline-none text-slate-800 font-semibold"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">İstanbul İçi İlçe *</label>
                    <select
                      required
                      value={individualData.district}
                      onChange={(e) => setIndividualData({ ...individualData, district: e.target.value })}
                      className="w-full text-xs rounded-lg border-slate-300 border p-3 focus:ring-1 focus:ring-orange-500 focus:outline-none bg-white font-semibold text-slate-800"
                    >
                      <option value="">İlçe Seçiniz...</option>
                      {districtsOfIstanbul.map(d => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">E-posta Adresiniz</label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                      <input
                        type="email"
                        placeholder="Örn: isminiz@mail.com"
                        value={individualData.email}
                        onChange={(e) => setIndividualData({ ...individualData, email: e.target.value })}
                        className="w-full text-xs rounded-lg border-slate-300 border pl-10 pr-4 py-3 focus:ring-1 focus:ring-orange-500 focus:outline-none text-slate-800 font-semibold"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Açık Adres (Keşif Ekibi İçin)</label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Örn: Göztepe Mah. Kadıköy Sok. No:5 Daire:8"
                      value={individualData.address}
                      onChange={(e) => setIndividualData({ ...individualData, address: e.target.value })}
                      className="w-full text-xs rounded-lg border-slate-300 border pl-10 pr-4 py-3 focus:ring-1 focus:ring-orange-500 focus:outline-none text-slate-800 font-semibold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Yapılacak İş Detayları veya Mevcut Sorunlar</label>
                  <textarea
                    rows={3}
                    placeholder="Nem problemi var, duvarlar kırılarak oda bölünecek, saten alçı ve silinebilir jotun boya talep ediyoruz."
                    value={individualData.description}
                    onChange={(e) => setIndividualData({ ...individualData, description: e.target.value })}
                    className="w-full text-xs rounded-lg border-slate-300 border p-3 focus:ring-1 focus:ring-orange-500 focus:outline-none text-slate-800 font-semibold"
                  />
                </div>

                {/* Photo Upload Simulation */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Varsa Hasarlı Bölge Fotoğrafları</label>
                  <div 
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-1.5 ${
                      isDragging ? 'border-orange-500 bg-orange-500/5' : 'border-slate-300 hover:border-slate-400 bg-slate-50'
                    }`}
                  >
                    <UploadCloud className="w-8 h-8 text-slate-400" />
                    <span className="text-xs font-bold text-slate-700">Fotoğraf Yüklemek İçin Sürükleyin veya Tıklayın</span>
                    <span className="text-[10px] text-slate-400 font-semibold">JPG, PNG formatlarında lokal görseller</span>
                    <input 
                      type="file" 
                      ref={fileInputRef} 
                      onChange={handleFileSelect} 
                      className="hidden" 
                      multiple 
                      accept="image/*"
                    />
                  </div>
                </div>
              </div>
            ) : (
              /* CORPORATE FORM FIELDS */
              <div className="space-y-6 pt-2 border-t border-slate-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Firma Adı *</label>
                    <div className="relative">
                      <Building2 className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder="Örn: MHG Yapı İnşaat A.Ş."
                        value={corporateData.companyName}
                        onChange={(e) => setCorporateData({ ...corporateData, companyName: e.target.value })}
                        className="w-full text-xs rounded-lg border-slate-300 border pl-10 pr-4 py-3 focus:ring-1 focus:ring-orange-500 focus:outline-none text-slate-800 font-semibold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Proje Adı *</label>
                    <input
                      type="text"
                      required
                      placeholder="Örn: Kalamış Konutları Şantiyesi"
                      value={corporateData.projectName}
                      onChange={(e) => setCorporateData({ ...corporateData, projectName: e.target.value })}
                      className="w-full text-xs rounded-lg border-slate-300 border p-3 focus:ring-1 focus:ring-orange-500 focus:outline-none text-slate-800 font-semibold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Yetkili Adı Soyadı *</label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder="Örn: Kerem Güneş"
                        value={corporateData.contactName}
                        onChange={(e) => setCorporateData({ ...corporateData, contactName: e.target.value })}
                        className="w-full text-xs rounded-lg border-slate-300 border pl-10 pr-4 py-3 focus:ring-1 focus:ring-orange-500 focus:outline-none text-slate-800 font-semibold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Görevi / Ünvanı *</label>
                    <input
                      type="text"
                      required
                      placeholder="Örn: Proje Müdürü / Teknik Ofis"
                      value={corporateData.title}
                      onChange={(e) => setCorporateData({ ...corporateData, title: e.target.value })}
                      className="w-full text-xs rounded-lg border-slate-300 border p-3 focus:ring-1 focus:ring-orange-500 focus:outline-none text-slate-800 font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Telefon Numaranız *</label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                      <input
                        type="tel"
                        required
                        placeholder="Örn: 0553 697 49 04"
                        value={corporateData.phone}
                        onChange={(e) => setCorporateData({ ...corporateData, phone: e.target.value })}
                        className="w-full text-xs rounded-lg border-slate-300 border pl-10 pr-4 py-3 focus:ring-1 focus:ring-orange-500 focus:outline-none text-slate-800 font-semibold"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Proje Türü</label>
                    <select
                      value={corporateData.projectType}
                      onChange={(e) => setCorporateData({ ...corporateData, projectType: e.target.value })}
                      className="w-full text-xs rounded-lg border-slate-300 border p-3 focus:ring-1 focus:ring-orange-500 focus:outline-none bg-white font-semibold text-slate-800"
                    >
                      <option value="Toplu Konut">Toplu Konut Projesi</option>
                      <option value="Rezidans">Rezidans Projesi</option>
                      <option value="Otel">Otel Projesi</option>
                      <option value="Hastane">Hastane Projesi</option>
                      <option value="Fabrika/Depo">Fabrika / Endüstriyel Depo</option>
                      <option value="Ticari Yapı">Ticari Yapı / İş Merkezi</option>
                      <option value="Diğer">Diğer / Özel Proje</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Yaklaşık Metraj (m²)</label>
                    <input
                      type="number"
                      placeholder="Örn: 5000"
                      value={corporateData.area}
                      onChange={(e) => setCorporateData({ ...corporateData, area: e.target.value })}
                      className="w-full text-xs rounded-lg border-slate-300 border p-3 focus:ring-1 focus:ring-orange-500 focus:outline-none text-slate-800 font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Şantiye Konumu (İlçe) *</label>
                    <select
                      required
                      value={corporateData.location}
                      onChange={(e) => setCorporateData({ ...corporateData, location: e.target.value })}
                      className="w-full text-xs rounded-lg border-slate-300 border p-3 focus:ring-1 focus:ring-orange-500 focus:outline-none bg-white font-semibold text-slate-800"
                    >
                      <option value="">İlçe Seçiniz...</option>
                      {districtsOfIstanbul.map(d => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Teklif Tercihi</label>
                    <select
                      value={corporateData.pricingPreference}
                      onChange={(e) => setCorporateData({ ...corporateData, pricingPreference: e.target.value })}
                      className="w-full text-xs rounded-lg border-slate-300 border p-3 focus:ring-1 focus:ring-orange-500 focus:outline-none bg-white font-semibold text-slate-800"
                    >
                      <option value="materials-and-labor">Malzemeli + İşçilikli Teklif</option>
                      <option value="labor-only">Sadece İşçilik (Ekipli)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Planlanan Başlangıç</label>
                    <input
                      type="date"
                      value={corporateData.startDate}
                      onChange={(e) => setCorporateData({ ...corporateData, startDate: e.target.value })}
                      className="w-full text-xs rounded-lg border-slate-300 border p-3 focus:ring-1 focus:ring-orange-500 focus:outline-none text-slate-800 font-semibold bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Hakediş / Ödeme Yöntemi</label>
                    <select
                      value={corporateData.paymentMethod}
                      onChange={(e) => setCorporateData({ ...corporateData, paymentMethod: e.target.value })}
                      className="w-full text-xs rounded-lg border-slate-300 border p-3 focus:ring-1 focus:ring-orange-500 focus:outline-none bg-white font-semibold text-slate-800"
                    >
                      <option value="Hakediş Usulü">Metraj Bazlı Hakediş Usulü</option>
                      <option value="Kısmi Avanslı">Avanslı ve Ara Ödemeli</option>
                      <option value="Blok Teslim">Blok/Etap Teslimi Bazlı</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Kurumsal E-posta Adresi *</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="Örn: teknikofis@insaatfirmasi.com"
                      value={corporateData.email}
                      onChange={(e) => setCorporateData({ ...corporateData, email: e.target.value })}
                      className="w-full text-xs rounded-lg border-slate-300 border pl-10 pr-4 py-3 focus:ring-1 focus:ring-orange-500 focus:outline-none text-slate-800 font-semibold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Şantiye Detayları ve Şartname Özet Notu</label>
                  <textarea
                    rows={3}
                    placeholder="Şantiyede elektrik ve kule vinç kullanımı ana yükleniciye aittir. Alçı sıva ve taşyünü mantolama için metrajlı teklif talep ediyoruz."
                    value={corporateData.description}
                    onChange={(e) => setCorporateData({ ...corporateData, description: e.target.value })}
                    className="w-full text-xs rounded-lg border-slate-300 border p-3 focus:ring-1 focus:ring-orange-500 focus:outline-none text-slate-800 font-semibold"
                  />
                </div>

                {/* File Upload simulator for corporate */}
                <div className="space-y-3">
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Proje Projesi, Keşif Özeti veya Şartname Yükleme (PDF, DWG, Excel, ZIP)
                  </label>
                  <div 
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-1.5 ${
                      isDragging ? 'border-orange-500 bg-orange-500/5' : 'border-slate-300 hover:border-slate-400 bg-slate-50'
                    }`}
                  >
                    <UploadCloud className="w-10 h-10 text-slate-400" />
                    <span className="text-xs font-bold text-slate-700">Dosya Sürükleyip Bırakın veya Tıklayıp Seçin</span>
                    <span className="text-[10px] text-slate-400 font-semibold">PDF, XLS, XLSX, DWG, ZIP formatlarında dökümanlar</span>
                    <input 
                      type="file" 
                      ref={fileInputRef} 
                      onChange={handleFileSelect} 
                      className="hidden" 
                      multiple 
                      accept=".pdf,.dwg,.xls,.xlsx,.zip"
                    />
                  </div>

                  {uploadedFiles.length > 0 && (
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-2 animate-in fade-in duration-200">
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 px-1 flex items-center gap-1">
                        <FileCheck className="w-3.5 h-3.5 text-emerald-500" />
                        Eklenecek Teknik Dökümanlar ({uploadedFiles.length}):
                      </div>
                      {uploadedFiles.map((file, idx) => (
                        <div key={idx} className="flex items-center justify-between bg-white border border-slate-100 p-2.5 rounded-lg text-xs">
                          <div className="flex items-center gap-2 overflow-hidden mr-4">
                            <span className="font-extrabold text-[10px] bg-orange-500/10 text-orange-700 px-1.5 py-0.5 rounded tracking-wide shrink-0">
                              {file.type}
                            </span>
                            <span className="font-bold text-slate-800 truncate">{file.name}</span>
                            <span className="text-[10px] text-slate-400 shrink-0">({file.size})</span>
                          </div>
                          <button 
                            type="button"
                            onClick={() => removeFile(idx)}
                            className="text-slate-400 hover:text-red-500 transition-colors p-1 cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-950 text-white font-extrabold text-xs py-4 px-10 rounded-xl shadow-md transition-all active:scale-[0.98] cursor-pointer"
              >
                Ücretsiz Keşif & Teklif İsteğini Gönder
              </button>
              <p className="text-[10px] text-slate-400 mt-3 leading-relaxed">
                Tıklayarak MHG İnşaat'ın <span className="underline cursor-pointer text-slate-500 hover:text-orange-500">Kullanım Koşullarını</span> ve veri koruma beyanını kabul etmiş olursunuz.
              </p>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
