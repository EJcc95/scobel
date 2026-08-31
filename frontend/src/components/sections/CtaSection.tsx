import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../../data/servicesData';

interface CtaProps {
  onOpenQuoteModal: () => void;
}

export const CtaSection: React.FC<CtaProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-20 relative overflow-hidden bg-slate-900 text-white">
      {/* Luces y gradientes de fondo */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#072f5f] via-[#0b488f] to-slate-900 opacity-95"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#f1b138]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#f1b138] text-xs font-black uppercase tracking-wider mb-6">
          <Sparkles className="w-4 h-4" />
          Solución Multiservicios 360°
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          ¿Listo para optimizar la salubridad y mantenimiento de sus espacios?
        </h2>

        <p className="mt-6 text-base sm:text-lg text-blue-100/90 max-w-2xl mx-auto leading-relaxed">
          Ya sea para saneamiento ambiental certificado o servicios técnicos especializados, en <strong>GRUPO SCOBEL</strong> le brindamos respuesta inmediata y garantía por escrito.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenQuoteModal}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#f1b138] to-[#df9e24] text-slate-950 font-black text-base shadow-[0_10px_25px_rgba(241,177,56,0.4)] hover:shadow-[0_15px_30px_rgba(241,177,56,0.6)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5"
          >
            <span>Solicitar Cotización Ahora</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessageDefault)}`}
            target="_blank"
            rel="noreferrer"
            className="px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-base backdrop-blur-md border border-white/20 hover:border-white/40 transition-all flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span>Asesoría por WhatsApp</span>
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6 text-xs text-blue-200/80">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#f1b138]" />
            Sin compromisos
          </span>
          <span>•</span>
          <span>Evaluación técnica previa</span>
          <span>•</span>
          <span>Protocolos de bioseguridad</span>
        </div>
      </div>
    </section>
  );
};
