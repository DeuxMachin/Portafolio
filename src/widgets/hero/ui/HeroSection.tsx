import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react'
import { useI18n } from '../../../shared/i18n/I18nContext'

export function HeroSection() {
  const { t } = useI18n()

  return (
    <section id="inicio" className="min-h-screen flex items-center pt-20 relative">
      <div className="max-w-5xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left animate-fade-in">
            {/* Availability Badge */}
            <div className="badge inline-flex">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
              {t.hero.available}
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
                <span className="text-zinc-100">{t.hero.greeting} </span>
                <span className="text-amber-400">{t.hero.name}</span>
                <span className="text-zinc-100">.</span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-zinc-500 leading-relaxed">
                {t.hero.tagline}
              </p>
            </div>

            {/* Description */}
            <p className="text-zinc-500 text-base max-w-lg mx-auto lg:mx-0 leading-relaxed animate-fade-in-delay">
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2 animate-fade-in-delay">
              <button
                type="button"
                onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                {t.hero.viewProjects}
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="/CV.pdf"
                download="Edward_Mathias_Contreras_CV.pdf"
                className="btn-secondary"
              >
                <Download className="w-4 h-4" />
                {t.about?.downloadCV || 'Descargar CV'}
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center lg:justify-start gap-2 pt-2 animate-fade-in-delay-2">
              <a
                href="https://github.com/DeuxMachin"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/edwardcontreras"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:mathias.contreras.a@gmail.com"
                className="social-btn"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="animate-fade-in-delay">
            <div className="relative">
              <div className="w-64 h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border-2 border-zinc-800">
                <img
                  src="/Perfil.webp"
                  alt="Edward Contreras"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-3 -right-3 px-3 py-1.5 bg-[#0f0f11] border border-zinc-800 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-amber-400">{t.hero.yearsExp}</span>
                </div>
              </div>

              {/* Role badge */}
              <div className="absolute -top-3 -left-3 px-3 py-1.5 bg-amber-500 rounded-lg">
                <span className="text-xs font-bold text-zinc-900">Full Stack</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
