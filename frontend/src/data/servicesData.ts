export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge: string;
  features: string[];
  company: 'corporation' | 'global-business';
  popular?: boolean;
}

export interface CompanyInfo {
  id: 'corporation' | 'global-business';
  name: string;
  subtitle: string;
  shortName: string;
  tagline: string;
  color: string;
  accentColor: string;
  description: string;
  certifications: string[];
  services: ServiceItem[];
}

export const SCOBEL_CORPORATION_DATA: CompanyInfo = {
  id: 'corporation',
  name: 'SCOBEL CORPORATION S.A.C.',
  shortName: 'SCOBEL CORPORATION',
  subtitle: 'Limpieza Integral y Saneamiento Ambiental',
  tagline: 'Líderes en bioseguridad, salubridad y desinfección corporativa e industrial',
  color: '#0b488f',
  accentColor: '#f1b138',
  description: 'Unidad especializada en servicios de saneamiento ambiental, bioseguridad y limpieza profunda para empresas, industrias, centros comerciales, instituciones de salud y residencias de alto estándar.',
  certifications: [
    'Autorización Sanitaria DIGESA / MINSA',
    'Certificación de Saneamiento Ambiental Oficial',
    'Personal Técnico Altamente Calificado & EPP Normado',
    'Insumos Ecológicos & Químicos Certificados'
  ],
  services: [
    {
      id: 'corp-saneamiento',
      title: 'Saneamiento Ambiental Integral',
      shortDesc: 'Desinfección, desratización, desinsectación y control de plagas con certificación oficial para auditorías.',
      fullDesc: 'Programas de manejo integrado de plagas (MIP) con productos de última generación avalados por el MINSA. Emisión de certificado legal para inspecciones municipales y de salud.',
      iconName: 'ShieldCheck',
      badge: 'Certificado MINSA',
      popular: true,
      company: 'corporation',
      features: [
        'Desinfección de ambientes contra virus y bacterias',
        'Desinsectación profunda (rastreros y voladores)',
        'Desratización con estaciones cebaderas seguras',
        'Certificado oficial con código de registro'
      ]
    },
    {
      id: 'corp-limpieza-corporativa',
      title: 'Limpieza Integral de Oficinas y Edificios',
      shortDesc: 'Mantenimiento diario, semanal o mensual para corporativos, plantas industriales y sedes comerciales.',
      fullDesc: 'Gestión completa de personal de limpieza, supervisión continua, maquinaria industrial de lavado y aspirado, garantizando ambientes impecables y productivos.',
      iconName: 'Sparkles',
      badge: 'Corporativo',
      company: 'corporation',
      features: [
        'Operarios uniformados con seguro SCTR',
        'Limpieza de vidrios en altura y fachadas',
        'Tratamiento, abrillantado y pulido de pisos',
        'Supervisión y control de calidad periódico'
      ]
    },
    {
      id: 'corp-limpieza-industrial',
      title: 'Limpieza Industrial y Post-Construcción',
      shortDesc: 'Remoción de residuos, desmanchado de superficies tras obras y limpieza profunda de plantas.',
      fullDesc: 'Servicio especializado con maquinaria de alta potencia para entrega de obras, almacenes, galpones y plantas industriales en óptimas condiciones operativas.',
      iconName: 'Factory',
      badge: 'Alto Rendimiento',
      company: 'corporation',
      features: [
        'Limpieza de fin de obra y entrega llave en mano',
        'Lavado a presión de pisos industriales',
        'Remoción de pintura, cemento y adhesivos',
        'Eliminación y disposición técnica de residuos'
      ]
    },
    {
      id: 'corp-reservorios',
      title: 'Limpieza y Desinfección de Reservorios y Cisternas',
      shortDesc: 'Lavado bactericida y desinfección de tanques de agua elevados y cisternas subterráneas.',
      fullDesc: 'Mantenimiento preventivo y correctivo según norma sanitaria con análisis microbiológico del agua para garantizar el consumo seguro.',
      iconName: 'Droplets',
      badge: 'Salubridad Vital',
      company: 'corporation',
      features: [
        'Evacuación y cepillado profundo de sedimentos',
        'Desinfección con agentes clorados aprobados',
        'Pruebas de potabilidad y calidad de agua',
        'Informe técnico con registro fotográfico'
      ]
    }
  ]
};

export const SCOBEL_GLOBAL_BUSINESS_DATA: CompanyInfo = {
  id: 'global-business',
  name: 'SCOBEL GLOBAL BUSINESS S.A.C.',
  shortName: 'SCOBEL GLOBAL BUSINESS',
  subtitle: 'Servicios Generales, Mantenimiento & Acabados',
  tagline: 'Soluciones técnicas integrales y especializadas para la conservación de sus inmuebles',
  color: '#f1b138',
  accentColor: '#0b488f',
  description: 'División experta en mantenimiento preventivo, correctivo y servicios generales de alta demanda técnica: lavado especializado de alfombras, pintura profesional, gasfitería, redes eléctricas y remodelación de acabados.',
  certifications: [
    'Técnicos especialistas certificados',
    'Garantía por escrito en cada servicio',
    'Atención rápida para emergencias corporativas y residenciales',
    'Uso de herramientas y materiales de primera línea'
  ],
  services: [
    {
      id: 'gb-alfombras',
      title: 'Lavado de Alfombras y Tapizones al Seco',
      shortDesc: 'Tecnología de inyección-extracción y secado ultra rápido para alfombras de alto tránsito, sillones y tapicería.',
      fullDesc: 'Eliminación de manchas difíciles, ácaros, malos olores y bacterias en alfombras residenciales y de oficina, permitiendo el uso en tiempo récord sin humedad residual.',
      iconName: 'Layers',
      badge: 'Secado Rápido',
      popular: true,
      company: 'global-business',
      features: [
        'Lavado de tapizones modulados y continuos',
        'Tratamiento antimanchas y desodorización profunda',
        'Desinfección de sofás, sillas de oficina y paneles',
        'No daña las fibras ni decolora los tejidos'
      ]
    },
    {
      id: 'gb-pintura',
      title: 'Pintura en General y Acabados',
      shortDesc: 'Pintura de interiores, fachadas, estructuras metálicas, esmaltes y aplicaciones epóxicas.',
      fullDesc: 'Trabajos de resane, empaste, lijado al vacío y aplicación de pinturas lavables, látex, satinadas, anticorrosivas y epóxico de alto tránsito para plantas y cocheras.',
      iconName: 'Paintbrush',
      badge: 'Acabado Pro',
      company: 'global-business',
      features: [
        'Pintura de interiores y exteriores con andamiaje seguro',
        'Pintura epóxica de pisos para alto tráfico',
        'Tratamiento antihumedad y sellado de grietas',
        'Colores exactos y asesoría técnica de diseño'
      ]
    },
    {
      id: 'gb-gasfiteria',
      title: 'Gasfitería Técnica en General',
      shortDesc: 'Instalación y reparación de redes de agua, desagüe, bombas de agua, sanitarios y termas.',
      fullDesc: 'Detección y reparación de filtraciones no visibles, cambio de tuberías, mantenimiento de bombas hidroneumáticas y redes sanitarias completas.',
      iconName: 'Wrench',
      badge: 'Técnico Especializado',
      company: 'global-business',
      features: [
        'Detección electrónica de fugas de agua',
        'Mantenimiento de bombas de agua y presurizadoras',
        'Desatoro con máquinas electromecánicas',
        'Instalación de griferías, inodoros y fluxómetros'
      ]
    },
    {
      id: 'gb-electricidad',
      title: 'Electricidad en General & Redes',
      shortDesc: 'Instalaciones eléctricas industriales y residenciales, tableros, iluminación LED y pozos a tierra.',
      fullDesc: 'Auditoría, balanceo de cargas, cableado estructurado, mantenimiento de pozos a tierra con protocolo de medición para certificación INDECI.',
      iconName: 'Zap',
      badge: 'Norma Técnica',
      company: 'global-business',
      features: [
        'Mantenimiento y certificación de pozo a tierra',
        'Instalación de tableros eléctricos y llaves termomagnéticas',
        'Conversión a iluminación LED de alta eficiencia',
        'Solución de cortocircuitos y sobrecargas'
      ]
    }
  ]
};

export const STATS_DATA = [
  { value: '+12', label: 'Años de Experiencia', desc: 'Trayectoria sólida en multiservicios' },
  { value: '+1,500', label: 'Clientes Satisfechos', desc: 'Empresas, industrias y hogares' },
  { value: '100%', label: 'Certificación Garantizada', desc: 'Protocolos de salubridad y seguridad' },
  { value: '24/7', label: 'Respuesta Inmediata', desc: 'Atención y cotizaciones prioritarias' }
];

export const CONTACT_INFO = {
  companyGroup: 'GRUPO SCOBEL',
  phone: '+51 987 654 321',
  phoneDisplay: '(01) 745-8900 / 987 654 321',
  email: 'contacto@gruposcobel.com',
  ventasEmail: 'cotizaciones@gruposcobel.com',
  address: 'Av. Las Begonias 441, San Isidro, Lima - Perú',
  hours: 'Lunes a Sábado: 8:00 AM - 7:00 PM | Emergencias 24h',
  whatsappNumber: '51987654321',
  whatsappMessageDefault: 'Hola Grupo SCOBEL, deseo solicitar una cotización para los servicios de '
};
