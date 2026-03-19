import { useState } from 'react'
import { Mail, Copy, CheckCircle2, Github, Linkedin, ArrowUpRight } from 'lucide-react'
import { useI18n } from '../../../shared/i18n/I18nContext'

export function ContactSection() {
  const { t, lang } = useI18n()
  const [copied, setCopied] = useState(false)

  const email = 'mathias.contreras.a@gmail.com'

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contacto" className="py-28 relative">
      <div className="section-divider" />

      <div className="max-w-3xl mx-auto px-6 pt-14">
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-3xl p-8 md:p-14 text-center relative overflow-hidden">
          {/* Background texture */}
          <div className="absolute inset-0 dot-pattern opacity-40" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-violet-500/[0.06] rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-block px-4 py-1.5 bg-violet-500/[0.08] border border-violet-500/15 rounded-full text-violet-400 text-[10px] font-bold tracking-widest uppercase mb-6">
              {t.contact.haveIdea}
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight leading-tight">
              {t.contact.title}{' '}
              <span className="text-gradient">{t.contact.titleHighlight}</span>?
            </h2>

            <p className="text-zinc-400 mb-10 max-w-md mx-auto text-base leading-relaxed">
              {t.contact.description}
            </p>

            {/* Email Copy */}
            <button
              type="button"
              onClick={copyEmail}
              className="group relative w-full max-w-md mx-auto px-6 py-4 bg-white/[0.03] border border-white/[0.06] rounded-2xl flex items-center justify-center gap-3 hover:border-violet-500/30 hover:bg-violet-500/[0.02] transition-all duration-300 mb-6"
            >
              <Mail className="w-5 h-5 text-zinc-500 group-hover:text-violet-400 transition-colors flex-shrink-0" />
              <span className="text-base md:text-lg font-medium text-white tracking-tight truncate">
                {copied ? t.contact.emailCopied : email}
              </span>
              <div className="p-1.5 bg-white/[0.06] rounded-lg group-hover:bg-violet-500/15 transition-colors flex-shrink-0">
                {copied ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4 text-zinc-500 group-hover:text-violet-400 transition-colors" />
                )}
              </div>
            </button>

            {/* CTA */}
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2.5 bg-blue-600 text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all mb-8"
            >
              <Mail className="w-4 h-4" />
              {t.contact.sendMessage}
            </a>

            {/* Social */}
            <div className="pt-6 border-t border-white/[0.06]">
              <p className="text-zinc-600 text-xs font-semibold uppercase tracking-wider mb-4">
                {lang === 'en' ? 'Or find me on' : 'También en'}
              </p>
              <div className="flex items-center justify-center gap-3">
                <a href="https://github.com/DeuxMachin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.03] border border-white/[0.06] rounded-xl text-zinc-400 hover:text-white hover:border-white/[0.12] transition-all text-sm font-medium">
                  <Github className="w-4 h-4" />
                  GitHub
                  <ArrowUpRight className="w-3 h-3 opacity-50" />
                </a>
                <a href="https://www.linkedin.com/in/edward-contreras-aqueveque-8339b9360/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.03] border border-white/[0.06] rounded-xl text-zinc-400 hover:text-white hover:border-white/[0.12] transition-all text-sm font-medium">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                  <ArrowUpRight className="w-3 h-3 opacity-50" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
