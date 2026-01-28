import { Code2, Briefcase, User, Monitor, Server, Wrench, Zap, Lightbulb, Download } from 'lucide-react'
import { useI18n } from '../../../shared/i18n/I18nContext'

export function AboutSection() {
  const { t, lang } = useI18n()

  const skills = [
    {
      name: t.about.frontend,
      icon: <Monitor className="w-5 h-5" />,
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: t.about.backend,
      icon: <Server className="w-5 h-5" />,
      items: ['Node.js', 'Python', 'PostgreSQL', 'Supabase', 'SQLite', 'SQL'],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      name: t.about.devops,
      icon: <Wrench className="w-5 h-5" />,
      items: ['Docker', 'Git', 'Vercel', 'WSL', 'Linux'],
      color: 'from-orange-500 to-amber-500'
    },
  ]

  const highlights = [
    { label: t.about.focus, value: 'Full Stack & ML', icon: <Zap className="w-4 h-4" /> },
    { label: t.about.mainStack, value: 'React + Python', icon: <Code2 className="w-4 h-4" /> },
    { label: t.about.philosophy, value: lang === 'en' ? 'Learn by doing' : 'Aprender haciendo', icon: <Lightbulb className="w-4 h-4" /> },
  ]

  return (
    <section id="sobre-mi" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-wider mb-3">
            {t.about.sectionLabel}
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            {t.about.title}{' '}
            <span className="gradient-text">{t.about.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t.about.subtitle}
          </p>
        </div>

        {/* Bento Grid - 3 columns */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Featured Card - Skills (Spans 1 column) */}
          <div className="bento-featured rounded-[2rem] p-8 flex flex-col justify-between min-h-[380px] relative group">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-white/70 text-sm font-semibold uppercase tracking-wider">Skills</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                {t.about.mySkills}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {t.about.skillsDescription}
              </p>
            </div>

            <div className="mt-8 relative z-10">
              <div className="flex -space-x-2">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-indigo-500 shadow-lg">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-indigo-500 shadow-lg">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-indigo-500 shadow-lg">
                  <User className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            {/* Decorative */}
            <Code2 className="absolute -bottom-8 -right-8 w-48 h-48 text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
          </div>

          {/* Main About Card - Spans 2 columns */}
          <div className="md:col-span-2 bento-card rounded-[2rem] p-8 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10">
              <h4 className="text-2xl font-bold text-white mb-1">Edward Mathias Contreras</h4>
              <p className="text-indigo-400 text-sm font-semibold uppercase tracking-wider mb-6">{t.about.headline}</p>

              <div className="space-y-4 text-gray-400 leading-relaxed mb-8">
                {t.about.paragraphs.slice(0, 2).map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <a
                href="/CV.pdf"
                download="Edward_Mathias_Contreras_CV.pdf"
                className="btn-primary inline-flex"
              >
                <span className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  {t.about.downloadCV}
                </span>
              </a>
            </div>
          </div>

          {/* Stats Cards */}
          {highlights.map((item, idx) => (
            <div key={idx} className="bento-card rounded-[1.5rem] p-6 flex flex-col justify-center group hover:border-indigo-500/30 transition-colors">
              <div className="flex items-center gap-2 text-indigo-400 mb-2">
                {item.icon}
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {item.label}
                </span>
              </div>
              <p className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                {item.value}
              </p>
            </div>
          ))}

          {/* Skills Cards */}
          {skills.map((skillGroup) => (
            <div key={skillGroup.name} className="bento-card rounded-[1.5rem] p-6 group hover:border-white/20 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${skillGroup.color} bg-opacity-20`}>
                  <div className="text-white">
                    {skillGroup.icon}
                  </div>
                </div>
                <h3 className="font-bold text-white">{skillGroup.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map(item => (
                  <span key={item} className="tag hover:bg-white/10">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Fun Fact Card */}
          <div className="bento-card rounded-[1.5rem] p-6 bg-gradient-to-br from-emerald-500/10 via-transparent to-indigo-500/10 border-emerald-500/20">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">💡</span>
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">
                {t.about.funFact}
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t.about.funFactText}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
