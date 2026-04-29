import { Briefcase, Building2, ArrowRight, CheckCircle2 } from 'lucide-react'
import { useI18n } from '../../../shared/i18n/I18nContext'

export function ExperienceSection() {
  const { t, lang } = useI18n()

  return (
    <section id="experiencia" className="py-28 relative">
      <div className="section-divider" />

      <div className="max-w-6xl mx-auto px-6 pt-14">
        {/* Header */}
        <div className="mb-16">
          <p className="text-blue-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
            {t.experience.sectionLabel}
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t.experience.title}{' '}
            <span className="text-gradient">{t.experience.titleHighlight}</span>
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Freelance Developer */}
          <div className="group relative bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-blue-500/20 transition-all duration-300 p-8 md:p-10">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/[0.04] rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                  <Briefcase className="w-5 h-5 text-blue-400" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                {t.experience.freelance.title}
              </h3>
              <p className="text-zinc-500 text-sm mb-6 font-medium">
                {t.experience.freelance.subtitle}
              </p>

              <div className="space-y-3 mb-8">
                {t.experience.freelance.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-400 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-blue-400 text-sm font-medium group-hover:gap-3 transition-all">
                {lang === 'en' ? 'Learn more' : 'Saber más'}
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* IT Support */}
          <div className="group relative bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-emerald-500/20 transition-all duration-300 p-8 md:p-10">
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/[0.04] rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                  <Building2 className="w-5 h-5 text-emerald-400" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                {t.experience.support.title}
              </h3>
              <p className="text-zinc-500 text-sm mb-6 font-medium">
                {t.experience.support.subtitle}
              </p>

              <div className="space-y-3 mb-8">
                {t.experience.support.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-400 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium group-hover:gap-3 transition-all">
                {lang === 'en' ? 'Learn more' : 'Saber más'}
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
