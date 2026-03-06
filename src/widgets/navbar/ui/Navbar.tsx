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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
          ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800/50'
          : 'bg-transparent'
        }`}
      role="navigation"
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="font-heading text-lg font-bold text-zinc-100 hover:text-amber-400 transition-colors">
          edward.
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <a
              key={link.key}
              href={link.href}
              className="px-3 py-2 text-sm text-zinc-500 hover:text-zinc-100 transition-colors"
            >
              {getNavLabel(link.key)}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-2 text-sm text-zinc-500 hover:text-zinc-100 transition-colors"
            aria-label="Cambiar idioma"
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="uppercase font-medium text-xs">{lang}</span>
          </button>

          <a
            href="/CV.pdf"
            download="Edward_Mathias_Contreras_CV.pdf"
            className="btn-secondary text-xs !py-2 !px-4"
          >
            <Download className="w-3.5 h-3.5" />
            {t.nav.downloadCV}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden w-10 h-10 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-zinc-100 transition-colors"
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
        <div className="px-6 py-4 space-y-1 bg-[#09090b]/95 backdrop-blur-md border-t border-zinc-800/50">
          {navLinks.map(link => (
            <a
              key={link.key}
              href={link.href}
              onClick={handleLinkClick}
              className="block px-4 py-3 text-base text-zinc-400 hover:text-zinc-100 rounded-lg hover:bg-zinc-800/30 transition-colors"
            >
              {getNavLabel(link.key)}
            </a>
          ))}

          <button
            type="button"
            onClick={() => { toggleLang(); handleLinkClick(); }}
            className="flex items-center gap-2 w-full px-4 py-3 text-base text-zinc-400 hover:text-zinc-100 rounded-lg hover:bg-zinc-800/30 transition-colors"
          >
            <Globe className="w-5 h-5 text-amber-400" />
            {lang === 'es' ? 'English' : 'Español'}
          </button>

          <a
            href="/CV.pdf"
            download="Edward_Mathias_Contreras_CV.pdf"
            className="flex items-center gap-2 px-4 py-3 text-base font-medium text-amber-400 hover:bg-amber-400/5 rounded-lg transition-colors"
          >
            <Download className="w-5 h-5" />
            {t.nav.downloadCV}
          </a>
        </div>
      </div>
    </nav>
  )
}
