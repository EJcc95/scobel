import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Wrench, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../../data/servicesData';
import type { ServiceItem } from '../../data/servicesData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCompany?: 'corporation' | 'global-business';
  initialService?: ServiceItem | null;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialCompany = 'corporation',
  initialService = null
}) => {
  const [selectedCompany, setSelectedCompany] = useState<'corporation' | 'global-business'>(initialCompany);
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [servicio, setServicio] = useState(initialService?.title || '');
  const [mensaje, setMensaje] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Sincronizar si cambia el servicio inicial al abrir el modal
  React.useEffect(() => {
    if (initialService) {
      setServicio(initialService.title);
      setSelectedCompany(initialService.company);
    } else {
      setSelectedCompany(initialCompany);
    }
  }, [initialService, initialCompany, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hola GRUPO SCOBEL, deseo cotizar el servicio de *${servicio || 'Servicios Integrales'}* con la empresa *${selectedCompany === 'corporation' ? 'SCOBEL CORPORATION' : 'SCOBEL GLOBAL BUSINESS'}*. Mi nombre es ${nombre || '(Cliente)'} y mi teléfono es ${telefono}.`;
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-slate-100"
          >
            {/* Header del Modal */}
            <div className="bg-gradient-to-r from-[#0b488f] to-[#072f5f] p-6 text-white flex items-center justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#f1b138]">
                  Cotización Rápida & Gratuita
                </span>
                <h3 className="text-xl font-bold mt-0.5">GRUPO SCOBEL</h3>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Cerrar ventana"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900">¡Cotización Solicitada!</h4>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  Hemos recibido su solicitud. Un especialista de la división se comunicará en menos de 2 horas.
                </p>
                <div className="pt-4 flex flex-col gap-2">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Acelerar atención vía WhatsApp</span>
                  </button>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      onClose();
                    }}
                    className="w-full py-2.5 rounded-xl text-slate-500 hover:text-slate-800 text-xs font-semibold"
                  >
                    Cerrar ventana
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* Selector de sub-empresa */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Unidad de Negocio:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedCompany('corporation')}
                      className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                        selectedCompany === 'corporation'
                          ? 'bg-blue-50 border-[#0b488f] text-[#0b488f] ring-2 ring-[#0b488f]/20'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      SCOBEL CORPORATION
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedCompany('global-business')}
                      className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                        selectedCompany === 'global-business'
                          ? 'bg-amber-50 border-[#f1b138] text-amber-900 ring-2 ring-[#f1b138]/30'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <Wrench className="w-3.5 h-3.5" />
                      GLOBAL BUSINESS
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nombre o Contacto *
                    </label>
                    <input
                      type="text"
                      required
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      placeholder="Tu nombre"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0b488f] text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                      placeholder="987 654 321"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0b488f] text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ejemplo@correo.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0b488f] text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Servicio Requerido
                    </label>
                    <input
                      type="text"
                      value={servicio}
                      onChange={(e) => setServicio(e.target.value)}
                      placeholder="Ej. Desinfección / Alfombras"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0b488f] text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Detalles Adicionales
                  </label>
                  <textarea
                    rows={3}
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    placeholder="Escriba aquí los requerimientos específicos o ubicación..."
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0b488f] text-xs resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#0b488f] to-[#072f5f] text-white font-extrabold text-xs shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5 text-[#f1b138]" />
                    <span>Enviar Cotización</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                    title="Cotizar directamente por WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
