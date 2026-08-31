import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Sparkles, 
  Wrench, 
  ShieldCheck, 
  Check, 
  ArrowRight, 
  Layers, 
  Paintbrush, 
  Droplets, 
  Zap, 
  Factory, 
  Bug
} from 'lucide-react';
import { SCOBEL_CORPORATION_DATA, SCOBEL_GLOBAL_BUSINESS_DATA } from '../../data/servicesData';
import type { ServiceItem } from '../../data/servicesData';

interface ServiceExplorerProps {
  onSelectServiceToQuote: (service: ServiceItem) => void;
}

export const ServiceSelector: React.FC<ServiceExplorerProps> = ({ onSelectServiceToQuote }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'corporation' | 'global-business'>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(SCOBEL_CORPORATION_DATA.services[0]);

  const allServices: ServiceItem[] = [
    ...SCOBEL_CORPORATION_DATA.services,
    ...SCOBEL_GLOBAL_BUSINESS_DATA.services
  ];

  const filteredServices = activeFilter === 'all' 
    ? allServices 
    : allServices.filter(s => s.company === activeFilter);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'corp-saneamiento': return <Bug className="w-5 h-5" />;
      case 'corp-limpieza-corporativa': return <Building2 className="w-5 h-5" />;
      case 'corp-limpieza-industrial': return <Factory className="w-5 h-5" />;
      case 'corp-reservorios': return <Droplets className="w-5 h-5" />;
      case 'gb-alfombras': return <Layers className="w-5 h-5" />;
      case 'gb-pintura': return <Paintbrush className="w-5 h-5" />;
      case 'gb-gasfiteria': return <Wrench className="w-5 h-5" />;
      case 'gb-electricidad': return <Zap className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="servicios-explorador" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#0b488f]" />
            Catálogo Integral
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Explora Todos Nuestros Servicios
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Filtra entre nuestras dos unidades de negocio y descubre especificaciones técnicas, alcances y certificaciones.
          </p>

          {/* Filtros por Empresa */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-slate-100 rounded-2xl max-w-lg mx-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeFilter === 'all'
                  ? 'bg-white text-slate-900 shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Todos ({allServices.length})
            </button>
            <button
              onClick={() => setActiveFilter('corporation')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeFilter === 'corporation'
                  ? 'bg-[#0b488f] text-white shadow-md'
                  : 'text-slate-600 hover:text-[#0b488f]'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#f1b138]"></span>
              SCOBEL CORPORATION
            </button>
            <button
              onClick={() => setActiveFilter('global-business')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeFilter === 'global-business'
                  ? 'bg-[#f1b138] text-slate-950 shadow-md'
                  : 'text-slate-600 hover:text-amber-700'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#0b488f]"></span>
              GLOBAL BUSINESS
            </button>
          </div>
        </div>

        {/* Master / Detail Layout Interactivo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Lista de Servicios (Lado Izquierdo) */}
          <div className="lg:col-span-5 space-y-3">
            {filteredServices.map((service) => {
              const isSelected = selectedService?.id === service.id;
              const isCorp = service.company === 'corporation';

              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`cursor-pointer p-4 rounded-2xl border transition-all duration-200 flex items-start gap-4 ${
                    isSelected
                      ? isCorp
                        ? 'bg-blue-50/80 border-[#0b488f] shadow-md ring-2 ring-[#0b488f]/20'
                        : 'bg-amber-50/80 border-[#f1b138] shadow-md ring-2 ring-[#f1b138]/30'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/60'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected
                        ? isCorp
                          ? 'bg-[#0b488f] text-white'
                          : 'bg-[#f1b138] text-slate-950'
                        : isCorp
                        ? 'bg-blue-100 text-[#0b488f]'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {getServiceIcon(service.id)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-[10px] font-extrabold uppercase tracking-wider ${
                        isCorp ? 'text-[#0b488f]' : 'text-amber-800'
                      }`}>
                        {isCorp ? 'SCOBEL CORPORATION' : 'GLOBAL BUSINESS'}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 font-semibold text-slate-600">
                        {service.badge}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 truncate mt-0.5">
                      {service.title}
                    </h4>

                    <p className="text-xs text-slate-500 line-clamp-1 mt-1">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Ficha Detallada del Servicio Seleccionado (Lado Derecho) */}
          <div className="lg:col-span-7 sticky top-28">
            {selectedService ? (
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`rounded-3xl p-8 border shadow-xl ${
                  selectedService.company === 'corporation'
                    ? 'bg-gradient-to-br from-white via-blue-50/30 to-blue-100/20 border-blue-200'
                    : 'bg-gradient-to-br from-white via-amber-50/30 to-amber-100/20 border-amber-200'
                }`}
              >
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md ${
                        selectedService.company === 'corporation'
                          ? 'bg-[#0b488f]'
                          : 'bg-[#f1b138] text-slate-950'
                      }`}
                    >
                      {getServiceIcon(selectedService.id)}
                    </div>
                    <div>
                      <span className={`text-xs font-black uppercase tracking-wider ${
                        selectedService.company === 'corporation' ? 'text-[#0b488f]' : 'text-amber-800'
                      }`}>
                        {selectedService.company === 'corporation' ? 'SCOBEL CORPORATION S.A.C.' : 'SCOBEL GLOBAL BUSINESS S.A.C.'}
                      </span>
                      <h3 className="text-2xl font-black text-slate-900 leading-tight">
                        {selectedService.title}
                      </h3>
                    </div>
                  </div>

                  <span className={`text-xs font-extrabold px-3 py-1 rounded-full ${
                    selectedService.company === 'corporation'
                      ? 'bg-blue-100 text-[#0b488f]'
                      : 'bg-amber-100 text-amber-900'
                  }`}>
                    {selectedService.badge}
                  </span>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed mb-6">
                  {selectedService.fullDesc}
                </p>

                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/80 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#0b488f]" />
                    Alcances y Beneficios Incluidos
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.features.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          selectedService.company === 'corporation'
                            ? 'bg-blue-100 text-[#0b488f]'
                            : 'bg-amber-100 text-amber-900'
                        }`}>
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Acciones para el servicio */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
                  <div className="text-xs text-slate-500 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600" />
                    Cotización formal sin costo en menos de 2 horas
                  </div>

                  <button
                    onClick={() => onSelectServiceToQuote(selectedService)}
                    className={`px-6 py-3 rounded-xl font-extrabold text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 ${
                      selectedService.company === 'corporation'
                        ? 'bg-[#0b488f] text-white hover:bg-[#072f5f]'
                        : 'bg-[#f1b138] text-slate-950 hover:bg-[#df9e24]'
                    }`}
                  >
                    <span>Cotizar "{selectedService.title}"</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ) : (
              <div className="h-96 rounded-3xl border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400">
                Selecciona un servicio para ver detalles
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
