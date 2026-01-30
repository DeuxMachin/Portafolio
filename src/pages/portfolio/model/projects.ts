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
  {
    statusPing: false,
    icon: 'fa-graduation-cap',
    id: 'TESIS-01',
    title: 'Trabajo de Título - Plataforma de Análisis de Toxinas Nav1.7',
    description:
      'Plataforma bioinformática modular para análisis estructural de toxinas peptídicas que modulan el canal de sodio Nav1.7. Combina grafos moleculares, métricas de centralidad, visualización 3D interactiva con Mol* y pipeline automatizado de procesamiento desde UniProt.',
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
        'Plataforma bioinformática desarrollada como trabajo de título que automatiza el análisis estructural de toxinas peptídicas (tipo knottin) que modulan el canal de sodio Nav1.7, un blanco terapéutico clave para analgésicos no opioides. El sistema integra construcción de grafos moleculares (Graphein/NetworkX), cálculo de métricas topológicas avanzadas, visualización 3D con Mol*, y un pipeline completo desde búsqueda en UniProt hasta identificación de candidatos inhibidores. Procesa 1308 péptidos maduros, aplicando filtrado farmacofórico basado en el motivo NaSpTx (X1X2-S-WCKX3) y análisis de propiedades electrostáticas (momento dipolar), obteniendo 44 candidatos compatibles con el modelo inhibitorio. La arquitectura sigue Clean Architecture con separación en capas (dominio, aplicación, infraestructura, interfaces), base de datos SQLite normalizada, y API REST Flask con interfaz web interactiva.',
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
          description: 'Desarrollo de flujo end-to-end: búsqueda automática en UniProt, descarga y parseo de XML, extracción de péptidos maduros, recorte de estructuras PDB/AlphaFold, normalización de datos de actividad (IC50 a nM), generación de PSF con VMD/psfgen, y exportación masiva por familias.',
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
          description: 'Script run_full_pipeline.py que orquesta: búsqueda en UniProt, descarga XML, extracción de péptidos, inserción en SQLite, asociación de PDB/PSF, filtrado por motivo NaSpTx (gap_min/max, require_pair), generación de PSF/PDB para análisis de dipolos, y exportación opcional de JSON con anotaciones IA.',
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
          description: 'Suite de tests unitarios e integración con pytest. Scripts en tools/ para validación manual de componentes (métricas, exportaciones, filtros). Procesamiento de dataset completo (1308 péptidos) con análisis de tiempos por etapa. Validación cruzada de 44 candidatos filtrados contra literatura.',
        },
        {
          title: 'Documentación y Resultados',
          description: 'Elaboración de README técnico con arquitectura, pipeline, uso de API, esquema de BD y troubleshooting. Documentación de cada capa en src/*/README.md. Generación de resultados: candidatos priorizados, métricas por familia, exportaciones Excel, y análisis comparativo de motivos inhibitorios. Redacción de memoria de título.',
        },
      ],
    },
  },
]
