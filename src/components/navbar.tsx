import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "../components/ui/button";
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, toggleLanguage } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto py-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold z-50">
          <span className="text-white">Portfolio</span>
          <span className="text-teal-400">Dev</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden z-50 text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-white">
          <Link to="/" className="hover:text-teal-400 transition-colors">
            {t('home')}
          </Link>
          <a href="#about" className="hover:text-teal-400 transition-colors">
            {t('about')}
          </a>
          <a href="#tech" className="hover:text-teal-400 transition-colors">
            {t('techStack')}
          </a>
          <a href="#projects" className="hover:text-teal-400 transition-colors">
            {t('projects')}
          </a>
          <a href="#contact" className="hover:text-teal-400 transition-colors">
            {t('contact')}
          </a>
          <Button 
            onClick={toggleLanguage} 
            className="bg-teal-600 text-white hover:bg-teal-700 hover:text-white transition-colors flex items-center gap-2"
          >
            <Globe size={16} />
            {t('language')}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center z-40">
            <div className="flex flex-col items-center gap-8 text-xl text-white">
              <Link
                to="/"
                className="hover:text-teal-400 transition-colors"
                onClick={toggleMenu}
              >
                {t('home')}
              </Link>
              <a
                href="#about"
                className="hover:text-teal-400 transition-colors"
                onClick={toggleMenu}
              >
                {t('about')}
              </a>
              <a
                href="#tech"
                className="hover:text-teal-400 transition-colors"
                onClick={toggleMenu}
              >
                {t('techStack')}
              </a>
              <a
                href="#projects"
                className="hover:text-teal-400 transition-colors"
                onClick={toggleMenu}
              >
                {t('projects')}
              </a>
              <a
                href="#contact"
                className="hover:text-teal-400 transition-colors"
                onClick={toggleMenu}
              >
                {t('contact')}
              </a>
              <Button 
                onClick={toggleLanguage} 
                className="bg-teal-600 text-white hover:bg-teal-700 hover:text-white transition-colors flex items-center gap-2"
              >
                <Globe size={16} />
                {t('language')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}