// Constantes de la aplicación Scobel

export const COLORS = {
  primary: {
    yellow: '#FDB913',
    blue: '#003DA5',
  },
  secondary: {
    lightYellow: '#FFE066',
    darkBlue: '#002B73',
  },
  neutral: {
    white: '#FFFFFF',
    black: '#000000',
    gray: '#F5F5F5',
    darkGray: '#333333',
  }
};

export const CONTACT_INFO = {
  email: 'scobelcorporation@scobel.pe',
  emailGlobal: 'scobelglobal@scobel.pe',
  phone: '(01) 247-5586',
  phoneAlt: '(01) 477-1841',
  address: 'Pasaje Holanda 124, Santiago de Surco, Lima - Perú',
  mapLocation: {
    lat: -12.1372,
    lng: -77.0129,
  },
  schedule: {
    weekdays: 'Lunes - Viernes: 8:00 AM - 5:00 PM',
    saturday: 'Sábado: 9:00 AM - 1:00 PM',
  },
  socialMedia: {
    facebook: 'https://www.facebook.com/Grupo-Scobel-103343728293330',
    linkedin: 'https://pe.linkedin.com/company/scobel-corporation',
  }
};

export const ROUTES = {
  HOME: '/',
  CORPORATION: '/corporation',
  BUSINESS: '/business',
  CONTACT: '#contact',
} as const;

// Información de la empresa
export const COMPANY_INFO = {
  name: 'GRUPO SCOBEL',
  experience: 'Más de 20 años',
  description: 'Grupo de trabajo especializado en servicios generales con amplia experiencia en el mercado peruano',
  divisions: {
    corporation: {
      name: 'SCOBEL CORPORATION S.A.C.',
      slogan: 'Servicios de Limpieza y Desinfección',
      focus: 'Industrial y Ambiental',
    },
    business: {
      name: 'SCOBEL GLOBAL BUSINESS',
      slogan: 'Servicios de Mantenimiento y Rehabilitación',
      focus: 'Soluciones Integrales',
    }
  }
};
