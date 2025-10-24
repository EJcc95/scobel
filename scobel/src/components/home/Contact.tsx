import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { CONTACT_INFO } from '../../constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003DA5] mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600">
            Estamos listos para ayudarte a alcanzar tus objetivos empresariales
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#003DA5] mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#003DA5] rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#003DA5] mb-1">Email</h4>
                    <div className="space-y-1">
                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="text-gray-600 hover:text-[#FDB913] transition-colors duration-200 block"
                      >
                        {CONTACT_INFO.email}
                      </a>
                      <a
                        href={`mailto:${CONTACT_INFO.emailGlobal}`}
                        className="text-gray-600 hover:text-[#FDB913] transition-colors duration-200 block text-sm"
                      >
                        {CONTACT_INFO.emailGlobal}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#003DA5] rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#003DA5] mb-1">Teléfono</h4>
                    <div className="space-y-1">
                      <a
                        href={`tel:${CONTACT_INFO.phone}`}
                        className="text-gray-600 hover:text-[#FDB913] transition-colors duration-200 block"
                      >
                        {CONTACT_INFO.phone}
                      </a>
                      <a
                        href={`tel:${CONTACT_INFO.phoneAlt}`}
                        className="text-gray-600 hover:text-[#FDB913] transition-colors duration-200 block"
                      >
                        {CONTACT_INFO.phoneAlt}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#003DA5] rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#003DA5] mb-1">Dirección</h4>
                    <p className="text-gray-600">{CONTACT_INFO.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Horarios */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-[#003DA5] mb-4 text-lg">Horarios de Atención</h4>
              <div className="space-y-2">
                <p className="text-gray-600">{CONTACT_INFO.schedule.weekdays}</p>
                <p className="text-gray-600">{CONTACT_INFO.schedule.saturday}</p>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.8474885598544!2d-77.01512492407474!3d-12.137200188147743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b7f5e9d0d8d5%3A0x6e3c1e6e3e3e3e3e!2sPasaje%20Holanda%2C%20Santiago%20de%20Surco%2015023%2C%20Per%C3%BA!5e0!3m2!1ses!2s!4v1234567890123!5m2!1ses!2s"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Grupo Scobel"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-[#003DA5] mb-2"
                  >
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB913] focus:border-transparent transition-all duration-200"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-[#003DA5] mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB913] focus:border-transparent transition-all duration-200"
                    placeholder="juan@empresa.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-[#003DA5] mb-2"
                  >
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB913] focus:border-transparent transition-all duration-200"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-[#003DA5] mb-2"
                  >
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB913] focus:border-transparent transition-all duration-200"
                    placeholder="Nombre de la empresa"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-[#003DA5] mb-2"
                >
                  Asunto *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB913] focus:border-transparent transition-all duration-200"
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="corporation">Limpieza Industrial y Saneamiento</option>
                  <option value="business">Mantenimiento y Rehabilitación</option>
                  <option value="jardineria">Servicios de Jardinería</option>
                  <option value="general">Consulta General</option>
                  <option value="cotizacion">Solicitar Cotización</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-[#003DA5] mb-2"
                >
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB913] focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Cuéntanos más sobre tu proyecto o necesidad..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#003DA5] text-white font-semibold py-4 px-8 rounded-lg hover:bg-[#FDB913] hover:text-[#003DA5] transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>Enviando...</span>
                ) : (
                  <>
                    <span>Enviar Mensaje</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
