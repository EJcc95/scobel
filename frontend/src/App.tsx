import { useState } from 'react';
import { Header } from './components/layout/Header';
import { HeroSection } from './components/sections/HeroSection';
import { CompanyCorporation } from './components/sections/CompanyCorporation';
import { CompanyGlobalBusiness } from './components/sections/CompanyGlobalBusiness';
import { ServiceSelector } from './components/sections/ServiceSelector';
import { AboutSection } from './components/sections/AboutSection';
import { LocationContact } from './components/sections/LocationContact';
import { CtaSection } from './components/sections/CtaSection';
import { Footer } from './components/layout/Footer';
import { QuoteModal } from './components/sections/QuoteModal';
import type { ServiceItem } from './data/servicesData';
import { CONTACT_INFO } from './data/servicesData';
import { MessageCircle } from 'lucide-react';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [targetCompany, setTargetCompany] = useState<'corporation' | 'global-business'>('corporation');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleOpenQuoteModal = (company?: 'corporation' | 'global-business') => {
    setSelectedService(null);
    if (company) {
      setTargetCompany(company);
    }
    setModalOpen(true);
  };

  const handleSelectServiceToQuote = (service: ServiceItem) => {
    setSelectedService(service);
    setTargetCompany(service.company);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-[#f1b138] selection:text-slate-950">
      {/* Header Sticky con soporte de Navegación y Subempresas */}
      <Header onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Animado con Tabs de Empresas */}
        <HeroSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Sección Nosotros & Métricas */}
        <AboutSection />

        {/* Sub-empresa 1: SCOBEL CORPORATION */}
        <CompanyCorporation onOpenQuoteModal={(comp) => handleOpenQuoteModal(comp)} />

        {/* Sub-empresa 2: SCOBEL GLOBAL BUSINESS */}
        <CompanyGlobalBusiness onOpenQuoteModal={(comp) => handleOpenQuoteModal(comp)} />

        {/* Catálogo Interactivo de Servicios */}
        <ServiceSelector onSelectServiceToQuote={handleSelectServiceToQuote} />

        {/* Ubicación y Formulario de Contacto */}
        <LocationContact />

        {/* Call to Action Banner */}
        <CtaSection onOpenQuoteModal={() => handleOpenQuoteModal()} />
      </main>

      {/* Footer Integral */}
      <Footer />

      {/* Modal de Cotizaciones Interactivo */}
      <QuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialCompany={targetCompany}
        initialService={selectedService}
      />

      {/* Botón flotante de WhatsApp permanente */}
      <a
        href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessageDefault + 'información de servicios')}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#f1b138] border-2 border-white"></span>
      </a>
    </div>
  );
}

export default App;
