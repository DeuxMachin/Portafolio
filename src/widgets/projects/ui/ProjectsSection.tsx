import { useEffect, useMemo, useState } from 'react'
import type { Project, ProjectView } from '../../../pages/portfolio/model/types'

type ProjectsSectionProps = {
  projects: Project[]
  projectView: ProjectView
  onChangeView: (view: ProjectView) => void
}

export function ProjectsSection({ projects, projectView, onChangeView }: ProjectsSectionProps) {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null)
  const [carouselIndex, setCarouselIndex] = useState(0)

  const activeProject = useMemo(
    () => (activeProjectId ? projects.find((p) => p.id === activeProjectId) : undefined),
    [activeProjectId, projects],
  )

  const closeModal = () => setActiveProjectId(null)

  useEffect(() => {
    if (!activeProject) return

    setCarouselIndex(0)

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowLeft') {
        setCarouselIndex((i) => i - 1)
      }
      if (e.key === 'ArrowRight') {
        setCarouselIndex((i) => i + 1)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [activeProject])

  const activeScreenshots = activeProject?.details?.screenshots ?? []
  const safeCarouselIndex =
    activeScreenshots.length > 0
      ? ((carouselIndex % activeScreenshots.length) + activeScreenshots.length) % activeScreenshots.length
      : 0
  const activeShot = activeScreenshots[safeCarouselIndex]

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

            const canOpenDetails = Boolean(p.details)
            const previewImage = p.details?.screenshots?.[0]

            return (
              <div key={p.id} className={cardClass}>
                {projectView === 'grid' ? (
                  <div className="project-image h-56 bg-slate-900 relative overflow-hidden border-b border-tech-accent/20">
                    <div
                      className="scan-line animate-scanline"
                      style={p.scanDelay ? { animationDelay: p.scanDelay } : undefined}
                    ></div>

                    {previewImage ? (
                      <img
                        src={previewImage.src}
                        alt={previewImage.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-700 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 to-slate-900">
                        <i
                          className={`fa-solid ${p.icon} text-7xl text-slate-600 group-hover:text-tech-accent transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]`}
                        ></i>
                      </div>
                    )}

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
                    {canOpenDetails ? (
                      <button
                        type="button"
                        onClick={() => setActiveProjectId(p.id)}
                        className="text-xs font-bold text-white bg-tech-600 hover:bg-tech-500 px-4 py-2 clip-path-polygon transition-all flex items-center gap-2"
                      >
                        ACCEDER <i className="fa-solid fa-chevron-right text-[10px]"></i>
                      </button>
                    ) : (
                      <a
                        href="#"
                        className="text-xs font-bold text-white bg-tech-600 hover:bg-tech-500 px-4 py-2 clip-path-polygon transition-all flex items-center gap-2"
                      >
                        ACCEDER <i className="fa-solid fa-chevron-right text-[10px]"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {activeProject?.details ? (
        <div
          className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-start justify-center px-4 py-10 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label={`Detalles del proyecto ${activeProject.title}`}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeModal()
          }}
        >
          <div className="w-full max-w-5xl cyber-card">
            <div className="p-6 border-b border-tech-accent/20 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-white">{activeProject.title}</h3>
                <div className="mt-3 flex items-center gap-3 text-slate-300 text-sm">
                  {typeof activeProject.details.year === 'number' ? (
                    <span className="inline-flex items-center gap-2 font-mono text-xs text-slate-300">
                      <i className="fa-regular fa-calendar"></i>
                      Proyecto desarrollado en {activeProject.details.year}
                    </span>
                  ) : null}
                </div>
              </div>

              <div className="flex items-center gap-2">
                {activeProject.links?.repoUrl ? (
                  <a
                    href={activeProject.links.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded bg-slate-900/70 border border-slate-700 flex items-center justify-center hover:border-tech-accent/60 transition-colors"
                    aria-label="Repositorio"
                  >
                    <i className="fa-brands fa-github text-slate-200"></i>
                  </a>
                ) : null}
                {activeProject.links?.liveUrl ? (
                  <a
                    href={activeProject.links.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded bg-slate-900/70 border border-slate-700 flex items-center justify-center hover:border-tech-accent/60 transition-colors"
                    aria-label="Sitio en vivo"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square text-slate-200"></i>
                  </a>
                ) : null}
                <button
                  type="button"
                  onClick={closeModal}
                  className="w-10 h-10 rounded bg-slate-900/70 border border-slate-700 flex items-center justify-center hover:border-tech-accent/60 transition-colors"
                  aria-label="Cerrar"
                >
                  <i className="fa-solid fa-xmark text-slate-200"></i>
                </button>
              </div>
            </div>

            <div className="p-6 space-y-10">
              {activeProject.details.longDescription ? (
                <p className="text-slate-300 leading-relaxed">{activeProject.details.longDescription}</p>
              ) : null}

              <div>
                <h4 className="text-white font-bold text-lg mb-4">Tecnologías Utilizadas</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tags.map((tag) => (
                    <span key={`${activeProject.id}-modal-${tag.label}`} className={tag.className}>
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>

              {activeProject.details.skills?.length ? (
                <div>
                  <h4 className="text-white font-bold text-lg mb-4">Habilidades Demostradas</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeProject.details.skills.map((s) => (
                      <div key={`skill-${s.title}`} className="bg-slate-900/60 border border-slate-700 rounded p-4">
                        <div className="text-white font-bold mb-1">{s.title}</div>
                        <div className="text-slate-300 text-sm leading-relaxed">{s.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {activeProject.details.features?.length ? (
                <div>
                  <h4 className="text-white font-bold text-lg mb-4">Características Principales</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeProject.details.features.map((f) => (
                      <div key={`feature-${f.title}`} className="bg-slate-900/60 border border-slate-700 rounded p-4">
                        <div className="text-white font-bold mb-1">{f.title}</div>
                        <div className="text-slate-300 text-sm leading-relaxed">{f.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              <div>
                <h4 className="text-white font-bold text-lg mb-4">Capturas del Proyecto</h4>
                {activeProject.details.screenshots?.length ? (
                  <div className="bg-slate-900/60 border border-slate-700 rounded p-3">
                    <div className="relative overflow-hidden rounded">
                      {activeShot ? (
                        <img
                          src={activeShot.src}
                          alt={activeShot.alt}
                          className="w-full h-auto rounded"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : null}

                      <div className="absolute inset-x-0 top-0 p-2 flex items-center justify-between">
                        <span className="bg-black/60 backdrop-blur text-[10px] font-mono px-2 py-1 text-slate-200 border border-slate-700 rounded">
                          {safeCarouselIndex + 1}/{activeScreenshots.length}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => setCarouselIndex((i) => i - 1)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded bg-black/50 border border-slate-700 text-white hover:border-tech-accent/60 transition-colors"
                        aria-label="Anterior"
                      >
                        <i className="fa-solid fa-chevron-left"></i>
                      </button>
                      <button
                        type="button"
                        onClick={() => setCarouselIndex((i) => i + 1)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded bg-black/50 border border-slate-700 text-white hover:border-tech-accent/60 transition-colors"
                        aria-label="Siguiente"
                      >
                        <i className="fa-solid fa-chevron-right"></i>
                      </button>
                    </div>

                    <div className="mt-3 flex items-center justify-center gap-2 flex-wrap">
                      {activeScreenshots.map((_, idx) => {
                        const isActive = idx === safeCarouselIndex
                        return (
                          <button
                            key={`dot-${idx}`}
                            type="button"
                            onClick={() => setCarouselIndex(idx)}
                            className={`h-2 w-2 rounded-full border transition-colors ${
                              isActive
                                ? 'bg-tech-accent border-tech-accent'
                                : 'bg-slate-700 border-slate-600 hover:border-tech-accent/60'
                            }`}
                            aria-label={`Ir a captura ${idx + 1}`}
                          />
                        )
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="bg-slate-900/60 border border-slate-700 rounded p-6 text-slate-400 text-sm">
                    Agrega tus capturas en <span className="font-mono">public/projects/...</span> para mostrarlas aquí.
                  </div>
                )}
              </div>

              {activeProject.details.process?.length ? (
                <div>
                  <h4 className="text-white font-bold text-lg mb-4">Proceso de Desarrollo</h4>
                  <div className="space-y-4">
                    {activeProject.details.process.map((step) => (
                      <div key={`process-${step.title}`} className="flex gap-3">
                        <div className="mt-2 w-2 h-2 rounded-full bg-tech-accent/80 flex-shrink-0"></div>
                        <div>
                          <div className="text-white font-bold">{step.title}</div>
                          <div className="text-slate-300 text-sm leading-relaxed">{step.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
