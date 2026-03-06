import { Github, Linkedin, Twitter, Heart } from 'lucide-react'
import { useI18n } from '../../../shared/i18n/I18nContext'

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/DeuxMachin', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/edwardcontreras', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/edwardcontreras', icon: Twitter },
]

export function Footer() {
  const { lang } = useI18n()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-10 border-t border-zinc-800/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <a href="#inicio" className="font-heading text-lg font-bold text-zinc-100 hover:text-amber-400 transition-colors">
              edward.
            </a>
            <span className="hidden md:block w-px h-4 bg-zinc-800" />
            <p className="text-zinc-600 text-sm flex items-center gap-1.5">
              © {currentYear} Edward Contreras · {lang === 'en' ? 'Made with' : 'Hecho con'}{' '}
              <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map(link => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
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
