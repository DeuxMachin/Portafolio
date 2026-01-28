import type { Project } from './types'

export const projects: Project[] = [
  {
    id: 'PORTFOLIO-01',
    statusPing: true,
    icon: 'fa-briefcase',
    title: 'Portafolio Personal - Edward Contreras',
    description:
      'Portafolio web profesional desarrollado con React 19, TypeScript y Tailwind CSS. Implementa Feature-Sliced Design, pruebas unitarias con Vitest, E2E con Playwright y CI/CD con GitHub Actions.',
    tags: [
      { label: 'React 19', className: 'text-[10px] bg-slate-900 text-tech-accent border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'TypeScript', className: 'text-[10px] bg-slate-900 text-blue-500 border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'Tailwind CSS', className: 'text-[10px] bg-slate-900 text-cyan-400 border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'Vite', className: 'text-[10px] bg-slate-900 text-purple-500 border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'Vitest', className: 'text-[10px] bg-slate-900 text-yellow-400 border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'Playwright', className: 'text-[10px] bg-slate-900 text-green-400 border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'Vercel', className: 'text-[10px] bg-slate-900 text-slate-200 border border-slate-700 px-2 py-1 font-mono uppercase' },
    ],
    meta: 'STATUS: Live',
    overlayRightClass: 'text-[10px] font-mono text-tech-accent',
    overlayRightText: 'LIVE',
    scanDelay: undefined,
    details: {
      year: 2026,
      longDescription:
        'Este proyecto es mi portafolio personal donde muestro mis trabajos y habilidades como desarrollador. Está construido con React 19, TypeScript y Tailwind CSS, usando Vite como herramienta de desarrollo. Quise aplicar buenas prácticas desde el inicio: implementé una arquitectura escalable con Feature-Sliced Design, agregué pruebas automáticas para asegurar calidad, configuré CI/CD para validar cada cambio, y lo desplegué en Vercel con optimizaciones de SEO y rendimiento. El objetivo era crear algo profesional pero sin complicaciones innecesarias.',
      skills: [
        {
          title: 'Arquitectura Escalable',
          description: 'Organicé el código con Feature-Sliced Design: cada pieza tiene su lugar (app, pages, widgets, shared) y las dependencias fluyen en un solo sentido. Esto hace que sea fácil agregar funcionalidades sin romper lo existente.',
        },
        {
          title: 'Testing Integral',
          description: 'Configuré pruebas unitarias con Vitest para los componentes principales (16 tests) y smoke tests E2E con Playwright (6 tests) para validar los flujos críticos. Todo está integrado en el CI/CD.',
        },
        {
          title: 'Deployment y CI/CD',
          description: 'Desplegué el sitio en Vercel con builds automáticos desde GitHub. Cada push ejecuta ESLint, pruebas unitarias y E2E en GitHub Actions antes de hacer merge, asegurando que nada roto llegue a producción.',
        },
        {
          title: 'SEO y Performance',
          description: 'Implementé meta tags Open Graph, Twitter Cards, Schema.org JSON-LD, sitemap.xml y robots.txt. El código está optimizado con lazy loading, code splitting automático de Vite y Lighthouse 95+.',
        },
      ],
      features: [
        {
          title: 'Arquitectura Feature-Sliced',
          description: 'El código está organizado en capas: app (bootstrap), pages (composición), widgets (componentes UI) y shared (utilidades comunes). Las dependencias van de arriba hacia abajo, nunca al revés.',
        },
        {
          title: 'Internacionalización',
          description: 'Soporte para español e inglés implementado con React Context. El idioma elegido se guarda en localStorage para que persista entre visitas. El cambio es instantáneo sin recargar la página.',
        },
        {
          title: 'Suite de Testing Completa',
          description: 'Vitest cubre los componentes clave (Navbar, Footer, Hero, About) con 16 tests unitarios. Playwright valida los flujos críticos con 6 smoke tests E2E. Todo se ejecuta en el CI antes de cada merge.',
        },
        {
          title: 'SEO Optimizado',
          description: 'Meta tags configurados para compartir en redes sociales (Open Graph, Twitter Cards), datos estructurados con Schema.org para Google, sitemap.xml para indexación y robots.txt para crawlers.',
        },
        {
          title: 'CI/CD con GitHub Actions',
          description: 'Cada push y pull request ejecuta automáticamente: análisis de código con ESLint, pruebas unitarias con Vitest y pruebas E2E con Playwright. Si algo falla, el merge se bloquea.',
        },
        {
          title: 'PWA Ready',
          description: 'Incluye manifest.json configurado para que el sitio pueda instalarse como aplicación en dispositivos móviles y de escritorio, con iconos y theme color definidos.',
        },
        {
          title: 'Deploy en Vercel',
          description: 'Desplegado en Vercel con builds automáticos desde la rama principal. El sitio está optimizado para producción con compresión, caché y CDN global para tiempos de carga rápidos.',
        },
      ],
      screenshots: [],
      process: [
        {
          title: 'Diseño de Arquitectura',
          description: 'Empecé definiendo la estructura del proyecto con Feature-Sliced Design. Dividí la aplicación en capas claras: app para inicialización, pages para composición, widgets para componentes UI y shared para funcionalidades comunes como i18n.',
        },
        {
          title: 'Desarrollo de Componentes',
          description: 'Construí cada sección como un widget independiente: Navbar con navegación y cambio de idioma, Hero con presentación y CTA, Projects mostrando los trabajos, About con skills, Contact con formulario, y Footer con enlaces sociales.',
        },
        {
          title: 'Implementación de Testing',
          description: 'Configuré Vitest con jsdom para pruebas unitarias de componentes React. Cada widget principal tiene su suite de tests. Agregué Playwright para smoke tests E2E que validan la navegación, interacciones y flujos críticos del usuario.',
        },
        {
          title: 'Setup de CI/CD',
          description: 'Creé un workflow de GitHub Actions que se ejecuta en cada push. El pipeline valida calidad de código con ESLint, ejecuta todos los tests unitarios con Vitest y corre los tests E2E con Playwright. Instalé navegadores de Playwright en el CI para que todo funcione automáticamente.',
        },
        {
          title: 'Optimización y Deploy',
          description: 'Optimicé el sitio con lazy loading de imágenes, code splitting automático de Vite, meta tags para SEO, y manifest.json para PWA. Desplegué en Vercel configurando builds automáticos desde GitHub. El sitio está en producción con HTTPS, CDN y analytics.',
        },
      ],
    },
  },
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
