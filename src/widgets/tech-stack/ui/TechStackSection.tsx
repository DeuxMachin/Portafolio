import { useState } from 'react'
import type { Tech } from '../../../pages/portfolio/model/types'

type TechStackSectionProps = {
  techStack: Tech[]
  activeTech: string | null
  onToggleTech: (name: string) => void
}

export function TechStackSection({ techStack, activeTech, onToggleTech }: TechStackSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  // Agrupar por categoría
  const categories = techStack.reduce((acc, tech) => {
    if (!acc[tech.category]) acc[tech.category] = []
    acc[tech.category].push(tech)
    return acc
  }, {} as Record<string, Tech[]>)

  const categoryOrder = ['Lenguaje', 'Framework', 'Base de Datos', 'Herramienta']
  const orderedCategories = categoryOrder.filter(cat => categories[cat])

  const filteredTech = activeCategory === 'all'
    ? techStack
    : techStack.filter(t => t.category === activeCategory)

  const getLevelPercent = (level: string) => {
    switch (level) {
      case 'Experto': return 100
      case 'Avanzado': return 75
      case 'Intermedio': return 50
      default: return 25
    }
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Experto': return 'from-amber-400 to-orange-500'
      case 'Avanzado': return 'from-emerald-400 to-teal-500'
      default: return 'from-slate-400 to-slate-500'
    }
  }

  return (
    <section id="stack" className="py-16 bg-slate-950 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header compacto */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Stack Tecnológico
            </h2>
            <p className="text-slate-400 text-sm">
              {techStack.length} tecnologías con las que trabajo
            </p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${activeCategory === 'all'
                  ? 'bg-tech-accent text-slate-900'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
            >
              Todas
            </button>
            {orderedCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${activeCategory === cat
                    ? 'bg-tech-accent text-slate-900'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
              >
                {cat}s
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid con barras de nivel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredTech.map((tech) => {
            const Icon = tech.icon
            const isActive = activeTech === tech.name
            const levelPercent = getLevelPercent(tech.level)
            const levelColor = getLevelColor(tech.level)

            return (
              <div
                key={tech.name}
                onClick={() => onToggleTech(tech.name)}
                className={`group relative flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-300 ${isActive
                    ? 'bg-slate-800/80 border-tech-accent/50'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-800/50'
                  }`}
              >
                {/* Icon */}
                <div className={`flex-shrink-0 text-3xl ${tech.color} transition-transform group-hover:scale-110`}>
                  <Icon />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="font-medium text-sm text-white truncate">{tech.name}</h4>
                    <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${tech.level === 'Experto'
                        ? 'bg-amber-500/20 text-amber-400'
                        : tech.level === 'Avanzado'
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'bg-slate-700 text-slate-400'
                      }`}>
                      {tech.level}
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="h-1.5 bg-slate-700/50 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${levelColor} rounded-full transition-all duration-500`}
                      style={{ width: `${levelPercent}%` }}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats compactas */}
        <div className="mt-10 flex items-center justify-center gap-8 py-6 border-t border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
            <span className="text-xs text-slate-400">
              <span className="font-semibold text-white">{techStack.filter(t => t.level === 'Experto').length}</span> Experto
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
            <span className="text-xs text-slate-400">
              <span className="font-semibold text-white">{techStack.filter(t => t.level === 'Avanzado').length}</span> Avanzado
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-slate-400"></div>
            <span className="text-xs text-slate-400">
              <span className="font-semibold text-white">{techStack.filter(t => t.level === 'Intermedio').length}</span> Intermedio
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
