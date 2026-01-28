import { Github, Linkedin, Mail, ArrowRight, Sparkles } from 'lucide-react'
import { useI18n } from '../../../shared/i18n/I18nContext'

export function HeroSection() {
  const { t } = useI18n()

  return (
    <section id="inicio" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-indigo-500 rounded-full animate-ping opacity-60" />
      <div className="absolute top-1/3 right-20 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping opacity-60" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-purple-500 rounded-full animate-ping opacity-60" style={{ animationDelay: '1s' }} />

      {/* Floating geometric shapes */}
      <div className="absolute top-20 right-1/4 w-32 h-32 border border-indigo-500/10 rounded-full animate-spin-slow" />
      <div className="absolute bottom-32 left-20 w-24 h-24 border border-emerald-500/10 rotate-45 animate-float" />

      <div className="max-w-6xl mx-auto px-6 py-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left animate-fade-up">
            {/* Availability Badge */}
            <div className="badge inline-flex">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              {t.hero.available}
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                <span className="text-white">{t.hero.greeting}</span>{' '}
                <span className="gradient-text">{t.hero.name}</span>
                <span className="text-white">.</span>
              </h1>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-400 leading-tight">
                {t.hero.tagline}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-up-delay">
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 animate-fade-up-delay">
              <button
                type="button"
                onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary flex items-center gap-2"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  {t.hero.viewProjects}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>

              <button
                type="button"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                {t.contact?.sendMessage || 'Contactar'}
              </button>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="https://github.com/edwardcontreras"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/edwardcontreras"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:edward@example.com"
                className="social-btn"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Profile Image - Enhanced */}
          <div className="relative animate-fade-up lg:animate-float">
            {/* Orbit ring */}
            <div className="absolute inset-0 -m-8 border border-indigo-500/20 rounded-[3rem] animate-spin-slow" />

            {/* Profile container with animated gradient */}
            <div className="profile-container">
              <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-[1.75rem] overflow-hidden bg-gray-900">
                <img
                  src="/Perfil.webp"
                  alt="Edward Contreras"
                  className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  loading="eager"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-gray-900 border border-gray-700 rounded-xl shadow-xl">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-white">Full Stack</span>
              </div>
            </div>

            {/* Experience badge */}
            <div className="absolute -top-4 -left-4 px-4 py-2 bg-indigo-600 rounded-xl shadow-xl">
              <span className="text-sm font-bold text-white">{t.hero.yearsExp}</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center pt-1">
            <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
