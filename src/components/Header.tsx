import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface HeaderProps {
  scrollToServices?: () => void;
  scrollToCalendly?: () => void;
  isScrolled?: boolean;
}

const Header = ({ scrollToServices, scrollToCalendly, isScrolled = false }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const defaultScrollToServices = () => {
    window.location.href = "/#services";
  };

  const defaultScrollToCalendly = () => {
    window.location.href = "/#calendly";
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-md border-b border-white/10 shadow-lg' 
        : 'bg-transparent'
    } text-altro-white`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link 
              to="/" 
              onClick={() => {
                if (window.location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <img 
                src="/lovable-uploads/6670e9a4-49ac-477c-92b0-093297ac4c50.png" 
                alt="AltroMedia Logo" 
                className="h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={scrollToServices || defaultScrollToServices}
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
              onClick={scrollToCalendly || defaultScrollToCalendly}
              className="hover:text-primary transition-colors"
            >
              Контакти
            </button>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="premium"
              className="hidden md:block"
              onClick={scrollToCalendly || defaultScrollToCalendly}
            >
              Свържи се с нас
            </Button>
            
            {/* Mobile menu - implementation needed */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;