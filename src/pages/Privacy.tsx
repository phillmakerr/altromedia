
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useNavigateToSection } from "@/hooks/useNavigateToSection";
import { ArrowLeft, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Footer from "@/components/Footer";

const Privacy = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigateToSection = useNavigateToSection();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
                  className="h-10 w-auto"
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
              <Link to="/team" className="hover:text-primary transition-colors">
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
                        className="text-altro-white hover:text-primary transition-colors text-lg font-medium py-3"
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

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-altro-black">Политика за поверителност</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-lg mb-6">
            AltroMedia уважава правото ви на лична неприкосновеност. Настоящата политика разяснява как събираме, използваме и защитаваме вашите лични данни чрез сайта https://altromedia.io.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-altro-black">1. Каква информация събираме?</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Име, имейл и телефон (при попълване на форми)</li>
            <li>IP адрес, поведение и бисквитки (cookies)</li>
            <li>Устройство, браузър и време на престой (чрез analytics)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-altro-black">2. За какво използваме тази информация?</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>За да отговорим на запитвания</li>
            <li>За подобряване на съдържанието и UX</li>
            <li>За remarketing кампании в социални мрежи (ако е приложимо)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-altro-black">3. Споделяне на информация</h2>
          <p>
            Ние не споделяме личните ви данни с трети страни, освен ако това не се изисква по закон или не е нужно за предоставянето на конкретна услуга с ваше съгласие.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-altro-black">4. Бисквитки (Cookies)</h2>
          <p>
            Използваме cookies за подобряване на функционалността и анализ на трафика. Можете да ги деактивирате от настройките на браузъра си.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-altro-black">5. Вашите права</h2>
          <p>Имате право:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Да поискате достъп до личните си данни</li>
            <li>Да поискате корекция или изтриване</li>
            <li>Да възразите срещу тяхната обработка</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-altro-black">6. Сигурност</h2>
          <p>
            Използваме технически и организационни мерки за защита на вашите данни от неоторизиран достъп, загуба или злоупотреба.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-altro-black">7. Контакт</h2>
          <p>
            Ако имате въпроси относно политиката ни за поверителност:<br />
            <a href="mailto:studio@altromedia.io" className="text-primary hover:underline">studio@altromedia.io</a>
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Privacy;
