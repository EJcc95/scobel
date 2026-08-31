import React from 'react';
import { GrupoScobelLogo } from '../ui/GrupoScobelLogo';
import { CONTACT_INFO } from '../../data/servicesData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  ArrowUpRight
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800/80">
          {/* Col 1: Grupo SCOBEL Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <GrupoScobelLogo size="lg" theme="light" />
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed pr-4 mt-4">
              Grupo empresarial peruano especializado en soluciones integrales de bioseguridad, saneamiento ambiental, desinfección hospitalaria y mantenimiento técnico especializado.
            </p>

            <div className="pt-2">
              <span className="text-xs text-slate-500 font-medium">RUC Multiservice Grupo Scobel</span>
              <div className="flex items-center gap-2 mt-1 text-xs text-[#f1b138]">
                <ShieldCheck className="w-4 h-4" />
                <span>Empresa Certificada y Acreditada</span>
              </div>
            </div>
          </div>

          {/* Col 2: SCOBEL CORPORATION (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-center gap-2 text-sm font-black text-white uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#0b488f]"></span>
              SCOBEL CORPORATION
            </div>
            <p className="text-xs text-blue-200/70 font-semibold">
              Limpieza & Saneamiento Ambiental
            </p>

            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#corporation" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#f1b138]" />
                  Desinfección & Fumigación MINSA
                </a>
              </li>
              <li>
                <a href="#corporation" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#f1b138]" />
                  Control de Plagas & Desratización
                </a>
              </li>
              <li>
                <a href="#corporation" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#f1b138]" />
                  Limpieza de Oficinas y Edificios
                </a>
              </li>
              <li>
                <a href="#corporation" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#f1b138]" />
                  Lavado de Cisternas y Tanques
                </a>
              </li>
              <li>
                <a href="#corporation" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#f1b138]" />
                  Limpieza Industrial y Post-Obra
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: SCOBEL GLOBAL BUSINESS (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-center gap-2 text-sm font-black text-white uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#f1b138]"></span>
              SCOBEL GLOBAL BUSINESS
            </div>
            <p className="text-xs text-amber-200/70 font-semibold">
              Mantenimiento & Acabados
            </p>

            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#global-business" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#f1b138]" />
                  Lavado de Alfombras y Tapizones al Seco
                </a>
              </li>
              <li>
                <a href="#global-business" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#f1b138]" />
                  Pintura en General y Pisos Epóxicos
                </a>
              </li>
              <li>
                <a href="#global-business" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#f1b138]" />
                  Gasfitería y Detección de Fugas
                </a>
              </li>
              <li>
                <a href="#global-business" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#f1b138]" />
                  Electricidad y Pozos a Tierra
                </a>
              </li>
              <li>
                <a href="#global-business" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#f1b138]" />
                  Mantenimiento General de Inmuebles
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacto Rápido (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-sm font-black text-white uppercase tracking-wider">
              Contacto
            </div>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#f1b138] shrink-0 mt-0.5" />
                <span>San Isidro, Lima - Perú</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#f1b138] shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#f1b138] shrink-0" />
                <span className="truncate">{CONTACT_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Barra de Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} GRUPO SCOBEL S.A.C. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-slate-300 transition-colors">Términos de Servicio</a>
            <a href="#hero" className="hover:text-slate-300 transition-colors">Política de Privacidad</a>
            <a href="#hero" className="hover:text-slate-300 transition-colors">Libro de Reclamaciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
