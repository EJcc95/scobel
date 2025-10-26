import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ROUTES } from '../../constants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Overlay oscuro cuando hay dropdown activo - Desktop only */}
      <div
        className={`hidden lg:block fixed inset-0 bg-black/20 transition-opacity duration-300 z-40 pointer-events-none ${
          activeDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
          isScrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
      <div className="relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={ROUTES.HOME} className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-12 h-12 bg-linear-to-br from-[#FDB913] to-[#003DA5] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <span className="text-white font-bold text-xl">GS</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[#003DA5] font-bold text-xl leading-tight">
                GRUPO
              </span>
              <span className="text-[#FDB913] font-bold text-xl leading-tight">
                SCOBEL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            <Link
              to={ROUTES.HOME}
              className={`px-4 py-2 text-[#003DA5] hover:text-[#FDB913] font-medium transition-colors duration-200 ${
                location.pathname === ROUTES.HOME ? 'text-[#FDB913]' : ''
              }`}
            >
              Inicio
            </Link>

            {/* Scobel Corporation Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('corporation')}
            >
              <Link
                to={ROUTES.CORPORATION}
                className={`flex items-center space-x-1 px-4 py-2 text-[#003DA5] hover:text-[#FDB913] font-medium transition-colors duration-200 ${
                  location.pathname === ROUTES.CORPORATION ? 'text-[#FDB913]' : ''
                }`}
              >
                <span>Scobel Corporation</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'corporation' ? 'rotate-180' : ''
                  }`}
                />
              </Link>
            </div>

            {/* Scobel Business Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('business')}
            >
              <Link
                to={ROUTES.BUSINESS}
                className={`flex items-center space-x-1 px-4 py-2 text-[#003DA5] hover:text-[#FDB913] font-medium transition-colors duration-200 ${
                  location.pathname === ROUTES.BUSINESS ? 'text-[#FDB913]' : ''
                }`}
              >
                <span>Scobel Business</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'business' ? 'rotate-180' : ''
                  }`}
                />
              </Link>
            </div>

            <a
              href="#contact"
              onClick={scrollToContact}
              className="px-4 py-2 text-[#003DA5] hover:text-[#FDB913] font-medium transition-colors duration-200"
            >
              Contacto
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={scrollToContact}
              className="group relative px-6 py-3 bg-[#003DA5] text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <span className="relative z-10">Solicitar Consulta</span>
              <div className="absolute inset-0 bg-[#FDB913] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                Solicitar Consulta
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[#003DA5] hover:text-[#FDB913] transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-screen pb-6' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col space-y-3 pt-4">
            <Link
              to={ROUTES.HOME}
              className={`px-2 py-2 text-[#003DA5] hover:text-[#FDB913] font-medium transition-colors duration-200 ${
                location.pathname === ROUTES.HOME ? 'text-[#FDB913]' : ''
              }`}
            >
              Inicio
            </Link>

            {/* Mobile Corporation Dropdown */}
            <div>
              <div className="flex items-center justify-between">
                <Link
                  to={ROUTES.CORPORATION}
                  className={`flex-1 px-2 py-2 text-[#003DA5] hover:text-[#FDB913] font-medium transition-colors duration-200 ${
                    location.pathname === ROUTES.CORPORATION ? 'text-[#FDB913]' : ''
                  }`}
                >
                  Scobel Corporation
                </Link>
                <button
                  onClick={() => toggleDropdown('corporation')}
                  className="p-2 text-[#003DA5] hover:text-[#FDB913] transition-colors duration-200"
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === 'corporation' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeDropdown === 'corporation' ? 'max-h-96 mt-2' : 'max-h-0'
                }`}
              >
                <div className="ml-4 space-y-2 p-3 bg-[#003DA5]/5 rounded-lg">
                  <div className="py-2">
                    <h4 className="font-semibold text-[#003DA5] text-sm mb-1">Limpieza Industrial</h4>
                    <p className="text-xs text-gray-600">Plantas y sectores productivos</p>
                  </div>
                  <div className="py-2">
                    <h4 className="font-semibold text-[#003DA5] text-sm mb-1">Saneamiento Ambiental</h4>
                    <p className="text-xs text-gray-600">Desinfección especializada</p>
                  </div>
                  <div className="py-2">
                    <h4 className="font-semibold text-[#003DA5] text-sm mb-1">Servicios de Jardinería</h4>
                    <p className="text-xs text-gray-600">Paisajismo y áreas verdes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Business Dropdown */}
            <div>
              <div className="flex items-center justify-between">
                <Link
                  to={ROUTES.BUSINESS}
                  className={`flex-1 px-2 py-2 text-[#003DA5] hover:text-[#FDB913] font-medium transition-colors duration-200 ${
                    location.pathname === ROUTES.BUSINESS ? 'text-[#FDB913]' : ''
                  }`}
                >
                  Scobel Business
                </Link>
                <button
                  onClick={() => toggleDropdown('business')}
                  className="p-2 text-[#003DA5] hover:text-[#FDB913] transition-colors duration-200"
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === 'business' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeDropdown === 'business' ? 'max-h-96 mt-2' : 'max-h-0'
                }`}
              >
                <div className="ml-4 space-y-2 p-3 bg-[#FDB913]/10 rounded-lg">
                  <div className="py-2">
                    <h4 className="font-semibold text-[#003DA5] text-sm mb-1">Pintura en General</h4>
                    <p className="text-xs text-gray-600">Interiores y exteriores</p>
                  </div>
                  <div className="py-2">
                    <h4 className="font-semibold text-[#003DA5] text-sm mb-1">Gasfitería y Electricidad</h4>
                    <p className="text-xs text-gray-600">Instalación y mantenimiento</p>
                  </div>
                  <div className="py-2">
                    <h4 className="font-semibold text-[#003DA5] text-sm mb-1">Tratamiento de Pisos</h4>
                    <p className="text-xs text-gray-600">Pulido y vitrificación</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              onClick={scrollToContact}
              className="px-2 py-2 text-[#003DA5] hover:text-[#FDB913] font-medium transition-colors duration-200"
            >
              Contacto
            </a>

            <button
              onClick={scrollToContact}
              className="w-full px-6 py-3 bg-[#003DA5] text-white font-semibold rounded-full hover:bg-[#FDB913] transition-colors duration-300 mt-2"
            >
              Solicitar Consulta
            </button>
          </nav>
        </div>
        </div>
      </div>

      {/* Full-Width Mega Menus - Desktop */}
      <div 
        className="hidden lg:block"
        onMouseLeave={() => setActiveDropdown(null)}
      >
        {/* Corporation Mega Menu */}
        <div
          className={`absolute left-0 right-0 top-full w-full bg-white shadow-2xl rounded-b-xl transition-all duration-300 ${
            activeDropdown === 'corporation'
              ? 'opacity-100 visible translate-y-0'
              : 'opacity-0 invisible -translate-y-4 pointer-events-none'
          }`}
          onMouseEnter={() => setActiveDropdown('corporation')}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Info */}
              <div className="lg:col-span-1 bg-linear-to-br from-[#003DA5]/5 to-[#FDB913]/5 p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-linear-to-br from-[#003DA5] to-[#002B73] rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                    <span className="text-white font-bold text-xl">SC</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#003DA5] text-xl mb-2">
                      Limpieza y Desinfección
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Servicios especializados industriales y ambientales
                    </p>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  to={ROUTES.CORPORATION}
                  className="p-4 hover:bg-[#003DA5]/5 rounded-lg transition-colors duration-200 cursor-pointer"
                >
                  <h4 className="font-semibold text-[#003DA5] text-base mb-2">Limpieza Industrial</h4>
                  <p className="text-sm text-gray-600">Plantas industriales, oficinas y laboratorios químicos</p>
                </Link>
                <Link
                  to={ROUTES.CORPORATION}
                  className="p-4 hover:bg-[#003DA5]/5 rounded-lg transition-colors duration-200 cursor-pointer"
                >
                  <h4 className="font-semibold text-[#003DA5] text-base mb-2">Saneamiento Ambiental</h4>
                  <p className="text-sm text-gray-600">Desinfección y limpieza de pozos sépticos</p>
                </Link>
                <Link
                  to={ROUTES.CORPORATION}
                  className="p-4 hover:bg-[#003DA5]/5 rounded-lg transition-colors duration-200 cursor-pointer"
                >
                  <h4 className="font-semibold text-[#003DA5] text-base mb-2">Control de Plagas</h4>
                  <p className="text-sm text-gray-600">Desratización y fumigación profesional</p>
                </Link>
                <div className="p-4 flex items-center justify-center">
                  <Link
                    to={ROUTES.CORPORATION}
                    className="flex items-center space-x-2 text-[#003DA5] hover:text-[#FDB913] font-semibold transition-colors duration-200 group"
                  >
                    <span>Ver todos los servicios</span>
                    <span className="text-[#FDB913] group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Mega Menu */}
        <div
          className={`absolute left-0 right-0 top-full w-full bg-white shadow-2xl rounded-b-xl transition-all duration-300 ${
            activeDropdown === 'business'
              ? 'opacity-100 visible translate-y-0'
              : 'opacity-0 invisible -translate-y-4 pointer-events-none'
          }`}
          onMouseEnter={() => setActiveDropdown('business')}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Info */}
              <div className="lg:col-span-1 bg-linear-to-br from-[#FDB913]/10 to-[#FFE066]/5 p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-linear-to-br from-[#FDB913] to-[#FFE066] rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                    <span className="text-[#003DA5] font-bold text-xl">SB</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#003DA5] text-xl mb-2">
                      Mantenimiento Integral
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Servicios de mantenimiento y rehabilitación
                    </p>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  to={ROUTES.BUSINESS}
                  className="p-4 hover:bg-[#FDB913]/10 rounded-lg transition-colors duration-200 cursor-pointer"
                >
                  <h4 className="font-semibold text-[#003DA5] text-base mb-2">Pintura y Acabados</h4>
                  <p className="text-sm text-gray-600">Pintura de interiores, exteriores y fachadas</p>
                </Link>
                <Link
                  to={ROUTES.BUSINESS}
                  className="p-4 hover:bg-[#FDB913]/10 rounded-lg transition-colors duration-200 cursor-pointer"
                >
                  <h4 className="font-semibold text-[#003DA5] text-base mb-2">Instalaciones</h4>
                  <p className="text-sm text-gray-600">Gasfitería, electricidad y telefonía</p>
                </Link>
                <Link
                  to={ROUTES.BUSINESS}
                  className="p-4 hover:bg-[#FDB913]/10 rounded-lg transition-colors duration-200 cursor-pointer"
                >
                  <h4 className="font-semibold text-[#003DA5] text-base mb-2">Tratamiento de Pisos</h4>
                  <p className="text-sm text-gray-600">Pulido, vitrificación y cristalización</p>
                </Link>
                <div className="p-4 flex items-center justify-center">
                  <Link
                    to={ROUTES.BUSINESS}
                    className="flex items-center space-x-2 text-[#003DA5] hover:text-[#FDB913] font-semibold transition-colors duration-200 group"
                  >
                    <span>Ver todos los servicios</span>
                    <span className="text-[#FDB913] group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;