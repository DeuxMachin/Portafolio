import { Terminal } from '../../ui/Terminal';
import { Button } from '../../ui/Button';
import { GitHubIcon, LinkedInIcon, MailIcon, ChevronDownIcon } from '../../ui/Icons';
import { personalInfo } from '../../../data/personalInfo';

const terminalLines = [
  { prompt: '→', command: 'whoami', color: 'white' as const, delay: 500 },
  { output: 'Edward Mathias Contreras', color: 'cyan' as const, delay: 0 },
  { prompt: '→', command: 'cat profession.txt', color: 'white' as const, delay: 200 },
  { output: 'Ingeniero Civil en Informática', color: 'green' as const, delay: 0 },
  { prompt: '→', command: 'echo $LOCATION', color: 'white' as const, delay: 200 },
  { output: '📍 Chile', color: 'yellow' as const, delay: 0 },
  { prompt: '→', command: 'cat status.txt', color: 'white' as const, delay: 200 },
  { output: '✨ Disponible para nuevos proyectos', color: 'purple' as const, delay: 0 },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative pt-20"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#A8E6CF]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#DCD6F7]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <p className="text-[#A8E6CF] font-mono text-sm mb-4 tracking-wider">
              ¡Hola! Mi nombre es
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8F9FA] mb-4 leading-tight">
              {personalInfo.name}
            </h1>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#B8BCC8] mb-6">
              {personalInfo.title}
            </h2>

            <p className="text-[#7A8090] text-lg max-w-xl mb-8 leading-relaxed">
              Desarrollador apasionado por crear soluciones tecnológicas
              innovadoras y experiencias digitales excepcionales. Especializado
              en desarrollo web full-stack con tecnologías modernas.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#projects">
                <Button variant="primary" size="lg">
                  Ver Proyectos
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="lg">
                  Contactar
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-[#7A8090] text-sm">Encuéntrame en</span>
              <div className="flex gap-3">
                {personalInfo.socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-[#2A2F3A] flex items-center justify-center text-[#B8BCC8] hover:text-[#A8E6CF] hover:bg-[#2E333D] transition-all hover:-translate-y-1"
                    aria-label={link.name}
                  >
                    {link.icon === 'github' && <GitHubIcon size={20} />}
                    {link.icon === 'linkedin' && <LinkedInIcon size={20} />}
                    {link.icon === 'mail' && <MailIcon size={20} />}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Terminal */}
          <div className="order-1 lg:order-2 animate-fade-in-up delay-200">
            <Terminal
              lines={terminalLines}
              title="edward@portfolio:~"
              className="max-w-lg mx-auto lg:mx-0 lg:ml-auto"
              typingSpeed={40}
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="text-[#7A8090] hover:text-[#A8E6CF] transition-colors"
            aria-label="Scroll to about section"
          >
            <ChevronDownIcon size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
