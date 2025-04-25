import { ArrowDown } from "lucide-react";
import { Button } from "./components/ui/button";
import TypewriterEffect from "./components/typewriter-effect";
import SocialLinks from "./components/social-links";
import { useEffect, useState } from "react";
import { useLanguage } from "./context/LanguageContext";

function Home() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { t, language } = useLanguage();

  useEffect(() => {
    const img = new Image();
    img.src = "/placeholder.jpg";
    img.onload = () => setIsImageLoaded(true);
  }, []);

  return (
    <>
      {/* Contenedor para la sección hero */}
      <section className="min-h-screen bg-gray-900/95 py-20 md:py-32">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 space-y-6">
              <h1 className="text-6xl md:text-6xl font-bold">
                {t('greeting')} <span className="text-teal-400">Edward Contreras</span>
              </h1>
              <div className="h-12">
                <TypewriterEffect 
                  text={t('profession')} 
                  key={language} // Force re-render when language changes
                />
              </div>
              <p className="text-gray-400 max-w-xl">
                {t('shortBio')}
              </p>
              <div className="flex gap-4 pt-4">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                  {t('viewWork')}
                  <span className="ml-2">→</span>
                </Button>
                <Button variant="outline" className="border-teal-600 text-teal-400 hover:bg-teal-900/20">
                  {t('contactMe')}
                </Button>
              </div>
              <SocialLinks />
            </div>
            <div className="flex-1 mt-12 md:mt-0 flex justify-center md:justify-end">
              <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-teal-400 shadow-lg shadow-teal-400/20 ${isImageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                <img
                  src="/placeholder.jpg"
                  alt="Your profile picture"
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="flex justify-center mt-16">
            <a href="#about" className="animate-bounce">
              <ArrowDown className="text-teal-400" size={32} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
