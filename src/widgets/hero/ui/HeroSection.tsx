import { Github, Linkedin, Mail, ChevronRight, ArrowDown } from 'lucide-react'
import { useI18n } from '../../../shared/i18n/I18nContext'
import { projects } from '../../../pages/portfolio/model/projects'

const TECH_STACK = [
  'Python', 'C#', 'TypeScript', 'JavaScript', 'SQL', 'R',
  'REST APIs', 'Flask', 'Node.js', 'Express', '.NET 8',
  'PostgreSQL', 'SQLite', 'Supabase', 'Pandas', 'NumPy',
  'ETL pipelines', 'React', 'Next.js', 'Docker', 'Git', 'CI/CD', 'Nginx', 'VPS',
]

export function HeroSection() {
  const { t, lang } = useI18n()

  return (
    <section id="inicio" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern" />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 pt-24 pb-8">
        {/* Main: Photo + Text */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-16">
          {/* Photo — shows first on mobile */}
          <div className="flex-shrink-0 order-1 lg:order-2 animate-fade-up">
            <div className="relative">
              <div className="photo-frame relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full">
                <div className="absolute -inset-3 bg-blue-500/[0.06] rounded-full blur-xl" />
                <img
                  src="/Perfil.webp"
                  alt="Edward Mathias Contreras"
                  className="relative w-full h-full rounded-full object-cover border-2 border-white/10"
                  loading="eager"
                />
              </div>
              {/* Decorative dots */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
              <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-violet-500 rounded-full animate-pulse" />
              <div className="absolute top-1/2 -right-5 w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 mb-8 animate-fade-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-emerald-400 text-xs font-semibold">
                {t.hero.available}
              </span>
            </div>

            {/* Heading */}
            <div className="animate-fade-up mb-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-[-0.04em] leading-[0.9]">
                {t.hero.greeting}{' '}
                <br className="hidden sm:block" />
                <span className="text-gradient">{t.hero.name}</span>
                <span className="text-violet-400">.</span>
              </h1>
            </div>

            {/* Tagline */}
            <p className="text-lg sm:text-xl text-zinc-400 font-medium mb-4 animate-fade-up-delay leading-relaxed">
              {t.hero.tagline}
            </p>

            {/* Description */}
            <p className="text-base text-zinc-500 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed animate-fade-up-delay">
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start animate-fade-up-delay-2">
              <button
                type="button"
                onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-7 py-3.5 bg-blue-600 text-white rounded-xl font-bold text-sm flex items-center gap-2.5 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                {t.hero.viewProjects}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-7 py-3.5 border border-zinc-700 text-white rounded-xl font-bold text-sm hover:border-violet-500/40 hover:bg-violet-500/5 transition-all duration-300"
              >
                {t.contact?.sendMessage || 'Contactar'}
              </button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-8 justify-center lg:justify-start animate-fade-up-delay-3">
              <a href="https://github.com/DeuxMachin" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.06] text-zinc-500 hover:text-white hover:border-blue-500/30 transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/edward-contreras-aqueveque-8339b9360/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.06] text-zinc-500 hover:text-white hover:border-blue-500/30 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="mailto:mathias.contreras.a@gmail.com" aria-label="Email" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.06] text-zinc-500 hover:text-white hover:border-blue-500/30 transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="section-divider mb-10 animate-fade-up-delay-2" />
        <div className="grid grid-cols-3 gap-8 animate-fade-up-delay-2">
          <div className="text-center lg:text-left">
            <p className="text-3xl sm:text-4xl font-black text-white leading-none">+2</p>
            <p className="text-zinc-600 text-[11px] font-bold uppercase tracking-wider mt-2">
              {lang === 'en' ? 'Years Programming' : 'Años Programando'}
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-black text-white leading-none">{projects.length}</p>
            <p className="text-zinc-600 text-[11px] font-bold uppercase tracking-wider mt-2">
              {lang === 'en' ? 'Projects Completed' : 'Proyectos Completados'}
            </p>
          </div>
          <div className="text-center lg:text-right">
            <p className="text-3xl sm:text-4xl font-black text-gradient leading-none">Full Stack</p>
            <p className="text-zinc-600 text-[11px] font-bold uppercase tracking-wider mt-2">React + Python</p>
          </div>
        </div>

        {/* Tech ticker */}
        <div className="mt-16 overflow-hidden relative">
          <div className="flex animate-marquee">
            {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
              <span key={`${tech}-${i}`} className="mx-5 text-zinc-800 text-[11px] font-mono font-bold uppercase tracking-widest flex items-center gap-3 whitespace-nowrap">
                <span className="w-1 h-1 bg-zinc-700 rounded-full flex-shrink-0" />
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-8">
          <button
            type="button"
            onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-zinc-700 hover:text-zinc-500 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  )
}
