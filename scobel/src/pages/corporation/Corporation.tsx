import { Building2, Shield, Users, BarChart3, Target, Briefcase, Award, TrendingUp } from 'lucide-react';

const Corporation = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Consultoría Estratégica',
      description: 'Desarrollamos estrategias personalizadas para optimizar operaciones y maximizar el retorno de inversión.',
      features: ['Análisis de mercado', 'Planificación estratégica', 'Optimización de procesos'],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Gestión de Riesgos',
      description: 'Identificamos y mitigamos riesgos empresariales con metodologías probadas y análisis exhaustivo.',
      features: ['Evaluación de riesgos', 'Planes de contingencia', 'Cumplimiento normativo'],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Capital Humano',
      description: 'Maximizamos el potencial de tu equipo con estrategias de desarrollo y gestión de talento.',
      features: ['Reclutamiento especializado', 'Desarrollo de liderazgo', 'Cultura organizacional'],
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Análisis Financiero',
      description: 'Proporcionamos análisis financiero detallado para la toma de decisiones estratégicas.',
      features: ['Reportes financieros', 'Análisis de rentabilidad', 'Proyecciones fiscales'],
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Transformación Organizacional',
      description: 'Guiamos procesos de cambio para adaptarse a nuevos desafíos y oportunidades de mercado.',
      features: ['Gestión del cambio', 'Reestructuración', 'Mejora continua'],
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Gobernanza Corporativa',
      description: 'Implementamos estructuras de gobierno corporativo efectivas y transparentes.',
      features: ['Compliance', 'Políticas corporativas', 'Auditoría interna'],
    },
  ];

  const benefits = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Experiencia Comprobada',
      description: 'Más de 15 años trabajando con las empresas líderes del mercado',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Resultados Medibles',
      description: 'Incremento promedio del 35% en eficiencia operacional',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Equipo Especializado',
      description: 'Consultores certificados con amplia experiencia internacional',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Confidencialidad Garantizada',
      description: 'Protocolos estrictos de seguridad y confidencialidad de información',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-linear-to-br from-[#003DA5] via-[#002B73] to-[#001a4d] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-[#FDB913]/10 rounded-full blur-3xl top-10 -left-20 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-[#FDB913]/10 rounded-full blur-3xl bottom-10 -right-20 animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shrink-0">
                <Building2 className="w-10 h-10 text-[#003DA5]" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white">
                  Scobel Corporation
                </h1>
                <p className="text-xl text-[#FDB913] mt-2">
                  Soluciones Corporativas de Alto Nivel
                </p>
              </div>
            </div>

            <p className="text-xl text-white/90 mb-8 max-w-3xl">
              Transformamos organizaciones a través de consultoría estratégica,
              gestión eficiente y soluciones innovadoras que impulsan el crecimiento
              sostenible y la excelencia operacional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-[#FDB913] text-[#003DA5] font-semibold rounded-full hover:bg-[#FFE066] transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                Solicitar Consultoría
              </button>
              <button
                onClick={() => {
                  const servicesSection = document.getElementById('services');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#003DA5] transition-all duration-300"
              >
                Ver Servicios
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20">
              <div>
                <div className="text-4xl font-bold text-[#FDB913]">250+</div>
                <div className="text-white/70 mt-1">Empresas Asesoradas</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#FDB913]">98%</div>
                <div className="text-white/70 mt-1">Satisfacción</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#FDB913]">35%</div>
                <div className="text-white/70 mt-1">Mejora Promedio</div>
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
              Nuestros Servicios Corporativos
            </h2>
            <p className="text-xl text-gray-600">
              Soluciones integrales diseñadas para empresas que buscan la excelencia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-linear-to-br from-[#003DA5] to-[#002B73] rounded-xl flex items-center justify-center text-white mb-6">
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
              ¿Por Qué Elegir Scobel Corporation?
            </h2>
            <p className="text-xl text-gray-600">
              Nuestro compromiso con la excelencia nos distingue
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#FDB913] rounded-full flex items-center justify-center text-[#003DA5] mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-[#003DA5] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-[#003DA5] to-[#002B73]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para Transformar tu Empresa?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Agenda una consulta gratuita con nuestros expertos y descubre cómo podemos
            ayudarte a alcanzar tus objetivos empresariales.
          </p>
          <button
            onClick={scrollToContact}
            className="px-10 py-5 bg-[#FDB913] text-[#003DA5] font-bold text-lg rounded-full hover:bg-[#FFE066] transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            Solicitar Consulta Gratuita
          </button>
        </div>
      </section>
    </div>
  );
};

export default Corporation;
