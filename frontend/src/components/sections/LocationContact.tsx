import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  Building,
  Sparkles,
  Wrench
} from 'lucide-react';
import { CONTACT_INFO } from '../../data/servicesData';

export const LocationContact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    telefono: '',
    email: '',
    subEmpresa: 'corporation',
    servicio: 'Saneamiento Ambiental',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contacto" className="py-24 bg-slate-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 text-[#0b488f] text-xs font-black uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Canales de Atención
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Ubicación Central y Contacto Directo
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Estamos estratégicamente ubicados para brindar cobertura rápida en Lima Metropolitana y provincias.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Tarjetas de Información de Contacto (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Sede Principal Card */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-[#0b488f]/10 text-[#0b488f] flex items-center justify-center mb-4">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Oficinas Corporativas</h3>
              <p className="text-xs font-semibold text-[#0b488f] mb-4">GRUPO SCOBEL MULTISERVICE</p>
              
              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0b488f] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Dirección:</strong>
                    <span>{CONTACT_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#0b488f] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Central Telefónica:</strong>
                    <span>{CONTACT_INFO.phoneDisplay}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#0b488f] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Correos Electrónicos:</strong>
                    <div className="flex flex-col">
                      <span>{CONTACT_INFO.email}</span>
                      <span className="text-xs text-slate-500">{CONTACT_INFO.ventasEmail}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#0b488f] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Horario de Operaciones:</strong>
                    <span>{CONTACT_INFO.hours}</span>
                  </div>
                </div>
              </div>

              {/* Botón WhatsApp Inmediato */}
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessageDefault)}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Atención Rápida por WhatsApp</span>
              </a>
            </div>

            {/* Mapa visual estilizado */}
            <div className="bg-white rounded-3xl p-4 border border-slate-200/80 shadow-md overflow-hidden">
              <div className="relative rounded-2xl overflow-hidden h-52 bg-slate-200 border border-slate-300">
                <iframe
                  title="Mapa Ubicación Grupo Scobel"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.378906915153!2d-77.0315878!3d-12.0911762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8651e70e179%3A0xc39f80164c919a3b!2sAv.%20las%20Begonias%20441%2C%20San%20Isidro%2015046!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="text-center text-xs text-slate-500 mt-2 font-medium">
                Cobertura en todo Lima Metropolitana, Callao y Proyectos en Provincias.
              </p>
            </div>
          </div>

          {/* Formulario de Cotización / Contacto (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 lg:p-10 border border-slate-200/80 shadow-xl">
            <div className="mb-6">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0b488f]">
                Atención Inmediata
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-1">
                Solicita una Cotización o Visita Técnica
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Completa el formulario y un especialista de la división correspondiente se comunicará contigo.
              </p>
            </div>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-600 text-white mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-emerald-950">¡Solicitud Recibida con Éxito!</h4>
                <p className="text-sm text-emerald-800 max-w-md mx-auto">
                  Gracias por comunicarte con GRUPO SCOBEL. Un asesor comercial de nuestra división se pondrá en contacto en breve.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-emerald-700 text-white font-bold text-xs hover:bg-emerald-800 transition-colors"
                >
                  Enviar otra consulta
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Selector de Sub-Empresa */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Selecciona la Unidad de Interés:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, subEmpresa: 'corporation' })}
                      className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${
                        formData.subEmpresa === 'corporation'
                          ? 'border-[#0b488f] bg-blue-50/80 ring-2 ring-[#0b488f]/20 font-bold text-[#0b488f]'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <Sparkles className="w-4 h-4 text-[#0b488f]" />
                      <div className="text-xs">
                        <div className="font-extrabold">SCOBEL CORPORATION</div>
                        <div className="text-[10px] text-slate-500 font-normal">Limpieza & Saneamiento</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, subEmpresa: 'global-business' })}
                      className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${
                        formData.subEmpresa === 'global-business'
                          ? 'border-[#f1b138] bg-amber-50/80 ring-2 ring-[#f1b138]/30 font-bold text-amber-900'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <Wrench className="w-4 h-4 text-[#f1b138]" />
                      <div className="text-xs">
                        <div className="font-extrabold">SCOBEL GLOBAL BUSINESS</div>
                        <div className="text-[10px] text-slate-500 font-normal">Mantenimiento & Servicios</div>
                      </div>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nombre Completo o Contacto *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      placeholder="Ej. Ing. Carlos Mendoza"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0b488f] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Empresa o Razón Social (Opcional)
                    </label>
                    <input
                      type="text"
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      placeholder="Ej. Corporación Perú S.A."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0b488f] text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Teléfono o Celular *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      placeholder="Ej. 987 654 321"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0b488f] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="contacto@empresa.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0b488f] text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Detalle del Servicio o Requerimiento *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    placeholder="Indique metros cuadrados aproximados, ubicación del local, frecuencia requerida o tipo de servicio..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0b488f] text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0b488f] to-[#072f5f] text-white font-extrabold text-sm shadow-xl hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#f1b138]" />
                  <span>Enviar Solicitud de Cotización Formal</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
