import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { STATS_DATA } from '../../data/servicesData';

export const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Columna Izquierda: Información Corporativa */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0b488f] text-xs font-black uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#f1b138]" />
              Trayectoria y Confianza
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Respaldamos la operatividad y salubridad de su empresa
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              En <strong>GRUPO SCOBEL</strong> integramos dos divisiones especializadas para brindar una cobertura completa de multiservicios corporativos. Entendemos que un ambiente limpio, desinfectado y con infraestructura técnica en perfecto estado incrementa la productividad y transmite confianza.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-8 h-8 rounded-lg bg-[#0b488f] text-white flex items-center justify-center font-bold text-xs mb-2">
                  01
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Personal Calificado</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Técnicos uniformados, capacitados en bioseguridad y con pólizas SCTR vigentes.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-8 h-8 rounded-lg bg-[#f1b138] text-slate-950 flex items-center justify-center font-bold text-xs mb-2">
                  02
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Garantía y Rapidez</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Respuesta ágil ante auditorías sanitarias o emergencias de infraestructura.
                </p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta de Métricas e Indicadores de Rendimiento */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#072f5f] via-[#0b488f] to-slate-900 p-8 sm:p-10 text-white shadow-2xl overflow-hidden border border-blue-400/20">
              <div className="absolute -top-10 -right-10 w-60 h-60 bg-[#f1b138]/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <span className="text-xs font-black uppercase tracking-widest text-[#f1b138] block mb-2">
                  Indicadores de Excelencia
                </span>
                <h3 className="text-2xl font-black text-white mb-8">
                  El aliado estratégico preferido por las empresas líderes
                </h3>

                <div className="grid grid-cols-2 gap-6">
                  {STATS_DATA.map((stat, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                      <div className="text-3xl sm:text-4xl font-extrabold text-[#f1b138]">
                        {stat.value}
                      </div>
                      <div className="text-sm font-bold text-white mt-1">
                        {stat.label}
                      </div>
                      <div className="text-[11px] text-blue-200/75 mt-0.5">
                        {stat.desc}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-xs text-blue-200">
                  <ShieldCheck className="w-5 h-5 text-[#f1b138] shrink-0" />
                  <span>Cumplimiento estricto de normativas DIGESA, MINSA, INDECI y MTPE.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
