import { Code2, Briefcase, Monitor, Server, Wrench, Download } from 'lucide-react'
import { useI18n } from '../../../shared/i18n/I18nContext'

export function AboutSection() {
  const { t, lang } = useI18n()

  const skills = [
    {
      name: t.about.frontend,
      icon: <Monitor className="w-4 h-4" />,
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
    },
    {
      name: t.about.backend,
      icon: <Server className="w-4 h-4" />,
      items: ['Node.js', 'Python', 'PostgreSQL', 'Supabase', 'SQLite', 'SQL'],
    },
    {
      name: t.about.devops,
      icon: <Wrench className="w-4 h-4" />,
      items: ['Docker', 'Git', 'Vercel', 'WSL', 'Linux'],
    },
  ]

  const stats = [
    { label: t.about.focus, value: 'Full Stack & ML' },
    { label: t.about.mainStack, value: 'React + Python' },
    { label: t.about.philosophy, value: lang === 'en' ? 'Learn by doing' : 'Aprender haciendo' },
  ]

  return (
    <section id="sobre-mi" className="py-24 relative">
      <div className="section-divider absolute top-0 left-0" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-amber-400 text-sm font-medium tracking-wide mb-3">
            {t.about.sectionLabel}
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-zinc-100">
            {t.about.title}{' '}
            <span className="text-amber-400">{t.about.titleHighlight}</span>
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-5 gap-8">

          {/* Left Column - Bio (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <Briefcase className="w-5 h-5 text-amber-400" />
              <div>
                <h3 className="text-lg font-semibold text-zinc-100">Edward Mathias Contreras</h3>
                <p className="text-sm text-zinc-500">{t.about.headline}</p>
              </div>
            </div>

            <div className="space-y-4 text-zinc-400 leading-relaxed">
              {t.about.paragraphs.slice(0, 2).map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="text-xs text-zinc-600 uppercase tracking-wider">{stat.label}</p>
                  <p className="text-sm font-semibold text-zinc-200">{stat.value}</p>
                </div>
              ))}
            </div>

            <a
              href="/CV.pdf"
              download="Edward_Mathias_Contreras_CV.pdf"
              className="btn-secondary inline-flex mt-4"
            >
              <Download className="w-4 h-4" />
              {t.about.downloadCV}
            </a>
          </div>

          {/* Right Column - Skills (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            {skills.map((skillGroup) => (
              <div key={skillGroup.name} className="card p-5">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="text-amber-400">
                    {skillGroup.icon}
                  </div>
                  <h4 className="text-sm font-semibold text-zinc-200">{skillGroup.name}</h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skillGroup.items.map(item => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Fun Fact */}
            <div className="card p-5 border-amber-500/20">
              <div className="flex items-center gap-2 mb-2">
                <Code2 className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  {t.about.funFact}
                </span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {t.about.funFactText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
