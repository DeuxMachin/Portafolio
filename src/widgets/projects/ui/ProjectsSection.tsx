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

  const openProject = (id: string) => {
    setCarouselIndex(0)
    setActiveProjectId(id)
  }

  useEffect(() => {
    if (!activeProject) return

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

  const getStarBlocks = (p: Project) => {
    const situation = p.description

    const process = p.details?.process
    const lastProcessDescription = process?.length ? process[process.length - 1]?.description : undefined

    const solution =
      p.details?.features?.[0]?.description ??
      process?.[0]?.description ??
      p.details?.longDescription ??
      'Diseñé e implementé una solución orientada a performance, mantenibilidad y despliegue rápido.'

    const result =
      lastProcessDescription ??
      p.meta ??
      'Mejora de la experiencia y del flujo de trabajo del usuario.'

    return { situation, solution, result }
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden scroll-mt-24 bg-gradient-to-b from-tech-dark via-slate-950 to-tech-dark">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-tech-accent/20 rounded-full blur-3xl opacity-30 animate-pulse pointer-events-none" />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-tech-neon/20 rounded-full blur-3xl opacity-30 animate-pulse pointer-events-none"
        style={{ animationDelay: '2s' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Proyectos Destacados</h2>
            <p className="text-slate-400">
              Casos de estudio donde convertí requerimientos reales en producto, cuidando diseño, performance y despliegue.
            </p>
          </div>

          <div className="flex gap-2 bg-slate-900/60 p-1 rounded-full border border-white/10">
            <button
              type="button"
              onClick={() => onChangeView('grid')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
                projectView === 'grid'
                  ? 'bg-tech-accent/15 text-tech-accent border border-tech-accent/30'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <i className="fa-solid fa-border-all text-xs" />
              Grid
            </button>
            <button
              type="button"
              onClick={() => onChangeView('list')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
                projectView === 'list'
                  ? 'bg-tech-accent/15 text-tech-accent border border-tech-accent/30'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <i className="fa-solid fa-list text-xs" />
              Lista
            </button>
          </div>
        </div>

        <div
          className={
            projectView === 'grid'
              ? 'grid grid-cols-1 lg:grid-cols-2 gap-8'
              : 'flex flex-col gap-6 max-w-5xl mx-auto'
          }
        >
          {projects.map((p) => {
            const canOpenDetails = Boolean(p.details)
            const previewImage = p.details?.screenshots?.[0]
            const star = getStarBlocks(p)

            return (
              <article
                key={p.id}
                className="glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-tech-accent/40 transition-colors group"
              >
                <div className="relative h-56 overflow-hidden border-b border-white/5">
                  {previewImage ? (
                    <img
                      src={previewImage.src}
                      alt={previewImage.alt}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="w-full h-full relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-950 to-tech-dark">
                      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                          <i className={`fa-solid ${p.icon} text-5xl text-slate-200 group-hover:text-tech-accent transition-colors duration-300`} />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="bg-black/60 backdrop-blur text-[10px] font-mono px-2 py-1 text-slate-200 border border-white/10 rounded">
                      {p.id}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-1 rounded border border-white/10 bg-black/40 ${p.overlayRightClass}`}
                    >
                      {p.overlayRightText}
                    </span>
                    {p.statusPing ? <span className="w-2 h-2 rounded-full bg-tech-accent animate-pulse" /> : null}
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex justify-between items-start gap-4 mb-6">
                    <div className="min-w-0">
                      <h3 className="text-2xl font-bold text-white group-hover:text-tech-accent transition-colors truncate">
                        {p.title}
                      </h3>
                      <p className="text-sm text-slate-500 mt-1 font-mono">{p.meta}</p>
                    </div>

                    <div className="flex gap-2">
                      {p.links?.repoUrl ? (
                        <a
                          href={p.links.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                          aria-label="Ver repositorio"
                          title="Ver código"
                        >
                          <i className="fa-brands fa-github" />
                        </a>
                      ) : null}
                      {p.links?.liveUrl ? (
                        <a
                          href={p.links.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                          aria-label="Ver demo"
                          title="Ver demo"
                        >
                          <i className="fa-solid fa-arrow-up-right-from-square" />
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <div className="space-y-4 text-sm text-slate-300">
                    <div>
                      <strong className="text-tech-neon block mb-1 flex items-center gap-2">
                        <i className="fa-solid fa-circle-exclamation text-[12px]" /> Desafío (Situación)
                      </strong>
                      <p className="text-slate-300 leading-relaxed">{star.situation}</p>
                    </div>

                    <div className="bg-slate-950/60 border-l-4 border-tech-accent rounded p-4">
                      <strong className="text-tech-accent block mb-1 flex items-center gap-2 font-mono text-xs">
                        <i className="fa-solid fa-code" /> Solución (Ingeniería)
                      </strong>
                      <p className="text-slate-300 leading-relaxed text-sm">{star.solution}</p>
                    </div>

                    <div>
                      <strong className="text-blue-400 block mb-1 flex items-center gap-2">
                        <i className="fa-solid fa-arrow-trend-up text-[12px]" /> Resultado (Impacto)
                      </strong>
                      <p className="text-slate-300 leading-relaxed">{star.result}</p>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={`${p.id}-${tag.label}`}
                        className="px-2 py-1 rounded text-xs bg-slate-950/30 border border-white/10 text-slate-300"
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center justify-between gap-4">
                    <div className="text-xs text-slate-500 font-mono">{canOpenDetails ? 'Caso de estudio disponible' : 'Resumen'}</div>
                    {canOpenDetails ? (
                      <button
                        type="button"
                        onClick={() => openProject(p.id)}
                        className="bg-tech-accent/15 hover:bg-tech-accent/25 text-tech-accent border border-tech-accent/30 px-5 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2"
                      >
                        Ver detalle
                        <i className="fa-solid fa-arrow-right" />
                      </button>
                    ) : null}
                  </div>
                </div>
              </article>
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
