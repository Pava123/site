import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ServicesGrid from "./components/ServicesGrid";
import CTAForm from "./components/CTAForm";
import SpecialtiesGrid from "./components/SpecialtiesGrid";
import PlaceholderSections from "./components/PlaceholderSections";
import VideoReviews from "./components/VideoReviews";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQList from "./components/FAQList";
import Footer from "./components/Footer";
import OrderModal from "./components/OrderModal";
import ArticlePage from "./components/ArticlePage";
import { CONTACT_INFO } from "./data";

export default function App() {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [presetWorkType, setPresetWorkType] = useState("Практика стандарт");
  const [presetSpecialty, setPresetSpecialty] = useState("");
  const [hasDiscountApplied, setHasDiscountApplied] = useState(false);
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      const hostContainer = document.getElementById("app-root");
      if (hostContainer) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const openOrder = (workType = "Практика стандарт", specialty = "", discount = false) => {
    setPresetWorkType(workType);
    setPresetSpecialty(specialty);
    setHasDiscountApplied(discount);
    setIsOrderOpen(true);
  };

  const closeOrder = () => {
    setIsOrderOpen(false);
  };

  const navigateHome = () => {
    window.location.hash = "";
  };

  // Determine if we are rendering an educational subpage
  const isSubpageActive = currentHash && currentHash.startsWith("#/");

  return (
    <div id="app-root" className="min-h-screen bg-white text-slate-900 selection:bg-sky-500 selection:text-white relative">
      {/* Header */}
      <Header onOpenOrder={openOrder} />

      {/* Main Content Sections */}
      <main className="transition-all duration-300">
        {isSubpageActive ? (
          <ArticlePage 
            currentHash={currentHash} 
            onOpenOrder={openOrder} 
            onNavigateHome={navigateHome} 
          />
        ) : (
          <>
            {/* Hero Section */}
            <Hero onOpenOrder={openOrder} />

            {/* Services / Directions Grid */}
            <ServicesGrid onOpenOrder={openOrder} />

            {/* Inline Consultation Call to action */}
            <CTAForm />

            {/* Specialties / Directions search list Grid */}
            <SpecialtiesGrid onOpenOrder={openOrder} />

            {/* Useful Articles & Other work types placeholders */}
            <PlaceholderSections />

            {/* Video feedback and VK redirect block */}
            <VideoReviews />

            {/* Steps diagram instructions list */}
            <HowItWorks onOpenOrder={openOrder} />

            {/* Translucent detailed Guarantees grid */}
            <WhyChooseUs onOpenOrder={openOrder} />

            {/* Interactive FAQ accordion block */}
            <FAQList />
          </>
        )}
      </main>

      {/* Bottom info section Tag clouds */}
      <Footer onOpenOrder={openOrder} />

      {/* Interactive Form Order Calculation Popup */}
      <OrderModal
        isOpen={isOrderOpen}
        onClose={closeOrder}
        presetWorkType={presetWorkType}
        presetSpecialty={presetSpecialty}
        hasDiscountApplied={hasDiscountApplied}
      />

      {/* Floating Messenger Buttons (Bottom Right) with 12px vertical spacing */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* WhatsApp */}
        <a
          href={CONTACT_INFO.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          title="Связаться в WhatsApp"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 active:scale-95 transition-all group relative"
        >
          <svg className="h-5.5 w-5.5 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="absolute right-12 top-1 w-24 text-center bg-slate-900 text-white text-[10px] font-bold py-1 px-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-wider">WhatsApp</span>
        </a>

        {/* Telegram */}
        <a
          href={CONTACT_INFO.telegram}
          target="_blank"
          rel="noopener noreferrer"
          title="Связаться в Telegram"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0088cc] text-white shadow-lg hover:scale-110 active:scale-95 transition-all group relative"
        >
          <svg className="h-5.5 w-5.5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.37.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .29z" />
          </svg>
          <span className="absolute right-12 top-1 w-24 text-center bg-slate-900 text-white text-[10px] font-bold py-1 px-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-wider">Telegram</span>
        </a>

        {/* MAX */}
        <a
          href={CONTACT_INFO.max}
          target="_blank"
          rel="noopener noreferrer"
          title="Посмотреть на MAX.ru"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8A2BE2] text-white shadow-lg hover:scale-110 active:scale-95 transition-all group relative font-black text-sm"
        >
          М
          <span className="absolute right-12 top-1 w-24 text-center bg-slate-900 text-white text-[10px] font-bold py-1 px-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-wider">MAX.ru</span>
        </a>
      </div>

    </div>
  );
}
