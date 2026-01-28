import { useState, useEffect } from 'react'
import { Menu, X, Globe, Download } from 'lucide-react'
import { useI18n } from '../../../shared/i18n/I18nContext'

const navLinks = [
  { key: 'home', href: '#inicio' },
  { key: 'projects', href: '#proyectos' },
  { key: 'about', href: '#sobre-mi' },
  { key: 'contact', href: '#contacto' },
] as const

export function Navbar() {
  const { t, lang, toggleLang } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => setIsMobileMenuOpen(false)

  const getNavLabel = (key: string) => {
    switch (key) {
      case 'home': return t.nav.home
      case 'projects': return t.nav.projects
      case 'about': return t.nav.about
      case 'contact': return t.nav.contact
      default: return key
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
          ? 'bg-gray-950/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/10'
          : 'bg-transparent'
        }`}
      role="navigation"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="text-xl font-black gradient-text hover:opacity-80 transition-opacity">
          EC.
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <a
              key={link.key}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all"
            >
              {getNavLabel(link.key)}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Toggle */}
          <button
            type="button"
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all"
            aria-label="Cambiar idioma"
          >
            <Globe className="w-4 h-4" />
            <span className="uppercase font-semibold text-xs">{lang}</span>
          </button>

          {/* Download CV */}
          <a
            href="/CV.pdf"
            download="Edward_Mathias_Contreras_CV.pdf"
            className="flex items-center gap-2 bg-white text-gray-900 px-5 py-2 rounded-xl text-sm font-bold hover:bg-gray-200 transition-all active:scale-95"
          >
            <Download className="w-4 h-4" />
            {t.nav.downloadCV}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-6 py-4 space-y-1 bg-gray-950/95 backdrop-blur-xl border-t border-white/5">
          {navLinks.map(link => (
            <a
              key={link.key}
              href={link.href}
              onClick={handleLinkClick}
              className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
            >
              {getNavLabel(link.key)}
            </a>
          ))}

          {/* Language toggle in mobile */}
          <button
            type="button"
            onClick={() => { toggleLang(); handleLinkClick(); }}
            className="flex items-center gap-2 w-full px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
          >
            <Globe className="w-5 h-5 text-indigo-400" />
            {lang === 'es' ? 'English' : 'Español'}
          </button>

          <a
            href="/CV.pdf"
            download="Edward_Mathias_Contreras_CV.pdf"
            className="flex items-center gap-2 px-4 py-3 text-base font-semibold text-indigo-400 hover:bg-indigo-500/10 rounded-xl transition-colors"
          >
            <Download className="w-5 h-5" />
            {t.nav.downloadCV}
          </a>
        </div>
      </div>
    </nav>
  )
}
