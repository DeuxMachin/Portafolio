import { useEffect } from 'react'
import { ArrowLeft, PawPrint } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CatsSection } from '../../../widgets/cats/ui/CatsSection'
import { Footer } from '../../../widgets/footer/ui/Footer'
import { useI18n } from '../../../shared/i18n/I18nContext'

export function CatsPage() {
  const { lang } = useI18n()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-zinc-300">
      <header className="border-b border-white/[0.06] bg-[#0a0a0b]/90">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-zinc-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            {lang === 'en' ? 'Back to portfolio' : 'Volver al portafolio'}
          </Link>

          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-violet-300">
            <PawPrint className="h-4 w-4" />
            {lang === 'en' ? 'Personal gallery' : 'Galeria personal'}
          </div>
        </div>
      </header>

      <main>
        <CatsSection />
      </main>

      <Footer />
    </div>
  )
}
