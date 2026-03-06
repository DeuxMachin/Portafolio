import { useState, useEffect, useCallback } from 'react'
import { ExternalLink, Github, X, Calendar, Layers, ArrowRight, ChevronLeft, ChevronRight, Sparkles, Code2, Workflow, ZoomIn } from 'lucide-react'
import type { Project } from '../../../pages/portfolio/model/types'
import { useI18n } from '../../../shared/i18n/I18nContext'

type ProjectsSectionProps = {
  projects: Project[]
}

type ProjectCategory = 'all' | 'web' | 'desktop' | 'mobile'

const techColors: Record<string, string> = {
  'React': '#61dafb',
  'React 19': '#61dafb',
  'Next.js': '#ffffff',
  'TypeScript': '#3178c6',
  'Tailwind CSS': '#06b6d4',
  'Vite': '#646cff',
  'Vitest': '#6e9f18',
  'Playwright': '#2ead33',
  'Vercel': '#ffffff',
  'Supabase': '#3ecf8e',
  'PostgreSQL': '#4169e1',
  'Node.js': '#339933',
  'Python': '#3776ab',
  'Flask': '#ffffff',
  'WPF': '#68217a',
  '.NET 8': '#512bd4',
  'C#': '#239120',
  'ESC/POS': '#f59e0b',
  'Docker': '#2496ed',
  'Git': '#f05032',
  'SQLite': '#003b57',
  'Graphein': '#ef4444',
  'Mol*': '#f97316',
  'NetworkX': '#a855f7',
  'BioPython': '#06b6d4',
}

/* ============================
   Image Lightbox
   ============================ */
function ImageLightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-zinc-900/80 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-zinc-100 transition-colors z-10"
        aria-label="Cerrar"
      >
        <X className="w-5 h-5" />
      </button>
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-[90vh] object-contain rounded-lg"
        onClick={e => e.stopPropagation()}
      />
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-zinc-500 text-sm">{alt}</p>
    </div>
  )
}

/* ============================
   ProjectsSection
   ============================ */
export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const { t, lang, getProjectT } = useI18n()
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeScreenshot, setActiveScreenshot] = useState(0)
  const [activeModalTab, setActiveModalTab] = useState<'overview' | 'features' | 'process'>('overview')
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null)

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

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null)
    setActiveScreenshot(0)
    setActiveModalTab('overview')
  }, [])

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

  const getTechColor = (label: string) => techColors[label] || '#a1a1aa'

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [selectedProject])

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

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.slice(0, 4).map(tag => (
                        <span key={tag.label} className="tech-tag">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: getTechColor(tag.label) }} />
                          {tag.label}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="tech-tag text-zinc-600">+{project.tags.length - 4}</span>
                      )}
                    </div>

                    {/* Action */}
                    <div className="flex items-center gap-2 pt-3 border-t border-zinc-800/50">
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); setSelectedProject(project) }}
                        className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-amber-400 transition-colors"
                      >
                        {t.projects.viewDetails}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <div className="ml-auto flex gap-1.5">
                        {project.links?.repoUrl && (
                          <a href={project.links.repoUrl} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="p-1.5 rounded-md text-zinc-600 hover:text-zinc-200 hover:bg-zinc-800/50 transition-colors" aria-label="GitHub">
                            <Github className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {project.links?.liveUrl && (
                          <a href={project.links.liveUrl} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="p-1.5 rounded-md text-zinc-600 hover:text-zinc-200 hover:bg-zinc-800/50 transition-colors" aria-label="Ver Demo">
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

      {/* ═══════════════════════════════════════
         PROJECT DETAIL MODAL
         ═══════════════════════════════════════ */}
      {selectedProject && (() => {
        const projectData = getProjectData(selectedProject)
        const screenshots = selectedProject.details?.screenshots || []

        const tabs = [
          { key: 'overview' as const, label: lang === 'en' ? 'Overview' : 'Resumen', icon: <Sparkles className="w-3.5 h-3.5" /> },
          ...(projectData.features.length > 0 ? [{ key: 'features' as const, label: lang === 'en' ? 'Features' : 'Características', icon: <Code2 className="w-3.5 h-3.5" /> }] : []),
          ...(projectData.process.length > 0 ? [{ key: 'process' as const, label: lang === 'en' ? 'Process' : 'Proceso', icon: <Workflow className="w-3.5 h-3.5" /> }] : []),
        ]

        return (
          <div className="modal-backdrop" onClick={handleCloseModal}>
            <div className="modal-content my-8" onClick={e => e.stopPropagation()}>

              {/* ── Hero Image (clickable to expand) ── */}
              <div className="relative h-56 md:h-72 overflow-hidden group/hero">
                {screenshots.length > 0 ? (
                  <>
                    <img
                      src={screenshots[activeScreenshot].src}
                      alt={screenshots[activeScreenshot].alt}
                      className="w-full h-full object-cover transition-opacity duration-300 md:cursor-pointer select-none"
                      onDoubleClick={() => setLightboxImage(screenshots[activeScreenshot])}
                    />

                    {/* Expand button (explicit text on mobile, icon on desktop) */}
                    <button
                      type="button"
                      onClick={() => setLightboxImage(screenshots[activeScreenshot])}
                      className="absolute top-3 left-3 px-3 py-1.5 md:w-9 md:h-9 md:p-0 rounded-lg bg-zinc-900/80 backdrop-blur-sm border border-zinc-700/70 flex items-center justify-center gap-1.5 text-zinc-300 hover:text-zinc-100 transition-colors z-10"
                      aria-label={lang === 'en' ? 'Expand image' : 'Expandir imagen'}
                    >
                      <ZoomIn className="w-4 h-4" />
                      <span className="text-xs font-semibold md:hidden">{lang === 'en' ? 'Expand' : 'Expandir'}</span>
                    </button>

                    {screenshots.length > 1 && (
                      <>
                        <button type="button" onClick={handlePrevScreenshot} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 flex items-center justify-center text-zinc-300 hover:text-zinc-100 transition-colors" aria-label="Anterior">
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button type="button" onClick={handleNextScreenshot} className="absolute right-14 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 flex items-center justify-center text-zinc-300 hover:text-zinc-100 transition-colors" aria-label="Siguiente">
                          <ChevronRight className="w-4 h-4" />
                        </button>
                        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-1.5">
                          {screenshots.map((_, idx) => (
                            <button key={idx} type="button" onClick={() => setActiveScreenshot(idx)} className={`w-1.5 h-1.5 rounded-full transition-all ${idx === activeScreenshot ? 'bg-zinc-100 w-5' : 'bg-zinc-500 hover:bg-zinc-400'}`} aria-label={`Screenshot ${idx + 1}`} />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-950 flex items-center justify-center">
                    <Layers className="w-12 h-12 text-zinc-700" />
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f11] via-[#0f0f11]/40 to-transparent pointer-events-none" />

                <button type="button" onClick={handleCloseModal} className="absolute top-3 right-3 w-9 h-9 rounded-lg bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-zinc-100 transition-colors z-10" aria-label="Cerrar">
                  <X className="w-4 h-4" />
                </button>

                <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-1 bg-amber-500 rounded-md text-xs font-semibold text-zinc-900">{projectData.category}</span>
                    {selectedProject.details?.year && (
                      <span className="flex items-center gap-1 text-zinc-400 text-sm">
                        <Calendar className="w-3.5 h-3.5" />
                        {selectedProject.details.year}
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-zinc-100">{projectData.title}</h3>
                </div>
              </div>

              {/* ── Tab Navigation ── */}
              <div className="border-b border-zinc-800 px-6">
                <div className="flex gap-1 -mb-px">
                  {tabs.map(tab => (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => setActiveModalTab(tab.key)}
                      className={`flex items-center gap-1.5 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                        activeModalTab === tab.key
                          ? 'border-amber-400 text-amber-400'
                          : 'border-transparent text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      {tab.icon}
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* ── Tab Content ── */}
              <div className="p-6 space-y-6 max-h-[50vh] overflow-y-auto custom-scrollbar">

                {/* === OVERVIEW === */}
                {activeModalTab === 'overview' && (
                  <>
                    <p className="text-zinc-400 leading-relaxed text-sm">{projectData.longDescription}</p>

                    {/* Screenshot Gallery */}
                    {screenshots.length > 1 && (
                      <div>
                        <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">{t.projects.screenshots}</h4>
                        <div className="grid grid-cols-4 md:grid-cols-5 gap-2">
                          {screenshots.slice(0, 10).map((shot, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => setActiveScreenshot(idx)}
                              onDoubleClick={() => setLightboxImage(shot)}
                              className={`aspect-video rounded-lg overflow-hidden border transition-all relative group/thumb select-none ${
                                idx === activeScreenshot ? 'border-amber-500 ring-1 ring-amber-500/30' : 'border-zinc-800 hover:border-zinc-600'
                              }`}
                            >
                              <img src={shot.src} alt={shot.alt} className="w-full h-full object-cover" />
                              <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/40 transition-colors flex items-center justify-center">
                                <ZoomIn className="w-4 h-4 text-white opacity-0 group-hover/thumb:opacity-100 transition-opacity" />
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technologies */}
                    <div>
                      <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">{t.projects.technologies}</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map(tag => (
                          <span key={tag.label} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-colors">
                            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: getTechColor(tag.label) }} />
                            <span className="text-xs font-medium text-zinc-300">{tag.label}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Skills */}
                    {projectData.skills.length > 0 && (
                      <div>
                        <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">{t.projects.skillsShown}</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {projectData.skills.map((skill, idx) => (
                            <div key={skill.title} className="card p-4 group hover:border-amber-500/20 transition-colors">
                              <div className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-md bg-amber-500/10 text-amber-400 flex items-center justify-center text-xs font-bold mt-0.5">{idx + 1}</span>
                                <div>
                                  <h5 className="text-sm font-semibold text-zinc-200 mb-1">{skill.title}</h5>
                                  <p className="text-zinc-500 text-xs leading-relaxed">{skill.description}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* === FEATURES === */}
                {activeModalTab === 'features' && projectData.features.length > 0 && (
                  <div className="space-y-3">
                    {projectData.features.map((feature, idx) => (
                      <div key={feature.title} className="card p-4 group hover:border-zinc-700 transition-colors">
                        <div className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-400 flex items-center justify-center text-xs font-semibold">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <div className="pt-0.5">
                            <h5 className="text-sm font-semibold text-zinc-200 mb-1 group-hover:text-amber-400 transition-colors">{feature.title}</h5>
                            <p className="text-zinc-500 text-xs leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* === PROCESS (Technical Timeline) === */}
                {activeModalTab === 'process' && projectData.process.length > 0 && (
                  <div className="relative pl-4">
                    {/* Vertical line */}
                    <div className="absolute left-[7px] top-1 bottom-1 w-px bg-gradient-to-b from-amber-500/60 via-zinc-700 to-zinc-800" />

                    <div className="space-y-0">
                      {projectData.process.map((step, idx) => {
                        const isFirst = idx === 0
                        const isLast = idx === projectData.process.length - 1

                        return (
                          <div key={step.title} className="relative flex items-start gap-5 group">
                            {/* Timeline node */}
                            <div className="relative z-10 flex-shrink-0 -ml-4">
                              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                                isFirst
                                  ? 'border-amber-400 bg-amber-400/20'
                                  : isLast
                                    ? 'border-zinc-500 bg-zinc-800'
                                    : 'border-zinc-600 bg-zinc-900 group-hover:border-amber-400/50'
                              } transition-colors`}>
                                {isFirst && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
                              </div>
                            </div>

                            {/* Content card */}
                            <div className={`flex-1 pb-6 ${isLast ? 'pb-0' : ''}`}>
                              <div className="card p-4 group-hover:border-zinc-700 transition-colors">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                                    {lang === 'en' ? 'Phase' : 'Fase'} {String(idx + 1).padStart(2, '0')}
                                  </span>
                                  {isFirst && (
                                    <span className="px-1.5 py-0.5 bg-amber-500/10 border border-amber-500/20 rounded text-[10px] font-semibold text-amber-400 uppercase">
                                      {lang === 'en' ? 'Start' : 'Inicio'}
                                    </span>
                                  )}
                                  {isLast && (
                                    <span className="px-1.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded text-[10px] font-semibold text-emerald-400 uppercase">
                                      {lang === 'en' ? 'Delivery' : 'Entrega'}
                                    </span>
                                  )}
                                </div>
                                <h5 className="text-sm font-semibold text-zinc-200 mb-1.5 group-hover:text-amber-400 transition-colors">
                                  {step.title}
                                </h5>
                                <p className="text-zinc-500 text-xs leading-relaxed">
                                  {step.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* ── Links (sticky bottom) ── */}
              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-3 pt-4 border-t border-zinc-800">
                  {selectedProject.links?.repoUrl && (
                    <a href={selectedProject.links.repoUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                      <Github className="w-4 h-4" />
                      {t.projects.viewCode}
                    </a>
                  )}
                  {selectedProject.links?.liveUrl && (
                    <a href={selectedProject.links.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
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

      {/* ═══ Image Lightbox ═══ */}
      {lightboxImage && (
        <ImageLightbox
          src={lightboxImage.src}
          alt={lightboxImage.alt}
          onClose={() => setLightboxImage(null)}
        />
      )}
    </>
  )
}
