import { BarChart3, BookOpen, Code2, Database, Download, GraduationCap, Monitor, PawPrint, Server, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useI18n } from '../../../shared/i18n/I18nContext'

export function AboutSection() {
  const { t, lang } = useI18n()

  const skills = [
    {
      name: lang === 'en' ? 'Languages' : 'Lenguajes',
      icon: <Code2 className="w-4 h-4" />,
      items: ['Python', 'C#', 'TypeScript', 'JavaScript', 'SQL', 'R'],
      accent: 'accent-blue',
      tagColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      iconColor: 'text-blue-400',
    },
    {
      name: 'Backend',
      icon: <Server className="w-4 h-4" />,
      items: ['REST APIs', 'Flask', 'Node.js', 'Express', '.NET 8'],
      accent: 'accent-emerald',
      tagColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      iconColor: 'text-emerald-400',
    },
    {
      name: lang === 'en' ? 'Data' : 'Datos',
      icon: <BarChart3 className="w-4 h-4" />,
      items: ['Pandas', 'NumPy', 'ETL pipelines'],
      accent: 'accent-violet',
      tagColor: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
      iconColor: 'text-violet-400',
    },
    {
      name: lang === 'en' ? 'Databases' : 'Bases de Datos',
      icon: <Database className="w-4 h-4" />,
      items: ['PostgreSQL', 'SQLite', 'Supabase', 'SQL', 'Firebase'],
      accent: 'accent-emerald',
      tagColor: 'bg-teal-500/10 text-teal-300 border-teal-500/20',
      iconColor: 'text-teal-300',
    },
    {
      name: 'Frontend',
      icon: <Monitor className="w-4 h-4" />,
      items: ['React', 'Next.js', 'Tailwind CSS', 'CSS', 'HTML'],
      accent: 'accent-blue',
      tagColor: 'bg-sky-500/10 text-sky-300 border-sky-500/20',
      iconColor: 'text-sky-300',
    },
    {
      name: 'DevOps',
      icon: <Wrench className="w-4 h-4" />,
      items: ['Docker', 'Git', 'CI/CD', 'Nginx', 'VPS'],
      accent: 'accent-amber',
      tagColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      iconColor: 'text-amber-400',
    },
  ]

  const focusItems = lang === 'en'
    ? ['Backend architecture', 'Data pipelines', 'API design', 'Deployment automation']
    : ['Arquitectura backend', 'Pipelines de datos', 'Diseno de APIs', 'Automatizacion de despliegues']

  return (
    <section id="sobre-mi" className="py-28 relative">
      <div className="section-divider" />

      <div className="max-w-6xl mx-auto px-6 pt-14">
        {/* Header */}
        <div className="mb-16">
          <p className="text-blue-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
            {t.about.sectionLabel}
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t.about.title}{' '}
            <span className="text-gradient">{t.about.titleHighlight}</span>
          </h2>
          <p className="text-zinc-500 max-w-2xl text-base lg:text-lg mt-4">
            {t.about.subtitle}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-5 gap-5 mb-16">
          {/* Bio Card */}
          <div className="lg:col-span-3 bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 relative overflow-hidden hover:border-white/[0.1] transition-colors">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/[0.04] rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Header with photo */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/Perfil.webp"
                  alt="Edward Mathias Contreras"
                  className="w-14 h-14 rounded-xl object-cover border border-white/10"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">Edward Mathias Contreras</h3>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-3.5 h-3.5 text-violet-400" />
                    <p className="text-violet-400 text-xs font-semibold">{t.about.headline}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-zinc-400 text-[15px] leading-relaxed mb-8">
                {t.about.paragraphs.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className={idx === t.about.paragraphs.length - 1 ? 'font-semibold text-violet-200' : undefined}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="/CV.pdf"
                  download="Edward_Mathias_Contreras_CV.pdf"
                  className="inline-flex items-center gap-2.5 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all"
                >
                  <Download className="w-4 h-4" />
                  {t.about.downloadCV}
                </a>

                <Link
                  to="/gatos"
                  className="inline-flex items-center gap-2.5 px-6 py-3 border border-violet-500/30 bg-violet-500/[0.07] text-violet-200 rounded-xl font-bold text-sm hover:border-violet-400/50 hover:bg-violet-500/[0.12] transition-all"
                >
                  <PawPrint className="w-4 h-4" />
                  {lang === 'en' ? 'Meet my cats' : 'Conoce a mis gatos'}
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-5">
            {/* Code block card */}
            <div className="code-block">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="text-zinc-600 text-[10px] ml-2 tracking-wider">developer.ts</span>
              </div>
              <div><span className="code-keyword">const</span> <span className="code-property">developer</span> <span className="code-bracket">=</span> <span className="code-bracket">{'{'}</span></div>
              <div className="pl-4"><span className="code-property">role</span><span className="code-bracket">:</span> <span className="code-string">"Backend/Data Engineer"</span><span className="code-bracket">,</span></div>
              <div className="pl-4"><span className="code-property">stack</span><span className="code-bracket">:</span> <span className="code-bracket">[</span><span className="code-string">"Python"</span><span className="code-bracket">,</span> <span className="code-string">"C#"</span><span className="code-bracket">,</span> <span className="code-string">"SQL"</span><span className="code-bracket">],</span></div>
              <div className="pl-4"><span className="code-property">focus</span><span className="code-bracket">:</span> <span className="code-string">"Backend &amp; Data"</span><span className="code-bracket">,</span></div>
              <div className="pl-4"><span className="code-property">available</span><span className="code-bracket">:</span> <span className="text-emerald-400">true</span></div>
              <div><span className="code-bracket">{'}'}</span><span className="code-bracket">;</span></div>
            </div>

            {/* Skills summary */}
            <div className="accent-violet bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 hover:border-white/[0.1] transition-colors">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500 mb-3">{t.about.mySkills}</h4>
              <p className="text-white font-semibold text-sm leading-relaxed">{t.about.skillsDescription}</p>
            </div>

            {/* Focus */}
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 border-l-2 border-l-violet-500/40 hover:border-white/[0.1] transition-colors">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-violet-400" />
                <span className="text-violet-400 text-[10px] font-bold uppercase tracking-wider">
                  {lang === 'en' ? 'Current focus' : 'Enfoque actual'}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {focusItems.map(item => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-[10px] font-bold rounded-lg border border-violet-500/30 bg-violet-500/[0.07] text-violet-300 uppercase tracking-widest"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="section-divider mb-12" />
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-8">
          <div>
            <p className="text-blue-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-3">
              {lang === 'en' ? 'Backend / Data profile' : 'Perfil backend / data'}
            </p>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-600">
              {lang === 'en' ? 'Tech Stack' : 'Stack Tecnologico'}
            </h3>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-zinc-500">
            {lang === 'en'
              ? 'Experience in using each tool in my projects, APIs, data flows, and deployments.'
              : 'Experiencia en el uso de cada herramienta en mis proyectos, APIs, flujos de datos y despliegues.'}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group) => (
            <div key={group.name} className={`${group.accent} bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 hover:border-white/[0.1] transition-colors`}>
              <div className="flex items-center gap-3 mb-4">
                <span className={group.iconColor}>{group.icon}</span>
                <h4 className="text-white font-bold text-sm uppercase tracking-wider">{group.name}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map(item => (
                  <span
                    key={item}
                    className={`px-3 py-1.5 text-[10px] font-bold rounded-lg border uppercase tracking-widest ${group.tagColor}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
