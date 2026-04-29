import { ExternalLink, Github, Layers, ArrowUpRight, FlaskConical, ArrowRight } from 'lucide-react'
import type { Project } from '../../../pages/portfolio/model/types'
import { useI18n } from '../../../shared/i18n/I18nContext'

type ProjectsSectionProps = {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const { t, lang, getProjectT } = useI18n()

  const featuredProject = projects.find(p => p.id === 'PV-01')
  const secondaryProjects = projects.filter(p => p.id !== 'PV-01')

  const getProjectData = (project: Project) => {
    const translated = getProjectT(project.id)
    if (translated) {
      return {
        title: translated.title,
        description: translated.description,
        category: translated.category,
      }
    }
    return {
      title: project.title,
      description: project.description,
      category: 'Web',
    }
  }

  const projectUrl = (id: string) => `/proyecto/${id}`

  return (
    <section id="proyectos" className="py-28 scroll-mt-28 relative">
      <div className="section-divider" />
      <div className="max-w-6xl mx-auto px-6 pt-14">
        <header className="mb-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500 mb-4">Portfolio</p>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              {t.projects.title}
            </h2>
            <p className="text-zinc-500 max-w-xs text-sm leading-relaxed sm:text-right">
              {lang === 'en' ? 'Projects combining engineering and science.' : 'Proyectos que combinan ingeniería y ciencia.'}
            </p>
          </div>
        </header>

        <div className="grid gap-12">
          {/* FEATURED PROJECT */}
          {featuredProject && (() => {
            const pd = getProjectData(featuredProject)
            return (
              <a
                href={projectUrl(featuredProject.id)}
                className="relative group bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-blue-500/20 transition-all duration-300 block"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-3/5 p-8 md:p-12 lg:p-16 relative z-10">
                    <div className="flex items-center gap-4 text-blue-400 mb-8 font-mono text-[11px] font-bold tracking-widest uppercase">
                      <span className="px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">{pd.category}</span>
                      {featuredProject.details?.year && (
                        <>
                          <span className="w-6 h-px bg-zinc-800" />
                          <span className="text-zinc-500">{featuredProject.details.year}</span>
                        </>
                      )}
                    </div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight tracking-tighter">
                      {pd.title.includes(' - ') ? (
                        <>
                          {pd.title.split(' - ')[0]}
                          <br />
                          <span className="text-zinc-500">{pd.title.split(' - ').slice(1).join(' - ')}</span>
                        </>
                      ) : pd.title}
                    </h3>
                    <p className="text-zinc-400 text-base md:text-lg mb-8 max-w-xl leading-relaxed font-light">{pd.description}</p>
                    <div className="flex flex-wrap gap-2 mb-10">
                      {featuredProject.tags.slice(0, 6).map(tag => (
                        <span key={tag.label} className="px-3 py-1 bg-zinc-800/80 text-zinc-300 text-[10px] font-bold rounded-lg border border-zinc-700 uppercase tracking-wider">
                          {tag.label}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-4">
                      {featuredProject.links?.liveUrl && (
                        <span
                          onClick={e => { e.preventDefault(); window.open(featuredProject.links!.liveUrl, '_blank', 'noopener,noreferrer') }}
                          className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-blue-500 transition-colors cursor-pointer"
                        >
                          Demo <ArrowUpRight className="w-4 h-4" />
                        </span>
                      )}
                      {featuredProject.links?.repoUrl && (
                        <span
                          onClick={e => { e.preventDefault(); window.open(featuredProject.links!.repoUrl, '_blank', 'noopener,noreferrer') }}
                          className="px-6 py-3 bg-zinc-800 text-white rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-zinc-700 transition-colors cursor-pointer"
                        >
                          GitHub <Github className="w-4 h-4" />
                        </span>
                      )}
                      <div className="flex items-center gap-2 text-zinc-500 text-sm font-medium group-hover:text-blue-400 transition-colors ml-auto">
                        {lang === 'en' ? 'See details' : 'Ver detalles'}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-2/5 min-h-[300px] lg:min-h-[400px] bg-[#111113] relative flex items-center justify-center overflow-hidden border-t lg:border-t-0 lg:border-l border-white/[0.06]">
                    {featuredProject.details?.screenshots?.[0] ? (
                      <img
                        src={featuredProject.details.screenshots[0].src}
                        alt={featuredProject.details.screenshots[0].alt}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <FlaskConical className="w-28 h-28 text-blue-500/30 group-hover:scale-110 transition-transform duration-700" strokeWidth={0.5} />
                      </div>
                    )}
                  </div>
                </div>
              </a>
            )
          })()}

          {/* SECONDARY PROJECTS GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryProjects.map((project) => {
              const pd = getProjectData(project)
              const previewImage = project.details?.screenshots?.[0]
              return (
                <a
                  key={project.id}
                  href={projectUrl(project.id)}
                  className="group relative flex flex-col h-full bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-blue-500/20 transition-all duration-300 hover:-translate-y-1"
                >
                  {previewImage ? (
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={previewImage.src}
                        alt={previewImage.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[#111113]/40" />
                      <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="px-4 py-2 bg-white/90 text-slate-900 rounded-full text-xs font-bold translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1.5">
                          {t.projects.viewDetails} <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="h-36 bg-[#111113] flex items-center justify-center relative">
                      <div className="w-16 h-16 rounded-2xl bg-zinc-700/30 border border-zinc-700/50 flex items-center justify-center">
                        <Layers className="w-7 h-7 text-zinc-600" />
                      </div>
                      <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="px-4 py-2 bg-white/90 text-slate-900 rounded-full text-xs font-bold translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1.5">
                          {t.projects.viewDetails} <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-grow relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">{pd.category}</span>
                      <div className="flex gap-3">
                        {project.links?.repoUrl && (
                          <span
                            onClick={e => { e.preventDefault(); window.open(project.links!.repoUrl, '_blank', 'noopener,noreferrer') }}
                            className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
                            aria-label={`GitHub ${pd.title}`}
                          >
                            <Github className="w-4 h-4" />
                          </span>
                        )}
                        {project.links?.liveUrl && (
                          <span
                            onClick={e => { e.preventDefault(); window.open(project.links!.liveUrl, '_blank', 'noopener,noreferrer') }}
                            className="text-zinc-500 hover:text-blue-400 transition-colors cursor-pointer"
                            aria-label={`Demo ${pd.title}`}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </span>
                        )}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{pd.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">{pd.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.slice(0, 4).map(tag => (
                        <span key={tag.label} className="px-2.5 py-1 bg-zinc-800/30 text-zinc-400 text-[10px] font-semibold rounded uppercase tracking-wider border border-zinc-700/50">
                          {tag.label}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2.5 py-1 text-zinc-500 text-[10px] font-semibold">+{project.tags.length - 4}</span>
                      )}
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
