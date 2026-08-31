import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  Layers, 
  Paintbrush, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck
} from 'lucide-react';
import { SCOBEL_GLOBAL_BUSINESS_DATA } from '../../data/servicesData';

interface CompanyProps {
  onOpenQuoteModal: (company: 'global-business') => void;
}

export const CompanyGlobalBusiness: React.FC<CompanyProps> = ({ onOpenQuoteModal }) => {
  const data = SCOBEL_GLOBAL_BUSINESS_DATA;

  return (
    <section id="global-business" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la Unidad */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300/80 text-amber-900 text-xs font-extrabold uppercase tracking-wider mb-4">
              <Wrench className="w-3.5 h-3.5" />
              Mantenimiento Técnico & Acabados
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              {data.name}
            </h2>
            <p className="text-lg font-semibold text-[#b87c12] mt-2">
              {data.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenQuoteModal('global-business')}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#f1b138] to-[#df9e24] text-slate-950 font-black text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <span>Cotizar Mantenimiento</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>
        </div>

        {/* Banner de Garantía y Respaldo */}
        <div className="bg-gradient-to-r from-slate-900 via-[#1c2c48] to-[#0b488f] text-white rounded-3xl p-8 lg:p-10 shadow-2xl mb-16 relative overflow-hidden border border-amber-500/20">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#f1b138]/10 rounded-full blur-3xl"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <span className="px-3 py-1 rounded-md bg-[#f1b138] text-slate-950 font-black text-xs uppercase tracking-wide inline-block mb-3">
                Soluciones Rápidas y Garantizadas
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                Infraestructura y acabados siempre en óptimas condiciones operativas
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
                {data.description}
              </p>
            </div>

            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#ffd276] mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                Compromiso de Calidad
              </h4>
              <ul className="space-y-3">
                {data.certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-[#f1b138] shrink-0 mt-0.5" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Grid de Servicios de SCOBEL GLOBAL BUSINESS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#f1b138] transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#b87c12] border border-amber-200/60 flex items-center justify-center font-bold">
                    {service.id === 'gb-alfombras' && <Layers className="w-6 h-6" />}
                    {service.id === 'gb-pintura' && <Paintbrush className="w-6 h-6" />}
                    {service.id === 'gb-gasfiteria' && <Wrench className="w-6 h-6" />}
                    {service.id === 'gb-electricidad' && <Zap className="w-6 h-6" />}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900">
                    {service.badge}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-slate-900 leading-snug mb-2">
                  {service.title}
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-6">
                  {service.features.slice(0, 3).map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f1b138]"></span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenQuoteModal('global-business')}
                className="w-full py-2.5 rounded-xl border border-amber-500 text-amber-900 hover:bg-[#f1b138] hover:text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Cotizar este Servicio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
