/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  BookOpen, Search, Sparkles, Loader2, X, ChevronRight, 
  HelpCircle, ClipboardList, Clock, ShieldAlert, ArrowLeft, Printer
} from 'lucide-react';
import { BLOG_POSTS, BRAND_CONFIG } from '../config';

// A lightweight, highly-robust Custom Markdown to JSX Parser to avoid external package versioning mismatches
function renderCustomMarkdown(markdown: string) {
  if (!markdown) return null;
  
  const lines = markdown.split('\n');
  return (
    <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        
        if (!trimmed) return <div key={idx} className="h-2" />;

        // Heading 2
        if (trimmed.startsWith('## ')) {
          return (
            <h3 key={idx} className="text-base sm:text-lg font-black text-[#0b1329] mt-6 mb-2 border-l-4 border-orange-500 pl-3 pt-0.5">
              {trimmed.substring(3).replace(/\*\*/g, '')}
            </h3>
          );
        }

        // Heading 3
        if (trimmed.startsWith('### ')) {
          return (
            <h4 key={idx} className="text-xs sm:text-sm font-extrabold text-[#0b1329] mt-4 mb-2">
              {trimmed.substring(4).replace(/\*\*/g, '')}
            </h4>
          );
        }

        // List Item
        if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
          const itemText = trimmed.substring(2);
          return (
            <ul key={idx} className="list-disc pl-5 my-1.5 space-y-1">
              <li className="leading-relaxed">
                {parseInlineFormatting(itemText)}
              </li>
            </ul>
          );
        }

        // Numeric List Item
        if (/^\d+\.\s/.test(trimmed)) {
          const match = trimmed.match(/^(\d+\.)\s(.*)/);
          if (match) {
            return (
              <ol key={idx} className="list-decimal pl-5 my-1.5 space-y-1">
                <li className="leading-relaxed">
                  <span className="font-bold text-[#0b1329] mr-1">{match[1]}</span>
                  {parseInlineFormatting(match[2])}
                </li>
              </ol>
            );
          }
        }

        // Fallback Paragraph
        return (
          <p key={idx} className="leading-relaxed">
            {parseInlineFormatting(trimmed)}
          </p>
        );
      })}
    </div>
  );
}

// Sub-parser to support bold formatting (**bold**) inside text
function parseInlineFormatting(text: string) {
  const parts = text.split('**');
  return parts.map((part, i) => {
    if (i % 2 === 1) {
      return <strong key={i} className="font-extrabold text-[#0b1329]">{part}</strong>;
    }
    return part;
  });
}

export default function BlogSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeArticle, setActiveArticle] = useState<any | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiArticleContent, setAiArticleContent] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState('');

  const categories = [
    { id: 'all', title: 'Tüm Konular' },
    { id: 'siva-alci', title: 'Sıva & Alçı' },
    { id: 'duvar-orume', title: 'Duvar Örümü' },
    { id: 'yalitim-mantolama', title: 'Yalıtım & Mantolama' },
    { id: 'alcipan-tavan', title: 'Alçıpan & Tavan' }
  ];

  const getCategoryGroup = (postCategory: string) => {
    const cat = postCategory.toLowerCase();
    if (cat.includes('alçı') || cat.includes('sıva') || cat.includes('boya') || cat.includes('yüzey') || cat.includes('zemin')) {
      return 'siva-alci';
    }
    if (cat.includes('duvar') || cat.includes('bölme') || cat.includes('tadilat') || cat.includes('yenileme')) {
      return 'duvar-orume';
    }
    if (cat.includes('mantolama') || cat.includes('yalıtım') || cat.includes('cephe') || cat.includes('rehber') || cat.includes('malzeme')) {
      return 'yalitim-mantolama';
    }
    if (cat.includes('tavan') || cat.includes('alçıpan')) {
      return 'alcipan-tavan';
    }
    return 'siva-alci';
  };

  // Filtering logic
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const postGroup = getCategoryGroup(post.category);
    const matchesCategory = selectedCategory === 'all' || postGroup === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleReadFullWithAi = async (post: any) => {
    setActiveArticle(post);
    setIsGenerating(true);
    setAiArticleContent('');
    setErrorMsg('');

    try {
      const res = await fetch('/api/blog-generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          articleId: post.id,
          articleTitle: post.title,
          category: post.category
        })
      });

      if (!res.ok) {
        throw new Error('Yapay zeka makalesi oluşturulurken sunucu hatası gerçekleşti.');
      }

      const data = await res.json();
      setAiArticleContent(data.content || 'Makale içeriği boş döndü.');
    } catch (err: any) {
      console.error(err);
      setErrorMsg('Üzgünüz, teknik kütüphane bağlantısı şu an yoğun veya kesintili. Lütfen saniyeler sonra tekrar okumayı deneyiniz.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCloseArticle = () => {
    setActiveArticle(null);
    setAiArticleContent('');
    setErrorMsg('');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Header & SEO Text */}
        <div className="text-center mb-10">
          <span className="inline-block bg-orange-500/10 text-orange-600 font-extrabold text-xs uppercase px-3.5 py-1.5 rounded-full border border-orange-500/20 mb-3 tracking-wider">
            Eğitici Bilgi Bankası & Teknik Kütüphane
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            İnce Yapı Teknik Bilgi Bankası
          </h2>
          <p className="mt-3 text-slate-600 text-sm max-w-2xl mx-auto font-medium">
            Hatalı imalatları önlemek, yalıtım standartlarını doğru öğrenmek ve paranızı korumak için hazırladığımız teknik makaleler. Yapay zeka motorumuzla <strong>her konunun detaylı mühendislik şartnamesini</strong> anında genişleterek okuyabilirsiniz.
          </p>
        </div>

        {/* Searching & Category filters */}
        {!activeArticle && (
          <div className="space-y-6 mb-12">
            <div className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Kütüphanede makale veya kelime ara (Örn: ano çıtası, saten alçı...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs rounded-xl border-slate-300 border pl-11 pr-4 py-3.5 focus:ring-1 focus:ring-orange-500 focus:outline-none text-slate-800 font-semibold bg-white shadow-sm"
                />
              </div>

              {/* Categories filters inside a small selection */}
              <div className="flex flex-wrap gap-1.5 items-center justify-center">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3.5 py-2 rounded-lg text-[11px] font-black transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-slate-900 text-white shadow-sm'
                        : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
                    }`}
                  >
                    {cat.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Total Results */}
            <p className="text-center text-[11px] font-semibold text-slate-400">
              Bulunan Teknik Konu Başlığı: <span className="text-slate-800">{filteredPosts.length}</span> / 25
            </p>
          </div>
        )}

        {/* ================= READING DETAIL VIEW (AI INJECTED) ================= */}
        {activeArticle ? (
          <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden p-6 sm:p-10 space-y-6 animate-in zoom-in-95 duration-150">
            
            {/* Header Controls */}
            <div className="flex justify-between items-center border-b border-slate-100 pb-4">
              <button
                onClick={handleCloseArticle}
                className="text-slate-500 hover:text-slate-900 font-bold text-xs flex items-center gap-1.5 p-1 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Kütüphaneye Geri Dön
              </button>
              <div className="flex gap-2">
                {!isGenerating && !errorMsg && (
                  <button
                    onClick={handlePrint}
                    className="p-1.5 text-slate-500 hover:text-slate-800 rounded bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors"
                    title="Yazdır"
                  >
                    <Printer className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={handleCloseArticle}
                  className="text-slate-400 hover:text-slate-600 p-1.5"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Static Meta Header */}
            <div className="space-y-2">
              <span className="bg-orange-500/10 text-orange-700 font-extrabold text-[9px] uppercase px-2.5 py-1 rounded tracking-wide border border-orange-500/15 inline-block">
                {activeArticle.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                {activeArticle.title}
              </h3>
              <div className="flex items-center gap-4 text-[10px] text-slate-400 font-bold">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-300" /> Okuma Süresi: 3-5 Dk
                </span>
                <span>•</span>
                <span>Derleyen: MHG İnşaat Teknik Ofis Mühendisliği</span>
              </div>
            </div>

            {/* Initial Summary */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed border-l-4 border-orange-500 pl-4 italic py-1 bg-slate-50 rounded-r-lg font-medium">
              "{activeArticle.summary}"
            </p>

            {/* AI Generator Box OR Content Output */}
            {isGenerating ? (
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-12 text-center flex flex-col items-center justify-center gap-4 min-h-[300px]">
                <Loader2 className="w-8 h-8 text-orange-500 animate-spin" />
                <div className="space-y-1.5 animate-pulse">
                  <h4 className="text-xs sm:text-sm font-black text-slate-900">Yapay Zeka Teknik Raporu Derliyor...</h4>
                  <p className="text-[11px] text-slate-500 max-w-sm mx-auto">
                    Gemini 3.5 Flash modeli TSE standartlarını, şantiye deneyimlerini ve teknik şartnameleri süzerek detaylı makaleyi oluşturuyor.
                  </p>
                </div>
              </div>
            ) : errorMsg ? (
              <div className="p-5 bg-red-50 border border-red-200 rounded-xl space-y-3">
                <p className="text-xs text-red-700 font-medium flex items-center gap-1.5">
                  <ShieldAlert className="w-4.5 h-4.5 text-red-500 shrink-0" />
                  {errorMsg}
                </p>
                <button
                  onClick={() => handleReadFullWithAi(activeArticle)}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs py-2 px-4 rounded transition-colors"
                >
                  Tekrar Okumayı Dene
                </button>
              </div>
            ) : (
              /* Custom parsed markdown JSX block */
              <div className="prose max-w-none pt-4 border-t border-slate-100">
                {renderCustomMarkdown(aiArticleContent)}
              </div>
            )}

            {/* Sticky warning warning */}
            {!isGenerating && !errorMsg && (
              <div className="p-4 bg-orange-500/5 border border-orange-500/10 rounded-xl text-[10px] sm:text-xs text-slate-500 font-semibold leading-relaxed">
                * Bu makale bilgi amaçlıdır. Her yapının zemin nemliliği, taşıyıcı sistemi ve çevre koşulları değişkenlik gösterir. Sahada fiili uygulama yapmadan önce mutlaka MHG İnşaat teknik ekiplerine ücretsiz keşif yaptırınız.
              </div>
            )}

          </div>
        ) : (
          /* ================= LIST GRID VIEW ================= */
          <div className="space-y-10">
            {filteredPosts.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center">
                <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                <h4 className="text-sm font-bold text-slate-800">Arama Kriterlerine Uygun Makale Bulunamadı</h4>
                <p className="text-xs text-slate-500 mt-1 font-medium">Lütfen farklı kelimelerle (Örn: alçı, yalıtım, şap) arama yapmayı deneyin.</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                  className="mt-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs py-2 px-4 rounded-lg transition-colors"
                >
                  Tüm Listeyi Gör
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <div 
                    key={post.id}
                    className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 duration-200 flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="bg-slate-100 text-slate-600 font-black text-[9px] uppercase px-2.5 py-1 rounded tracking-wide">
                          {post.category}
                        </span>
                        <span className="text-[10px] text-slate-400 font-bold">3-5 Dk</span>
                      </div>
                      <h4 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug">
                        {post.title}
                      </h4>
                      <p className="text-slate-600 text-xs leading-relaxed font-medium line-clamp-3">
                        {post.summary}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2.5">
                      <span className="text-[10px] text-slate-400 font-bold">SEO Kod: #{post.id}</span>
                      <button
                        onClick={() => handleReadFullWithAi(post)}
                        className="bg-orange-500 hover:bg-orange-600 text-slate-950 font-black text-[10px] uppercase py-2 px-3.5 rounded-xl flex items-center gap-1 transition-all shadow-sm cursor-pointer active:scale-95"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-slate-950 animate-pulse" />
                        AI İle Genişlet & Oku
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
