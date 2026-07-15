/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  HelpCircle, ChevronDown, ChevronUp, Search, MessageSquare, 
  Sparkles, CheckCircle2, ArrowRight, HelpCircle as QuestionIcon, ShieldCheck 
} from 'lucide-react';
import { FAQS_DATA, BRAND_CONFIG } from '../config';

export default function FaqSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default
  const [customQuestion, setCustomQuestion] = useState('');

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    return faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
           faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSendCustomQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuestion.trim()) return;
    
    const text = `Merhaba MHG İnşaat, teknik olarak şu konuda sorum olacaktı:\n\n"${customQuestion}"\n\nYardımcı olabilir misiniz?`;
    window.open(`https://wa.me/905536974904?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="max-w-4xl mx-auto">
        
        {/* Title SEO Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-orange-500/10 text-orange-600 font-extrabold text-xs uppercase px-3.5 py-1.5 rounded-full border border-orange-500/20 mb-3 tracking-wider">
            Şeffaflık & Sıkça Sorulan Sorular
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Merak Edilen Teknik Detaylar
          </h2>
          <p className="mt-3 text-slate-600 text-sm max-w-2xl mx-auto font-medium">
            Sözleşme güvencelerimizden, şantiye işleyişimize, nem kuruma sürelerinden, İSG kurallarımıza kadar tüm önemli sorularınızın şeffaf cevapları aşağıdadır.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto mb-10">
          <Search className="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-slate-400" />
          <input
            type="text"
            placeholder="Sorularda veya cevaplarda ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs rounded-xl border-slate-300 border pl-11 pr-4 py-3.5 focus:ring-1 focus:ring-orange-500 focus:outline-none text-slate-800 font-semibold bg-white shadow-sm"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-xl p-8 text-center text-slate-500 font-semibold">
              Aradığınız kelimeye uygun bir soru başlığı bulunamadı. Lütfen aşağıdaki panelden sorunuzu bizzat teknik ekibimize iletin!
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden transition-all"
                >
                  {/* Button Trigger */}
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full text-left p-5 sm:p-6 flex justify-between items-center gap-4 text-slate-900 hover:text-orange-600 transition-colors focus:outline-none cursor-pointer"
                  >
                    <span className="font-extrabold text-xs sm:text-sm flex items-start gap-2.5 leading-snug">
                      <QuestionIcon className="w-4.5 h-4.5 text-orange-500 shrink-0 mt-0.5" />
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {/* Body Content */}
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold border-t border-slate-100 pt-4 bg-slate-50/50 animate-in fade-in duration-150">
                      <div className="pl-7 space-y-3">
                        <p>{faq.answer}</p>
                        <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-[10px] uppercase tracking-wider">
                          <ShieldCheck className="w-4 h-4 text-emerald-500" />
                          MHG İnşaat Uygulama İlkesi Garantisi
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Custom Ask Section */}
        <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1 bg-orange-500/10 text-orange-600 font-bold text-[10px] uppercase px-2 py-0.5 rounded-full mb-1 border border-orange-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                Teknik Ofis Canlı İrtibat
              </span>
              <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">Aradığınız Cevabı Bulamadınız mı?</h3>
              <p className="text-slate-500 text-xs leading-relaxed max-w-lg font-medium">
                Nemli sıva izolasyonu, özel alçı paneller veya hakediş detaylarıyla alakalı her türlü sorunuzu hemen aşağıdan teknik ofis mühendislerimize yazılı olarak iletebilirsiniz.
              </p>
            </div>
            <MessageSquare className="w-12 h-12 text-orange-500 shrink-0 hidden md:block" />
          </div>

          <form onSubmit={handleSendCustomQuestion} className="mt-6 flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              required
              placeholder="Sorunuzu buraya yazın (Örn: Saten boya öncesi astarın markası nedir?)"
              value={customQuestion}
              onChange={(e) => setCustomQuestion(e.target.value)}
              className="flex-1 text-xs rounded-lg border-slate-300 border p-3 focus:ring-1 focus:ring-orange-500 focus:outline-none text-slate-800 font-semibold"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-slate-950 font-black text-xs py-3.5 px-6 rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer shrink-0 active:scale-95"
            >
              WhatsApp İle Sor
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
