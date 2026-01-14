import type { Project, ProjectView } from '../../../pages/portfolio/model/types'

type ProjectsSectionProps = {
  projects: Project[]
  projectView: ProjectView
  onChangeView: (view: ProjectView) => void
}

export function ProjectsSection({ projects, projectView, onChangeView }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-tech-900/20 to-transparent pointer-events-none"></div>
      <div className="absolute top-20 right-20 text-[10rem] font-black text-white/5 font-mono select-none pointer-events-none">
        LOGS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-tech-accent/30 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <i className="fa-solid fa-satellite-dish text-tech-accent animate-pulse"></i>
              <h2 className="text-xs font-mono text-tech-accent tracking-widest uppercase">Base de Datos</h2>
            </div>
            <h2 className="text-4xl font-black text-white">
              PROTOCOLOS{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-accent to-white">ACTIVOS</span>
            </h2>
          </div>

          <div className="flex gap-2 mt-4 md:mt-0 bg-slate-900/80 p-1 rounded border border-slate-700">
            <button
              type="button"
              onClick={() => onChangeView('grid')}
              id="btn-grid"
              className={`px-4 py-2 rounded text-xs font-mono font-bold transition-all flex items-center gap-2 ${
                projectView === 'grid' ? 'bg-tech-600 text-white shadow-lg shadow-tech-500/20' : 'text-slate-400 hover:text-white'
              }`}
            >
              <i className="fa-solid fa-border-all"></i> GRID_VIEW
            </button>
            <button
              type="button"
              onClick={() => onChangeView('list')}
              id="btn-list"
              className={`px-4 py-2 rounded text-xs font-mono font-bold transition-all flex items-center gap-2 ${
                projectView === 'list' ? 'bg-tech-600 text-white shadow-lg shadow-tech-500/20' : 'text-slate-400 hover:text-white'
              }`}
            >
              <i className="fa-solid fa-list"></i> DATA_LIST
            </button>
          </div>
        </div>

        <div
          id="projects-container"
          className={
            projectView === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500'
              : 'flex flex-col gap-4 transition-all duration-500 max-w-4xl mx-auto'
          }
        >
          {projects.map((p) => {
            const cardClass =
              projectView === 'grid' ? 'project-card cyber-card group' : 'project-card cyber-card group flex items-center'
            const contentClass =
              projectView === 'grid'
                ? 'p-6 relative'
                : 'p-4 flex-1 flex items-center justify-between flex-wrap gap-4 relative'

            return (
              <div key={p.id} className={cardClass}>
                {projectView === 'grid' ? (
                  <div className="project-image h-56 bg-slate-900 relative overflow-hidden border-b border-tech-accent/20">
                    <div
                      className="scan-line animate-scanline"
                      style={p.scanDelay ? { animationDelay: p.scanDelay } : undefined}
                    ></div>

                    <div className="w-full h-full flex items-center justify-center text-slate-700 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 to-slate-900">
                      <i
                        className={`fa-solid ${p.icon} text-7xl text-slate-600 group-hover:text-tech-accent transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]`}
                      ></i>
                    </div>

                    <div className="absolute top-0 left-0 p-3 w-full flex justify-between items-start z-20">
                      <span className="bg-black/70 backdrop-blur text-[10px] font-mono px-2 py-1 text-tech-accent border border-tech-accent/50">
                        ID: {p.id}
                      </span>
                      <div className="flex gap-1">
                        {p.statusPing ? <div className="w-1 h-1 bg-tech-accent rounded-full animate-ping"></div> : null}
                        <span className={p.overlayRightClass}>{p.overlayRightText}</span>
                      </div>
                    </div>
                  </div>
                ) : null}

                <div className={contentClass}>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-tech-accent transition-colors">{p.title}</h3>
                    <p className="text-slate-400 text-xs font-mono mb-4 leading-relaxed border-l-2 border-slate-700 pl-3">
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.tags.map((tag) => (
                        <span key={`${p.id}-${tag.label}`} className={tag.className}>
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="text-[10px] text-slate-500 font-mono">{p.meta}</div>
                    <a
                      href="#"
                      className="text-xs font-bold text-white bg-tech-600 hover:bg-tech-500 px-4 py-2 clip-path-polygon transition-all flex items-center gap-2"
                    >
                      ACCEDER <i className="fa-solid fa-chevron-right text-[10px]"></i>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
