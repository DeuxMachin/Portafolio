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
    <footer className="py-12 border-t border-white/5 relative">
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <a href="#inicio" className="text-2xl font-black gradient-text">
              EC.
            </a>
            <span className="hidden md:block w-px h-5 bg-white/10" />
            <p className="text-gray-500 text-sm flex items-center gap-1.5">
              © {currentYear} Edward Contreras · {lang === 'en' ? 'Made with' : 'Hecho con'}{' '}
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
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
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
