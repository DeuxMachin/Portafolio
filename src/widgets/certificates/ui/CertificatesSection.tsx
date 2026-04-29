import { Award, Download } from 'lucide-react'
import { useI18n } from '../../../shared/i18n/I18nContext'

type Certificate = {
  id: string
  title: string
  issuer: string
  date: string
  pdfPath: string
}

const certificates: Certificate[] = [
  {
    id: 'cert-claude-ia',
    title: 'Claude IA',
    issuer: 'Anthropic',
    date: '2026',
    pdfPath: '/certificates/ClaudeIA.pdf',
  },
  {
    id: 'cert-agile-santander',
    title: 'Metodologia Agile',
    issuer: 'Santander',
    date: '2026',
    pdfPath: '/certificates/Metodolog%C3%ADaAgileSantander.pdf',
  },
  {
    id: 'cert-python',
    title: 'Python',
    issuer: 'Kaggle',
    date: '2026',
    pdfPath: '/certificates/Edward%20Contreras%20-%20Python.pdf',
  },
  {
    id: 'cert-pandas',
    title: 'Pandas',
    issuer: 'Kaggle',
    date: '2026',
    pdfPath: '/certificates/Edward%20Contreras%20-%20Pandas-2.pdf',
  },
  {
    id: 'cert-advanced-sql',
    title: 'Advanced SQL',
    issuer: 'Kaggle',
    date: '2026',
    pdfPath: '/certificates/Edward%20Contreras%20-%20Advanced%20SQL-1.pdf',
  },
]

export function CertificatesSection() {
  const { t } = useI18n()

  return (
    <section id="certificados" className="py-28 relative">
      <div className="section-divider" />

      <div className="max-w-6xl mx-auto px-6 pt-14">
        {/* Header */}
        <div className="mb-16">
          <p className="text-blue-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
            {t.certificates.sectionLabel}
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t.certificates.title}{' '}
            <span className="text-gradient">{t.certificates.titleHighlight}</span>
          </h2>
          <p className="text-zinc-500 max-w-2xl text-base lg:text-lg mt-4">
            {t.certificates.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden"
            >
              {/* PDF Preview - bloqueado, solo visual */}
              <div className="relative w-full overflow-hidden bg-zinc-950 select-none" style={{ height: '200px' }}>
                <iframe
                  src={`${cert.pdfPath}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                  title={cert.title}
                  loading="lazy"
                  style={{
                    width: '167%',
                    height: '340px',
                    transform: 'scale(0.6)',
                    transformOrigin: 'top left',
                    border: 'none',
                    pointerEvents: 'none',
                  }}
                />
                {/* Capa que bloquea toda interaccion con el iframe */}
                <div className="absolute inset-0" />
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 min-w-0">
                    <Award className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                    <div className="min-w-0">
                      <h3 className="text-white font-semibold text-sm leading-snug mb-1">{cert.title}</h3>
                      <p className="text-zinc-500 text-[11px]">{cert.issuer} · {cert.date}</p>
                    </div>
                  </div>

                  <a
                    href={cert.pdfPath}
                    download
                    aria-label={`Descargar certificado ${cert.title}`}
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition-colors hover:border-blue-400/40 hover:text-blue-300"
                  >
                    <Download className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
