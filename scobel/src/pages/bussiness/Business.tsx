import { Briefcase, TrendingUp, Zap, Lightbulb, Megaphone, Smartphone, Globe, Rocket } from 'lucide-react';

const Business = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: 'Marketing Digital',
      description: 'Estrategias de marketing digital 360° para aumentar tu presencia online y conversiones.',
      features: ['SEO y SEM', 'Social Media Marketing', 'Content Marketing', 'Email Marketing'],
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Crecimiento de Negocio',
      description: 'Planes estratégicos para escalar tu negocio y alcanzar nuevos mercados de forma sostenible.',
      features: ['Análisis de mercado', 'Expansión comercial', 'Optimización de ventas'],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Transformación Digital',
      description: 'Digitalización de procesos empresariales para mejorar eficiencia y competitividad.',
      features: ['Automatización', 'Cloud Computing', 'Sistemas de gestión'],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Desarrollo de Apps',
      description: 'Aplicaciones móviles y web personalizadas para tu negocio y clientes.',
      features: ['Apps iOS y Android', 'Progressive Web Apps', 'E-commerce'],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Presencia Digital',
      description: 'Creación y optimización de tu presencia digital para destacar en el mercado.',
      features: ['Diseño web responsive', 'Brand identity', 'UX/UI Design'],
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovación y Consultoría',
      description: 'Soluciones innovadoras adaptadas a las necesidades específicas de tu industria.',
      features: ['Consultoría estratégica', 'Business Intelligence', 'Innovation Labs'],
    },
  ];

  const benefits = [
    {
      title: 'Ágiles y Flexibles',
      description: 'Nos adaptamos rápidamente a tus necesidades y cambios del mercado',
      stat: '48h',
      statLabel: 'Respuesta',
    },
    {
      title: 'ROI Comprobado',
      description: 'Retorno de inversión medible en cada proyecto que ejecutamos',
      stat: '3.5x',
      statLabel: 'ROI Promedio',
    },
    {
      title: 'Expertos Digitales',
      description: 'Equipo especializado en las últimas tecnologías y tendencias',
      stat: '50+',
      statLabel: 'Especialistas',
    },
    {
      title: 'Soporte Continuo',
      description: 'Acompañamiento constante durante y después de cada proyecto',
      stat: '24/7',
      statLabel: 'Disponibilidad',
    },
  ];

  const industries = [
    { name: 'Retail & E-commerce', icon: '🛒' },
    { name: 'Salud y Bienestar', icon: '⚕️' },
    { name: 'Educación', icon: '📚' },
    { name: 'Tecnología', icon: '💻' },
    { name: 'Servicios Profesionales', icon: '💼' },
    { name: 'Manufactura', icon: '🏭' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-linear-to-br from-[#FDB913] via-[#FFE066] to-[#FDB913] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-[#003DA5]/10 rounded-full blur-3xl top-10 -left-20 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-[#003DA5]/10 rounded-full blur-3xl bottom-10 -right-20 animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shrink-0">
                <Briefcase className="w-10 h-10 text-[#FDB913]" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-[#003DA5]">
                  Scobel Business
                </h1>
                <p className="text-xl text-[#003DA5]/80 mt-2">
                  Impulsa tu Negocio al Siguiente Nivel
                </p>
              </div>
            </div>

            <p className="text-xl text-[#003DA5]/90 mb-8 max-w-3xl">
              Empoderamos a pequeñas y medianas empresas con soluciones digitales,
              estrategias de marketing efectivas y herramientas tecnológicas que impulsan
              el crecimiento y la competitividad en el mercado actual.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-[#003DA5] text-white font-semibold rounded-full hover:bg-[#002B73] transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                Comenzar Ahora
              </button>
              <button
                onClick={() => {
                  const servicesSection = document.getElementById('services');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-4 border-2 border-[#003DA5] text-[#003DA5] font-semibold rounded-full hover:bg-[#003DA5] hover:text-white transition-all duration-300"
              >
                Explorar Servicios
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-[#003DA5]/20">
              <div>
                <div className="text-4xl font-bold text-[#003DA5]">300+</div>
                <div className="text-[#003DA5]/70 mt-1">Proyectos Exitosos</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#003DA5]">4.9/5</div>
                <div className="text-[#003DA5]/70 mt-1">Valoración Clientes</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#003DA5]">150%</div>
                <div className="text-[#003DA5]/70 mt-1">Crecimiento Promedio</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#003DA5] mb-4">
              Servicios que Impulsan tu Negocio
            </h2>
            <p className="text-xl text-gray-600">
              Soluciones ágiles y efectivas para empresas en crecimiento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-linear-to-br from-[#FDB913] to-[#FFE066] rounded-xl flex items-center justify-center text-[#003DA5] mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#003DA5] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-[#FDB913] rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#003DA5] mb-4">
              ¿Por Qué Elegir Scobel Business?
            </h2>
            <p className="text-xl text-gray-600">
              Nos enfocamos en resultados tangibles para tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-5xl font-bold text-[#FDB913] mb-2">
                  {benefit.stat}
                </div>
                <div className="text-sm text-gray-500 mb-4">{benefit.statLabel}</div>
                <h3 className="text-xl font-bold text-[#003DA5] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#003DA5] mb-4">
              Industrias que Atendemos
            </h2>
            <p className="text-xl text-gray-600">
              Experiencia comprobada en diversos sectores
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-[#FDB913]/10 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <p className="text-sm font-semibold text-[#003DA5]">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#003DA5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nuestro Proceso de Trabajo
            </h2>
            <p className="text-xl text-white/80">
              Simple, ágil y orientado a resultados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Análisis', desc: 'Entendemos tu negocio y objetivos' },
              { step: '02', title: 'Estrategia', desc: 'Diseñamos el plan de acción' },
              { step: '03', title: 'Ejecución', desc: 'Implementamos las soluciones' },
              { step: '04', title: 'Optimización', desc: 'Medimos y mejoramos continuamente' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-bold text-[#FDB913] mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-[#FDB913] to-[#FFE066]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Rocket className="w-16 h-16 text-[#003DA5] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-[#003DA5] mb-6">
            ¿Listo para Hacer Crecer tu Negocio?
          </h2>
          <p className="text-xl text-[#003DA5]/80 mb-8 max-w-2xl mx-auto">
            Agenda una consulta gratuita y descubre cómo nuestras soluciones pueden
            transformar tu negocio y aumentar tus ventas.
          </p>
          <button
            onClick={scrollToContact}
            className="px-10 py-5 bg-[#003DA5] text-white font-bold text-lg rounded-full hover:bg-[#002B73] transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            Agenda tu Consulta Gratuita
          </button>
        </div>
      </section>
    </div>
  );
};

export default Business;
