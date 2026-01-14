import type { Tech } from '../../../pages/portfolio/model/types'

type TechStackSectionProps = {
  techStack: Tech[]
  activeTech: string | null
  onToggleTech: (name: string) => void
}

export function TechStackSection({ techStack, activeTech, onToggleTech }: TechStackSectionProps) {
  // Agrupar por categoría
  const categories = techStack.reduce((acc, tech) => {
    if (!acc[tech.category]) acc[tech.category] = []
    acc[tech.category].push(tech)
    return acc
  }, {} as Record<string, Tech[]>)

  const categoryOrder = ['Lenguaje', 'Framework', 'Base de Datos', 'Herramienta']
  const orderedCategories = categoryOrder.filter(cat => categories[cat])

  const categoryEmojis: Record<string, string> = {
    'Lenguaje': '📝',
    'Framework': '⚡',
    'Base de Datos': '🗄️',
    'Herramienta': '🛠️'
  }

  return (
    <section id="stack" className="py-24 bg-gradient-to-b from-[#0d1117] via-slate-900 to-[#0d1117] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-[0.07]">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-tech-accent to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-tech-accent to-transparent"></div>
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-tech-accent rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[150px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-tech-accent"></div>
            <div className="p-2 rounded-lg bg-tech-accent/10 border border-tech-accent/30">
              <i className="fa-solid fa-microchip text-tech-accent text-lg"></i>
            </div>
            <h3 className="text-tech-accent font-mono text-xs tracking-[0.3em] uppercase px-2">Mi Arsenal</h3>
            <div className="p-2 rounded-lg bg-tech-accent/10 border border-tech-accent/30">
              <i className="fa-solid fa-code text-tech-accent text-lg"></i>
            </div>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-tech-accent"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-accent via-cyan-400 to-purple-400">Tecnológico</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Estas son las herramientas con las que trabajo día a día para construir soluciones robustas y escalables.
          </p>
        </div>

        {/* Technologies by Category */}
        <div className="space-y-16">
          {orderedCategories.map((categoryName, catIndex) => (
            <div key={categoryName} className="relative">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-2xl">{categoryEmojis[categoryName]}</span>
                <h3 className="text-xl font-bold text-white">{categoryName}s</h3>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-slate-700 to-transparent"></div>
                <span className="text-sm font-mono text-slate-500">{categories[categoryName].length} items</span>
              </div>

              {/* Tech Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {categories[categoryName].map((tech, index) => {
                  const Icon = tech.icon
                  const isActive = activeTech === tech.name
                  const delay = (catIndex * 6 + index) * 50

                  return (
                    <div
                      key={tech.name}
                      className={`group relative cursor-pointer transition-all duration-300 hover:-translate-y-2 ${isActive ? '-translate-y-2' : ''}`}
                      onClick={() => onToggleTech(tech.name)}
                      style={{ animationDelay: `${delay}ms` }}
                    >
                      {/* Glow Effect */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b from-tech-accent/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isActive ? 'opacity-100' : ''}`}></div>

                      {/* Card */}
                      <div className={`relative bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${isActive
                          ? 'border-tech-accent shadow-[0_0_30px_rgba(56,189,248,0.3)]'
                          : 'border-slate-700/50 hover:border-tech-accent/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]'
                        }`}>
                        {/* Corner Accents */}
                        <div className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-tech-accent rounded-tl-lg transition-opacity ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
                        <div className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-tech-accent rounded-br-lg transition-opacity ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>

                        {/* Icon Container */}
                        <div className="flex flex-col items-center text-center">
                          <div className={`relative mb-4 transition-all duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                            <div className={`text-5xl ${tech.color} transition-all duration-300 group-hover:drop-shadow-[0_0_15px_currentColor] ${isActive ? 'drop-shadow-[0_0_15px_currentColor]' : ''}`}>
                              <Icon />
                            </div>
                            {/* Animated ring */}
                            <div className={`absolute inset-0 border-2 border-dashed border-tech-accent/30 rounded-full scale-150 opacity-0 group-hover:opacity-100 ${isActive ? 'opacity-100' : ''} transition-opacity animate-spin-slow`}></div>
                          </div>

                          {/* Tech Name */}
                          <h4 className={`font-bold text-sm mb-2 transition-colors duration-300 ${isActive ? 'text-tech-accent' : 'text-white group-hover:text-tech-accent'}`}>
                            {tech.name}
                          </h4>

                          {/* Level Badge */}
                          <div className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${tech.level === 'Experto'
                              ? 'bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-400 border border-amber-500/30'
                              : tech.level === 'Avanzado'
                                ? 'bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-emerald-400 border border-emerald-500/30'
                                : 'bg-slate-800/80 text-slate-400 border border-slate-700'
                            }`}>
                            {tech.level === 'Experto' && <span className="text-xs">⭐</span>}
                            {tech.level}
                          </div>
                        </div>

                        {/* Scan Line Effect */}
                        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-tech-accent to-transparent animate-[scan_2s_linear_infinite]"></div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Footer */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-800/50 to-transparent h-[1px] top-0"></div>
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: techStack.length, label: 'Tecnologías', icon: '🚀' },
              { value: techStack.filter((t) => t.level === 'Experto').length, label: 'Experto', icon: '⭐' },
              { value: techStack.filter((t) => t.level === 'Avanzado').length, label: 'Avanzado', icon: '💪' },
              { value: techStack.filter((t) => t.level === 'Intermedio').length, label: 'Intermedio', icon: '📈' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="group relative bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center hover:border-tech-accent/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-tech-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-1">{stat.value}</div>
                  <div className="text-sm font-mono text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-tech-accent animate-pulse"></div>
            <span className="text-slate-600 font-mono text-xs">STACK_LOADED</span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
