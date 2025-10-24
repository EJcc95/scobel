import { ArrowRight, Building2, Briefcase } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-linear-to-br from-[#003DA5] via-[#002B73] to-[#001a4d] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-[#FDB913]/10 rounded-full blur-3xl top-10 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-[#FDB913]/10 rounded-full blur-3xl bottom-10 -right-20 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Excelencia en
                <span className="block text-[#FDB913]">Servicios Generales</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80">
                Más de 20 años brindando soluciones especializadas
              </p>
            </div>

            <p className="text-lg text-white/70 max-w-xl">
              En Grupo Scobel, ofrecemos servicios de limpieza industrial, saneamiento 
              ambiental y mantenimiento integral con personal altamente calificado y 
              certificaciones que garantizan la calidad de nuestro trabajo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="group px-8 py-4 bg-[#FDB913] text-[#003DA5] font-semibold rounded-full hover:bg-[#FFE066] transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center"
              >
                <span>Solicitar Consulta</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button
                onClick={() => {
                  const servicesSection = document.getElementById('services');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#003DA5] transition-all duration-300 hover:scale-105"
              >
                Conocer Servicios
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#FDB913]">20+</div>
                <div className="text-sm text-white/70 mt-1">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#FDB913]">100+</div>
                <div className="text-sm text-white/70 mt-1">Clientes Corporativos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#FDB913]">100%</div>
                <div className="text-sm text-white/70 mt-1">Certificados</div>
              </div>
            </div>
          </div>

          {/* Visual elements */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[600px]">
              {/* Floating cards */}
              <div className="absolute top-0 right-0 w-72 bg-white rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-linear-to-br from-[#003DA5] to-[#002B73] rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#003DA5] mb-2">
                  Scobel Corporation
                </h3>
                <p className="text-gray-600 text-sm">
                  Limpieza y desinfección industrial y ambiental certificada
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-72 bg-white rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-linear-to-br from-[#FDB913] to-[#FFE066] rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-[#003DA5]" />
                </div>
                <h3 className="text-xl font-bold text-[#003DA5] mb-2">
                  Scobel Global Business
                </h3>
                <p className="text-gray-600 text-sm">
                  Mantenimiento integral y rehabilitación de inmuebles
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-[#FDB913] rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-4 border-[#FFFFFF] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
