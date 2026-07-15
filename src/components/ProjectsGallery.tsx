/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Building2, ArrowRight, Eye, RefreshCw, Layers, CheckCircle2, 
  MapPin, SlidersHorizontal, ChevronRight, Calculator 
} from 'lucide-react';
import { PROJECTS_DATA, BRAND_CONFIG } from '../config';

export default function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'interior' | 'exterior' | 'commercial'>('all');

  const filters = [
    { id: 'all', title: 'Tüm Uygulamalar' },
    { id: 'interior', title: 'İç Mekan İnce İşler' },
    { id: 'exterior', title: 'Dış Cephe & Yalıtım' },
    { id: 'commercial', title: 'Kurumsal / Ticari Alanlar' }
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'interior') {
      return ['alci-siva', 'duvar', 'alcipan', 'sap', 'boya', 'tamirat', 'tadilat'].includes(project.category);
    }
    if (activeFilter === 'exterior') {
      return ['mantolama', 'cephe'].includes(project.category);
    }
    if (activeFilter === 'commercial') {
      return ['kurumsal', 'kentsel'].includes(project.category);
    }
    return false;
  });

  return (
    <div className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-orange-500/10 text-orange-600 font-extrabold text-xs uppercase px-3.5 py-1.5 rounded-full border border-orange-500/20 mb-3 tracking-wider">
            Saha Uygulamalarımız & İş Kalitesi
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            İnce Yapı ve Mühendislik Galerisi
          </h2>
          <p className="mt-3 text-slate-600 text-sm max-w-2xl mx-auto font-medium">
            Tamamlanan ve yapımı devam eden projelerimizden örnekler. Her projemizde teknik şartnamelere, korozyon önleyici astar katlarına ve mükemmel terazi ayarına sadık kalıyoruz.
          </p>
        </div>

        {/* ================= FILTERABLE CASES GALLERY ================= */}
        <div className="space-y-8">
          
          {/* Filters Horizontal Bar */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 bg-slate-200/60 p-1.5 rounded-xl max-w-3xl mx-auto border border-slate-300/35">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id as any)}
                className={`px-4 py-2 rounded-lg text-xs font-black transition-all ${
                  activeFilter === filter.id
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {filter.title}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-200 flex flex-col justify-between"
              >
                {/* Project Cover Image */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img 
                    src={project.imageUrlAfter} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-sm text-orange-500 border border-slate-800 font-extrabold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded">
                    {project.projectType}
                  </span>
                </div>

                {/* Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5 text-orange-500" />
                      {project.location}
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-sm leading-snug">
                      {project.title}
                    </h4>
                    <p className="text-slate-600 text-xs leading-relaxed font-medium">
                      {project.description}
                    </p>
                  </div>

                  {/* Bullet technical details */}
                  <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl text-[10px] text-slate-500 space-y-1">
                    <p className="font-bold text-slate-700">Uygulanan Mühendislik Parametreleri:</p>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-0.5">
                      <span>• Ano Çıtası: Evet</span>
                      <span>• Astar Katı: Çift Kat</span>
                      <span>• Kuruma Süresi: 72 Saat</span>
                      <span>• Tolerans: &lt; 1mm / m</span>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-3 flex items-center justify-between text-xs text-slate-500 font-semibold">
                    <span>Sözleşme Modeli:</span>
                    <span className="text-emerald-600 font-bold bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded text-[10px]">
                      Hakediş / Sabit Fiyat
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Corporate Trust Banner */}
        <div className="mt-16 bg-slate-900 text-white rounded-2xl p-8 sm:p-12 text-center space-y-4 shadow-sm border border-slate-800 relative overflow-hidden">
          <div className="relative z-10 space-y-3">
            <span className="inline-block bg-orange-500/10 text-orange-500 font-extrabold text-[10px] uppercase px-3 py-1 rounded-full border border-slate-800 mb-2">
              ★ Mühendislik Güvenceli Sorumluluk
            </span>
            <h3 className="text-2xl font-black text-white">"Noksansız, Tertemiz ve Sözleşmeli Teslim Etmek Bizim Görevimizdir."</h3>
            <p className="text-xs text-slate-400 max-w-xl mx-auto leading-relaxed font-medium">
              MHG İnşaat bünyesinde usta arama, malzeme zayiatı ve gecikme kavgaları son bulur. İstanbul genelinde yaptığımız tüm ince yapı imalatları resmi teknik sözleşmeler ve iş planı takvimiyle başlar; noksansız ve pırıl pırıl temizlenmiş teslim edilir.
            </p>
            <div className="pt-3">
              <a 
                href={`tel:${BRAND_CONFIG.phoneRaw}`} 
                className="inline-flex bg-orange-600 hover:bg-orange-700 text-white font-black text-xs py-3.5 px-8 rounded-xl shadow-md gap-1.5 transition-colors"
              >
                <Calculator className="w-4 h-4" />
                Ücretsiz Keşif Randevusu Planla
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
