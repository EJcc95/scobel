import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Factory, 
  Droplets, 
  Bug
} from 'lucide-react';
import { SCOBEL_CORPORATION_DATA } from '../../data/servicesData';

interface CompanyProps {
  onOpenQuoteModal: (company: 'corporation') => void;
}

export const CompanyCorporation: React.FC<CompanyProps> = ({ onOpenQuoteModal }) => {
  const data = SCOBEL_CORPORATION_DATA;

  return (
    <section id="corporation" className="py-24 bg-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la Unidad */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0b488f] text-xs font-extrabold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              División Sanitaria & Limpieza
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              {data.name}
            </h2>
            <p className="text-lg font-semibold text-[#0b488f] mt-2">
              {data.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenQuoteModal('corporation')}
              className="px-6 py-3 rounded-xl bg-[#0b488f] hover:bg-[#072f5f] text-white font-bold text-sm shadow-lg shadow-blue-900/20 hover:shadow-blue-900/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <span>Cotizar Saneamiento</span>
              <ArrowRight className="w-4 h-4 text-[#f1b138]" />
            </button>
          </div>
        </div>

        {/* Resumen y Certificaciones destacadas */}
        <div className="bg-gradient-to-r from-blue-950 to-[#0b488f] text-white rounded-3xl p-8 lg:p-10 shadow-2xl mb-16 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-blue-500/10 rounded-full blur-2xl"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <span className="px-3 py-1 rounded-md bg-[#f1b138] text-slate-950 font-black text-xs uppercase tracking-wide inline-block mb-3">
                Bioseguridad Garantizada
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                Protegemos la salud de sus colaboradores y clientes con estándares hospitalarios
              </h3>
              <p className="text-blue-100/90 text-sm sm:text-base mt-4 leading-relaxed">
                {data.description}
              </p>
            </div>

            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#f1b138] mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                Acreditaciones & Ventajas
              </h4>
              <ul className="space-y-3">
                {data.certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-white">
                    <CheckCircle2 className="w-4 h-4 text-[#f1b138] shrink-0 mt-0.5" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Grid de Servicios de SCOBEL CORPORATION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0b488f] flex items-center justify-center font-bold">
                    {service.id === 'corp-saneamiento' && <Bug className="w-6 h-6" />}
                    {service.id === 'corp-limpieza-corporativa' && <Building2 className="w-6 h-6" />}
                    {service.id === 'corp-limpieza-industrial' && <Factory className="w-6 h-6" />}
                    {service.id === 'corp-reservorios' && <Droplets className="w-6 h-6" />}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-100/70 text-[#0b488f]">
                    {service.badge}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-slate-900 leading-snug mb-2">
                  {service.title}
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-slate-200/60 mb-6">
                  {service.features.slice(0, 3).map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0b488f]"></span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenQuoteModal('corporation')}
                className="w-full py-2.5 rounded-xl border border-[#0b488f] text-[#0b488f] hover:bg-[#0b488f] hover:text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Solicitar Informe / Cotizar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
