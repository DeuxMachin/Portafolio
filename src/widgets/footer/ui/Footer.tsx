import { Github, Linkedin, Twitter, Heart } from 'lucide-react'
import { useI18n } from '../../../shared/i18n/I18nContext'

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/edwardcontreras', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/edwardcontreras', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/edwardcontreras', icon: Twitter },
]

export function Footer() {
  const { lang } = useI18n()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-zinc-800/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <a href="#inicio" className="text-xl font-black text-white hover:opacity-80 transition-opacity">
              EC.
            </a>
            <span className="hidden md:block w-px h-5 bg-zinc-800" />
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-600 flex items-center gap-1.5">
              © {currentYear} Edward Contreras · {lang === 'en' ? 'Made with' : 'Hecho con'}{' '}
              <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map(link => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.06] text-zinc-500 hover:text-white hover:border-blue-500/30 transition-all duration-200"
                  aria-label={link.name}
                >
                  <Icon className="w-4 h-4" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
