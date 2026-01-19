import { useState, useEffect, useRef } from 'react'
import type { Tech, TechLevel } from '../../../pages/portfolio/model/types'

type TechStackSectionProps = {
  techStack: Tech[]
  activeTech: string | null
  onToggleTech: (name: string) => void
}

// Mapa de niveles a porcentajes para la barra de progreso
const levelToPercent: Record<TechLevel, number> = {
  'Experto': 95,
  'Avanzado': 80,
  'Intermedio': 60
}

const levelToColor: Record<TechLevel, string> = {
  'Experto': 'from-emerald-500 to-emerald-400',
  'Avanzado': 'from-tech-accent to-purple-500',
  'Intermedio': 'from-amber-500 to-orange-400'
}

function TechChip({
  tech,
  isActive,
  onClick,
  index
}: {
  tech: Tech
  isActive: boolean
  onClick: () => void
  index: number
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const chipRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 50)
    return () => clearTimeout(timer)
  }, [index])

  const getProgressWidth = () => levelToPercent[tech.level]

  return (
    <div className="relative">
      <button
        ref={chipRef}
        type="button"
        onClick={onClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`
          inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold 
          transition-all duration-300 transform
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          ${isActive
            ? 'border-tech-accent/60 bg-tech-accent/15 text-tech-accent shadow-lg shadow-tech-accent/20 scale-105'
            : 'border-white/10 bg-slate-900/50 text-slate-300 hover:border-tech-accent/50 hover:bg-slate-800/50'
          }
        `}
        style={{ transitionDelay: `${index * 50}ms` }}
      >
        <span className={`${tech.color} transition-transform duration-300 ${isActive ? 'scale-110' : ''}`} aria-hidden>
          <tech.icon />
        </span>
        <span>{tech.name}</span>

        {/* Indicador de nivel */}
        <span className={`w-1.5 h-1.5 rounded-full ${tech.level === 'Experto' ? 'bg-emerald-500' :
          tech.level === 'Avanzado' ? 'bg-tech-accent' :
            'bg-amber-500'
          }`} />
      </button>

      {/* Tooltip con más información */}
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 pointer-events-none">
          <div className="bg-slate-900/95 backdrop-blur-sm border border-white/10 rounded-lg p-3 shadow-xl min-w-[180px] animate-[fadeIn_0.2s_ease-out]">
            {/* Header */}
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-xl ${tech.color}`}>
                <tech.icon />
              </span>
              <span className="text-white font-bold text-sm">{tech.name}</span>
            </div>

            {/* Category badge */}
            <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2">
              {tech.category}
            </div>

            {/* Progress bar */}
            <div className="mb-1">
              <div className="flex justify-between items-center text-[10px] mb-1">
                <span className="text-slate-400">Nivel</span>
                <span className={`font-semibold ${tech.level === 'Experto' ? 'text-emerald-400' :
                  tech.level === 'Avanzado' ? 'text-tech-accent' :
                    'text-amber-400'
                  }`}>{tech.level}</span>
              </div>
              <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${levelToColor[tech.level]} rounded-full transition-all duration-500`}
                  style={{ width: `${getProgressWidth()}%` }}
                />
              </div>
            </div>

            {/* Arrow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900/95" />
          </div>
        </div>
      )}
    </div>
  )
}

function SkillBar({ tech, index }: { tech: Tech; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100)
        }
      },
      { threshold: 0.3 }
    )

    if (barRef.current) observer.observe(barRef.current)
    return () => observer.disconnect()
  }, [index])

  return (
    <div ref={barRef} className="group">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <span className={`${tech.color} text-sm transition-transform duration-300 group-hover:scale-110`}>
            <tech.icon />
          </span>
          <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">
            {tech.name}
          </span>
        </div>
        <span className={`text-[10px] font-mono ${tech.level === 'Experto' ? 'text-emerald-400' :
          tech.level === 'Avanzado' ? 'text-tech-accent' :
            'text-amber-400'
          }`}>
          {levelToPercent[tech.level]}%
        </span>
      </div>
      <div className="h-2 bg-slate-800/50 rounded-full overflow-hidden border border-white/5">
        <div
          className={`h-full bg-gradient-to-r ${levelToColor[tech.level]} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
          style={{
            width: isVisible ? `${levelToPercent[tech.level]}%` : '0%',
            transitionDelay: `${index * 100}ms`
          }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
        </div>
      </div>
    </div>
  )
}

export function TechStackSection({ techStack, activeTech, onToggleTech }: TechStackSectionProps) {
  const languages = techStack.filter((t) => t.category === 'Lenguaje')
  const frameworks = techStack.filter((t) => t.category === 'Framework')
  const databases = techStack.filter((t) => t.category === 'Base de Datos')
  const tools = techStack.filter((t) => t.category === 'Herramienta')

  const active = activeTech ? techStack.find((t) => t.name === activeTech) : undefined

  // Stats calculadas
  const expertCount = techStack.filter(t => t.level === 'Experto').length
  const advancedCount = techStack.filter(t => t.level === 'Avanzado').length
  const totalTech = techStack.length

  return (
    <section id="stack" className="py-20 relative overflow-hidden scroll-mt-24 bg-gradient-to-b from-tech-dark via-slate-950 to-tech-dark">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-tech-accent/20 rounded-full blur-3xl opacity-30 animate-pulse pointer-events-none" />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-tech-neon/20 rounded-full blur-3xl opacity-30 animate-pulse pointer-events-none"
        style={{ animationDelay: '2s' }}
      />

      {/* Grid lines decorative */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(56, 189, 248, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-tech-accent/30 bg-tech-accent/5 text-tech-accent text-sm font-medium tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-tech-accent mr-2 animate-pulse" />
            Tecnologías
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Stack <span className="bg-gradient-to-r from-tech-accent to-tech-neon bg-clip-text text-transparent">Tecnológico</span>
          </h2>
          <p className="mt-5 text-lg text-slate-400 max-w-2xl mx-auto">
            Las herramientas y tecnologías que utilizo para crear soluciones digitales de calidad.
          </p>

          {/* Stats bar */}
          <div className="flex justify-center gap-8 mt-6">
            <div className="text-center">
              <div className="text-2xl font-black text-tech-accent">{totalTech}</div>
              <div className="text-[10px] font-mono text-slate-500 uppercase">Tecnologías</div>
            </div>
            <div className="w-px h-10 bg-slate-700" />
            <div className="text-center">
              <div className="text-2xl font-black text-emerald-400">{expertCount}</div>
              <div className="text-[10px] font-mono text-slate-500 uppercase">Experto</div>
            </div>
            <div className="w-px h-10 bg-slate-700" />
            <div className="text-center">
              <div className="text-2xl font-black text-purple-400">{advancedCount}</div>
              <div className="text-[10px] font-mono text-slate-500 uppercase">Avanzado</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Lenguajes con barras de progreso */}
          <div className="glass-panel rounded-2xl p-6 hover:-translate-y-1 transition-transform group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-tech-accent/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="w-10 h-10 rounded-full bg-tech-accent/10 flex items-center justify-center mb-4 border border-tech-accent/20">
              <i className="fa-solid fa-code text-tech-accent" />
            </div>
            <h3 className="text-lg font-bold text-white mb-4">Lenguajes Core</h3>

            {/* Progress bars for languages */}
            <div className="space-y-4">
              {languages.slice(0, 4).map((t, i) => (
                <SkillBar key={t.name} tech={t} index={i} />
              ))}
            </div>

            {languages.length > 4 && (
              <div className="mt-4 text-xs text-slate-500 font-mono">
                +{languages.length - 4} más
              </div>
            )}
          </div>

          {/* Card 2: Frontend & Ecosistema */}
          <div className="glass-panel rounded-2xl p-6 md:col-span-2 relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-36 h-36 bg-tech-accent/10 rounded-full blur-3xl group-hover:bg-tech-accent/20 transition-colors" />
            <div className="flex items-start justify-between gap-6 relative">
              <div className="min-w-0 flex-1">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 border border-purple-500/20">
                  <i className="fa-solid fa-laptop-code text-purple-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-4">Frontend & Ecosistema</h3>

                {/* Quick techs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 text-slate-400 text-sm mb-6">
                  {frameworks
                    .filter((t) => ['React', 'Next.js', 'Tailwind CSS', 'Vite', 'Node.js'].includes(t.name))
                    .slice(0, 6)
                    .map((t) => (
                      <button
                        key={t.name}
                        type="button"
                        onClick={() => onToggleTech(t.name)}
                        className="flex items-center gap-2 hover:text-white transition-colors text-left group/item"
                      >
                        <i className="fa-solid fa-check text-tech-neon text-xs group-hover/item:scale-125 transition-transform" />
                        <span>{t.name}</span>
                      </button>
                    ))}
                </div>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-2">
                  {[...frameworks, ...databases, ...tools].slice(0, 12).map((t, i) => (
                    <TechChip
                      key={t.name}
                      tech={t}
                      isActive={activeTech === t.name}
                      onClick={() => onToggleTech(t.name)}
                      index={i}
                    />
                  ))}
                </div>
              </div>

              {/* Code snippet decoration */}
              <div className="hidden md:block text-xs font-mono text-slate-600 opacity-60 select-none shrink-0">
                <span className="whitespace-nowrap">&lt;Component /&gt;</span>
                <br />
                useEffect(() =&gt; {'{'}
                <br />
                &nbsp;&nbsp;init();
                <br />
                {'}'}, [])
              </div>
            </div>
          </div>

          {/* Card 3: Infra & Datos */}
          <div className="glass-panel rounded-2xl p-6 md:col-span-2 hover:-translate-y-1 transition-transform group relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-tech-neon/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="w-10 h-10 rounded-full bg-tech-neon/10 flex items-center justify-center mb-4 border border-tech-neon/20">
                  <i className="fa-solid fa-server text-tech-neon" />
                </div>
                <h3 className="text-lg font-bold text-white mb-4">DevOps, Herramientas & Cloud</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((t, i) => (
                    <TechChip
                      key={t.name}
                      tech={t}
                      isActive={activeTech === t.name}
                      onClick={() => onToggleTech(t.name)}
                      index={i}
                    />
                  ))}
                </div>
              </div>

              <div className="flex-1 border-t md:border-t-0 md:border-l border-white/10 md:pl-8 pt-4 md:pt-0">
                <h3 className="text-lg font-bold text-white mb-4">Datos & Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {databases.map((t, i) => (
                    <TechChip
                      key={t.name}
                      tech={t}
                      isActive={activeTech === t.name}
                      onClick={() => onToggleTech(t.name)}
                      index={i}
                    />
                  ))}
                </div>
                <div className="mt-5 text-base text-slate-400">
                  Gestión eficiente de datos y desarrollo backend.
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Metodología */}
          <div className="glass-panel rounded-2xl p-6 flex items-center justify-center text-center hover:bg-white/5 transition-colors group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-tech-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <i className="fa-solid fa-lightbulb text-slate-500 text-3xl mx-auto mb-3 group-hover:text-purple-400 transition-colors group-hover:scale-110 transform duration-300" />
              <p className="text-slate-200 font-semibold text-lg">Aprendizaje Continuo</p>
              <p className="mt-2 text-slate-400 text-base">
                Siempre explorando nuevas tecnologías y mejores prácticas.
              </p>
            </div>
          </div>
        </div>

        {/* Active tech detail panel */}
        {active && (
          <div className="mt-10 glass-panel rounded-2xl p-6 border border-tech-accent/20 animate-[fadeIn_0.3s_ease-out]">
            <div className="flex items-start gap-4">
              <div className={`text-4xl ${active.color}`} aria-hidden>
                <active.icon />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h4 className="text-white font-bold text-xl">{active.name}</h4>
                  <span className="text-xs font-mono text-slate-500">CAT: {active.category}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${active.level === 'Experto'
                    ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                    : active.level === 'Avanzado'
                      ? 'border-tech-accent/30 bg-tech-accent/10 text-tech-accent'
                      : 'border-amber-500/30 bg-amber-500/10 text-amber-400'
                    }`}>
                    {active.level}
                  </span>
                </div>

                {/* Progress bar in detail panel */}
                <div className="mt-4 max-w-md">
                  <div className="h-2 bg-slate-800/50 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${levelToColor[active.level]} rounded-full transition-all duration-1000`}
                      style={{ width: `${levelToPercent[active.level]}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-1 text-[10px] font-mono text-slate-500">
                    <span>0%</span>
                    <span>{levelToPercent[active.level]}%</span>
                    <span>100%</span>
                  </div>
                </div>

                <p className="mt-4 text-slate-400 text-sm">
                  Selecciona otra tecnología para comparar, o vuelve a hacer click para cerrar.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onToggleTech(active.name)}
                className="ml-auto w-10 h-10 rounded-lg bg-slate-900/60 border border-white/10 hover:border-tech-accent/60 transition-colors flex items-center justify-center group"
                aria-label="Cerrar detalle"
              >
                <i className="fa-solid fa-xmark text-slate-200 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>
          </div>
        )}

        <div className="flex justify-center mt-14">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-tech-accent animate-pulse" />
            <span className="text-slate-500 text-sm">Haz click en una tecnología para ver más detalles</span>
            <div className="w-2 h-2 rounded-full bg-tech-neon animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
