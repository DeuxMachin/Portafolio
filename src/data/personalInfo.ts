import type { PersonalInfo } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Edward Mathias Contreras',
  title: 'Ingeniero Civil en Informática',
  email: 'edward.contreras@email.com',
  location: 'Chile',
  bio: `Soy un apasionado Ingeniero Civil en Informática con experiencia en desarrollo de software y soluciones tecnológicas innovadoras. Me especializo en crear aplicaciones web modernas y escalables, combinando las mejores prácticas de ingeniería con un enfoque centrado en el usuario.

Mi formación me ha permitido desarrollar habilidades tanto técnicas como analíticas, lo que me permite abordar problemas complejos desde múltiples perspectivas. Disfruto trabajando en equipos colaborativos y aprendiendo constantemente nuevas tecnologías.`,
  avatarUrl: '/avatar.jpg',
  resumeUrl: '/cv.pdf',
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/edwardcontreras',
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/edwardcontreras',
      icon: 'linkedin',
    },
    {
      name: 'Email',
      url: 'mailto:edward.contreras@email.com',
      icon: 'mail',
    },
  ],
};
