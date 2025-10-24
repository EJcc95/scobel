import { Link } from 'react-router-dom';
import {
  Building2,
  Sparkles,
  Droplets,
  Leaf,
  Bug,
  Beaker,
  Factory,
  PaintBucket,
  Wrench,
  Zap,
  Phone,
  Gem,
  Home,
  ArrowRight,
} from 'lucide-react';
import { ROUTES } from '../../constants';

const Services = () => {
  const corporationServices = [
    {
      icon: <Factory className="w-8 h-8" />,
      title: 'Limpieza Industrial',
      description:
        'Servicios especializados de limpieza para plantas industriales y sectores productivos.',
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Limpieza de Oficinas',
      description:
        'Limpieza integral y especializada para oficinas, empresas y edificios corporativos.',
    },
    {
      icon: <Beaker className="w-8 h-8" />,
      title: 'Laboratorios Químicos',
      description:
        'Desinfección especializada de laboratorios con procedimientos certificados.',
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: 'Saneamiento Ambiental',
      description:
        'Servicios de saneamiento y limpieza de pozos sépticos con equipos especializados.',
    },
    {
      icon: <Bug className="w-8 h-8" />,
      title: 'Desratización',
      description:
        'Control y erradicación de roedores con más de 20 años de experiencia.',
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Jardinería',
      description:
        'Servicios de jardinería, paisajismo y mantenimiento de áreas verdes.',
    },
  ];

  const businessServices = [
    {
      icon: <PaintBucket className="w-8 h-8" />,
      title: 'Pintura en General',
      description:
        'Pintura de exteriores e interiores para edificios, oficinas, casas y fábricas.',
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Gasfitería',
      description:
        'Instalación y mantenimiento de redes de agua y desagüe de distintos diámetros.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Electricidad',
      description:
        'Instalación de cableado eléctrico, megados y mantenimiento correctivo.',
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Telefonía',
      description:
        'Instalación, reparación y programación de sistemas telefónicos.',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Limpieza de Cristales',
      description:
        'Limpieza de vidrios y fachadas con personal calificado en trabajos de altura.',
    },
    {
      icon: <Gem className="w-8 h-8" />,
      title: 'Tratamiento de Pisos',
      description:
        'Pulido, sellado, vitrificación y restauración de todo tipo de pisos.',
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Rehabilitación',
      description:
        'Servicios de rehabilitación de viviendas y espacios comerciales.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003DA5] mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600">
            Dos divisiones especializadas para cubrir todas las necesidades de tu empresa
          </p>
        </div>

        {/* Scobel Corporation */}
        <div className="mb-16">
          <div className="bg-linear-to-r from-[#003DA5] to-[#002B73] rounded-3xl p-8 md:p-12 mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0">
                <Sparkles className="w-8 h-8 text-[#003DA5]" />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Scobel Corporation
                </h3>
                <p className="text-white/80 text-lg mt-1">
                  Servicios de Limpieza y Desinfección Industrial
                </p>
              </div>
            </div>
            <p className="text-white/90 text-lg max-w-3xl">
              Con más de 20 años de experiencia, disponemos de personal altamente calificado 
              especializado en limpieza y saneamiento ambiental, brindando servicios de 
              excelencia para el sector industrial y corporativo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {corporationServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-14 h-14 bg-linear-to-br from-[#003DA5] to-[#002B73] rounded-xl flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold text-[#003DA5] mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to={ROUTES.CORPORATION}
              className="inline-flex items-center px-8 py-4 bg-[#003DA5] text-white font-semibold rounded-full hover:bg-[#002B73] transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <span>Conoce más sobre Corporation</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Scobel Global Business */}
        <div>
          <div className="bg-linear-to-r from-[#FDB913] to-[#FFE066] rounded-3xl p-8 md:p-12 mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0">
                <Wrench className="w-8 h-8 text-[#FDB913]" />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#003DA5]">
                  Scobel Global Business
                </h3>
                <p className="text-[#003DA5]/80 text-lg mt-1">
                  Servicios de Mantenimiento y Rehabilitación
                </p>
              </div>
            </div>
            <p className="text-[#003DA5]/90 text-lg max-w-3xl">
              Especialistas en mantenimiento integral de inmuebles, ofreciendo servicios 
              de pintura, gasfitería, electricidad, telefonía y rehabilitación con 
              profesionales experimentados y dedicados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {businessServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-14 h-14 bg-linear-to-br from-[#FDB913] to-[#FFE066] rounded-xl flex items-center justify-center text-[#003DA5] mb-4">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold text-[#003DA5] mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to={ROUTES.BUSINESS}
              className="inline-flex items-center px-8 py-4 bg-[#FDB913] text-[#003DA5] font-semibold rounded-full hover:bg-[#FFE066] transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <span>Conoce más sobre Business</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
