import { GitHubIcon, LinkedInIcon, MailIcon } from '../../ui/Icons';
import { personalInfo } from '../../../data/personalInfo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#161B22] border-t border-[#30363D] py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-xl font-bold text-[#A8E6CF] hover:text-[#7BC9A8] transition-colors"
            >
              &lt;EMC /&gt;
            </a>
            <p className="text-[#7A8090] text-sm mt-2">
              © {currentYear} {personalInfo.name}. Todos los derechos reservados.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {personalInfo.socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#2A2F3A] flex items-center justify-center text-[#B8BCC8] hover:text-[#A8E6CF] hover:bg-[#2E333D] transition-all"
                aria-label={link.name}
              >
                {link.icon === 'github' && <GitHubIcon size={20} />}
                {link.icon === 'linkedin' && <LinkedInIcon size={20} />}
                {link.icon === 'mail' && <MailIcon size={20} />}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 pt-8 border-t border-[#30363D] flex flex-wrap justify-center gap-6 text-sm">
          <a
            href="#about"
            className="text-[#7A8090] hover:text-[#A8E6CF] transition-colors"
          >
            Sobre Mí
          </a>
          <a
            href="#stack"
            className="text-[#7A8090] hover:text-[#A8E6CF] transition-colors"
          >
            Stack
          </a>
          <a
            href="#projects"
            className="text-[#7A8090] hover:text-[#A8E6CF] transition-colors"
          >
            Proyectos
          </a>
          <a
            href="#references"
            className="text-[#7A8090] hover:text-[#A8E6CF] transition-colors"
          >
            Referencias
          </a>
          <a
            href="#contact"
            className="text-[#7A8090] hover:text-[#A8E6CF] transition-colors"
          >
            Contacto
          </a>
        </div>

        {/* Built with */}
        <p className="text-center text-[#7A8090] text-xs mt-8">
          Construido con{' '}
          <span className="text-[#F5C6D6]">♥</span> usando React, TypeScript y
          Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

export default Footer;
