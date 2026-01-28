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

  // Get translated project data
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
    // Fallback to original data
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
        {/* Background accent */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-indigo-400 text-sm font-semibold uppercase tracking-wider mb-3">Portfolio</p>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">{t.projects.title}</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full" />
            </div>

            {/* Category Filter - Glass effect */}
            <div className="flex gap-1 p-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              {categories.map(cat => (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${activeCategory === cat.key
                    ? 'bg-white text-gray-900 shadow-lg'
                    : 'text-gray-400 hover:text-white'
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const previewImage = project.details?.screenshots?.[0]
              const projectData = getProjectData(project)

              return (
                <article
                  key={project.id}
                  className="group card-hover card-shine bg-white/[0.02] border border-white/[0.06] rounded-[1.75rem] overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    {previewImage ? (
                      <img
                        src={previewImage.src}
                        alt={previewImage.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                          <Layers className="w-8 h-8 text-gray-600" />
                        </div>
                      </div>
                    )}

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-60" />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-gray-900 font-semibold text-sm transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        {t.projects.viewDetails}
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gray-900/80 backdrop-blur-sm rounded-lg text-xs font-semibold text-white border border-white/10">
                        {projectData.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                      {projectData.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-5 line-clamp-2 leading-relaxed">
                      {projectData.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag.label} className="tag">
                          {tag.label}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="tag text-gray-500">
                          +{project.tags.length - 3}
                        </span>
                      )}
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
              {/* Modal Header with Image Carousel */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                {screenshots.length > 0 ? (
                  <>
                    <img
                      src={screenshots[activeScreenshot].src}
                      alt={screenshots[activeScreenshot].alt}
                      className="w-full h-full object-cover transition-opacity duration-300"
                    />

                    {/* Carousel Controls */}
                    {screenshots.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={handlePrevScreenshot}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-900/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                          aria-label={lang === 'en' ? 'Previous' : 'Anterior'}
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          type="button"
                          onClick={handleNextScreenshot}
                          className="absolute right-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-900/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                          aria-label={lang === 'en' ? 'Next' : 'Siguiente'}
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>

                        {/* Dots indicator */}
                        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
                          {screenshots.map((_, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => setActiveScreenshot(idx)}
                              className={`w-2 h-2 rounded-full transition-all ${idx === activeScreenshot
                                  ? 'bg-white w-6'
                                  : 'bg-white/40 hover:bg-white/60'
                                }`}
                              aria-label={`Screenshot ${idx + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-indigo-900 to-gray-900 flex items-center justify-center">
                    <Layers className="w-16 h-16 text-gray-600" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

                {/* Close button */}
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-gray-900/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-colors"
                  aria-label={lang === 'en' ? 'Close' : 'Cerrar'}
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Project title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-indigo-600 rounded-lg text-xs font-semibold text-white">
                      {projectData.category} App
                    </span>
                    {selectedProject.details?.year && (
                      <span className="flex items-center gap-1.5 text-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        {selectedProject.details.year}
                      </span>
                    )}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white">
                    {projectData.title}
                  </h3>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 space-y-8">
                {/* Description */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">{t.projects.description}</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {projectData.longDescription}
                  </p>
                </div>

                {/* Screenshot Thumbnails Grid */}
                {screenshots.length > 1 && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">{t.projects.screenshots}</h4>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                      {screenshots.slice(0, 8).map((shot, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActiveScreenshot(idx)}
                          className={`aspect-video rounded-xl overflow-hidden border transition-all ${idx === activeScreenshot
                              ? 'border-indigo-500 ring-2 ring-indigo-500/30'
                              : 'border-white/10 hover:border-indigo-500/50'
                            }`}
                        >
                          <img
                            src={shot.src}
                            alt={shot.alt}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">{t.projects.technologies}</h4>
                  <div className="flex flex-wrap gap-2">
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
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">{t.projects.skillsShown}</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {projectData.skills.map(skill => (
                        <div key={skill.title} className="p-4 bg-white/[0.03] rounded-xl border border-white/[0.06] hover:border-indigo-500/30 transition-colors group">
                          <h5 className="font-semibold text-white mb-1 group-hover:text-indigo-400 transition-colors">{skill.title}</h5>
                          <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Links */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                  {selectedProject.links?.repoUrl && (
                    <a
                      href={selectedProject.links.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center gap-2"
                    >
                      <Github className="w-5 h-5" />
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
                      <span className="flex items-center gap-2">
                        <ExternalLink className="w-5 h-5" />
                        {t.projects.viewDemo}
                      </span>
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
