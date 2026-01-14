import type { Project } from './types'

export const projects: Project[] = [
  {
    id: 'PV-01',
    statusPing: true,
    icon: 'fa-chart-line',
    title: 'MiPortalVentas - Dashboard',
    description:
      'Dashboard web para la gestión integral de ventas en el sector construcción. Muchas empresas de construcción tenían un problema con la gestión de ventas.',
    tags: [
      { label: 'Next.js', className: 'text-[10px] bg-slate-900 text-white border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'React', className: 'text-[10px] bg-slate-900 text-tech-accent border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'TypeScript', className: 'text-[10px] bg-slate-900 text-blue-500 border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'Tailwind CSS', className: 'text-[10px] bg-slate-900 text-cyan-400 border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'Supabase', className: 'text-[10px] bg-slate-900 text-green-400 border border-slate-700 px-2 py-1 font-mono uppercase' },
    ],
    meta: 'STATUS: Destacado',
    overlayRightClass: 'text-[10px] font-mono text-tech-accent',
    overlayRightText: 'LIVE',
    scanDelay: undefined,
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
