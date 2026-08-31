import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, PhoneCall, Sparkles, Wrench, Shield, MessageCircle } from 'lucide-react';
import { GrupoScobelLogo } from '../ui/GrupoScobelLogo';
import { CONTACT_INFO } from '../../data/servicesData';

interface HeaderProps {
  onOpenQuoteModal: (company?: 'corporation' | 'global-business') => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-100'
          : 'bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100/50'
      }`}
    >
      {/* Top micro-bar con información rápida */}
      <div className="hidden lg:block bg-[#0b488f] text-white py-1 text-xs px-4 -mt-4 mb-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-medium">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#f1b138] animate-pulse"></span>
              Atención Corporativa en Lima y a Nivel Nacional
            </span>
            <span className="text-blue-200">|</span>
            <span>RUC: Multiservice GRUPO SCOBEL</span>
          </div>
          <div className="flex items-center gap-6">
            <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-[#f1b138] transition-colors flex items-center gap-1">
              <PhoneCall className="w-3.5 h-3.5" />
              {CONTACT_INFO.phoneDisplay}
            </a>
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessageDefault + 'información general')}`} 
              target="_blank" 
              rel="noreferrer"
              className="text-[#f1b138] hover:underline flex items-center gap-1 font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp Directo
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Principal: GRUPO SCOBEL */}
          <a href="#hero" className="focus-visible:ring-2 focus-visible:ring-[#0b488f] rounded-lg p-1 transition-transform hover:scale-[1.02]">
            <GrupoScobelLogo size="md" theme="dark" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <a
              href="#hero"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-[#0b488f] transition-colors rounded-lg hover:bg-slate-50"
            >
              Inicio
            </a>

            {/* Sub-empresa 1: SCOBEL CORPORATION */}
            <a
              href="#corporation"
              className="group relative px-3 py-2 text-sm font-bold text-slate-800 hover:text-[#0b488f] transition-all rounded-lg hover:bg-blue-50/80 flex items-center gap-2 border border-transparent hover:border-blue-100"
            >
              <div className="w-6 h-6 rounded-md bg-[#0b488f]/10 flex items-center justify-center text-[#0b488f] group-hover:bg-[#0b488f] group-hover:text-white transition-colors">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="leading-tight">SCOBEL CORPORATION</span>
                <span className="text-[10px] text-slate-400 font-normal group-hover:text-[#0b488f]">Limpieza & Saneamiento</span>
              </div>
            </a>

            {/* Sub-empresa 2: SCOBEL GLOBAL BUSINESS */}
            <a
              href="#global-business"
              className="group relative px-3 py-2 text-sm font-bold text-slate-800 hover:text-[#b87c12] transition-all rounded-lg hover:bg-amber-50/80 flex items-center gap-2 border border-transparent hover:border-amber-100"
            >
              <div className="w-6 h-6 rounded-md bg-[#f1b138]/20 flex items-center justify-center text-[#b87c12] group-hover:bg-[#f1b138] group-hover:text-slate-900 transition-colors">
                <Wrench className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="leading-tight">SCOBEL GLOBAL BUSINESS</span>
                <span className="text-[10px] text-slate-400 font-normal group-hover:text-[#b87c12]">Servicios Generales</span>
              </div>
            </a>

            <a
              href="#nosotros"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-[#0b488f] transition-colors rounded-lg hover:bg-slate-50"
            >
              Nosotros
            </a>

            <a
              href="#contacto"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-[#0b488f] transition-colors rounded-lg hover:bg-slate-50"
            >
              Ubicación & Contacto
            </a>
          </nav>

          {/* Call to Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0b488f] to-[#072f5f] text-white text-sm font-bold shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2"
            >
              <Shield className="w-4 h-4 text-[#f1b138]" />
              <span>Cotizar Servicio</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-3 py-1.5 rounded-lg bg-[#0b488f] text-white text-xs font-bold shadow-sm"
            >
              Cotizar
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#0b488f]"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-b border-slate-200 overflow-hidden px-4 pt-3 pb-6 shadow-xl"
          >
            <div className="flex flex-col gap-2">
              <a
                href="#hero"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg font-medium text-slate-800 hover:bg-slate-50"
              >
                Inicio
              </a>

              {/* Sub-empresa 1 Mobile */}
              <a
                href="#corporation"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0b488f] text-white flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0b488f]">SCOBEL CORPORATION</div>
                  <div className="text-xs text-slate-500">Limpieza & Saneamiento Ambiental</div>
                </div>
              </a>

              {/* Sub-empresa 2 Mobile */}
              <a
                href="#global-business"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl bg-amber-50/70 border border-amber-100 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-[#f1b138] text-slate-900 flex items-center justify-center">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">SCOBEL GLOBAL BUSINESS</div>
                  <div className="text-xs text-slate-600">Lavado de Alfombras, Pintura, Gasfitería, Electricidad</div>
                </div>
              </a>

              <a
                href="#nosotros"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg font-medium text-slate-800 hover:bg-slate-50"
              >
                Nosotros & Certificaciones
              </a>

              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg font-medium text-slate-800 hover:bg-slate-50"
              >
                Ubicación & Contacto
              </a>

              <div className="pt-3 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuoteModal();
                  }}
                  className="w-full py-3 rounded-xl bg-[#0b488f] text-white font-bold text-sm shadow-md"
                >
                  Solicitar Cotización Gratuita
                </button>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessageDefault)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-xl border border-emerald-500 text-emerald-700 font-bold text-sm text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chatear por WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
