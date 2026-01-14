import type { Project } from './types'

export const projects: Project[] = [
  {
    id: 'PV-01',
    statusPing: true,
    icon: 'fa-chart-line',
    title: 'MiPortalVentas - Dashboard',
    description:
      'Dashboard web para la gestión integral de ventas en el sector construcción. Muchas empresas de construcción tenían un problema...', 
    tags: [
      { label: 'Next.js', className: 'text-[10px] bg-slate-900 text-white border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'React', className: 'text-[10px] bg-slate-900 text-tech-accent border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'TypeScript', className: 'text-[10px] bg-slate-900 text-blue-500 border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'Tailwind CSS', className: 'text-[10px] bg-slate-900 text-cyan-400 border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'Supabase', className: 'text-[10px] bg-slate-900 text-green-400 border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'PostgreSQL', className: 'text-[10px] bg-slate-900 text-blue-400 border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'Vercel', className: 'text-[10px] bg-slate-900 text-slate-200 border border-slate-700 px-2 py-1 font-mono uppercase' },
    ],
    meta: 'STATUS: Destacado',
    overlayRightClass: 'text-[10px] font-mono text-tech-accent',
    overlayRightText: 'LIVE',
    scanDelay: undefined,
    details: {
      year: 2025,
      longDescription:
        'Dashboard web para la gestión integral de ventas en el sector construcción. Muchas empresas de construcción tenían un problema común: seguimiento manual, cotizaciones desperdiciadas y poca visibilidad del estado de cada obra. Como Scrum Master y responsable del diseño técnico, lideré la creación de un dashboard que resolviera esto y ofreciera un flujo de trabajo claro y centralizado.',
      skills: [
        {
          title: 'Liderazgo Técnico',
          description: 'Tomé decisiones de stack y dejé guías simples para que el equipo avanzara sin fricción.',
        },
        {
          title: 'Gestión Ágil',
          description: 'Facilité ceremonias cortas, prioricé backlog y mantuve a todos informados.',
        },
        {
          title: 'Análisis de Requisitos',
          description: 'Escuché a ventas y obra, y convertí sus pedidos en historias claras.',
        },
        {
          title: 'Calidad de Código',
          description: 'Propuse revisiones rápidas y checklists sencillos antes de desplegar.',
        },
      ],
      features: [
        {
          title: 'Liderazgo Scrum',
          description:
            'Guié al equipo con ceremonias cortas y claras, quitando bloqueos rápido y manteniendo foco en entregables cortos.',
        },
        {
          title: 'Arquitectura Técnica',
          description:
            'Elegí Next.js + Supabase y documenté decisiones para que el equipo pudiera moverse rápido sin perder calidad.',
        },
        {
          title: 'Gestión de Requisitos',
          description: 'Traduje lo que pedían obra a obra en historias accionables y priorizadas con los dueños.',
        },
        {
          title: 'Calidad y Testing',
          description: 'Introduje revisiones cortas y pruebas básicas antes de subir a producción para evitar sorpresas.',
        },
      ],
      screenshots: [
        {
          src: '/proyects/miportalventas/Login.png',
          alt: 'Login de MiPortalVentas',
        },
        {
          src: '/proyects/miportalventas/Dashboard.png',
          alt: 'Dashboard de MiPortalVentas',
        },
        {
          src: '/proyects/miportalventas/KPIVentas.png',
          alt: 'KPI Ventas de MiPortalVentas',
        },
        {
          src: '/proyects/miportalventas/Inventario.png',
          alt: 'Inventario de MiPortalVentas',
        },
        {
          src: '/proyects/miportalventas/Cotizaciones.png',
          alt: 'Cotizaciones de MiPortalVentas',
        },
        {
          src: '/proyects/miportalventas/DetalleCotizacion.png',
          alt: 'Detalle de Cotización de MiPortalVentas',
        },
        {
          src: '/proyects/miportalventas/Clientes.png',
          alt: 'Clientes de MiPortalVentas',
        },
        {
          src: '/proyects/miportalventas/ClienteDetalles.png',
          alt: 'Detalle de Cliente de MiPortalVentas',
        },
        {
          src: '/proyects/miportalventas/ReunionesControl.png',
          alt: 'Reuniones y Control de MiPortalVentas',
        },
      ],
      process: [
        {
          title: 'Análisis y Planificación',
          description:
            'Escuché a los equipos de venta y obra, levanté lo esencial y armé una hoja de ruta sencilla pero clara.',
        },
        {
          title: 'Coordinación del Equipo',
          description:
            'Mantuvimos dailies breves y plannings acotados; mi foco fue destrabar al equipo y comunicar avances con stakeholders.',
        },
        {
          title: 'Supervisión Técnica',
          description:
            'Revisé las piezas críticas, validé que la lógica de negocio calzara con lo que pedían y mantuve el código legible.',
        },
        {
          title: 'Despliegue y Optimización',
          description:
            'Coordiné el deploy en Vercel con chequeos mínimos de calidad y monitoreé el arranque para ajustar rápido.',
        },
      ],
    },
  },
  {
    id: 'EL-02',
    statusPing: false,
    icon: 'fa-graduation-cap',
    title: 'Plataforma E-Learning',
    description:
      'Plataforma educativa con cursos interactivos, sistema de seguimiento de progreso, evaluaciones automatizadas y certificaciones para el aprendizaje online.',
    tags: [
      { label: 'Vue.js', className: 'text-[10px] bg-slate-900 text-green-400 border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'Python', className: 'text-[10px] bg-slate-900 text-yellow-400 border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'Django', className: 'text-[10px] bg-slate-900 text-green-600 border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'MongoDB', className: 'text-[10px] bg-slate-900 text-green-500 border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'AWS', className: 'text-[10px] bg-slate-900 text-orange-400 border border-slate-700 px-2 py-1 font-mono uppercase' },
    ],
    meta: 'STATUS: Destacado',
    overlayRightClass: 'text-[10px] font-mono text-green-500',
    overlayRightText: 'ACTIVE',
    scanDelay: '1s',
  },
  {
    id: 'API-03',
    statusPing: false,
    icon: 'fa-code',
    title: 'API REST Full-Stack',
    description: 'Sistema backend robusto con arquitectura escalable, autenticación JWT, documentación automática y despliegue en la nube.',
    tags: [
      { label: 'Node.js', className: 'text-[10px] bg-slate-900 text-green-500 border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'TypeScript', className: 'text-[10px] bg-slate-900 text-blue-500 border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'PostgreSQL', className: 'text-[10px] bg-slate-900 text-blue-400 border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'Docker', className: 'text-[10px] bg-slate-900 text-blue-500 border border-slate-700 px-2 py-1 font-mono uppercase' },
    ],
    meta: 'STATUS: Production',
    overlayRightClass: 'text-[10px] font-mono text-blue-400',
    overlayRightText: 'DEPLOY',
    scanDelay: '2s',
  },
]
