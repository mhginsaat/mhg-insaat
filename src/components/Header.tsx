/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, Mail, Building2, Sparkles, 
  Layers, Shield, ChevronDown, Calculator, FileText, Settings 
} from 'lucide-react';
import { BRAND_CONFIG, SERVICES_DATA } from '../config';

interface HeaderProps {
  activePage: string;
  onPageChange: (page: string) => void;
}

export default function Header({ activePage, onPageChange }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  // Close menus on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinkClick = (pageId: string) => {
    onPageChange(pageId);
    window.location.hash = pageId === 'home' ? '' : pageId;
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  return (
    <header className="sticky top-2 z-50 w-full flex flex-col px-4 max-w-7xl mx-auto">
      {/* Top Bar with Quick Contact Info integrated inside a mini-bento label or keeping it very clean */}
      <div className="bg-slate-900 text-slate-300 py-2 px-6 text-[11px] font-bold border-b border-slate-800 rounded-t-2xl flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <span className="flex items-center text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 animate-pulse" />
            İstanbul Geneli Kurumsal İnce İş Uygulamaları
          </span>
          <a 
            href={`tel:${BRAND_CONFIG.phoneRaw}`} 
            className="flex items-center hover:text-orange-500 transition-colors text-slate-300 gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-orange-500" />
            {BRAND_CONFIG.phone}
          </a>
          <a 
            href={BRAND_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-emerald-400 text-emerald-500 transition-colors gap-1.5"
          >
            <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.755.002-2.61-1.01-5.063-2.853-6.908C16.64 2.1 14.191 1.082 12.01 1.082c-5.437 0-9.863 4.37-9.866 9.756-.001 1.905.5 3.754 1.454 5.4l-.957 3.493 3.41-.895zm10.957-6.942c-.29-.145-1.72-.849-1.987-.946-.268-.097-.463-.145-.658.145-.196.291-.755.946-.925 1.14-.171.194-.342.218-.633.073-.29-.145-1.229-.453-2.34-1.445-.864-.771-1.447-1.724-1.617-2.014-.171-.29-.018-.447.127-.591.13-.13.29-.34.435-.509.145-.17.195-.291.29-.485.097-.194.049-.364-.025-.509-.073-.145-.658-1.587-.902-2.17-.238-.574-.479-.496-.658-.505-.17-.009-.365-.011-.56-.011-.195 0-.512.073-.78.364-.268.291-1.024 1.002-1.024 2.444 0 1.442 1.049 2.836 1.195 3.03.145.194 2.063 3.15 4.997 4.415.698.301 1.244.482 1.67.618.701.222 1.339.191 1.843.116.562-.083 1.72-.703 1.963-1.383.243-.68.243-1.261.171-1.383-.073-.122-.268-.194-.559-.34z"/>
            </svg>
            WhatsApp
          </a>
          <a 
            href={`mailto:${BRAND_CONFIG.email}`} 
            className="flex items-center hover:text-orange-500 transition-colors text-slate-300 gap-1.5"
          >
            <Mail className="w-3.5 h-3.5 text-orange-500" />
            {BRAND_CONFIG.email}
          </a>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <span className="text-[10px] text-orange-500 font-extrabold tracking-wider uppercase">
            ★ SÖZLEŞMELİ BÜTÇE & SÜRE GARANTİSİ
          </span>
        </div>
      </div>

      {/* Main Navigation Bar - Bento Styled Card */}
      <div className="bg-white/95 backdrop-blur-md text-slate-900 border-x border-b border-slate-200 rounded-b-2xl py-3 px-6 shadow-sm">
        <div className="flex items-center justify-between">
          
          {/* Elegant Corporate Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleLinkClick('home')}>
            <div className="flex items-center gap-2.5">
              <div className="bg-slate-900 p-2 rounded-lg shadow-sm flex items-center justify-center">
                <Building2 className="w-5.5 h-5.5 text-orange-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight leading-none text-slate-900 uppercase">
                  MHG <span className="text-orange-600">İNŞAAT</span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-extrabold mt-1">
                  MÜHENDİSLİK TABANLI UYGULAMA
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            <button 
              onClick={() => handleLinkClick('home')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
                activePage === 'home' ? 'text-orange-600 bg-orange-50 border border-orange-100' : 'text-slate-600 hover:text-orange-600'
              }`}
            >
              Ana Sayfa
            </button>

            <button 
              onClick={() => handleLinkClick('about')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
                activePage === 'about' ? 'text-orange-600 bg-orange-50 border border-orange-100' : 'text-slate-600 hover:text-orange-600'
              }`}
            >
              Kurumsal
            </button>

            {/* Interactive Services Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1 ${
                  activePage === 'services' ? 'text-orange-600 bg-orange-50 border border-orange-100' : 'text-slate-600 hover:text-orange-600'
                }`}
              >
                Uygulama Alanlarımız
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesDropdownOpen && (
                <div 
                  className="absolute left-0 mt-1.5 w-72 bg-white rounded-xl shadow-xl border border-slate-200 py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  <div className="px-3.5 py-1 text-[9px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 mb-1.5">
                    İnce Yapı Kategorileri
                  </div>
                  {SERVICES_DATA.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => handleLinkClick(`services-${service.id}`)}
                      className="w-full text-left px-4 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-orange-600 transition-colors block"
                    >
                      {service.title}
                    </button>
                  ))}
                  <div className="border-t border-slate-100 mt-2 pt-2 px-3">
                    <button 
                      onClick={() => handleLinkClick('services')}
                      className="w-full text-center py-1.5 bg-orange-50 hover:bg-orange-100 text-orange-600 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all block"
                    >
                      Tümünü İncele
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button 
              onClick={() => handleLinkClick('projects')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
                activePage === 'projects' ? 'text-orange-600 bg-orange-50 border border-orange-100' : 'text-slate-600 hover:text-orange-600'
              }`}
            >
              Uygulamalarımız
            </button>

            <button 
              onClick={() => handleLinkClick('blog')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
                activePage === 'blog' ? 'text-orange-600 bg-orange-50 border border-orange-100' : 'text-slate-600 hover:text-orange-600'
              }`}
            >
              Teknik Bilgi Bankası
            </button>

            <button 
              onClick={() => handleLinkClick('faq')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
                activePage === 'faq' ? 'text-orange-600 bg-orange-50 border border-orange-100' : 'text-slate-600 hover:text-orange-600'
              }`}
            >
              S.S.S
            </button>
          </nav>

          {/* Right side CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button 
              onClick={() => {
                onPageChange('home');
                window.location.hash = '';
                setTimeout(() => {
                  const element = document.getElementById('teklif-istegi-formu');
                  if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 150);
              }}
              className="bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-[11px] uppercase tracking-wider py-2.5 px-5 rounded-xl shadow-sm flex items-center gap-1.5 transition-all duration-200 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-orange-500" />
              Hemen Teklif İste
            </button>
          </div>

          {/* Mobile Menu Open Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none"
              aria-label="Menüyü Aç"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-x border-b border-slate-200 rounded-b-2xl text-slate-800 w-full py-4 px-4 space-y-1.5 max-h-[85vh] overflow-y-auto shadow-lg animate-in fade-in duration-200 z-50">
          <button 
            onClick={() => handleLinkClick('home')}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider flex items-center ${
              activePage === 'home' ? 'bg-orange-50 text-orange-600 border border-orange-100' : 'hover:bg-slate-50'
            }`}
          >
            Ana Sayfa
          </button>
          <button 
            onClick={() => handleLinkClick('about')}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider flex items-center ${
              activePage === 'about' ? 'bg-orange-50 text-orange-600 border border-orange-100' : 'hover:bg-slate-50'
            }`}
          >
            Kurumsal Bilgiler
          </button>
          
          {/* Mobile Services section */}
          <div className="border-l-2 border-slate-100 pl-3 py-1 ml-4 space-y-1">
            <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 px-1">
              Uygulama Alanlarımız
            </div>
            {SERVICES_DATA.map((service) => (
              <button
                key={service.id}
                onClick={() => handleLinkClick(`services-${service.id}`)}
                className="w-full text-left py-1 px-2 text-xs font-bold text-slate-600 hover:text-orange-600 block"
              >
                {service.title}
              </button>
            ))}
          </div>

          <button 
            onClick={() => handleLinkClick('projects')}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider flex items-center ${
              activePage === 'projects' ? 'bg-orange-50 text-orange-600 border border-orange-100' : 'hover:bg-slate-50'
            }`}
          >
            Uygulamalarımız (Referanslar)
          </button>
          <button 
            onClick={() => handleLinkClick('blog')}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider flex items-center ${
              activePage === 'blog' ? 'bg-orange-50 text-orange-600 border border-orange-100' : 'hover:bg-slate-50'
            }`}
          >
            Teknik Bilgi Bankası
          </button>
          <button 
            onClick={() => handleLinkClick('faq')}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider flex items-center ${
              activePage === 'faq' ? 'bg-orange-50 text-orange-600 border border-orange-100' : 'hover:bg-slate-50'
            }`}
          >
            Sık Sorulan Sorular
          </button>

          <div className="pt-4 border-t border-slate-100 grid grid-cols-1 gap-2">
            <button 
              onClick={() => {
                onPageChange('home');
                window.location.hash = '';
                setIsMobileMenuOpen(false);
                setTimeout(() => {
                  const element = document.getElementById('teklif-istegi-formu');
                  if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 150);
              }}
              className="w-full text-center bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs py-3 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-orange-500" />
              Ücretsiz Teklif İste
            </button>
            <a 
              href={BRAND_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-3 rounded-xl flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all"
            >
              <svg className="w-4 h-4 fill-current text-white shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.755.002-2.61-1.01-5.063-2.853-6.908C16.64 2.1 14.191 1.082 12.01 1.082c-5.437 0-9.863 4.37-9.866 9.756-.001 1.905.5 3.754 1.454 5.4l-.957 3.493 3.41-.895z"/>
              </svg>
              WhatsApp Proje Gönder
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
