import { useState } from 'react'
import { Camera, PawPrint, X } from 'lucide-react'
import { useI18n } from '../../../shared/i18n/I18nContext'

type CatPhoto = {
  src: string
  alt: string
  name: string
  note: string
  featured?: boolean
}

const catPhotos: CatPhoto[] = [
  {
    src: '/Cats/Inicio.webp',
    alt: 'Los cuatro gatos juntos',
    name: 'La banda completa',
    note: 'Los cuatro integrantes del equipo de soporte emocional.',
    featured: true,
  },
  {
    src: '/Cats/Ayun/1.webp',
    alt: 'Ayun descansando',
    name: 'Ayun',
    note: 'Tranquila, observadora y con cara de saber mas de lo que dice.',
  },
  {
    src: '/Cats/Ayun/2.webp',
    alt: 'Ayun mirando a camara',
    name: 'Ayun',
    note: 'Especialista en aparecer justo cuando hay que concentrarse.',
  },
  {
    src: '/Cats/Milky/1.webp',
    alt: 'Milky descansando',
    name: 'Milky',
    note: 'Modo suave, pero con criterio propio.',
  },
  {
    src: '/Cats/Milky/2.webp',
    alt: 'Milky mirando',
    name: 'Milky',
    note: 'Parte del equipo de QA visual del portafolio.',
  },
  {
    src: '/Cats/Milky/3.webp',
    alt: 'Milky en casa',
    name: 'Milky',
    note: 'Presencia constante durante sesiones largas de codigo.',
  },
  {
    src: '/Cats/Pancho/1.webp',
    alt: 'Pancho descansando',
    name: 'Pancho',
    note: 'Supervisor serio de escritorio y teclado.',
  },
  {
    src: '/Cats/Pancho/2.webp',
    alt: 'Pancho mirando a camara',
    name: 'Pancho',
    note: 'Tiene cara de revisar pull requests sin avisar.',
  },
  {
    src: '/Cats/Shiro/1.webp',
    alt: 'Shiro descansando',
    name: 'Shiro',
    note: 'Calma aparente, energia impredecible.',
  },
  {
    src: '/Cats/Shiro/2.webp',
    alt: 'Shiro mirando',
    name: 'Shiro',
    note: 'Buen companero para pensar soluciones raras.',
  },
  {
    src: '/Cats/Shiro/3.webp',
    alt: 'Shiro en casa',
    name: 'Shiro',
    note: 'Cierra la galeria con presencia.',
  },
]

export function CatsSection() {
  const { lang } = useI18n()
  const [selectedPhoto, setSelectedPhoto] = useState<CatPhoto | null>(null)

  return (
    <section id="gatos" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6 pt-14">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-violet-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
              {lang === 'en' ? 'Personal side' : 'Lado personal'}
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight">
              {lang === 'en' ? 'My' : 'Mis'}{' '}
              <span className="text-gradient">{lang === 'en' ? 'Cats' : 'Gatos'}</span>
            </h2>
            <p className="text-zinc-500 max-w-2xl text-base lg:text-lg mt-4">
              {lang === 'en'
                ? 'A small break from code: the four cats that usually keep me company while I work.'
                : 'Un descanso pequeño del codigo: los cuatro gatos que suelen acompañarme mientras trabajo.'}
            </p>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-xs font-bold uppercase tracking-widest text-zinc-400">
            <PawPrint className="h-4 w-4 text-violet-400" />
            {lang === 'en' ? '4 cats' : '4 gatos'}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {catPhotos.map((photo) => (
            <article
              key={photo.src}
              className={`${photo.featured ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''} group overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-colors hover:border-violet-400/30`}
            >
              <button
                type="button"
                onClick={() => setSelectedPhoto(photo)}
                className={`relative block w-full overflow-hidden bg-zinc-950 text-left ${photo.featured ? 'aspect-[4/3] lg:aspect-auto lg:h-full min-h-[360px]' : 'aspect-[4/3]'}`}
                aria-label={`${lang === 'en' ? 'Open photo of' : 'Abrir foto de'} ${photo.name}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading={photo.featured ? 'eager' : 'lazy'}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <Camera className="h-4 w-4 text-violet-300" />
                    <h3 className="text-sm font-bold uppercase tracking-wider text-white">{photo.name}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-300">{photo.note}</p>
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${lang === 'en' ? 'Expanded photo of' : 'Foto ampliada de'} ${selectedPhoto.name}`}
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0b] shadow-2xl shadow-black/50"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/45 text-zinc-300 transition-colors hover:border-violet-400/40 hover:text-white"
              aria-label={lang === 'en' ? 'Close image' : 'Cerrar imagen'}
            >
              <X className="h-5 w-5" />
            </button>

            <div className="max-h-[78vh] bg-zinc-950">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="mx-auto max-h-[78vh] w-full object-contain"
              />
            </div>

            <div className="border-t border-white/[0.06] p-5">
              <div className="mb-2 flex items-center gap-2">
                <Camera className="h-4 w-4 text-violet-300" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">{selectedPhoto.name}</h3>
              </div>
              <p className="text-sm leading-relaxed text-zinc-400">{selectedPhoto.note}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
