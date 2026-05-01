import type { Project } from './types'

export const projects: Project[] = [
  {
    id: 'PORTFOLIO-01',
    statusPing: true,
    icon: 'fa-briefcase',
    links: {
      liveUrl: 'https://edwardcontreras.dev/',
    },
    title: 'Portafolio Personal - Edward Contreras',
    description:
      'Portafolio profesional desarrollado con React 19, TypeScript y Tailwind CSS para presentar proyectos reales con una experiencia rápida, clara y mantenible. Implementa arquitectura Feature-Sliced, testing automatizado, CI/CD y optimizaciones de SEO para convertir el sitio en una vitrina técnica confiable.',
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
        'Este portafolio fue desarrollado para resolver una necesidad concreta: presentar mi experiencia, proyectos y habilidades de forma profesional, ordenada y fácil de mantener. Construí una aplicación con React 19, TypeScript, Tailwind CSS y Vite, aplicando Feature-Sliced Design para separar responsabilidades, pruebas unitarias y E2E para reducir regresiones, CI/CD para validar cada cambio y despliegue en Vercel con optimizaciones de SEO y rendimiento. El resultado es una plataforma personal escalable, preparada para crecer con nuevos proyectos y con un flujo de actualización más eficiente frente a un sitio estático tradicional.',
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
      'Dashboard web para empresas del sector construcción que centraliza ventas, cotizaciones, clientes, inventario y seguimiento de obras. La solución reemplazó procesos manuales y entregó mayor visibilidad operativa, mejorando la eficiencia del flujo comercial en un rango estimado de 50% a 70%.', 
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
        'MiPortalVentas es un dashboard web creado para mejorar la gestión comercial en empresas del sector construcción. El problema principal era la falta de control sobre cotizaciones, clientes, inventario y avances por obra: gran parte del seguimiento se hacía de forma manual, con información dispersa y poca trazabilidad. Como Scrum Master y responsable del diseño técnico, lideré la definición del flujo de trabajo, la arquitectura con Next.js y Supabase, y la construcción de una plataforma centralizada para ventas, KPIs, reuniones de control y seguimiento operativo. El impacto fue una mejora estimada de 50% a 70% en eficiencia del proceso comercial, reduciendo reprocesos y entregando información más clara para la toma de decisiones.',
      skills: [
        {
          title: 'Liderazgo Técnico',
          description: 'Definí decisiones de stack, criterios de arquitectura y guías de implementación para que el equipo avanzara con una base técnica consistente.',
        },
        {
          title: 'Gestión Ágil',
          description: 'Facilité ceremonias cortas, prioricé backlog y mantuve a todos informados.',
        },
        {
          title: 'Análisis de Requisitos',
          description: 'Levanté necesidades de ventas y obra, transformándolas en historias accionables orientadas a resolver problemas reales del flujo comercial.',
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
            'Elegí Next.js + Supabase y documenté decisiones clave para centralizar datos, acelerar desarrollo y mantener una base escalable.',
        },
        {
          title: 'Gestión de Requisitos',
          description: 'Convertí necesidades operativas en historias priorizadas, enfocadas en reducir seguimiento manual y mejorar visibilidad por obra.',
        },
        {
          title: 'Calidad y Testing',
          description: 'Introduje revisiones cortas y pruebas básicas antes de subir a producción para evitar sorpresas.',
        },
      ],
      screenshots: [
        {
          src: '/proyects/miportalventas/Login.webp',
          alt: 'Login de MiPortalVentas',
        },
        {
          src: '/proyects/miportalventas/Dashboard.webp',
          alt: 'Dashboard de MiPortalVentas',
        },
        {
          src: '/proyects/miportalventas/KPIVentas.webp',
          alt: 'KPI Ventas de MiPortalVentas',
        },
        {
          src: '/proyects/miportalventas/Inventario.webp',
          alt: 'Inventario de MiPortalVentas',
        },
        {
          src: '/proyects/miportalventas/Cotizaciones.webp',
          alt: 'Cotizaciones de MiPortalVentas',
        },
        {
          src: '/proyects/miportalventas/DetalleCotizacion.webp',
          alt: 'Detalle de Cotización de MiPortalVentas',
        },
        {
          src: '/proyects/miportalventas/Clientes.webp',
          alt: 'Clientes de MiPortalVentas',
        },
        {
          src: '/proyects/miportalventas/ClienteDetalles.webp',
          alt: 'Detalle de Cliente de MiPortalVentas',
        },
        {
          src: '/proyects/miportalventas/ReunionesControl.webp',
          alt: 'Reuniones y Control de MiPortalVentas',
        },
      ],
      process: [
        {
          title: 'Análisis y Planificación',
          description:
            'Escuché a los equipos de venta y obra, identifiqué los puntos de fricción y armé una hoja de ruta enfocada en centralizar información crítica.',
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
            'Coordiné el deploy en Vercel, validé los flujos críticos y ajusté la plataforma para sostener un uso operativo más rápido y confiable.',
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
      'Sistema POS de escritorio en WPF (.NET 8) para operar ventas, controlar inventario, emitir boletas internas e interpretar KPIs. Digitaliza tareas de caja y stock, reduciendo trabajo manual y proyectando una mejora operativa de 50% a 70%.',
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
        'Camelias POS es un sistema de Punto de Venta desarrollado en WPF (.NET 8) para resolver problemas comunes de negocios pequeños: ventas registradas manualmente, control de stock poco preciso y falta de métricas para tomar decisiones. Diseñé y construí una solución de escritorio que permite operar ventas con carrito, editar ítems, registrar cobros, administrar productos, precios y stock, generar boletas internas no tributarias e imprimir tickets térmicos de 58mm mediante ESC/POS. La información se persiste en Supabase (PostgreSQL), con paneles de KPIs y exportación a CSV para respaldo. El sistema apunta a reducir errores operativos, acelerar la atención en caja y mejorar la eficiencia del control interno en un rango estimado de 50% a 70%.',
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
          description: 'Construcción completa del sistema: interfaz de caja, lógica de negocio, persistencia, reportes e integración con impresión térmica.',
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
          description: 'Métricas de ventas y vistas operativas para detectar comportamiento comercial, respaldar datos y tomar mejores decisiones.',
        },
      ],
      features: [
        {
          title: 'Venta',
          description: 'Armado de carrito, edición de ítems, cobro y registro de transacciones para acelerar la atención y reducir errores manuales.',
        },
        {
          title: 'Inventario',
          description: 'Administración de productos, precios y stock para mantener mayor control sobre disponibilidad y reposición.',
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
          description: 'Enfoqué el sistema en las tareas de mayor impacto para el negocio: venta, inventario, boleta interna y reportes operativos.',
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
  {
    statusPing: false,
    icon: 'fa-graduation-cap',
    id: 'TESIS-01',
    links: {
      repoUrl: 'https://github.com/Juaker1/Proyecto-toxinas',
      liveUrl: 'https://tesis.brosdev.duckdns.org',
    },
    title: 'Trabajo de Título - Plataforma de Análisis de Toxinas Nav1.7',
    description:
      'Plataforma bioinformática para automatizar el análisis estructural de toxinas peptídicas asociadas al canal Nav1.7. Centraliza búsqueda, procesamiento, grafos moleculares, métricas y visualización 3D, reduciendo trabajo manual de investigación y acelerando la priorización de candidatos.',
    tags: [
      { label: 'Python 3.9', className: 'text-[10px] bg-slate-900 text-blue-300 border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'Flask', className: 'text-[10px] bg-slate-900 text-green-400 border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'Graphein', className: 'text-[10px] bg-slate-900 text-red-400 border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'Mol*', className: 'text-[10px] bg-slate-900 text-orange-400 border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'NetworkX', className: 'text-[10px] bg-slate-900 text-purple-400 border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'SQLite', className: 'text-[10px] bg-slate-900 text-cyan-400 border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'VMD', className: 'text-[10px] bg-slate-900 text-tech-accent border border-slate-700 px-2 py-1 font-mono uppercase' },
    ],
    meta: 'STATUS: Trabajo de Título',
    overlayRightClass: 'text-[10px] font-mono text-purple-400',
    overlayRightText: 'BIOINFORMÁTICA',
    scanDelay: '1.5s',
    details: {
      year: 2024,
      longDescription:
        'Esta plataforma bioinformática fue desarrollada como trabajo de título para resolver un problema de investigación: el análisis estructural de toxinas peptídicas asociadas al canal de sodio Nav1.7 requería herramientas fragmentadas, pasos manuales y poca trazabilidad entre datos, estructuras y métricas. Construí un sistema modular que automatiza el flujo desde la búsqueda en UniProt hasta la identificación de candidatos inhibidores, integrando grafos moleculares con Graphein/NetworkX, métricas topológicas avanzadas, visualización 3D con Mol* y análisis de propiedades electrostáticas. La plataforma procesa 1308 péptidos maduros, aplica filtrado farmacofórico basado en el motivo NaSpTx (X1X2-S-WCKX3) y obtiene 44 candidatos compatibles con el modelo inhibitorio. Su arquitectura Clean Architecture, base SQLite normalizada y API REST Flask permiten repetir análisis con mayor consistencia, reduciendo de forma estimada entre 50% y 70% el esfuerzo manual frente a un flujo de investigación tradicional.',
      screenshots: [
        { src: '/proyects/tesis/inicio.webp', alt: 'Plataforma - Pantalla de inicio' },
        { src: '/proyects/tesis/familias.webp', alt: 'Vista de familias de toxinas' },
        { src: '/proyects/tesis/grafos.webp', alt: 'Construcción de grafos moleculares' },
        { src: '/proyects/tesis/visualizado.webp', alt: 'Visualización 3D con Mol* y grafo interactivo' },
        { src: '/proyects/tesis/filtro.webp', alt: 'Filtrado farmacofórico por motivo NaSpTx' },
        { src: '/proyects/tesis/metricas.webp', alt: 'Panel de métricas de centralidad y topología' },
        { src: '/proyects/tesis/exportar.webp', alt: 'Exportación de resultados por familia' },
      ],
      skills: [
        {
          title: 'Bioinformática y Química Computacional',
          description: 'Dominio de análisis estructural de proteínas: construcción de grafos moleculares desde PDB, cálculo de descriptores topológicos (centralidad de grado, betweenness, closeness, eigenvector), análisis de puentes disulfuro, orientación de momento dipolar y filtrado farmacofórico basado en secuencia.',
        },
        {
          title: 'Arquitectura de Software Escalable',
          description: 'Implementación de Clean Architecture (Ports & Adapters) con separación clara en capas: dominio (entidades, value objects), aplicación (casos de uso), infraestructura (adaptadores SQLite, Graphein, VMD) e interfaces HTTP (Flask, REST API v2). Sistema modular, testeable y mantenible.',
        },
        {
          title: 'Pipeline de Procesamiento de Datos',
          description: 'Desarrollo de flujo end-to-end para automatizar búsqueda en UniProt, parseo XML, extracción de péptidos maduros, recorte estructural, normalización de actividad, generación de PSF y exportación por familias.',
        },
        {
          title: 'Visualización Científica Interactiva',
          description: 'Integración de Mol* (visor 3D de biomoléculas) con paneles de métricas dinámicos, grafos interactivos 2D/3D (Plotly), modos de visualización de dipolos y puentes disulfuro, y controles de granularidad (nivel residuo CA vs atómico) con parámetros configurables (distancia umbral, separación secuencial).',
        },
      ],
      features: [
        {
          title: 'Grafos Moleculares con Graphein/NetworkX',
          description: 'Construcción automática de grafos a partir de estructuras PDB con granularidad configurable (residuo CA o atómico), distancia umbral 6-12 Å, y separación secuencial para filtrar contactos triviales. Cálculo de métricas topológicas: degree, betweenness, closeness, eigenvector, clustering coefficient.',
        },
        {
          title: 'API REST Flask con Clean Architecture',
          description: 'Backend en Flask organizado en capas según principios de Clean Architecture. Endpoints REST v2 documentados: cálculo de grafos, exportación de métricas por péptido/familia, análisis de dipolos, listado de péptidos y familias, healthcheck. Sistema testeable y desacoplado.',
        },
        {
          title: 'Pipeline Automatizado UniProt → DB → Artefactos',
          description: 'Script run_full_pipeline.py que orquesta búsqueda en UniProt, descarga XML, extracción de péptidos, inserción en SQLite, asociación de PDB/PSF, filtrado por motivo NaSpTx, generación de artefactos para análisis de dipolos y exportación de resultados.',
        },
        {
          title: 'Base de Datos SQLite Normalizada',
          description: 'Esquema relacional con tablas Proteins, Peptides, Nav1_7_InhibitorPpeptides, familias y alias. Normalización automática de IC50 a nM (μM→nM, mM→nM). Almacenamiento de blobs PDB/PSF. Consultas optimizadas para exportación masiva por familia con metadatos y actividad.',
        },
        {
          title: 'Visualización 3D con Mol* y Grafos Interactivos',
          description: 'Interfaz web que integra Mol* para renderizado de estructuras 3D y panel paralelo de grafos 2D/3D interactivos (Plotly/JS). Modos de visualización: vectores dipolares, puentes disulfuro, combinados. Selección dinámica de péptidos, ajuste de parámetros de grafo y panel de métricas con identificación de residuos clave.',
        },
        {
          title: 'Filtrado Farmacofórico NaSpTx',
          description: 'Implementación del motivo inhibitorio X1X2-S-WCKX3 basado en literatura (Sharma et al., 2025). Filtrado configurable por gap_min/gap_max (separación entre residuos) y require_pair (exige par hidrofóbico). Exportación de PDB filtrados a pdbs/filtered/ para análisis posterior.',
        },
        {
          title: 'Análisis de Propiedades Electrostáticas',
          description: 'Cálculo de momento dipolar, centro geométrico y orientación vectorial usando MDAnalysis y VMD. Generación automática de PSF con psfgen para péptidos filtrados. Endpoint /v2/dipole para obtener magnitud, dirección y visualización de vectores dipolares.',
        },
        {
          title: 'Exportación Avanzada por Familias',
          description: 'Exportador a Excel/CSV con métricas de grafo, propiedades estructurales e IC50 normalizado por familia (μ-TRTX-H, μ-TRTX-C, κ-TRTX, etc.). Análisis de relación estructura-actividad (SAR). Herramienta /v2/export/family/<family_name> para datasets listos para publicación.',
        },
      ],
      process: [
        {
          title: 'Investigación y Estado del Arte',
          description: 'Revisión bibliográfica sobre Nav1.7 como blanco terapéutico, toxinas peptídicas tipo knottin, motivo farmacofórico NaSpTx, y estado de herramientas bioinformáticas fragmentadas. Definición de alcance: automatizar flujo completo de análisis estructural y priorización de candidatos inhibidores.',
        },
        {
          title: 'Diseño de Arquitectura y Modelado',
          description: 'Definición de arquitectura en capas (Clean Architecture) con separación de responsabilidades. Diseño del esquema de base de datos (MER) con normalización de IC50 y relaciones entre proteínas, péptidos, familias y estructuras. Diagramas de casos de uso y flujos de procesamiento.',
        },
        {
          title: 'Implementación del Pipeline de Datos',
          description: 'Desarrollo del flujo UniProt → DB: búsqueda async con aiohttp, parseo de XML (ElementTree), extracción de péptidos maduros (regex/logic), descarga de PDB/AlphaFold, recorte estructural (Biopython), y carga masiva a SQLite. Script run_full_pipeline.py con parámetros configurables y logging detallado.',
        },
        {
          title: 'Desarrollo de Módulos de Análisis',
          description: 'Implementación de adaptadores para Graphein (construcción de grafos CA/Atom), NetworkX (métricas de centralidad), VMD/MDAnalysis (cálculo de dipolos, generación de PSF). Servicios de dominio para filtrado NaSpTx, exportación por familias, y normalización de unidades.',
        },
        {
          title: 'Construcción de API y Frontend',
          description: 'Desarrollo de aplicación Flask v2 con controladores REST, blueprints modulares, manejo de errores y CORS. Templates Jinja con integración de Mol* (PDBeMolstar), Plotly para grafos, jQuery para controles dinámicos. CSS responsivo con dark theme científico. Healthcheck endpoint para monitoreo.',
        },
        {
          title: 'Validación y Testing',
          description: 'Suite de tests unitarios e integración con pytest, scripts de validación para métricas, exportaciones y filtros, procesamiento del dataset completo de 1308 péptidos y validación cruzada de 44 candidatos contra literatura.',
        },
        {
          title: 'Documentación y Resultados',
          description: 'Elaboración de README técnico con arquitectura, pipeline, uso de API, esquema de BD y troubleshooting. Documentación de cada capa en src/*/README.md. Generación de resultados: candidatos priorizados, métricas por familia, exportaciones Excel, y análisis comparativo de motivos inhibitorios. Redacción de memoria de título.',
        },
      ],
    },
  },
  {
    statusPing: false,
    icon: 'fa-box',
    id: 'CATALOG-01',
    links: {
      repoUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
    },
    title: 'Sistema de Catálogo de Productos',
    description:
      'Catálogo web con panel administrativo para publicar, editar y controlar productos, categorías e imágenes desde una plataforma centralizada. Reemplaza gestión manual de contenido y mejora la eficiencia operativa del negocio en un rango estimado de 50% a 70%.',
    tags: [
      { label: 'Next.js', className: 'text-[10px] bg-slate-900 text-white border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'React', className: 'text-[10px] bg-slate-900 text-tech-accent border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'TypeScript', className: 'text-[10px] bg-slate-900 text-blue-500 border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'Tailwind CSS', className: 'text-[10px] bg-slate-900 text-cyan-400 border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'Supabase', className: 'text-[10px] bg-slate-900 text-green-400 border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'Vitest', className: 'text-[10px] bg-slate-900 text-yellow-400 border border-slate-700 px-2 py-1 font-mono uppercase' },
      { label: 'GitHub Actions', className: 'text-[10px] bg-slate-900 text-slate-200 border border-slate-700 px-2 py-1 font-mono uppercase' },
    ],
    meta: 'STATUS: En producción',
    overlayRightClass: 'text-[10px] font-mono text-tech-accent',
    overlayRightText: 'WEB',
    scanDelay: undefined,
    details: {
      year: 2025,
      longDescription:
        'Este sistema de catálogo de productos fue desarrollado para negocios que necesitaban mostrar su oferta de forma ordenada y administrar contenido sin depender de cambios manuales en el sitio. El problema era la gestión dispersa de productos, categorías, imágenes y estados de publicación, lo que hacía más lento actualizar el catálogo y aumentaba el riesgo de errores. Implementé una solución web con arquitectura modular (FSD + capas), interfaz pública para navegación de productos y un panel administrativo completo para crear, editar, publicar u ocultar productos, gestionar categorías, validar imágenes y mantener historial de acciones. El resultado es una plataforma más mantenible, trazable y preparada para escalar, con una mejora estimada de 50% a 70% en eficiencia para tareas de administración de catálogo.',
      skills: [
        {
          title: 'Arquitectura Escalable (FSD + Capas)',
          description: 'Implementé Feature-Sliced Design combinado con capas internas para separar responsabilidades, mejorar mantenibilidad y facilitar nuevas funcionalidades.',
        },
        {
          title: 'Repository Pattern',
          description: 'Aplicué separación de lectura y escritura, desacoplando lógica de negocio de la fuente de datos.',
        },
        {
          title: 'Casos de Uso Independientes',
          description: 'Definí use-cases para cada acción del sistema, facilitando testing y escalabilidad.',
        },
        {
          title: 'Validación mediante DTOs',
          description: 'Implementé DTOs sin dependencias externas, asegurando consistencia entre frontend y backend.',
        },
      ],
      features: [
        {
          title: 'Interfaz Pública',
          description: 'Navegación por categorías, búsqueda, filtros avanzados, detalles técnicos y galería optimizada para facilitar la exploración de productos.',
        },
        {
          title: 'Panel Administrativo',
          description: 'Creación y edición de productos, gestión de categorías, control de visibilidad, validación de imágenes e historial de acciones para reducir trabajo manual y mejorar trazabilidad.',
        },
        {
          title: 'Autenticación Segura',
          description: 'Sistema de autenticación integrado con Supabase para acceso protegido al panel administrativo.',
        },
        {
          title: 'Manejo de Estado Global',
          description: 'Gestión centralizada del estado de la aplicación para consistencia y rendimiento.',
        },
        {
          title: 'Validaciones Consistentes',
          description: 'Reglas de negocio centralizadas como políticas para garantizar coherencia en toda la aplicación.',
        },
        {
          title: 'Sistema de Auditoría',
          description: 'Registro de todas las acciones administrativas para trazabilidad y control.',
        },
      ],
      screenshots: [
        { src: '/proyects/CatalogoMiPortal/1.png', alt: 'Vista principal del catálogo' },
        { src: '/proyects/CatalogoMiPortal/2.png', alt: 'Panel administrativo - Gestión de productos' },
        { src: '/proyects/CatalogoMiPortal/3.png', alt: 'Detalle de producto y edición' },
      ],
      process: [
        {
          title: 'Análisis de Requisitos',
          description: 'Levantamiento de necesidades del cliente para convertir la gestión manual de productos, categorías e imágenes en un flujo administrativo claro.',
        },
        {
          title: 'Diseño de Arquitectura',
          description: 'Definición de arquitectura modular (FSD + capas): feature → domain → application → infrastructure.',
        },
        {
          title: 'Implementación Frontend',
          description: 'Construcción de interfaz pública con navegación intuitiva y panel administrativo con controles completos.',
        },
        {
          title: 'Desarrollo Backend',
          description: 'APIs REST con Repository Pattern, DTOs para validación, políticas centralizadas y sistema de auditoría.',
        },
        {
          title: 'Testing e Integración',
          description: 'Suite de tests unitarios con Vitest, integración continua con GitHub Actions, deployment en producción.',
        },
      ],
    },
  },
]
