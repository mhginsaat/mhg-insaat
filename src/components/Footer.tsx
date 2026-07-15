/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Building2, Phone, Mail, MapPin, Clock, ShieldCheck, 
  ChevronRight, Lock, BookOpen, AlertCircle, X, HelpCircle 
} from 'lucide-react';
import { BRAND_CONFIG, SERVICES_DATA } from '../config';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const [modalType, setModalType] = useState<'kvkk' | 'cookie' | 'legal' | null>(null);

  const handleLinkClick = (pageId: string) => {
    if (pageId === 'calculator') {
      onPageChange('home');
      window.location.hash = '';
      setTimeout(() => {
        const element = document.getElementById('teklif-istegi-formu');
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    } else {
      onPageChange(pageId);
      window.location.hash = pageId === 'home' ? '' : pageId;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-200 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => handleLinkClick('home')}>
              <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                <Building2 className="w-5 h-5 text-orange-500" />
              </div>
              <span className="text-lg font-black tracking-wider text-white">
                MHG <span className="text-orange-500">İNŞAAT</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              MHG İnşaat, İstanbul genelinde kurumsal şantiye disiplini, mühendislik planlaması ve şeffaf metraj/teklif ilkeleriyle ince yapı, duvar örümü, sıva, asma tavan, şap, boya and mantolama hizmetleri vermektedir.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 bg-slate-950 border border-slate-800 rounded-full px-3.5 py-1.5 text-[10px] text-orange-500 font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                Sözleşmeli & Garantili Teslim
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider border-l-2 border-orange-500 pl-2.5">
              Hızlı Erişim
            </h4>
            <ul className="space-y-2 text-xs font-bold uppercase tracking-wider">
              {['home', 'about', 'projects', 'blog', 'faq', 'calculator'].map((page) => (
                <li key={page}>
                  <button 
                    onClick={() => handleLinkClick(page)}
                    className="hover:text-orange-500 transition-colors flex items-center gap-1.5 text-slate-400 hover:translate-x-1 duration-150 text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                    {page === 'home' && 'Ana Sayfa'}
                    {page === 'about' && 'Kurumsal Bilgiler'}
                    {page === 'projects' && 'Uygulamalarımız & Galeri'}
                    {page === 'blog' && 'Teknik Makaleler'}
                    {page === 'faq' && 'Sıkça Sorulan Sorular'}
                    {page === 'calculator' && 'Hızlı Keşif ve Teklif'}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider border-l-2 border-orange-500 pl-2.5">
              Uygulama Alanları
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {SERVICES_DATA.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <button 
                    onClick={() => handleLinkClick(`services-${service.id}`)}
                    className="hover:text-orange-500 transition-colors flex items-center gap-1.5 text-slate-400 hover:translate-x-1 duration-150 text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                    {service.title}
                  </button>
                </li>
              ))}
              <li>
                <button 
                  onClick={() => handleLinkClick('services')}
                  className="text-orange-500 font-extrabold hover:underline text-xs flex items-center gap-1 pt-1 uppercase tracking-wider"
                >
                  Tüm 10 İnce Yapı Kategorisini Gör →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Operations */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider border-l-2 border-orange-500 pl-2.5">
              Teknik Ofis İrtibat
            </h4>
            <div className="space-y-3 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <a href={`tel:${BRAND_CONFIG.phoneRaw}`} className="hover:text-white transition-colors">
                  {BRAND_CONFIG.phone} (Arama)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.755.002-2.61-1.01-5.063-2.853-6.908C16.64 2.1 14.191 1.082 12.01 1.082c-5.437 0-9.863 4.37-9.866 9.756-.001 1.905.5 3.754 1.454 5.4l-.957 3.493 3.41-.895z"/>
                </svg>
                <a href={BRAND_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                  {BRAND_CONFIG.phone} (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <a href={`mailto:${BRAND_CONFIG.email}`} className="hover:text-white transition-colors">
                  {BRAND_CONFIG.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>{BRAND_CONFIG.workingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal & Corporate Metadata Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 font-medium">
          <div className="flex flex-wrap gap-4 lg:justify-end text-xs font-bold uppercase tracking-wider">
            <button onClick={() => setModalType('kvkk')} className="hover:text-orange-500 transition-colors flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5" /> KVKK Aydınlatma Metni
            </button>
            <button onClick={() => setModalType('cookie')} className="hover:text-orange-500 transition-colors flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" /> Çerez Politikası
            </button>
            <button onClick={() => setModalType('legal')} className="hover:text-orange-500 transition-colors flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5" /> Teklif Koşulları
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-xs text-slate-600 font-medium">
          <p>© 2026 {BRAND_CONFIG.name}. Tüm hakları saklıdır.</p>
        </div>
      </div>

      {/* ================= STICKY MOBILE COMMUNICATION RAIL ================= */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 py-3 px-4 flex justify-between gap-4 lg:hidden">
        <a 
          href={BRAND_CONFIG.whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-black py-3 rounded-xl text-center text-xs inline-flex items-center justify-center gap-1.5 shadow-lg active:scale-[0.98] transition-all"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.755.002-2.61-1.01-5.063-2.853-6.908C16.64 2.1 14.191 1.082 12.01 1.082c-5.437 0-9.863 4.37-9.866 9.756-.001 1.905.5 3.754 1.454 5.4l-.957 3.493 3.41-.895z"/>
          </svg>
          WhatsApp Teklif
        </a>
        <a 
          href={`tel:${BRAND_CONFIG.phoneRaw}`} 
          className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-black py-3 rounded-xl text-center text-xs inline-flex items-center justify-center gap-1.5 shadow-lg active:scale-[0.98] transition-all"
        >
          <Phone className="w-4 h-4" />
          Hemen Ara
        </a>
      </div>

      {/* ================= LEGAL MODALS ================= */}
      {modalType && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh]">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2 uppercase tracking-wide">
                <ShieldCheck className="w-5 h-5 text-orange-500" />
                {modalType === 'kvkk' && 'KVKK Aydınlatma Metni'}
                {modalType === 'cookie' && 'Çerez Politikası'}
                {modalType === 'legal' && 'Resmi Teklif ve Sözleşme Koşulları'}
              </h3>
              <button 
                onClick={() => setModalType(null)} 
                className="text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 p-1.5 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto text-slate-700 text-xs leading-relaxed space-y-4 font-medium">
              {modalType === 'kvkk' && (
                <>
                  <p className="font-extrabold text-orange-600">6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK) Kapsamında Aydınlatma Metni</p>
                  <p>MHG İnşaat olarak, teklif formları ve keşif talepleri esnasında paylaştığınız ad, soyad, telefon numarası, e-posta adresi, adres bilgileri ve proje dosyalarınızı (PDF, DWG, Excel, ZIP, vb.) yalnızca projenizin ön değerlendirmesini yapmak, teknik keşif organize etmek ve size yazılı teklif sunabilmek amacıyla işlemekteyiz.</p>
                  <p>Kişisel verileriniz hiçbir üçüncü şahısla, reklam ajansıyla veya yurt dışı kaynaklı veri tabanlarıyla ticari amaçlarla paylaşılmaz. Verileriniz, yasal teklif saklama süreleri boyunca sunucularımızda güvenlik önlemleri altında saklanacaktır. Dilediğiniz zaman mhginsaat34@gmail.com adresinden bizimle iletişime geçerek verilerinizin silinmesini, güncellenmesini veya düzeltilmesini talep edebilirsiniz.</p>
                </>
              )}
              {modalType === 'cookie' && (
                <>
                  <p className="font-extrabold text-orange-600">Çerez Politikası (Cookie Policy)</p>
                  <p>MHG İnşaat web sitemizde, kullanıcı deneyimini iyileştirmek, sayfa açılış hızlarını optimize etmek ve tercih ettiğiniz sayfa yönlendirmelerini (hash routing) tarayıcınızda hatırlayabilmek amacıyla yalnızca gerekli teknik çerezler kullanılmaktadır.</p>
                  <p>Sitemizde kullanıcıları takip eden, kişisel reklam profillemesi yapan üçüncü parti izleme çerezleri veya reklam çerezleri barındırılmamaktadır. Tarayıcı ayarlarınızdan çerezleri tamamen engelleyebilir veya silebilirsiniz, bu durum sitemizin çalışmasını engellemeyecektir.</p>
                </>
              )}
              {modalType === 'legal' && (
                <>
                  <p className="font-extrabold text-orange-600">MHG İnşaat Resmi Teklif, Keşif ve Sözleşme Koşulları</p>
                  <p>1. <strong>Keşif ve Ön Değerlendirme:</strong> İstanbul genelinde gerçekleştirdiğimiz tüm yerinde keşifler, metraj çalışmaları ve ilk ön değerlendirme teklifleri tamamen ücretsizdir ve iş sahibine hiçbir mali yükümlülük getirmez.</p>
                  <p>2. <strong>Tekliflerin Geçerliliği:</strong> Döviz kuru, enflasyon ve hammadde fiyat dalgalanmaları nedeniyle, tarafımızdan sunulan yazılı tekliflerin geçerlilik süresi teklif belgesinde aksi belirtilmedikçe en fazla 15 takvim günüdür.</p>
                  <p>3. <strong>Sözleşme Koşulu:</strong> Teklifin onaylanmasından sonra işin resmiyet kazanabilmesi için taraflar arasında kırım-döküm detaylarını, malzeme kalitelerini (teknik şartname), iş programını, ödeme takvimini ve gecikme cezai şartlarını barındıran yazılı bir sözleşme imzalanmalıdır. Sözleşme imzalanmadan sahada fiili imalata başlanamaz.</p>
                  <p>4. <strong>Şantiye Güvenliği (İSG):</strong> Kurumsal projelerde ekiplerimizin tüm sigorta girişleri, mesleki yeterlilik belgeleri ve iş sağlığı güvenliği sertifikaları işe başlamadan önce eksiksiz olarak işveren teknik ofisine sunulur.</p>
                </>
              )}
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 text-right">
              <button 
                onClick={() => setModalType(null)} 
                className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs rounded-xl uppercase tracking-wider transition-colors"
              >
                Anladım, Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
