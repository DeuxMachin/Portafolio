import { useState } from 'react'
import { ExternalLink, Github, X, Calendar, Layers, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import type { Project } from '../../../pages/portfolio/model/types'
import { useI18n } from '../../../shared/i18n/I18nContext'

type ProjectsSectionProps = {
  projects: Project[]
}

type ProjectCategory = 'all' | 'web' | 'desktop' | 'mobile'

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const { t, lang, getProjectT } = useI18n()
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeScreenshot, setActiveScreenshot] = useState(0)

  const getCategory = (project: Project): ProjectCategory => {
    if (project.id.includes('POS')) return 'desktop'
    return 'web'
  }

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => getCategory(p) === activeCategory)

  const categories: { key: ProjectCategory; label: string }[] = [
    { key: 'all', label: t.projects.all },
    { key: 'web', label: t.projects.web },
    { key: 'desktop', label: t.projects.desktop },
  ]

  const getProjectData = (project: Project) => {
    const translated = getProjectT(project.id)
    if (translated) {
      return {
        title: translated.title,
        description: translated.description,
        longDescription: translated.longDescription,
        category: translated.category,
        skills: translated.skills,
        features: translated.features,
        process: translated.process,
      }
    }
    return {
      title: project.title,
      description: project.description,
      longDescription: project.details?.longDescription || project.description,
      category: getCategory(project) === 'desktop' ? 'Desktop' : 'Web',
      skills: project.details?.skills || [],
      features: project.details?.features || [],
      process: project.details?.process || [],
    }
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
    setActiveScreenshot(0)
  }

  const handlePrevScreenshot = () => {
    if (!selectedProject?.details?.screenshots) return
    setActiveScreenshot(prev =>
      prev === 0 ? selectedProject.details!.screenshots!.length - 1 : prev - 1
    )
  }

  const handleNextScreenshot = () => {
    if (!selectedProject?.details?.screenshots) return
    setActiveScreenshot(prev =>
      prev === selectedProject.details!.screenshots!.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <>
      <section id="proyectos" className="py-24 relative">
        <div className="section-divider absolute top-0 left-0" />

        <div className="max-w-5xl mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <p className="text-amber-400 text-sm font-medium tracking-wide mb-3">Portfolio</p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-zinc-100">{t.projects.title}</h2>
            </div>

            {/* Category Filter */}
            <div className="flex gap-1 p-1 bg-zinc-900 border border-zinc-800 rounded-lg">
              {categories.map(cat => (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeCategory === cat.key
                    ? 'bg-zinc-100 text-zinc-900'
                    : 'text-zinc-500 hover:text-zinc-200'
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((project) => {
              const previewImage = project.details?.screenshots?.[0]
              const projectData = getProjectData(project)

              return (
                <article
                  key={project.id}
                  className="card card-interactive overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    {previewImage ? (
                      <img
                        src={previewImage.src}
                        alt={previewImage.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                        <Layers className="w-8 h-8 text-zinc-700" />
                      </div>
                    )}

                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-zinc-900/90 backdrop-blur-sm rounded-md text-xs font-medium text-zinc-300 border border-zinc-700/50">
                        {projectData.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3">
                    <h3 className="text-base font-semibold text-zinc-100 group-hover:text-amber-400 transition-colors">
                      {projectData.title}
                    </h3>
                    <p className="text-zinc-500 text-sm line-clamp-2 leading-relaxed">
                      {projectData.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag.label} className="tag">
                          {tag.label}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="tag text-zinc-600">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action */}
                    <div className="flex items-center gap-2 pt-3 border-t border-zinc-800/50">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedProject(project)
                        }}
                        className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-amber-400 transition-colors"
                      >
                        {t.projects.viewDetails}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <div className="ml-auto flex gap-1.5">
                        {project.links?.repoUrl && (
                          <a
                            href={project.links.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 rounded-md text-zinc-600 hover:text-zinc-200 hover:bg-zinc-800/50 transition-colors"
                            title="GitHub"
                            aria-label="GitHub"
                          >
                            <Github className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {project.links?.liveUrl && (
                          <a
                            href={project.links.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 rounded-md text-zinc-600 hover:text-zinc-200 hover:bg-zinc-800/50 transition-colors"
                            title="Demo"
                            aria-label="Ver Demo"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (() => {
        const projectData = getProjectData(selectedProject)
        const screenshots = selectedProject.details?.screenshots || []

        return (
          <div
            className="modal-backdrop"
            onClick={handleCloseModal}
          >
            <div
              className="modal-content my-8"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Header with Image */}
              <div className="relative h-56 md:h-72 overflow-hidden">
                {screenshots.length > 0 ? (
                  <>
                    <img
                      src={screenshots[activeScreenshot].src}
                      alt={screenshots[activeScreenshot].alt}
                      className="w-full h-full object-cover transition-opacity duration-300"
                    />

                    {screenshots.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={handlePrevScreenshot}
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 flex items-center justify-center text-zinc-300 hover:text-zinc-100 transition-colors"
                          aria-label={lang === 'en' ? 'Previous' : 'Anterior'}
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={handleNextScreenshot}
                          className="absolute right-14 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 flex items-center justify-center text-zinc-300 hover:text-zinc-100 transition-colors"
                          aria-label={lang === 'en' ? 'Next' : 'Siguiente'}
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>

                        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-1.5">
                          {screenshots.map((_, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => setActiveScreenshot(idx)}
                              className={`w-1.5 h-1.5 rounded-full transition-all ${idx === activeScreenshot
                                  ? 'bg-zinc-100 w-5'
                                  : 'bg-zinc-500 hover:bg-zinc-400'
                                }`}
                              aria-label={`Screenshot ${idx + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                    <Layers className="w-12 h-12 text-zinc-700" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f11] via-[#0f0f11]/40 to-transparent" />

                {/* Close button */}
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="absolute top-3 right-3 w-9 h-9 rounded-lg bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-zinc-100 transition-colors"
                  aria-label={lang === 'en' ? 'Close' : 'Cerrar'}
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-1 bg-amber-500 rounded-md text-xs font-semibold text-zinc-900">
                      {projectData.category}
                    </span>
                    {selectedProject.details?.year && (
                      <span className="flex items-center gap-1 text-zinc-400 text-sm">
                        <Calendar className="w-3.5 h-3.5" />
                        {selectedProject.details.year}
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-zinc-100">
                    {projectData.title}
                  </h3>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">{t.projects.description}</h4>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    {projectData.longDescription}
                  </p>
                </div>

                {/* Screenshot Thumbnails */}
                {screenshots.length > 1 && (
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">{t.projects.screenshots}</h4>
                    <div className="grid grid-cols-4 md:grid-cols-5 gap-2">
                      {screenshots.slice(0, 8).map((shot, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActiveScreenshot(idx)}
                          className={`aspect-video rounded-lg overflow-hidden border transition-all ${idx === activeScreenshot
                              ? 'border-amber-500 ring-1 ring-amber-500/30'
                              : 'border-zinc-800 hover:border-zinc-600'
                            }`}
                        >
                          <img
                            src={shot.src}
                            alt={shot.alt}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div>
                  <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">{t.projects.technologies}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tags.map(tag => (
                      <span key={tag.label} className="tag">
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                {projectData.skills.length > 0 && (
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">{t.projects.skillsShown}</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {projectData.skills.map(skill => (
                        <div key={skill.title} className="card p-4 hover:border-zinc-700 transition-colors">
                          <h5 className="text-sm font-semibold text-zinc-200 mb-1">{skill.title}</h5>
                          <p className="text-zinc-500 text-xs leading-relaxed">{skill.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Links */}
                <div className="flex flex-wrap gap-3 pt-3 border-t border-zinc-800">
                  {selectedProject.links?.repoUrl && (
                    <a
                      href={selectedProject.links.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      <Github className="w-4 h-4" />
                      {t.projects.viewCode}
                    </a>
                  )}
                  {selectedProject.links?.liveUrl && (
                    <a
                      href={selectedProject.links.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t.projects.viewDemo}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      })()}
    </>
  )
}
