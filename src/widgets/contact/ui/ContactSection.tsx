import { Mail } from 'lucide-react'
import { useI18n } from '../../../shared/i18n/I18nContext'

export function ContactSection() {
  const { t } = useI18n()

  return (
    <section id="contacto" className="py-24 relative">
      <div className="section-divider absolute top-0 left-0" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-zinc-100">
            {t.contact.title}{' '}
            <span className="text-amber-400">{t.contact.titleHighlight}</span>?
          </h2>

          <p className="text-zinc-500 text-lg leading-relaxed">
            {t.contact.description}
          </p>

          <div className="pt-4">
            <a
              href="mailto:mathias.contreras.a@gmail.com"
              className="btn-primary text-base !px-8 !py-3.5"
            >
              <Mail className="w-5 h-5" />
              {t.contact.sendMessage}
            </a>
          </div>

          <div className="pt-6">
            <p className="text-zinc-600 text-sm mb-1">{t.contact.email}</p>
            <a
              href="mailto:mathias.contreras.a@gmail.com"
              className="text-zinc-300 hover:text-amber-400 transition-colors text-sm"
            >
              mathias.contreras.a@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
