const Companies = () => {
  const companies = [
    { id: 1, name: 'Statkraft', logo: 'https://via.placeholder.com/200x80/003DA5/FFFFFF?text=Statkraft' },
    { id: 2, name: 'American Airlines', logo: 'https://via.placeholder.com/200x80/003DA5/FFFFFF?text=American+Airlines' },
    { id: 3, name: 'Antares Aduanas', logo: 'https://via.placeholder.com/200x80/003DA5/FFFFFF?text=Antares' },
    { id: 4, name: 'Grupo Transmeridian', logo: 'https://via.placeholder.com/200x80/003DA5/FFFFFF?text=Transmeridian' },
    { id: 5, name: 'Despegar', logo: 'https://via.placeholder.com/200x80/003DA5/FFFFFF?text=Despegar' },
    { id: 6, name: 'Inverdes', logo: 'https://via.placeholder.com/200x80/003DA5/FFFFFF?text=Inverdes' },
    { id: 7, name: 'Lexmark', logo: 'https://via.placeholder.com/200x80/003DA5/FFFFFF?text=Lexmark' },
    { id: 8, name: 'Mitsui', logo: 'https://via.placeholder.com/200x80/003DA5/FFFFFF?text=Mitsui' },
    { id: 9, name: 'Salini Impregilo', logo: 'https://via.placeholder.com/200x80/003DA5/FFFFFF?text=Salini' },
    { id: 10, name: 'Weatherford', logo: 'https://via.placeholder.com/200x80/003DA5/FFFFFF?text=Weatherford' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003DA5] mb-4">
            Empresas que Confían en Nosotros
          </h2>
          <p className="text-xl text-gray-600">
            Trabajamos con las empresas líderes en sus industrias
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {companies.map((company) => (
            <div
              key={company.id}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-[#FDB913]/10 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 bg-linear-to-r from-[#003DA5] to-[#002B73] rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#FDB913] mb-2">
                20+
              </div>
              <div className="text-white/80">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#FDB913] mb-2">
                100+
              </div>
              <div className="text-white/80">Clientes Corporativos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#FDB913] mb-2">
                100%
              </div>
              <div className="text-white/80">Personal Certificado</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#FDB913] mb-2">
                24/7
              </div>
              <div className="text-white/80">Servicio Disponible</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
