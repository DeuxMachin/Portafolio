import { Mail, ChevronRight } from 'lucide-react'
import { useI18n } from '../../../shared/i18n/I18nContext'

export function ContactSection() {
  const { t } = useI18n()

  return (
    <section id="contacto" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main CTA Card */}
        <div className="text-center py-20 bg-white/5 rounded-[3rem] border border-white/10 px-6 relative overflow-hidden">
          {/* Decorative gradient */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t.contact.title} <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">{t.contact.titleHighlight}</span>?
            </h2>
            <p className="text-gray-400 mb-10 max-w-lg mx-auto text-lg">
              {t.contact.description}
            </p>
            <a
              href="mailto:mathias.contreras.a@gmail.com"
              className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/10"
            >
              <Mail className="w-5 h-5" />
              {t.contact.sendMessage}
            </a>
          </div>
        </div>

        {/* Quick Contact Card */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <a
            href="mailto:mathias.contreras.a@gmail.com"
            className="p-8 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-white/10 rounded-[2rem] flex items-center justify-between group cursor-pointer hover:border-white/20 transition-all"
          >
            <div>
              <p className="text-sm font-bold text-emerald-400 mb-1">{t.contact.haveIdea}</p>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2 group-hover:gap-4 transition-all">
                {t.contact.letsTalk} <ChevronRight className="w-6 h-6" />
              </h3>
            </div>
          </a>

          <div className="p-8 bg-white/5 border border-white/10 rounded-[2rem] flex items-center justify-center hover:bg-white/[0.07] transition-all">
            <div className="text-center">
              <p className="text-gray-500 text-sm mb-2">{t.contact.email}</p>
              <a
                href="mailto:mathias.contreras.a@gmail.com"
                className="text-white font-medium hover:text-blue-400 transition-colors"
              >
                mathias.contreras.a@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
