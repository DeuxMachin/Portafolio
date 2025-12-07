import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'MiPortalVentas - Dashboard',
    description:
      'Dashboard web para la gestión integral de ventas en el sector construcción. Muchas empresas de construcción tenían un problema común: seguimiento manual, cotizaciones desperdigadas y poca visibilidad del estado de cada obra. Como Scrum Master y responsable del diseño técnico, lideré la creación de un dashboard que resolviera esto y ofreciera un flujo de trabajo claro y centralizado.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Vercel'],
    imageUrl: '/images/MiPortalVentas/logo.png',
    githubUrl: 'https://github.com/DeuxMachin/CotizacionesInsumos',
    liveUrl: 'https://miportalventas.vercel.app',
    featured: true,
  },
  {
    id: 2,
    title: 'Plataforma E-Learning',
    description:
      'Plataforma educativa con cursos interactivos, sistema de seguimiento de progreso, evaluaciones automatizadas y certificaciones digitales.',
    technologies: ['Vue.js', 'Python', 'Django', 'MongoDB', 'AWS'],
    imageUrl: '/projects/elearning.png',
    githubUrl: 'https://github.com/edwardcontreras/elearning',
    featured: true,
  },
  {
    id: 3,
    title: 'App de Delivery',
    description:
      'Aplicación móvil para servicio de delivery con seguimiento en tiempo real, sistema de pagos integrado y panel de administración.',
    technologies: ['React Native', 'Firebase', 'Node.js', 'Stripe'],
    imageUrl: '/projects/delivery.png',
    githubUrl: 'https://github.com/edwardcontreras/delivery-app',
    featured: true,
  },
  {
    id: 4,
    title: 'Portfolio Personal',
    description:
      'Sitio web personal responsive con diseño moderno, animaciones fluidas y optimización SEO.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    imageUrl: '/projects/portfolio.png',
    githubUrl: 'https://github.com/edwardcontreras/portfolio',
    liveUrl: 'https://edwardcontreras.dev',
  },
  {
    id: 5,
    title: 'API REST de Microservicios',
    description:
      'Arquitectura de microservicios con autenticación JWT, rate limiting, documentación Swagger y despliegue con Docker.',
    technologies: ['Node.js', 'Express', 'Docker', 'Redis', 'PostgreSQL'],
    imageUrl: '/projects/api.png',
    githubUrl: 'https://github.com/edwardcontreras/microservices-api',
  },
  {
    id: 6,
    title: 'Dashboard de Analytics',
    description:
      'Panel de control para visualización de datos con múltiples tipos de gráficos, filtros avanzados y exportación de reportes.',
    technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
    imageUrl: '/projects/analytics.png',
    githubUrl: 'https://github.com/edwardcontreras/analytics-dashboard',
    liveUrl: 'https://analytics-demo.vercel.app',
  },
];
