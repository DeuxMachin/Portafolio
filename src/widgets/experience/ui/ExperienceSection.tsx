import { Briefcase, Building2, Calendar, CheckCircle2, Layers, TrendingUp, Zap } from 'lucide-react'
import { useI18n } from '../../../shared/i18n/I18nContext'

export function ExperienceSection() {
  const { t, lang } = useI18n()

  const positions = [
    {
      id: 'freelance',
      icon: <Briefcase className="w-5 h-5" />,
      title: t.experience.freelance.title,
      company: t.experience.freelance.company,
      period: lang === 'en' ? '2025 — Present' : '2025 — Presente',
      accent: 'blue',
      bgGlow: 'bg-blue-500/[0.04]',
      borderHover: 'hover:border-blue-500/20',
      iconBg: 'bg-blue-500/10 border-blue-500/20',
      iconColor: 'text-blue-400',
      tagColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      dotColor: 'bg-blue-500',
      statusBadge: lang === 'en' ? 'Current' : 'Actual',
      achievements: t.experience.freelance.achievements,
      tech: t.experience.freelance.tech,
      highlight: lang === 'en'
        ? 'Built and deployed production systems used by real businesses for sales, inventory, quotes, and catalog management.'
        : 'Construí y desplegué sistemas en producción usados por negocios reales para ventas, inventario, cotizaciones y gestión de catálogos.',
    },
    {
      id: 'support',
      icon: <Building2 className="w-5 h-5" />,
      title: t.experience.support.title,
      company: t.experience.support.company,
      period: lang === 'en' ? '2024 — 2026' : '2024 — 2026',
      accent: 'emerald',
      bgGlow: 'bg-emerald-500/[0.04]',
      borderHover: 'hover:border-emerald-500/20',
      iconBg: 'bg-emerald-500/10 border-emerald-500/20',
      iconColor: 'text-emerald-400',
      tagColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      dotColor: 'bg-emerald-500',
      statusBadge: undefined,
      achievements: t.experience.support.achievements,
      tech: t.experience.support.tech,
      highlight: lang === 'en'
        ? 'Provided Level 1 & 2 technical support in a real enterprise environment, managing networks, hardware, and direct user assistance.'
        : 'Brindé soporte técnico nivel 1 y 2 en entorno empresarial real, gestionando redes, hardware y asistencia directa a usuarios.',
    },
  ]

  const summaryCards = [
    {
      icon: <TrendingUp className="w-4 h-4" />,
      value: '+3',
      label: lang === 'en' ? 'Systems Deployed' : 'Sistemas Desplegados',
      accent: 'blue' as const,
    },
    {
      icon: <Layers className="w-4 h-4" />,
      value: '5',
      label: lang === 'en' ? 'Technologies Mastered' : 'Tecnologías Dominadas',
      accent: 'violet' as const,
    },
    {
      icon: <Zap className="w-4 h-4" />,
      value: '+2',
      label: lang === 'en' ? 'Years Experience' : 'Años de Experiencia',
      accent: 'emerald' as const,
    },
  ]

  return (
    <section id="experiencia" className="py-28 relative overflow-hidden">
      <div className="section-divider" />

      <div className="max-w-6xl mx-auto px-6 pt-14">
        {/* ── Header ── */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <p className="text-blue-500 text-[10px] font-bold uppercase tracking-[0.3em]">
              {t.experience.sectionLabel}
            </p>
            <span className="h-px flex-1 bg-white/[0.06]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t.experience.title}{' '}
            <span className="text-gradient">{t.experience.titleHighlight}</span>
          </h2>
          <p className="text-zinc-500 max-w-2xl text-base lg:text-lg mt-4">
            {t.experience.description}
          </p>
        </div>

        {/* ── Summary Metrics ── */}
        <div className="grid grid-cols-3 gap-4 mb-16">
          {summaryCards.map((card) => (
            <div
              key={card.label}
              className={`relative bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 text-center overflow-hidden hover:border-white/[0.1] transition-colors accent-${card.accent}`}
            >
              <div
                className={`absolute top-0 right-0 w-20 h-20 rounded-full blur-3xl pointer-events-none ${
                  card.accent === 'blue' ? 'bg-blue-500/[0.04]' : card.accent === 'violet' ? 'bg-violet-500/[0.04]' : 'bg-emerald-500/[0.04]'
                }`}
              />
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-8 h-8 rounded-lg mb-3 ${
                  card.accent === 'blue'
                    ? 'bg-blue-500/10 text-blue-400'
                    : card.accent === 'violet'
                    ? 'bg-violet-500/10 text-violet-400'
                    : 'bg-emerald-500/10 text-emerald-400'
                }`}>
                  {card.icon}
                </div>
                <div className={`text-2xl font-black ${
                  card.accent === 'blue'
                    ? 'text-blue-400'
                    : card.accent === 'violet'
                    ? 'text-violet-400'
                    : 'text-emerald-400'
                }`}>
                  {card.value}
                </div>
                <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider mt-1">
                  {card.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-5 md:left-8 top-4 bottom-4 w-px bg-gradient-to-b from-blue-500/40 via-violet-500/30 to-emerald-500/20" />

          <div className="space-y-12">
            {positions.map((pos, idx) => (
              <div key={pos.id} className="relative flex flex-col md:flex-row gap-6 md:gap-10">
                {/* Timeline dot + date */}
                <div className="flex md:flex-col items-center md:items-end gap-4 md:w-40 md:shrink-0">
                  <div className={`relative z-10 flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-xl ${pos.iconBg} border shadow-lg shadow-black/20`}>
                    <div className={pos.iconColor}>
                      {pos.icon}
                    </div>
                    {/* Active pulse for current role */}
                    {idx === 0 && (
                      <span className="absolute inset-0 rounded-xl animate-ping bg-blue-500/10" />
                    )}
                  </div>
                  <div className="md:text-right">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-500 uppercase tracking-wider">
                      <Calendar className="w-3 h-3 md:hidden" />
                      {pos.period}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div className={`flex-1 group relative bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden ${pos.borderHover} transition-all duration-300`}>
                  <div className={`absolute top-0 right-0 w-64 h-64 ${pos.bgGlow} rounded-full blur-3xl pointer-events-none`} />
                  <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${
                    pos.accent === 'blue'
                      ? 'from-blue-500/50 to-transparent'
                      : 'from-emerald-500/50 to-transparent'
                  }`} />

                  <div className="relative z-10 p-6 md:p-8">
                    {/* Header row */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-xl md:text-2xl font-bold text-white">
                            {pos.title}
                          </h3>
                          {pos.statusBadge && (
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                              pos.accent === 'blue'
                                ? 'bg-blue-500/15 text-blue-400 border border-blue-500/30'
                                : 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                            }`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${pos.accent === 'blue' ? 'bg-blue-400' : 'bg-emerald-400'} animate-pulse`} />
                              {pos.statusBadge}
                            </span>
                          )}
                        </div>
                        <p className={`text-sm font-medium ${pos.iconColor}`}>
                          {pos.company}
                        </p>
                      </div>
                      <span className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold text-zinc-600 uppercase tracking-wider">
                        <Calendar className="w-3 h-3" />
                        {pos.period}
                      </span>
                    </div>

                    {/* Highlight */}
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 border-l-2 border-white/[0.06] pl-4 italic">
                      {pos.highlight}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2.5 mb-6">
                      {pos.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pos.iconColor}`} />
                          <span className="text-zinc-400 text-sm leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 mr-1">
                        {lang === 'en' ? 'Tech' : 'Tecnologías'}
                      </span>
                      {pos.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2.5 py-1 text-[10px] font-bold rounded-lg border uppercase tracking-widest ${pos.tagColor}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Code Block Easter Egg ── */}
        <div className="mt-16">
          <div className="code-block">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="text-zinc-600 text-[10px] ml-2 tracking-wider">experience.ts</span>
            </div>
            <div>
              <span className="code-keyword">interface</span>{' '}
              <span className="code-property">CareerPath</span>{' '}
              <span className="code-bracket">{'{'}</span>
            </div>
            <div className="pl-4">
              <span className="code-property">freelance</span>
              <span className="code-bracket">:</span>{' '}
              <span className="text-zinc-400">&#123;</span>
            </div>
            <div className="pl-8">
              <span className="code-property">role</span>
              <span className="code-bracket">:</span>{' '}
              <span className="code-string">"Full Stack Developer"</span>
              <span className="code-bracket">,</span>
            </div>
            <div className="pl-8">
              <span className="code-property">status</span>
              <span className="code-bracket">:</span>{' '}
              <span className="text-emerald-400">"active"</span>
              <span className="code-bracket">,</span>
            </div>
            <div className="pl-8">
              <span className="code-property">clients</span>
              <span className="code-bracket">:</span>{' '}
              <span className="text-amber-400">3</span>
              <span className="code-bracket">,</span>
            </div>
            <div className="pl-8">
              <span className="code-property">focus</span>
              <span className="code-bracket">:</span>{' '}
              <span className="code-bracket">[</span>
              <span className="code-string">"backend"</span>
              <span className="code-bracket">,</span>{' '}
              <span className="code-string">"dashboards"</span>
              <span className="code-bracket">,</span>{' '}
              <span className="code-string">"automation"</span>
              <span className="code-bracket">],</span>
            </div>
            <div className="pl-4">
              <span className="text-zinc-400">&#125;</span>
              <span className="code-bracket">,</span>
            </div>
            <div className="pl-4">
              <span className="code-property">itSupport</span>
              <span className="code-bracket">:</span>{' '}
              <span className="text-zinc-400">&#123;</span>
            </div>
            <div className="pl-8">
              <span className="code-property">organization</span>
              <span className="code-bracket">:</span>{' '}
              <span className="code-string">"Santo Tomás Temuco"</span>
              <span className="code-bracket">,</span>
            </div>
            <div className="pl-8">
              <span className="code-property">level</span>
              <span className="code-bracket">:</span>{' '}
              <span className="text-amber-400">2</span>
              <span className="code-bracket">,</span>
            </div>
            <div className="pl-4">
              <span className="text-zinc-400">&#125;</span>
            </div>
            <div>
              <span className="code-bracket">{'}'}</span>
              <span className="code-bracket">;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
