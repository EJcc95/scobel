import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { ROUTES, CONTACT_INFO } from '../../constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#003DA5] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <Link to={ROUTES.HOME} onClick={scrollToTop} className="inline-block">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-linear-to-br from-[#FDB913] to-white rounded-full flex items-center justify-center">
                  <span className="text-[#003DA5] font-bold text-xl">GS</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-lg leading-tight">
                    GRUPO
                  </span>
                  <span className="text-[#FDB913] font-bold text-lg leading-tight">
                    SCOBEL
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-white/80 text-sm">
              Más de 20 años brindando servicios de limpieza industrial, saneamiento ambiental y mantenimiento integral con personal certificado.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-[#FDB913] font-semibold text-lg mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to={ROUTES.HOME}
                  onClick={scrollToTop}
                  className="text-white/80 hover:text-[#FDB913] transition-colors duration-200 text-sm"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.CORPORATION}
                  onClick={scrollToTop}
                  className="text-white/80 hover:text-[#FDB913] transition-colors duration-200 text-sm"
                >
                  Scobel Corporation
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.BUSINESS}
                  onClick={scrollToTop}
                  className="text-white/80 hover:text-[#FDB913] transition-colors duration-200 text-sm"
                >
                  Scobel Business
                </Link>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/80 hover:text-[#FDB913] transition-colors duration-200 text-sm"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-[#FDB913] font-semibold text-lg mb-4">
              Nuestros Servicios
            </h3>
            <ul className="space-y-2">
              <li className="text-white/80 text-sm">Limpieza Industrial</li>
              <li className="text-white/80 text-sm">Saneamiento Ambiental</li>
              <li className="text-white/80 text-sm">Control de Plagas</li>
              <li className="text-white/80 text-sm">Mantenimiento Integral</li>
              <li className="text-white/80 text-sm">Servicios de Jardinería</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-[#FDB913] font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#FDB913] shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-1">
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-white/80 hover:text-[#FDB913] transition-colors duration-200 text-sm"
                  >
                    {CONTACT_INFO.email}
                  </a>
                  <a
                    href={`mailto:${CONTACT_INFO.emailGlobal}`}
                    className="text-white/80 hover:text-[#FDB913] transition-colors duration-200 text-xs"
                  >
                    {CONTACT_INFO.emailGlobal}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#FDB913] shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-1">
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="text-white/80 hover:text-[#FDB913] transition-colors duration-200 text-sm"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                  <a
                    href={`tel:${CONTACT_INFO.phoneAlt}`}
                    className="text-white/80 hover:text-[#FDB913] transition-colors duration-200 text-sm"
                  >
                    {CONTACT_INFO.phoneAlt}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#FDB913] shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">{CONTACT_INFO.address}</span>
              </li>
            </ul>

            {/* Redes sociales */}
            <div className="flex items-center space-x-4 mt-6">
              <a
                href={CONTACT_INFO.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#FDB913] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={CONTACT_INFO.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#FDB913] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} Grupo Scobel. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="#privacy"
                className="text-white/60 hover:text-[#FDB913] transition-colors duration-200 text-sm"
              >
                Política de Privacidad
              </a>
              <a
                href="#terms"
                className="text-white/60 hover:text-[#FDB913] transition-colors duration-200 text-sm"
              >
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
