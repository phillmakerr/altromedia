
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Footer from "@/components/Footer";
import { useNavigateToSection } from "@/hooks/useNavigateToSection";
import { useIsMobile } from "@/hooks/use-mobile";

const Team = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigateToSection = useNavigateToSection();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const teamMembers = [
    {
      name: "Филип Колев",
      role: "Основател и управител", 
      shortDescription: "Основател и управител на AltroMedia с богат опит в създаването на визуално съдържание.",
      fullDescription: "Филип Колев е основatel и управител на AltroMedia – сертифициран фотограф и видеооператор с богат опит в създаването на визуално съдържание. Неговият път започва с музикални видеа и късометражни филми, където изгражда креативен усет към кадъра, монтажа и ритъма. Впоследствие се насочва към бизнес и комерсиални проекти, където съчетава артистичен подход с стратегическо мислене, за да създава визуални истории с въздействие. AltroMedia е четвъртият бизнес на Филип откакто е на 18 – поредна стъпка в неговата отдаденост към високия стандарт, професионализма и създаването на стойност към хората и бизнесите.",
      image: "/lovable-uploads/40bd0768-66f5-4d4f-a7e2-af780fe1d366.png"
    },
    {
      name: "Кристиан Първанов",
      role: "Визуален разказвач",
      shortDescription: "Визуален разказвач с богат опит във фотографията, филмовото изкуство и цветната корекция.",
      fullDescription: "Кристиан Първанов е визуален разказвач с богат опит във фотографията, филмовото изкуство и цветната корекция. Известен със способността си да улавя автентични моменти и смели визии, Кристиан придава кинематографичен стил на всеки проект. От бранд кампании до документални заснемания, работата му съчетава креативност и стратегия, за да създаде въздействащи визуални истории, които свързват.",
      image: "/lovable-uploads/a332b364-a3de-4b67-8c57-632a8652ad91.png"
    },
    {
      name: "Феликс", 
      role: "Фото и видео специалист",
      shortDescription: "Професионален фото и видео специалист с 5 години опит и фокус върху динамичния монтаж.",
      fullDescription: "Феликс се занимава професионално с фото и видеозаснемане от 5 години. Силен е на терен – улавя кадъра бързо и работи фокусирано. Монтажът е също негова силна страна, с внимание към ритъм, динамика и финален вид. Има опит със заснемане на всичко – от лични събития като сватби и кръщенета до корпоративни видеа и реклами за различни брандове.",
      image: "/lovable-uploads/e92c494b-07e9-4ca7-aba5-396a94741c1e.png"
    },
    {
      name: "Светлин",
      role: "Бизнес мениджър",
      shortDescription: "Ключова фигура в бизнес организацията, управляваща корпоративните и международните клиенти.",
      fullDescription: "Светлин е ключова фигура в бизнес организацията на AltroMedia, като управлява отношенията с корпоративните и международните клиенти. Благодарение на неговия стратегически подход и отлични комуникационни умения, компанията изгражда устойчиви партньорства и разширява влиянието си извън пределите на страната.",
      image: "/lovable-uploads/fee22bc6-4233-48c4-a5b0-2388ab829f21.png"
    }
  ];

  return (
    <div className="min-h-screen bg-altro-white font-poppins">
      {/* Header */}
      <header className="bg-black/90 backdrop-blur-sm text-altro-white sticky top-0 z-50 border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <img 
                  src="/lovable-uploads/6670e9a4-49ac-477c-92b0-093297ac4c50.png" 
                  alt="AltroMedia Logo" 
                  className="h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <button onClick={() => navigateToSection('services')} className="hover:text-primary transition-colors">
                Услуги
              </button>
              <Link to="/portfolio" className="hover:text-primary transition-colors">
                Портфолио
              </Link>
              <Link to="/team" className="hover:text-primary transition-colors text-primary">
                Екип
              </Link>
              <button onClick={() => navigateToSection('calendly')} className="hover:text-primary transition-colors">
                Контакти
              </button>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button 
                variant="premium"
                className="hidden md:block"
                onClick={() => navigateToSection('calendly')}
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
                          navigateToSection('services');
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
                        className="text-primary text-lg font-medium py-3"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Екип
                      </Link>
                      <button 
                        onClick={() => {
                          navigateToSection('calendly');
                          setIsMobileMenuOpen(false);
                        }}
                        className="text-altro-white hover:text-primary transition-colors text-left text-lg font-medium py-3"
                      >
                        Контакти
                      </button>
                    </nav>
                    
                    <div className="mt-auto pb-8">
                      <Button 
                        variant="premium"
                        className="w-full py-4 text-lg font-medium"
                        onClick={() => {
                          navigateToSection('calendly');
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
      <section className="py-12 md:py-20 bg-gradient-to-br from-altro-black via-gray-900 to-primary text-altro-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 animate-fade-in">
            Нашият екип
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto animate-fade-in">
            Запознайте се с талантливите професионалисти, които правят магията възможна
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-altro-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow animate-fade-in">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="aspect-square bg-gray-200 overflow-hidden cursor-pointer">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className={`${isMobile ? 'max-w-[95vw] max-h-[90vh] overflow-y-auto' : 'max-w-2xl'}`}>
                    <DialogHeader>
                      <DialogTitle className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold`}>{member.name}</DialogTitle>
                    </DialogHeader>
                    <div className={`flex ${isMobile ? 'flex-col' : 'flex-col md:flex-row'} gap-4 md:gap-6`}>
                      <div className={`${isMobile ? 'w-full' : 'md:w-1/3'}`}>
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className={`w-full ${isMobile ? 'max-w-xs mx-auto' : ''} h-auto rounded-lg object-contain`}
                        />
                      </div>
                      <div className={`${isMobile ? 'w-full' : 'md:w-2/3'}`}>
                        <p className={`text-primary font-medium mb-3 md:mb-4 ${isMobile ? 'text-base' : 'text-lg'}`}>{member.role}</p>
                        <p className={`text-gray-700 leading-relaxed ${isMobile ? 'text-sm' : 'text-base'}`}>{member.fullDescription}</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-altro-black">{member.name}</h3>
                  <p className="text-primary font-medium mb-2 md:mb-3 text-sm md:text-base">{member.role}</p>
                  <p className="text-gray-600 text-xs md:text-sm">{member.shortDescription}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add Team Member Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-altro-black">Присъедини се към екипа</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Търсим талантливи и мотивирани професионалисти, които да се присъединят към нашата креативна семия
          </p>
          <Button 
            variant="premium"
            className="px-8 py-3"
            onClick={() => navigateToSection('calendly')}
          >
            Свържи се с нас
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Team;
