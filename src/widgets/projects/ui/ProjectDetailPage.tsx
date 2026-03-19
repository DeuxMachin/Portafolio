import { useState, useEffect } from 'react'
import { ExternalLink, Github, Calendar, ChevronLeft, ChevronRight, Layers, Globe } from 'lucide-react'
import type { Project } from '../../../pages/portfolio/model/types'
import { useI18n } from '../../../shared/i18n/I18nContext'

type Props = {
  project: Project
}

export function ProjectDetailPage({ project }: Props) {
  const { t, lang, toggleLang, getProjectT } = useI18n()
  const [activeScreenshot, setActiveScreenshot] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const translated = getProjectT(project.id)
  const projectData = translated
    ? {
        title: translated.title,
        description: translated.description,
        longDescription: translated.longDescription,
        category: translated.category,
        skills: translated.skills,
        features: translated.features,
        process: translated.process,
      }
    : {
        title: project.title,
        description: project.description,
        longDescription: project.details?.longDescription || project.description,
        category: 'Web',
        skills: project.details?.skills || [],
        features: project.details?.features || [],
        process: project.details?.process || [],
      }

  const screenshots = project.details?.screenshots || []
  const hasFeatures = projectData.features.length > 0
  const hasProcess = projectData.process.length > 0

  const prevScreenshot = () =>
    setActiveScreenshot(p => (p === 0 ? screenshots.length - 1 : p - 1))
  const nextScreenshot = () =>
    setActiveScreenshot(p => (p === screenshots.length - 1 ? 0 : p + 1))

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-zinc-300">

      {/* ── Navbar ── */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-[#0a0a0b]/90 backdrop-blur-xl border-zinc-800/60'
            : 'bg-[#0a0a0b]/40 backdrop-blur-md border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo + breadcrumb */}
          <div className="flex items-center gap-3">
            <a href="/" className="text-xl font-black text-white hover:opacity-70 transition-opacity">
              EC.
            </a>
            <span className="text-zinc-700">/</span>
            <a
              href="/#proyectos"
              className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors text-sm font-medium"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              {lang === 'en' ? 'Projects' : 'Proyectos'}
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-all text-[11px] font-bold uppercase tracking-wider"
              aria-label="Cambiar idioma"
            >
              <Globe className="w-3.5 h-3.5" />
              {lang}
            </button>
            {project.links?.repoUrl && (
              <a
                href={project.links.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-zinc-400 hover:text-white border border-zinc-700/60 hover:border-zinc-500 rounded-lg text-[11px] font-bold transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                GitHub
              </a>
            )}
            {project.links?.liveUrl && (
              <a
                href={project.links.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white rounded-lg text-[11px] font-bold hover:bg-blue-500 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Demo
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* ── Hero: full-bleed screenshot ── */}
      <div className="relative w-full" style={{ height: '62vh', minHeight: '360px', maxHeight: '580px' }}>
        {screenshots.length > 0 ? (
          <>
            <img
              src={screenshots[activeScreenshot].src}
              alt={screenshots[activeScreenshot].alt}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay: dark at top (for navbar legibility) + strong dark at bottom (for text) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/40 to-[#0a0a0b]/20" />
          </>
        ) : (
          <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
            <Layers className="w-24 h-24 text-zinc-800" />
          </div>
        )}

        {/* Screenshot nav arrows */}
        {screenshots.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevScreenshot}
              className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-black/80 transition-colors z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextScreenshot}
              className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-black/80 transition-colors z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            {/* Dot indicators */}
            <div className="absolute bottom-24 right-8 flex gap-1.5 z-10">
              {screenshots.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveScreenshot(idx)}
                  className={`h-1 rounded-full transition-all ${idx === activeScreenshot ? 'bg-white w-6' : 'bg-white/30 w-3 hover:bg-white/50'}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Hero text overlay (bottom-left) */}
        <div className="absolute bottom-0 left-0 right-0 px-8 pb-10 max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-2.5 py-1 bg-blue-500/20 border border-blue-500/30 rounded-md text-[10px] font-black text-blue-400 uppercase tracking-widest">
              {projectData.category}
            </span>
            {project.details?.year && (
              <span className="flex items-center gap-1.5 text-zinc-400 text-sm">
                <Calendar className="w-3.5 h-3.5" />
                {project.details.year}
              </span>
            )}
            {project.statusPing && (
              <span className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live
              </span>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] mb-4">
            {projectData.title}
          </h1>
          <p className="text-zinc-300/90 text-base md:text-lg leading-relaxed max-w-2xl">
            {projectData.description}
          </p>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
        <div className="grid lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_320px] gap-10 xl:gap-14">

          {/* ── Left column: rich content ── */}
          <div className="space-y-10 min-w-0">

            {/* About */}
            <section>
              <h2 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.25em] mb-4">
                {lang === 'en' ? 'About this project' : 'Sobre el proyecto'}
              </h2>
              <p className="text-zinc-300 text-[15px] leading-[1.75]">
                {projectData.longDescription}
              </p>
            </section>

            {/* Features */}
            {hasFeatures && (
              <section>
                <h2 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.25em] mb-5">
                  {lang === 'en' ? 'Key Features' : 'Funcionalidades clave'}
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {projectData.features.map((feat, idx) => (
                    <div
                      key={feat.title}
                      className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-all"
                    >
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="shrink-0 w-6 h-6 rounded-md bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-[9px] font-black">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <h4 className="font-bold text-white text-[13px] leading-snug">{feat.title}</h4>
                      </div>
                      <p className="text-zinc-400 text-[12px] leading-relaxed pl-8">{feat.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Process */}
            {hasProcess && (
              <section>
                <h2 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.25em] mb-5">
                  {lang === 'en' ? 'Development Process' : 'Proceso de desarrollo'}
                </h2>
                <div className="space-y-0">
                  {projectData.process.map((step, idx) => (
                    <div key={step.title} className="flex gap-5">
                      <div className="flex flex-col items-center shrink-0">
                        <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-[10px] font-black text-zinc-400">
                          {idx + 1}
                        </div>
                        {idx < projectData.process.length - 1 && (
                          <div className="w-px flex-1 bg-zinc-800 my-2" />
                        )}
                      </div>
                      <div className={idx < projectData.process.length - 1 ? 'pb-8 pt-0.5' : 'pt-0.5'}>
                        <h4 className="font-bold text-white text-sm mb-2">{step.title}</h4>
                        <p className="text-zinc-400 text-[13px] leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Skills */}
            {projectData.skills.length > 0 && (
              <section>
                <h2 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.25em] mb-5">
                  {t.projects.skillsShown}
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {projectData.skills.map(skill => (
                    <div
                      key={skill.title}
                      className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-all"
                    >
                      <h4 className="font-bold text-white text-[13px] mb-1.5">{skill.title}</h4>
                      <p className="text-zinc-400 text-[12px] leading-relaxed">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* ── Right sidebar ── */}
          <aside className="space-y-4 lg:sticky lg:top-20 self-start">

            {/* Tech Stack card */}
            <div className="p-6 bg-zinc-900/40 border border-zinc-800 rounded-2xl">
              <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.25em] mb-4">
                {lang === 'en' ? 'Tech Stack' : 'Tecnologías'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag.label}
                    className="px-2.5 py-1 bg-zinc-800 text-zinc-300 text-[11px] font-semibold rounded-lg border border-zinc-700/60"
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Screenshot thumbnails */}
            {screenshots.length > 1 && (
              <div className="p-6 bg-zinc-900/40 border border-zinc-800 rounded-2xl">
                <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.25em] mb-4">
                  {t.projects.screenshots}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {screenshots.map((shot, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => { setActiveScreenshot(idx); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                      className={`aspect-video rounded-xl overflow-hidden border-2 transition-all ${
                        idx === activeScreenshot
                          ? 'border-blue-500 opacity-100'
                          : 'border-transparent opacity-50 hover:opacity-80'
                      }`}
                    >
                      <img src={shot.src} alt={shot.alt} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            {(project.links?.repoUrl || project.links?.liveUrl) && (
              <div className="space-y-2">
                {project.links?.repoUrl && (
                  <a
                    href={project.links.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full p-4 bg-zinc-900/40 border border-zinc-800 rounded-2xl hover:border-zinc-600 transition-all group"
                  >
                    <span className="flex items-center gap-3 text-sm font-semibold text-zinc-300 group-hover:text-white">
                      <Github className="w-4 h-4" />
                      {lang === 'en' ? 'Source Code' : 'Código fuente'}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                  </a>
                )}
                {project.links?.liveUrl && (
                  <a
                    href={project.links.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full p-4 bg-blue-600/10 border border-blue-500/20 rounded-2xl hover:border-blue-500/50 hover:bg-blue-600/15 transition-all group"
                  >
                    <span className="flex items-center gap-3 text-sm font-semibold text-blue-400 group-hover:text-blue-300">
                      <ExternalLink className="w-4 h-4" />
                      {lang === 'en' ? 'Live Demo' : 'Ver demo'}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-blue-600/60 group-hover:text-blue-400 transition-colors" />
                  </a>
                )}
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  )
}
