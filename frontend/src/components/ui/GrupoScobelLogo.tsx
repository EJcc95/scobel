import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showSubtitle?: boolean;
  theme?: 'dark' | 'light';
}

export const GrupoScobelLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  theme = 'dark'
}) => {
  const isLight = theme === 'light';

  const sizeStyles = {
    sm: { icon: 'w-8 h-8', title: 'text-lg', subtitle: 'text-[9px]' },
    md: { icon: 'w-10 h-10', title: 'text-xl', subtitle: 'text-[11px]' },
    lg: { icon: 'w-14 h-14', title: 'text-2xl', subtitle: 'text-xs' },
    hero: { icon: 'w-16 h-16 md:w-20 md:h-20', title: 'text-3xl md:text-4xl', subtitle: 'text-xs md:text-sm' },
  };

  const { icon, title, subtitle } = sizeStyles[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Icono de Escudo / Sinergia Dinámica de Scobel */}
      <div className={`relative flex items-center justify-center rounded-xl overflow-hidden shadow-md ${icon}`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Fondo gradiente dinámico */}
          <rect width="100" height="100" rx="22" fill="url(#scobel-logo-grad)" />
          
          {/* Curva / Símbolo 'S' entrelazada en Oro y Azul Claro */}
          <path
            d="M72 30C66 22 55 20 45 22C32 24.5 24 35 25 45C26 55 35 59 48 62C61 65 68 70 67 78C66 86 56 90 44 89C33 88 26 82 22 75"
            stroke="#f1b138"
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M34 26C40 22 49 21 57 23C70 26 78 36 76 46C74 54 66 59 53 62C40 65 33 69 34 77C35 83 43 87 53 86"
            stroke="#ffffff"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="4 6"
            opacity="0.85"
          />

          {/* Destello de brillo de limpieza y excelencia */}
          <circle cx="74" cy="24" r="5" fill="#f1b138" />
          <path d="M74 15V33M65 24H83" stroke="#f1b138" strokeWidth="2.5" strokeLinecap="round" />

          <defs>
            <linearGradient id="scobel-logo-grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0b488f" />
              <stop offset="1" stopColor="#062952" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Tipografía Corporativa */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`font-black tracking-tight ${title} ${isLight ? 'text-white' : 'text-[#0b488f]'}`}>
            GRUPO <span className="text-[#f1b138]">SCOBEL</span>
          </span>
        </div>
        {showSubtitle && (
          <span
            className={`font-semibold tracking-widest uppercase mt-0.5 ${subtitle} ${
              isLight ? 'text-blue-100/80' : 'text-slate-500'
            }`}
          >
            Multiservice Corporativo
          </span>
        )}
      </div>
    </div>
  );
};
