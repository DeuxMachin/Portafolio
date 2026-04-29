import { Monitor, Server, Wrench, Download, GraduationCap, BookOpen } from 'lucide-react'
import { useI18n } from '../../../shared/i18n/I18nContext'

export function AboutSection() {
  const { t, lang } = useI18n()

  const skills = [
    {
      name: t.about.frontend,
      icon: <Monitor className="w-4 h-4" />,
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
      accent: 'accent-blue',
      tagColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      iconColor: 'text-blue-400',
    },
    {
      name: t.about.backend,
      icon: <Server className="w-4 h-4" />,
      items: ['Node.js', 'Supabase', 'PostgreSQL', 'APIs', 'Python', 'Arquitectura'],
      accent: 'accent-emerald',
      tagColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      iconColor: 'text-emerald-400',
    },
    {
      name: t.about.devops,
      icon: <Wrench className="w-4 h-4" />,
      items: ['Git', 'Vercel', 'Docker', 'WSL', 'Linux', 'Vitest'],
      accent: 'accent-amber',
      tagColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      iconColor: 'text-amber-400',
    },
  ]

  const learningItems = ['WPF', '.NET', 'Testing', 'JWT', 'Autenticación']

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
          {/* Bio Card — 3 cols */}
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
                {t.about.paragraphs.slice(0, 2).map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <a
                href="/CV.pdf"
                download="Edward_Mathias_Contreras_CV.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all"
              >
                <Download className="w-4 h-4" />
                {t.about.downloadCV}
              </a>
            </div>
          </div>

          {/* Right Column — 2 cols */}
          <div className="lg:col-span-2 space-y-5">
            {/* Code block card — personality element */}
            <div className="code-block">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="text-zinc-600 text-[10px] ml-2 tracking-wider">developer.ts</span>
              </div>
              <div><span className="code-keyword">const</span> <span className="code-property">developer</span> <span className="code-bracket">=</span> <span className="code-bracket">{'{'}</span></div>
              <div className="pl-4"><span className="code-property">role</span><span className="code-bracket">:</span> <span className="code-string">"Full Stack Dev"</span><span className="code-bracket">,</span></div>
              <div className="pl-4"><span className="code-property">stack</span><span className="code-bracket">:</span> <span className="code-bracket">[</span><span className="code-string">"React"</span><span className="code-bracket">,</span> <span className="code-string">"Python"</span><span className="code-bracket">],</span></div>
              <div className="pl-4"><span className="code-property">focus</span><span className="code-bracket">:</span> <span className="code-string">"Build &amp; Learn"</span><span className="code-bracket">,</span></div>
              <div className="pl-4"><span className="code-property">available</span><span className="code-bracket">:</span> <span className="text-emerald-400">true</span></div>
              <div><span className="code-bracket">{'}'}</span><span className="code-bracket">;</span></div>
            </div>

            {/* Skills summary */}
            <div className="accent-violet bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 hover:border-white/[0.1] transition-colors">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500 mb-3">{t.about.mySkills}</h4>
              <p className="text-white font-semibold text-sm leading-relaxed">{t.about.skillsDescription}</p>
            </div>

            {/* Fun Fact */}
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 border-l-2 border-l-violet-500/40 hover:border-white/[0.1] transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base">💡</span>
                <span className="text-violet-400 text-[10px] font-bold uppercase tracking-wider">{t.about.funFact}</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">{t.about.funFactText}</p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="section-divider mb-12" />
        <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-600 mb-8">
          {lang === 'en' ? 'Tech Stack' : 'Stack Tecnológico'}
        </h3>
        <div className="grid md:grid-cols-3 gap-5">
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

        {/* Currently Learning */}
        <div className="mt-10">
          <div className="flex items-center gap-3 mb-5">
            <BookOpen className="w-4 h-4 text-violet-400" />
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">
              {lang === 'en' ? 'Currently Learning' : 'Aprendiendo'}
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {learningItems.map(item => (
              <span
                key={item}
                className="flex items-center gap-2 px-4 py-2 text-[10px] font-bold rounded-lg border border-violet-500/30 bg-violet-500/[0.07] text-violet-300 uppercase tracking-widest"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
