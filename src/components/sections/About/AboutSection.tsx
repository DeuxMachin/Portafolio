import { Card } from '../../ui/Card';
import { Button } from '../../ui/Button';
import { LocationIcon, DownloadIcon } from '../../ui/Icons';
import { personalInfo } from '../../../data/personalInfo';

const highlights = [
  { number: '5+', label: 'Años de Experiencia' },
  { number: '20+', label: 'Proyectos Completados' },
  { number: '15+', label: 'Tecnologías Dominadas' },
  { number: '100%', label: 'Compromiso' },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3A4050] to-transparent"></div>

      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#A8E6CF] font-mono text-sm tracking-wider">
            // SOBRE MÍ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F8F9FA] mt-2">
            Conóceme un poco más
          </h2>
          <div className="w-20 h-1 bg-[#A8E6CF] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Avatar */}
          <div className="relative animate-fade-in-up">
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Decorative frame */}
              <div className="absolute inset-0 border-2 border-[#A8E6CF] rounded-2xl translate-x-4 translate-y-4 -z-10"></div>
              
              {/* Avatar placeholder */}
              <div className="aspect-square bg-[#2A2F3A] rounded-2xl overflow-hidden border border-[#3A4050]">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-8xl">👨‍💻</span>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#A8E6CF] text-[#1A1D23] px-4 py-2 rounded-xl font-semibold shadow-lg">
                <div className="flex items-center gap-2">
                  <LocationIcon size={16} />
                  <span>Chile</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="animate-fade-in-up delay-200">
            <h3 className="text-2xl font-bold text-[#F8F9FA] mb-4">
              {personalInfo.name}
            </h3>
            <p className="text-[#DCD6F7] font-medium mb-6">
              {personalInfo.title}
            </p>

            <div className="text-[#B8BCC8] space-y-4 mb-8">
              {personalInfo.bio.split('\n\n').map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Download CV Button */}
            <Button
              variant="primary"
              icon={<DownloadIcon size={18} />}
              className="mb-8"
            >
              Descargar CV
            </Button>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  hover={false}
                  className="text-center p-4 bg-[#242830]"
                >
                  <span className="text-2xl font-bold text-[#A8E6CF] block">
                    {item.number}
                  </span>
                  <span className="text-xs text-[#7A8090]">{item.label}</span>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
