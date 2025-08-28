
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Video, Brain, Scissors, Check, Target, Zap, Star, Play, Facebook, Instagram, Youtube, X, Menu, TrendingUp, Camera, Film, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const openCalendly = () => {
    scrollToSection('calendly');
  };

  const openImagePreview = (image: string) => {
    setSelectedImage(image);
  };

  const closeImagePreview = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash navigation from other pages
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        // Small delay to ensure page is fully loaded
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    };

    // Handle initial load with hash
    handleHashNavigation();

    // Handle hash changes
    window.addEventListener('hashchange', handleHashNavigation);
    
    return () => window.removeEventListener('hashchange', handleHashNavigation);
  }, []);

  useEffect(() => {
    // Initialize Calendly widget
    const initCalendly = () => {
      if ((window as any).Calendly) {
        const calendlyElement = document.querySelector('.calendly-inline-widget');
        if (calendlyElement) {
          (window as any).Calendly.initInlineWidget({
            url: 'https://calendly.com/philipkolev-altromedia',
            parentElement: calendlyElement,
            prefill: {},
            utm: {}
          });
        }
      }
    };

    // Check if Calendly script is already loaded
    if ((window as any).Calendly) {
      initCalendly();
    } else {
      // Load Calendly script if not already loaded
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = initCalendly;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-altro-white font-poppins">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md border-b border-white/10 shadow-lg' 
          : 'bg-transparent'
      } text-altro-white`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Link to="/">
                <img 
                  src="/lovable-uploads/6670e9a4-49ac-477c-92b0-093297ac4c50.png" 
                  alt="AltroMedia Logo" 
                  className="h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('services')}
                className="hover:text-primary transition-colors"
              >
                Услуги
              </button>
              <Link to="/portfolio" className="hover:text-primary transition-colors">
                Портфолио
              </Link>
              <Link to="/team" className="hover:text-primary transition-colors">
                Екип
              </Link>
              <button 
                onClick={openCalendly}
                className="hover:text-primary transition-colors"
              >
                Контакти
              </button>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button 
                variant="premium"
                className="hidden md:block"
                onClick={openCalendly}
              >
                Свържи се с нас
              </Button>
              
              {/* Mobile menu */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="md:hidden text-altro-white hover:bg-white/10"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 bg-altro-black border-l border-gray-800">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-8">
                      <img 
                        src="/lovable-uploads/6670e9a4-49ac-477c-92b0-093297ac4c50.png" 
                        alt="AltroMedia Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    
                    <nav className="flex flex-col space-y-6">
                      <button 
                        onClick={() => {
                          scrollToSection('services');
                          setIsMobileMenuOpen(false);
                        }}
                        className="text-altro-white hover:text-primary transition-colors text-left text-lg font-medium py-3"
                      >
                        Услуги
                      </button>
                      <Link 
                        to="/portfolio" 
                        className="text-altro-white hover:text-primary transition-colors text-lg font-medium py-3"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Портфолио
                      </Link>
                      <Link 
                        to="/team" 
                        className="text-altro-white hover:text-primary transition-colors text-lg font-medium py-3"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Екип
                      </Link>
                      <button 
                        onClick={() => {
                          openCalendly();
                          setIsMobileMenuOpen(false);
                        }}
                        className="text-altro-white hover:text-primary transition-colors text-left text-lg font-medium py-3"
                      >
                        Контакти
                      </button>
                    </nav>
                    
                    <div className="mt-auto pb-8">
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 text-white py-4 text-lg font-medium"
                        onClick={() => {
                          openCalendly();
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        Свържи се с нас
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-hero text-altro-white min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero-overlay"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
            Съдържание, което изпъква
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in px-4 text-white/90 leading-relaxed">
            Видео и фото за брандове, които искат резултати
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-scale-in">
            <Button 
              variant="premium"
              size="lg" 
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
              onClick={openCalendly}
            >
              Свържи се с нас
            </Button>
            <Link to="/portfolio" className="w-full sm:w-auto">
              <Button 
                variant="hero"
                size="lg" 
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
              >
                Гледай портфолио
              </Button>
            </Link>
          </div>
        </div>
        <ScrollIndicator />
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 text-altro-black px-4">
            Нашият процес
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Запитване от клиент",
                description: "Получаваме запитване от клиента и основна информация за нуждите му",
                icon: <Mail className="w-8 h-8 text-primary" />
              },
              {
                step: "2", 
                title: "Среща и анализ",
                description: "Провеждаме разговор, за да разберем в дълбочина целите на бизнеса и как можем да помогнем ефективно",
                icon: <MessageSquare className="w-8 h-8 text-primary" />
              },
              {
                step: "3",
                title: "Планиране и структура", 
                description: "Изготвяме индивидуална концепция, сценарии и content структура, според нуждите на клиента",
                icon: <Brain className="w-8 h-8 text-primary" />
              },
              {
                step: "4",
                title: "Заснемане",
                description: "Извършваме професионално видео и фотозаснемане",
                icon: <Video className="w-8 h-8 text-primary" />
              },
              {
                step: "5", 
                title: "Монтаж",
                description: "Работим по монтажа, визуалните ефекти и аудио обработка",
                icon: <Scissors className="w-8 h-8 text-primary" />
              },
              {
                step: "6",
                title: "Финализиране",
                description: "След финално одобрение, изпращаме готовите файлове",
                icon: <Check className="w-8 h-8 text-primary" />
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-card p-8 rounded-xl shadow-card hover:shadow-premium transition-all duration-300 animate-fade-in group hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-4 shadow-glow">
                    {item.step}
                  </div>
                  <div className="transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-altro-black">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-altro-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 text-altro-black px-4">
            Нашите услуги
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {[
              {
                icon: <Video className="w-12 h-12 text-primary" />,
                title: "Видеозаснемане",
                description: "Професионално заснемане на корпоративни видеа, реклама и събития"
              },
              {
                icon: <Camera className="w-12 h-12 text-primary" />,
                title: "Фотозаснемане",
                description: "Висококачествени фотографски услуги за всеки повод и бизнес"
              },
              {
                icon: <Film className="w-12 h-12 text-primary" />,
                title: "Видео монтаж",
                description: "Експертен монтаж с модерни ефекти и професионална обработка"
              },
              {
                icon: <Share2 className="w-12 h-12 text-primary" />,
                title: "Поддръжка на Социални Мрежи",
                description: "Стратегии и съдържание за социални медии с измерими резултати"
              },
              {
                icon: <TrendingUp className="w-12 h-12 text-primary" />,
                title: "Meta Ads",
                description: "Професионални рекламни кампании във Facebook и Instagram за максимален ROI"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-card p-8 rounded-xl shadow-card hover:shadow-premium transition-all duration-300 animate-fade-in text-center group hover:scale-105">
                <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-altro-black">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 text-altro-black px-4">
            Какво казват клиентите ни
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto px-4">
            <div 
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer aspect-video w-full"
              onClick={() => openImagePreview('https://www.youtube.com/embed/cFsMKgU9Eoo?si=sqMqczn2HUFZDCIo')}
            >
              <iframe
                src="https://www.youtube.com/embed/cFsMKgU9Eoo?si=sqMqczn2HUFZDCIo"
                title="Client Testimonial 1"
                className="w-full h-full pointer-events-none"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                <Play className="text-white w-12 md:w-16 h-12 md:h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            <div 
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer aspect-video w-full"
              onClick={() => openImagePreview('https://www.youtube.com/embed/Y1hzB5Qw6h4?si=nnw2YQY4rz7RVgyM')}
            >
              <iframe
                src="https://www.youtube.com/embed/Y1hzB5Qw6h4?si=nnw2YQY4rz7RVgyM"
                title="Client Testimonial 2"
                className="w-full h-full pointer-events-none"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                <Play className="text-white w-12 md:w-16 h-12 md:h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 sm:py-24 lg:py-28 bg-altro-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 lg:mb-20 text-altro-black">
            Работили сме с
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12 sm:gap-16 lg:gap-20 items-center justify-items-center max-w-7xl mx-auto">
            {[
              { src: "/lovable-uploads/8095cafc-b0fb-45be-afd7-e892ec34d5a1.png", alt: "ARIA" },
              { src: "/lovable-uploads/68e91179-d88d-443a-9260-c10d9d1219cd.png", alt: "AVON" },
              { src: "/lovable-uploads/9cbabe44-cf56-4fac-ab0e-cae4f7688e2b.png", alt: "Cazam" },
              { src: "/lovable-uploads/eda8f7c7-f988-4092-b97a-961400d0aef8.png", alt: "H2U" },
              { src: "/lovable-uploads/69bbdc55-d425-472a-b3d7-8fe4240e71e9.png", alt: "Ресторант Пълнчета" },
              { src: "/lovable-uploads/1affba59-5750-4238-a955-6aea4bad12b7.png", alt: "Purple Crystal" },
              { src: "/lovable-uploads/cb3048f0-275f-4621-bbf7-ee68123c1590.png", alt: "35 Years" },
              { src: "/lovable-uploads/9bd917f2-9ce9-43d3-9ea1-18c8b2ed1a2c.png", alt: "STATERA" },
              { src: "/lovable-uploads/1627016e-e219-4488-a028-b81db6333c42.png", alt: "Worldwide Cars" },
              { src: "/lovable-uploads/7396e63e-a73b-4ebf-af48-ce78a74653c6.png", alt: "Client Logo" }
            ].map((client, index) => (
              <div 
                key={index} 
                className={`flex items-center justify-center p-4 sm:p-6 lg:p-8 rounded-xl shadow-card hover:shadow-premium transition-all duration-300 hover:scale-110 group ${
                  index === 5 ? 'bg-gray-200' : index === 9 ? 'bg-gray-200' : 'bg-gradient-card'
                }`}
              >
                <img 
                  src={client.src} 
                  alt={client.alt}
                  className="w-24 h-20 sm:w-32 sm:h-24 md:w-40 md:h-28 lg:w-48 lg:h-32 xl:w-52 xl:h-36 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Visual Block */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 text-altro-black px-4">
            Нашето портфолио
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { src: "https://www.youtube.com/embed/COBAdZF74Pc?si=hBljk7HRz7gHw1-u", category: "Автомобили", type: "video" },
              { src: "/lovable-uploads/98b6e792-51fc-49b9-8fd5-1d1049d9a50e.png", category: "Мода", type: "image" },
              { src: "/lovable-uploads/d2ef0aa7-ed92-4055-a697-e3f98a530372.png", category: "Недвижими Имоти", type: "image" },
              { src: "/lovable-uploads/01de2498-bd46-4229-a7b2-31eaa29e93bb.png", category: "Продукт", type: "image" },
              { src: "https://www.youtube.com/embed/9YuKXd8yFm0?si=LIHCCo-bxPFuB2r2", category: "Ресторанти", type: "video" },
              { src: "/lovable-uploads/c450c5d2-9b1c-4a31-9459-eb014f9a8927.png", category: "Събития", type: "image" }
            ].map((item, index) => (
              <div key={index} className="block">
                <div 
                  className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer aspect-square"
                  onClick={() => item.type === "image" ? openImagePreview(item.src) : openImagePreview(item.src)}
                >
                  {item.type === "video" ? (
                    <iframe
                      src={item.src}
                      title={`${item.category} Video`}
                      className="w-full h-full pointer-events-none"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <img 
                      src={item.src} 
                      alt={`${item.category} Portfolio`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <Play className="text-white w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mx-auto mb-2" />
                      <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/portfolio">
              <Button variant="premium" size="lg" className="px-8 py-4 text-lg">
                Виж цялото портфолио
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why AltroMedia Section */}
      <section className="py-20 bg-altro-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-altro-black px-4">
              Защо AltroMedia?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-12 px-4">
              Стратегия, естетика и съдържание с резултат.<br />
              Ние не просто снимаме – изграждаме визуален актив за твоя бранд.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Target className="w-12 h-12 text-primary" />,
                  title: "Бизнес резултат",
                  description: "Всеки проект е насочен към постигане на конкретни бизнес цели"
                },
                {
                  icon: <Video className="w-12 h-12 text-primary" />,
                  title: "Премиум визия",
                  description: "Високо качество и професионален подход във всеки детайл"
                },
                {
                  icon: <Zap className="w-12 h-12 text-primary" />,
                  title: "Бърза реализация",
                  description: "Ефективни процеси за навременно завършване на проектите"
                }
              ].map((feature, index) => (
                <div key={index} className="text-center animate-fade-in">
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-altro-black">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-altro-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 px-4">
            Готови ли сте да създадем нещо страхотно?
          </h2>
          <Button 
            size="lg"
            className="bg-altro-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            onClick={openCalendly}
          >
            Запази безплатна консултация
          </Button>
        </div>
      </section>

      {/* Contact Section - Only Calendly */}
      <section id="calendly" className="py-20 bg-altro-black text-altro-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 px-4">
            Резервирай консултация
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-altro-white rounded-lg overflow-hidden">
              <div 
                className="calendly-inline-widget"
                data-url="https://calendly.com/philipkolev-altromedia"
                style={{ minWidth: '320px', height: '700px' }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer 
        scrollToServices={() => scrollToSection('services')}
        scrollToCalendly={openCalendly}
      />

      {/* Image Preview Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={closeImagePreview}
        >
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeImagePreview}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
            >
              <X className="w-6 h-6" />
            </button>
            {selectedImage.includes('youtube.com') ? (
              <iframe
                src={selectedImage}
                title="Video Preview"
                className="w-full h-[90vh] rounded-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <img
                src={selectedImage}
                alt="Preview"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
