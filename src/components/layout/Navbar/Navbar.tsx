import { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon } from '../../ui/Icons';

const navLinks = [
  { href: '#home', label: 'Inicio' },
  { href: '#about', label: 'Sobre Mí' },
  { href: '#stack', label: 'Stack' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#references', label: 'Referencias' },
  { href: '#contact', label: 'Contacto' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1A1D23]/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold text-[#A8E6CF] hover:text-[#7BC9A8] transition-colors"
          >
            &lt;EMC /&gt;
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#B8BCC8] hover:text-[#A8E6CF] transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A8E6CF] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#B8BCC8] hover:text-[#A8E6CF] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-4 py-4 border-t border-[#3A4050]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#B8BCC8] hover:text-[#A8E6CF] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
