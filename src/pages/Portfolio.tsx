
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, X, Menu } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Footer from "@/components/Footer";
import { useNavigateToSection } from "@/hooks/useNavigateToSection";

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigateToSection = useNavigateToSection();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Handle URL hash navigation
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const element = document.querySelector(`[data-state="active"][value="${hash}"]`) as HTMLElement;
      if (element) {
        element.click();
      }
    }
  }, []);

  const businessImages = [
    "/lovable-uploads/76549904-218f-4c12-b334-01354c2e43a8.png",
    "/lovable-uploads/288ae474-45fb-4e0f-b8f5-14d936ec91a1.png", 
    "/lovable-uploads/dab8423e-dad0-4591-ac9e-692a888f6cca.png",
    "/lovable-uploads/48584e7d-7d0e-4257-99e2-532172d98b7f.png",
    "/lovable-uploads/a926ac59-f1aa-4671-97bb-cd5844c32f5d.png",
    "/lovable-uploads/8c165e12-a81c-4476-b738-8cdc591fe759.png",
    "/lovable-uploads/7150bb90-b38c-4e83-a874-cadf7b328da4.png",
    "/lovable-uploads/2dc659fa-96a7-4fd0-ae35-ab23aeaf6884.png"
  ];

  const advertisingImages = [
    "/lovable-uploads/98a8d805-c743-4fe7-ab79-2404de96e018.png",
    "/lovable-uploads/24ee585f-b80c-4fcf-a5ea-5c07e0f885f8.png",
    "/lovable-uploads/153f4129-74bd-4e58-9307-8acb70b93fc8.png",
    "/lovable-uploads/466831a0-963d-40c2-b707-17c05cc81195.png",
    "/lovable-uploads/2985eca6-246d-4ffb-ae62-5910d316efd0.png",
    "/lovable-uploads/963e7000-a116-4fef-b638-2c49fff2a64b.png",
    "/lovable-uploads/8fdc9e34-2f44-46d2-9284-b6e2ea592280.png"
  ];

  const eventsContent = [
    { type: "image", src: "/lovable-uploads/c450c5d2-9b1c-4a31-9459-eb014f9a8927.png" },
    { type: "image", src: "/lovable-uploads/1f0f2930-58c6-4700-b254-89b09e7da8cc.png" },
    { type: "image", src: "/lovable-uploads/3bbfd1cf-005f-4f3d-91ed-e4b61328c370.png" },
    { type: "image", src: "/lovable-uploads/f4f87c46-dd44-428c-af9c-654489553739.png" },
    { type: "image", src: "/lovable-uploads/c3fb5ed1-9ef2-454b-a961-35d4b32ab3a2.png" },
    { type: "image", src: "/lovable-uploads/4e6d903c-0320-4308-96f6-8b451062b0dd.png" },
    { type: "video", src: "https://www.youtube.com/embed/CFLPmYdLgJA?si=SISXOiCr2EsF3Gnk" },
    { type: "video", src: "https://www.youtube.com/embed/-9YZfntAXww?si=YGLuLrnWq8-VYYcY" },
    { type: "video", src: "https://www.youtube.com/embed/3RsLrXKpx6c?si=rMo4kQ9RlRhqVycN" }
  ];

  const productImages = [
    "/lovable-uploads/bf577443-b4a5-4137-a066-c085b29babcc.png",
    "/lovable-uploads/01de2498-bd46-4229-a7b2-31eaa29e93bb.png",
    "/lovable-uploads/898521a6-30ba-4d89-8321-7497f2b4ba4a.png",
    "/lovable-uploads/c029c094-ecc7-4369-8b1f-6fb52cf56e5d.png",
    "/lovable-uploads/9e259879-e004-408d-9ed5-3b62103d6492.png"
  ];

  const automobileContent = [
    { type: "image", src: "/lovable-uploads/ea94d7be-2f40-4dd5-8133-b5eb8af46648.png" },
    { type: "image", src: "/lovable-uploads/545b672d-965e-41b9-9eaf-efc557345788.png" },
    { type: "image", src: "/lovable-uploads/658434a8-1208-4514-8e0a-5def84fa49f8.png" },
    { type: "video", src: "https://www.youtube.com/embed/3wqWKV53MCo?si=0RuBaP5YiDaUI8ZH" },
    { type: "video", src: "https://www.youtube.com/embed/COBAdZF74Pc?si=AN6f-JiEedtyrUd_" },
    { type: "video", src: "https://www.youtube.com/embed/1heAH7rQoHw?si=Y4xCqxPIboK0sAK5" },
    { type: "video", src: "https://www.youtube.com/embed/8PNbGViKagM?si=Z8oCN1ZCToPRAx0I" }
  ];

  const fashionContent = [
    { type: "image", src: "/lovable-uploads/98b6e792-51fc-49b9-8fd5-1d1049d9a50e.png" },
    { type: "image", src: "/lovable-uploads/764fe1f5-10b7-431e-bff0-fbcde1cad9b2.png" },
    { type: "image", src: "/lovable-uploads/8b4dfaa1-816d-4596-bfa3-58a7d5d1be42.png" },
    { type: "image", src: "/lovable-uploads/629d4d3c-e560-46f4-bbaa-da8fe011eb73.png" },
    { type: "image", src: "/lovable-uploads/c2393362-d977-4ec5-a297-61e18d890675.png" },
    { type: "image", src: "/lovable-uploads/49847151-34b6-4152-badb-63dbd046bd2f.png" },
    { type: "video", src: "https://www.youtube.com/embed/sjUBNiN_WYg?si=tlaz-ROOj8GiN21x" },
    { type: "video", src: "https://www.youtube.com/embed/LkcxxfI3iw8?si=lWAPlIUgOqY1E47X" }
  ];

  const realEstateContent = [
    { type: "image", src: "/lovable-uploads/d2ef0aa7-ed92-4055-a697-e3f98a530372.png" },
    { type: "video", src: "https://www.youtube.com/embed/9TjmdSDf6Bk?si=kKJTbTCc4sMKCXvB" },
    { type: "video", src: "https://player.vimeo.com/video/1098201188?h=b847f668e1" }
  ];

  const restaurantContent = [
    { type: "image", src: "/lovable-uploads/c99aa73f-b851-444c-aec5-c1c58b555269.png" },
    { type: "video", src: "https://www.youtube.com/embed/bROqoxlJf3k?si=rz_A1a8mafg_MPYo" },
    { type: "video", src: "https://www.youtube.com/embed/_Y3503xbPxk?si=tmuARo3ygc6HlJnF" },
    { type: "video", src: "https://www.youtube.com/embed/9YuKXd8yFm0?si=LIHCCo-bxPFuB2r2" },
    { type: "video", src: "https://www.youtube.com/embed/rtEUm1rltCU?si=YVhxtlLKOVmHkJJh" }
  ];

  const portfolioCategories = [
    { id: "automobiles", name: "Автомобили", content: automobileContent },
    { id: "fashion", name: "Мода", content: fashionContent },
    { id: "realestate", name: "Недвижими Имоти", content: realEstateContent },
    { id: "product", name: "Продукт", content: productImages.map(img => ({ type: "image", src: img })) },
    { id: "restaurants", name: "Ресторанти", content: restaurantContent },
    { id: "events", name: "Събития и Тимбилдинг", content: eventsContent }
  ];

  const openImagePreview = (image: string) => {
    setSelectedImage(image);
  };

  const closeImagePreview = () => {
    setSelectedImage(null);
  };

  const scrollToCalendly = () => {
    navigateToSection('calendly');
  };

  const scrollToServices = () => {
    navigateToSection('services');
  };

  return (
    <div className="min-h-screen bg-altro-white font-poppins">
      {/* Header */}
      <header className="bg-black/95 backdrop-blur-md text-altro-white sticky top-0 z-50 border-b border-white/10 shadow-lg">
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
              <button onClick={scrollToServices} className="hover:text-primary transition-colors">
                Услуги
              </button>
              <Link to="/portfolio" className="hover:text-primary transition-colors text-primary">
                Портфолио
              </Link>
              <Link to="/team" className="hover:text-primary transition-colors">
                Екип
              </Link>
              <button onClick={scrollToCalendly} className="hover:text-primary transition-colors">
                Контакти
              </button>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button 
                variant="premium"
                className="hidden md:block"
                onClick={scrollToCalendly}
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
                        className="text-primary text-lg font-medium py-3"
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

      {/* Portfolio Content */}
      <section className="py-16 sm:py-20 bg-altro-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-altro-black">
            Нашето портфолио
          </h1>
          
          <Tabs defaultValue="automobiles" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mb-6 sm:mb-8 bg-gray-100 h-auto p-1">
              {portfolioCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="text-xs sm:text-sm py-2 sm:py-3 px-1 sm:px-2 data-[state=active]:bg-primary data-[state=active]:text-white whitespace-nowrap leading-tight rounded-md"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {portfolioCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-altro-black mb-4">{category.name}</h2>
                </div>
                
                {category.content.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {category.content.map((item, index) => (
                      <div 
                        key={index} 
                        className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow aspect-square"
                      >
                        {item.type === "image" ? (
                          <div 
                            className="w-full h-full cursor-pointer"
                            onClick={() => openImagePreview(item.src)}
                          >
                            <img 
                              src={item.src} 
                              alt={`${category.name} ${index + 1}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                              <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Преглед
                              </span>
                            </div>
                          </div>
                        ) : (
                          <iframe
                            src={item.src}
                            title={`Video ${index + 1}`}
                            className="w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          />
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20">
                    <div className="bg-gray-100 aspect-square max-w-md mx-auto rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <h3 className="text-xl font-semibold text-altro-black mb-2">{category.name}</h3>
                        <p className="text-gray-600">Скоро...</p>
                      </div>
                    </div>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

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
            <img
              src={selectedImage}
              alt="Preview"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Portfolio;
