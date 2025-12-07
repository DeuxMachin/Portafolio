import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'MiPortalVentas - Dashboard',
    description:
      'Dashboard web desarrollado bajo metodología Scrum para gestión integral de ventas en el sector construcción. Como Scrum Master, lideré el proceso de desarrollo desde la planificación hasta el despliegue, coordinando con el equipo técnico para implementar funcionalidades clave como gestión de cotizaciones, seguimiento de obras y control de clientes potenciales. El proyecto destaca por su enfoque en eficiencia operativa y automatización de procesos comerciales.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Vercel'],
    imageUrl: '/projects/miportalventas.png',
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
