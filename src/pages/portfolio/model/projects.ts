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
    statusPing: false,
    icon: 'fa-cash-register',
    id: 'POS-02',
    title: 'Camelias POS - Punto de Venta (WPF)',
    description:
      'Sistema POS de escritorio en WPF (.NET 8) para ventas, inventario, boleta interna (no tributaria) y visualización de KPIs. Persistencia y consultas vía Supabase.',
    tags: [
      { label: 'WPF', className: 'text-[10px] bg-slate-900 text-slate-200 border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: '.NET 8', className: 'text-[10px] bg-slate-900 text-purple-300 border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'C#', className: 'text-[10px] bg-slate-900 text-purple-400 border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'Supabase', className: 'text-[10px] bg-slate-900 text-green-400 border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'PostgreSQL', className: 'text-[10px] bg-slate-900 text-blue-400 border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'ESC/POS', className: 'text-[10px] bg-slate-900 text-tech-accent border border-slate-700 px-2 py-1 font-mono uppercase' },
    ],
    meta: 'STATUS: Proyecto personal (solo dev)',
    overlayRightClass: 'text-[10px] font-mono text-tech-accent',
    overlayRightText: 'DESKTOP',
    scanDelay: '1s',
    details: {
      year: 2025,
      longDescription:
        'Camelias POS es un sistema de Punto de Venta desarrollado en WPF (.NET 8), diseñado y construido íntegramente por mí. Permite operar ventas (carrito, edición de ítems, cobro), controlar inventario (productos, precios, stock), generar una boleta interna (no tributaria) e imprimir ticket térmico 58mm mediante ESC/POS. La persistencia y consultas se realizan contra una base de datos en Supabase (PostgreSQL), además de incluir paneles de KPIs y exportación a CSV para respaldo.',
      screenshots: [
        { src: '/proyects/lascamelias/1.webp', alt: 'Camelias POS - Captura 1' },
        { src: '/proyects/lascamelias/2.webp', alt: 'Camelias POS - Captura 2' },
        { src: '/proyects/lascamelias/3.webp', alt: 'Camelias POS - Captura 3' },
        { src: '/proyects/lascamelias/4.webp', alt: 'Camelias POS - Captura 4' },
        { src: '/proyects/lascamelias/5.webp', alt: 'Camelias POS - Captura 5' },
        { src: '/proyects/lascamelias/6.webp', alt: 'Camelias POS - Captura 6' },
      ],
      skills: [
        {
          title: 'Diseño y Desarrollo End-to-End',
          description: 'Construcción completa del sistema: UI, lógica de negocio e integración de datos.',
        },
        {
          title: 'Integración con Supabase',
          description: 'Persistencia y consultas mediante PostgREST/RPC sobre PostgreSQL (Supabase).',
        },
        {
          title: 'Impresión ESC/POS (58mm)',
          description: 'Generación y envío directo del ticket térmico con detalle de compra.',
        },
        {
          title: 'KPIs y Reportes',
          description: 'Métricas de ventas y vistas para apoyar decisiones operativas.',
        },
      ],
      features: [
        {
          title: 'Venta',
          description: 'Armado de carrito, edición de ítems, cobro y registro de transacciones.',
        },
        {
          title: 'Inventario',
          description: 'Administración de productos, precios y stock.',
        },
        {
          title: 'Boleta interna',
          description: 'Generación e impresión de ticket térmico 58mm (no tributario).',
        },
        {
          title: 'Número de Boleta en ticket',
          description: 'El ticket muestra explícitamente el identificador interno de la venta para soporte y control.',
        },
        {
          title: 'Exportación CSV',
          description: 'Exportación de datos para respaldo y consulta rápida.',
        },
      ],
      process: [
        {
          title: 'Definición de alcance',
          description: 'Enfoqué el sistema en venta, inventario, boleta interna y reportes operativos.',
        },
        {
          title: 'Implementación UI (WPF)',
          description: 'Ventanas y controles para operación de caja, mantenimiento y reportes.',
        },
        {
          title: 'Persistencia (Supabase)',
          description: 'Repositorios y consultas para ventas, productos y métricas.',
        },
        {
          title: 'Impresión',
          description: 'Formateo y envío de ticket ESC/POS para impresoras 58mm.',
        },
      ],
    },
  },
]
