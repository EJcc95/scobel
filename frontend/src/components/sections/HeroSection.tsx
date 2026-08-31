import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Wrench, 
  ShieldCheck, 
  ArrowRight, 
  Award
} from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: (company?: 'corporation' | 'global-business') => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-[#072f5f] to-[#0b488f] text-white">
      {/* Elementos visuales y brillos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#0b488f] rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#f1b138]/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 left-1/3 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl"></div>
        
        {/* Cuadrícula sutil geométrica */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        {/* Badge Superior Animado */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-semibold tracking-wide text-blue-100 shadow-inner">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f1b138] shadow-[0_0_10px_#f1b138]"></span>
            GRUPO SCOBEL • Soluciones Corporativas & Multiservicios de Limpieza
          </div>
        </motion.div>

        {/* Título Principal de Alto Impacto */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]"
          >
            Líderes en Limpieza Especializada, Saneamiento y{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f1b138] via-[#ffd276] to-[#f1b138]">
              Mantenimiento Técnico
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg lg:text-xl text-blue-100/90 leading-relaxed max-w-3xl mx-auto"
          >
            Dos divisiones integradas bajo el respaldo de <strong className="text-white">GRUPO SCOBEL</strong> para garantizar la máxima salubridad, bioseguridad, estética y operatividad de sus instalaciones.
          </motion.p>

          {/* Botones de Acción Primaria */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#f1b138] to-[#df9e24] text-slate-950 font-extrabold text-base shadow-[0_10px_25px_-5px_rgba(241,177,56,0.5)] hover:shadow-[0_15px_30px_-5px_rgba(241,177,56,0.7)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 flex items-center gap-2.5"
            >
              <span>Solicitar Cotización Inmediata</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="#servicios-explorador"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-200 flex items-center gap-2"
            >
              <span>Explorar Servicios</span>
            </a>
          </motion.div>
        </div>

        {/* Tarjetas Interactivas de las 2 Sub-Empresas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-6"
        >
          {/* Card 1: SCOBEL CORPORATION */}
          <div 
            onClick={() => {
              const el = document.getElementById('corporation');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group cursor-pointer relative rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-6 sm:p-7 border border-white/15 hover:border-blue-300/40 backdrop-blur-xl shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300 group-hover:scale-110 group-hover:bg-[#0b488f] group-hover:text-white transition-all">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-200 border border-blue-400/30">
                División Sanitaria
              </span>
            </div>

            <h3 className="text-xl font-bold text-white group-hover:text-[#ffd276] transition-colors">
              SCOBEL CORPORATION
            </h3>
            <p className="text-sm font-semibold text-blue-200 mt-1">
              Limpieza & Saneamiento Ambiental
            </p>

            <p className="text-xs sm:text-sm text-blue-100/75 mt-3 line-clamp-2">
              Desinfección, control integral de plagas, fumigación certificada por el MINSA, limpieza corporativa y de reservorios de agua.
            </p>

            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-medium text-blue-200">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#f1b138]" />
                Certificado Oficial
              </span>
              <span className="inline-flex items-center gap-1 text-[#f1b138] group-hover:translate-x-1 transition-transform">
                Ver detalles <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card 2: SCOBEL GLOBAL BUSINESS */}
          <div 
            onClick={() => {
              const el = document.getElementById('global-business');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group cursor-pointer relative rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-6 sm:p-7 border border-white/15 hover:border-amber-400/40 backdrop-blur-xl shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-[#f1b138] group-hover:scale-110 group-hover:bg-[#f1b138] group-hover:text-slate-900 transition-all">
                <Wrench className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#f1b138]/20 text-[#ffd276] border border-[#f1b138]/30">
                Mantenimiento Técnico
              </span>
            </div>

            <h3 className="text-xl font-bold text-white group-hover:text-[#ffd276] transition-colors">
              SCOBEL GLOBAL BUSINESS
            </h3>
            <p className="text-sm font-semibold text-[#ffd276] mt-1">
              Servicios Generales & Mantenimiento
            </p>

            <p className="text-xs sm:text-sm text-blue-100/75 mt-3 line-clamp-2">
              Lavado de alfombras y tapizones al seco, pintura en general, gasfitería especializada y electricidad integral.
            </p>

            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-medium text-blue-200">
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#f1b138]" />
                Garantía por Escrito
              </span>
              <span className="inline-flex items-center gap-1 text-[#f1b138] group-hover:translate-x-1 transition-transform">
                Ver servicios <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </motion.div>

        {/* Micro-puntos de confianza */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
        >
          <div className="flex flex-col items-center justify-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#f1b138]">+12 Años</span>
            <span className="text-xs sm:text-sm text-blue-200/80">Experiencia comprobada</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#f1b138]">100%</span>
            <span className="text-xs sm:text-sm text-blue-200/80">Conformidad MINSA</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#f1b138]">+1,500</span>
            <span className="text-xs sm:text-sm text-blue-200/80">Proyectos concluidos</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#f1b138]">24 / 7</span>
            <span className="text-xs sm:text-sm text-blue-200/80">Atención a empresas</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
