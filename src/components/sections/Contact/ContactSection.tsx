import { useState } from 'react';
import { Card } from '../../ui/Card';
import { Button } from '../../ui/Button';
import { MailIcon, GitHubIcon, LinkedInIcon, LocationIcon } from '../../ui/Icons';
import { personalInfo } from '../../../data/personalInfo';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In a real app, you would send this to your backend
    console.log('Form submitted:', formData);

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    alert('¡Mensaje enviado con éxito!');
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#DCD6F7]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-[#A8E6CF]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#A8E6CF] font-mono text-sm tracking-wider">
            // CONTACTO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F8F9FA] mt-2">
            ¿Trabajamos juntos?
          </h2>
          <div className="w-20 h-1 bg-[#A8E6CF] mx-auto mt-4 rounded-full"></div>
          <p className="text-[#7A8090] mt-4 max-w-2xl mx-auto">
            Estoy siempre abierto a nuevas oportunidades y proyectos
            interesantes. ¡No dudes en contactarme!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold text-[#F8F9FA] mb-6">
              Información de Contacto
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <Card className="p-4 flex items-center gap-4" hover={false}>
                <div className="w-12 h-12 rounded-xl bg-[#A8E6CF]/10 flex items-center justify-center text-[#A8E6CF]">
                  <MailIcon size={24} />
                </div>
                <div>
                  <p className="text-[#7A8090] text-sm">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-[#F8F9FA] hover:text-[#A8E6CF] transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </Card>

              {/* Location */}
              <Card className="p-4 flex items-center gap-4" hover={false}>
                <div className="w-12 h-12 rounded-xl bg-[#DCD6F7]/10 flex items-center justify-center text-[#DCD6F7]">
                  <LocationIcon size={24} />
                </div>
                <div>
                  <p className="text-[#7A8090] text-sm">Ubicación</p>
                  <p className="text-[#F8F9FA]">{personalInfo.location}</p>
                </div>
              </Card>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-[#B8BCC8] font-medium mb-4">
                Sígueme en redes
              </h4>
              <div className="flex gap-3">
                {personalInfo.socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-[#2A2F3A] flex items-center justify-center text-[#B8BCC8] hover:text-[#A8E6CF] hover:bg-[#2E333D] transition-all hover:-translate-y-1 border border-[#3A4050]"
                    aria-label={link.name}
                  >
                    {link.icon === 'github' && <GitHubIcon size={20} />}
                    {link.icon === 'linkedin' && <LinkedInIcon size={20} />}
                    {link.icon === 'mail' && <MailIcon size={20} />}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A8E6CF]/10 border border-[#A8E6CF]/30">
              <span className="w-2 h-2 rounded-full bg-[#A8E6CF] animate-pulse"></span>
              <span className="text-[#A8E6CF] text-sm font-medium">
                Disponible para proyectos
              </span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up delay-200">
            <Card className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-[#F8F9FA] mb-6">
                Envíame un mensaje
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[#B8BCC8] text-sm mb-2"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#2E333D] border border-[#3A4050] text-[#F8F9FA] placeholder-[#7A8090] focus:outline-none focus:border-[#A8E6CF] transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[#B8BCC8] text-sm mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#2E333D] border border-[#3A4050] text-[#F8F9FA] placeholder-[#7A8090] focus:outline-none focus:border-[#A8E6CF] transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-[#B8BCC8] text-sm mb-2"
                  >
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#2E333D] border border-[#3A4050] text-[#F8F9FA] placeholder-[#7A8090] focus:outline-none focus:border-[#A8E6CF] transition-colors"
                    placeholder="¿De qué quieres hablar?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[#B8BCC8] text-sm mb-2"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-[#2E333D] border border-[#3A4050] text-[#F8F9FA] placeholder-[#7A8090] focus:outline-none focus:border-[#A8E6CF] transition-colors resize-none"
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
