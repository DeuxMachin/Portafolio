import { createContext, useContext, useState, type ReactNode } from 'react'

export type Language = 'es' | 'en'

type Translations = {
    nav: {
        home: string
        projects: string
        about: string
        contact: string
        downloadCV: string
    }
    hero: {
        available: string
        greeting: string
        name: string
        tagline: string
        description: string
        viewProjects: string
        yearsExp: string
    }
    projects: {
        title: string
        all: string
        web: string
        desktop: string
        mobile: string
        viewDetails: string
        description: string
        screenshots: string
        technologies: string
        skillsShown: string
        viewCode: string
        viewDemo: string
    }
    about: {
        sectionLabel: string
        title: string
        titleHighlight: string
        subtitle: string
        mySkills: string
        skillsDescription: string
        focus: string
        mainStack: string
        philosophy: string
        funFact: string
        funFactText: string
        frontend: string
        backend: string
        devops: string
        downloadCV: string
        paragraphs: string[]
        headline: string
    }
    contact: {
        title: string
        titleHighlight: string
        description: string
        sendMessage: string
        haveIdea: string
        letsTalk: string
        email: string
    }
    footer: {
        madeWith: string
    }
}

// Project translations - separate for flexibility
export type ProjectTranslations = {
    title: string
    description: string
    longDescription: string
    category: string
    skills: { title: string; description: string }[]
    features: { title: string; description: string }[]
    process: { title: string; description: string }[]
}

export const projectTranslations: Record<string, Record<Language, ProjectTranslations>> = {
    'PORTFOLIO-01': {
        es: {
            title: 'Portafolio Personal - Edward Contreras',
            description: 'Portafolio web profesional desarrollado con React 19, TypeScript y Tailwind CSS. Implementa Feature-Sliced Design, pruebas unitarias con Vitest, E2E con Playwright y CI/CD con GitHub Actions.',
            longDescription: 'Este proyecto es mi portafolio personal donde muestro mis trabajos y habilidades como desarrollador. Está construido con React 19, TypeScript y Tailwind CSS, usando Vite como herramienta de desarrollo. Quise aplicar buenas prácticas desde el inicio: implementé una arquitectura escalable con Feature-Sliced Design, agregué pruebas automáticas para asegurar calidad, configuré CI/CD para validar cada cambio, y lo desplegué en Vercel con optimizaciones de SEO y rendimiento. El objetivo era crear algo profesional pero sin complicaciones innecesarias.',
            category: 'Web',
            skills: [
                { title: 'Arquitectura Escalable', description: 'Organicé el código con Feature-Sliced Design: cada pieza tiene su lugar (app, pages, widgets, shared) y las dependencias fluyen en un solo sentido. Esto hace que sea fácil agregar funcionalidades sin romper lo existente.' },
                { title: 'Testing Integral', description: 'Configuré pruebas unitarias con Vitest para los componentes principales (16 tests) y smoke tests E2E con Playwright (6 tests) para validar los flujos críticos. Todo está integrado en el CI/CD.' },
                { title: 'Deployment y CI/CD', description: 'Desplegué el sitio en Vercel con builds automáticos desde GitHub. Cada push ejecuta ESLint, pruebas unitarias y E2E en GitHub Actions antes de hacer merge, asegurando que nada roto llegue a producción.' },
                { title: 'SEO y Performance', description: 'Implementé meta tags Open Graph, Twitter Cards, Schema.org JSON-LD, sitemap.xml y robots.txt. El código está optimizado con lazy loading, code splitting automático de Vite y Lighthouse 95+.' },
            ],
            features: [
                { title: 'Arquitectura Feature-Sliced', description: 'El código está organizado en capas: app (bootstrap), pages (composición), widgets (componentes UI) y shared (utilidades comunes). Las dependencias van de arriba hacia abajo, nunca al revés.' },
                { title: 'Internacionalización', description: 'Soporte para español e inglés implementado con React Context. El idioma elegido se guarda en localStorage para que persista entre visitas. El cambio es instantáneo sin recargar la página.' },
                { title: 'Suite de Testing Completa', description: 'Vitest cubre los componentes clave (Navbar, Footer, Hero, About) con 16 tests unitarios. Playwright valida los flujos críticos con 6 smoke tests E2E. Todo se ejecuta en el CI antes de cada merge.' },
                { title: 'SEO Optimizado', description: 'Meta tags configurados para compartir en redes sociales (Open Graph, Twitter Cards), datos estructurados con Schema.org para Google, sitemap.xml para indexación y robots.txt para crawlers.' },
                { title: 'CI/CD con GitHub Actions', description: 'Cada push y pull request ejecuta automáticamente: análisis de código con ESLint, pruebas unitarias con Vitest y pruebas E2E con Playwright. Si algo falla, el merge se bloquea.' },
                { title: 'PWA Ready', description: 'Incluye manifest.json configurado para que el sitio pueda instalarse como aplicación en dispositivos móviles y de escritorio, con iconos y theme color definidos.' },
                { title: 'Deploy en Vercel', description: 'Desplegado en Vercel con builds automáticos desde la rama principal. El sitio está optimizado para producción con compresión, caché y CDN global para tiempos de carga rápidos.' },
            ],
            process: [
                { title: 'Diseño de Arquitectura', description: 'Empecé definiendo la estructura del proyecto con Feature-Sliced Design. Dividí la aplicación en capas claras: app para inicialización, pages para composición, widgets para componentes UI y shared para funcionalidades comunes como i18n.' },
                { title: 'Desarrollo de Componentes', description: 'Construí cada sección como un widget independiente: Navbar con navegación y cambio de idioma, Hero con presentación y CTA, Projects mostrando los trabajos, About con skills, Contact con formulario, y Footer con enlaces sociales.' },
                { title: 'Implementación de Testing', description: 'Configuré Vitest con jsdom para pruebas unitarias de componentes React. Cada widget principal tiene su suite de tests. Agregué Playwright para smoke tests E2E que validan la navegación, interacciones y flujos críticos del usuario.' },
                { title: 'Setup de CI/CD', description: 'Creé un workflow de GitHub Actions que se ejecuta en cada push. El pipeline valida calidad de código con ESLint, ejecuta todos los tests unitarios con Vitest y corre los tests E2E con Playwright. Instalé navegadores de Playwright en el CI para que todo funcione automáticamente.' },
                { title: 'Optimización y Deploy', description: 'Optimicé el sitio con lazy loading de imágenes, code splitting automático de Vite, meta tags para SEO, y manifest.json para PWA. Desplegué en Vercel configurando builds automáticos desde GitHub. El sitio está en producción con HTTPS, CDN y analytics.' },
            ],
        },
        en: {
            title: 'Personal Portfolio - Edward Contreras',
            description: 'Professional web portfolio built with React 19, TypeScript, and Tailwind CSS. Implements Feature-Sliced Design, unit tests with Vitest, E2E with Playwright, and CI/CD with GitHub Actions.',
            longDescription: 'This project is my personal portfolio where I showcase my work and skills as a developer. Built with React 19, TypeScript, and Tailwind CSS, using Vite as the development tool. I wanted to apply best practices from the start: implemented scalable architecture with Feature-Sliced Design, added automated tests for quality assurance, set up CI/CD to validate every change, and deployed to Vercel with SEO and performance optimizations. The goal was to create something professional without unnecessary complications.',
            category: 'Web',
            skills: [
                { title: 'Scalable Architecture', description: 'Organized code with Feature-Sliced Design: every piece has its place (app, pages, widgets, shared) and dependencies flow in one direction. This makes it easy to add features without breaking existing code.' },
                { title: 'Comprehensive Testing', description: 'Set up unit tests with Vitest for main components (16 tests) and E2E smoke tests with Playwright (6 tests) to validate critical flows. Everything is integrated in CI/CD.' },
                { title: 'Deployment & CI/CD', description: 'Deployed the site on Vercel with automatic builds from GitHub. Every push runs ESLint, unit tests, and E2E tests in GitHub Actions before merge, ensuring nothing broken reaches production.' },
                { title: 'SEO & Performance', description: 'Implemented Open Graph meta tags, Twitter Cards, Schema.org JSON-LD, sitemap.xml, and robots.txt. Code is optimized with lazy loading, automatic code splitting from Vite, and Lighthouse 95+.' },
            ],
            features: [
                { title: 'Feature-Sliced Architecture', description: 'Code is organized in layers: app (bootstrap), pages (composition), widgets (UI components), and shared (common utilities). Dependencies flow top-down, never bottom-up.' },
                { title: 'Internationalization', description: 'Spanish and English support implemented with React Context. Selected language is saved in localStorage to persist between visits. Language switch is instant without page reload.' },
                { title: 'Complete Testing Suite', description: 'Vitest covers key components (Navbar, Footer, Hero, About) with 16 unit tests. Playwright validates critical flows with 6 E2E smoke tests. Everything runs in CI before every merge.' },
                { title: 'Optimized SEO', description: 'Meta tags configured for social media sharing (Open Graph, Twitter Cards), structured data with Schema.org for Google, sitemap.xml for indexing, and robots.txt for crawlers.' },
                { title: 'CI/CD with GitHub Actions', description: 'Every push and pull request automatically runs: code analysis with ESLint, unit tests with Vitest, and E2E tests with Playwright. If something fails, merge is blocked.' },
                { title: 'PWA Ready', description: 'Includes configured manifest.json so the site can be installed as an app on mobile and desktop devices, with defined icons and theme color.' },
                { title: 'Vercel Deployment', description: 'Deployed on Vercel with automatic builds from main branch. Site is optimized for production with compression, caching, and global CDN for fast load times.' },
            ],
            process: [
                { title: 'Architecture Design', description: 'Started by defining project structure with Feature-Sliced Design. Divided the app into clear layers: app for initialization, pages for composition, widgets for UI components, and shared for common features like i18n.' },
                { title: 'Component Development', description: 'Built each section as independent widget: Navbar with navigation and language switch, Hero with presentation and CTA, Projects showing work, About with skills, Contact with form, and Footer with social links.' },
                { title: 'Testing Implementation', description: 'Set up Vitest with jsdom for React component unit tests. Each main widget has its test suite. Added Playwright for E2E smoke tests validating navigation, interactions, and critical user flows.' },
                { title: 'CI/CD Setup', description: 'Created GitHub Actions workflow that runs on every push. Pipeline validates code quality with ESLint, runs all unit tests with Vitest, and E2E tests with Playwright. Installed Playwright browsers in CI for everything to work automatically.' },
                { title: 'Optimization & Deploy', description: 'Optimized site with lazy loading images, automatic code splitting from Vite, SEO meta tags, and manifest.json for PWA. Deployed on Vercel with automatic builds from GitHub. Site is in production with HTTPS, CDN, and analytics.' },
            ],
        },
    },
    'PV-01': {
        es: {
            title: 'MiPortalVentas - Dashboard',
            description: 'Dashboard web para gestión de ventas en construcción. Centraliza cotizaciones, seguimiento de clientes y KPIs del equipo comercial.',
            longDescription: 'Dashboard web para la gestión integral de ventas en el sector construcción. Me tocó liderar este proyecto como Scrum Master y responsable técnico. El problema era claro: vendedores con Excel, cotizaciones perdidas y cero visibilidad de métricas. Armamos un sistema que centraliza todo el flujo comercial, desde el primer contacto hasta el cierre.',
            category: 'Web',
            skills: [
                { title: 'Liderazgo Técnico', description: 'Definí el stack y armé guías para que el equipo pudiera moverse rápido sin trabarse.' },
                { title: 'Gestión Ágil', description: 'Dailies cortas, backlog priorizado y comunicación constante con stakeholders.' },
                { title: 'Análisis de Requisitos', description: 'Traduje lo que pedía el negocio en historias de usuario accionables.' },
                { title: 'Calidad de Código', description: 'Code reviews y checklists antes de cada deploy.' },
            ],
            features: [
                { title: 'Liderazgo Scrum', description: 'Ceremonias ágiles, destrabe de bloqueos y foco en entregas incrementales.' },
                { title: 'Arquitectura Técnica', description: 'Next.js + Supabase. Documentación de decisiones para onboarding rápido.' },
                { title: 'Gestión de Requisitos', description: 'Priorización con stakeholders y refinamiento continuo del backlog.' },
                { title: 'Calidad y Testing', description: 'Reviews de código y pruebas antes de producción.' },
            ],
            process: [
                { title: 'Análisis y Planificación', description: 'Levantamiento de requerimientos con equipos de venta y construcción.' },
                { title: 'Coordinación del Equipo', description: 'Dailies y plannings acotadas. Destrabe y comunicación con stakeholders.' },
                { title: 'Supervisión Técnica', description: 'Validación de lógica de negocio y legibilidad del código.' },
                { title: 'Despliegue y Optimización', description: 'Deploy en Vercel con monitoreo y ajustes rápidos.' },
            ],
        },
        en: {
            title: 'MiPortalVentas - Dashboard',
            description: 'Web dashboard for construction sales management. Centralizes quotes, client tracking, and commercial team KPIs.',
            longDescription: 'Web dashboard for comprehensive sales management in construction. I led this project as Scrum Master and tech lead. The problem was clear: salespeople using Excel, lost quotes, and zero visibility on metrics. We built a system that centralizes the entire commercial flow, from first contact to deal closure.',
            category: 'Web',
            skills: [
                { title: 'Technical Leadership', description: 'Defined the stack and created guides so the team could move fast without blockers.' },
                { title: 'Agile Management', description: 'Short dailies, prioritized backlog, and constant stakeholder communication.' },
                { title: 'Requirements Analysis', description: 'Translated business needs into actionable user stories.' },
                { title: 'Code Quality', description: 'Code reviews and checklists before every deploy.' },
            ],
            features: [
                { title: 'Scrum Leadership', description: 'Agile ceremonies, unblocking issues, focus on incremental deliveries.' },
                { title: 'Technical Architecture', description: 'Next.js + Supabase. Decision documentation for quick onboarding.' },
                { title: 'Requirements Management', description: 'Stakeholder prioritization and continuous backlog refinement.' },
                { title: 'Quality & Testing', description: 'Code reviews and testing before production.' },
            ],
            process: [
                { title: 'Analysis & Planning', description: 'Requirement gathering with sales and construction teams.' },
                { title: 'Team Coordination', description: 'Short dailies and plannings. Unblocking and stakeholder communication.' },
                { title: 'Technical Oversight', description: 'Business logic validation and code readability.' },
                { title: 'Deployment & Optimization', description: 'Vercel deployment with monitoring and quick adjustments.' },
            ],
        },
    },
    'POS-02': {
        es: {
            title: 'Camelias POS - Punto de Venta',
            description: 'Sistema POS de escritorio en WPF (.NET 8). Ventas, inventario, boleta interna e impresión térmica. Base de datos en Supabase.',
            longDescription: 'Sistema de Punto de Venta que desarrollé completo de principio a fin. La idea era resolver el caos de un negocio pequeño: apuntes en papel, stock descontrolado y caja cuadrada a ojo. El sistema maneja ventas, inventario, genera boletas internas (no tributarias) e imprime tickets térmicos de 58mm. Todo conectado a Supabase.',
            category: 'Desktop',
            skills: [
                { title: 'Desarrollo End-to-End', description: 'Diseño, UI, lógica de negocio e integración de datos. Todo el stack.' },
                { title: 'Integración Supabase', description: 'Persistencia y consultas vía PostgREST/RPC sobre PostgreSQL.' },
                { title: 'Impresión ESC/POS', description: 'Generación y envío directo de tickets térmicos de 58mm.' },
                { title: 'KPIs y Reportes', description: 'Dashboard con métricas de ventas para toma de decisiones.' },
            ],
            features: [
                { title: 'Ventas', description: 'Carrito de compras, edición de ítems, cobro y registro de transacciones.' },
                { title: 'Inventario', description: 'Gestión de productos, precios y control de stock.' },
                { title: 'Boleta Interna', description: 'Generación e impresión de tickets térmicos 58mm.' },
                { title: 'Número de Boleta', description: 'Identificador interno en cada ticket para soporte y control.' },
                { title: 'Exportación CSV', description: 'Backup de datos para consulta externa.' },
            ],
            process: [
                { title: 'Definición de Alcance', description: 'Foco en venta, inventario, boleta y reportes operativos.' },
                { title: 'Implementación UI', description: 'Ventanas WPF para caja, mantenimiento y reportes.' },
                { title: 'Persistencia', description: 'Repositorios y queries para ventas, productos y métricas.' },
                { title: 'Impresión', description: 'Formateo ESC/POS para impresoras térmicas 58mm.' },
            ],
        },
        en: {
            title: 'Camelias POS - Point of Sale',
            description: 'Desktop POS system built with WPF (.NET 8). Sales, inventory, internal receipts, and thermal printing. Supabase database.',
            longDescription: 'Point of Sale system I built from scratch. The goal was to solve the chaos of a small business: paper notes, uncontrolled stock, and manual cash reconciliation. The system handles sales, inventory, generates internal receipts (non-tax), and prints 58mm thermal tickets. Everything connected to Supabase.',
            category: 'Desktop',
            skills: [
                { title: 'End-to-End Development', description: 'Design, UI, business logic, and data integration. The whole stack.' },
                { title: 'Supabase Integration', description: 'Persistence and queries via PostgREST/RPC on PostgreSQL.' },
                { title: 'ESC/POS Printing', description: 'Direct generation and sending of 58mm thermal tickets.' },
                { title: 'KPIs & Reports', description: 'Dashboard with sales metrics for decision making.' },
            ],
            features: [
                { title: 'Sales', description: 'Shopping cart, item editing, checkout, and transaction logging.' },
                { title: 'Inventory', description: 'Product management, pricing, and stock control.' },
                { title: 'Internal Receipt', description: '58mm thermal ticket generation and printing.' },
                { title: 'Receipt Number', description: 'Internal identifier on each ticket for support and control.' },
                { title: 'CSV Export', description: 'Data backup for external queries.' },
            ],
            process: [
                { title: 'Scope Definition', description: 'Focus on sales, inventory, receipts, and operational reports.' },
                { title: 'UI Implementation', description: 'WPF windows for checkout, maintenance, and reports.' },
                { title: 'Persistence', description: 'Repositories and queries for sales, products, and metrics.' },
                { title: 'Printing', description: 'ESC/POS formatting for 58mm thermal printers.' },
            ],
        },
    },
    'TESIS-01': {
        es: {
            title: 'Trabajo de Título - Plataforma de Análisis de Toxinas Nav1.7',
            description: 'Plataforma bioinformática modular para análisis estructural de toxinas peptídicas que modulan el canal de sodio Nav1.7. Combina grafos moleculares, métricas de centralidad, visualización 3D interactiva con Mol* y pipeline automatizado de procesamiento desde UniProt.',
            longDescription: 'Plataforma bioinformática desarrollada como trabajo de título que automatiza el análisis estructural de toxinas peptídicas (tipo knottin) que modulan el canal de sodio Nav1.7, un blanco terapéutico clave para analgésicos no opioides. El sistema integra construcción de grafos moleculares (Graphein/NetworkX), cálculo de métricas topológicas avanzadas, visualización 3D con Mol*, y un pipeline completo desde búsqueda en UniProt hasta identificación de candidatos inhibidores.',
            category: 'Bioinformática',
            skills: [
                { title: 'Bioinformática y Química Computacional', description: 'Dominio de análisis estructural de proteínas: construcción de grafos moleculares desde PDB, cálculo de descriptores topológicos (centralidad de grado, betweenness, closeness, eigenvector), análisis de puentes disulfuro, orientación de momento dipolar y filtrado farmacofórico basado en secuencia.' },
                { title: 'Arquitectura de Software Escalable', description: 'Implementación de Clean Architecture (Ports & Adapters) con separación clara en capas: dominio (entidades, value objects), aplicación (casos de uso), infraestructura (adaptadores SQLite, Graphein, VMD) e interfaces HTTP (Flask, REST API v2). Sistema modular, testeable y mantenible.' },
                { title: 'Pipeline de Procesamiento de Datos', description: 'Desarrollo de flujo end-to-end: búsqueda automática en UniProt, descarga y parseo de XML, extracción de péptidos maduros, recorte de estructuras PDB/AlphaFold, normalización de datos de actividad (IC50 a nM), generación de PSF con VMD/psfgen, y exportación masiva por familias.' },
                { title: 'Visualización Científica Interactiva', description: 'Integración de Mol* (visor 3D de biomoléculas) con paneles de métricas dinámicos, grafos interactivos 2D/3D (Plotly), modos de visualización de dipolos y puentes disulfuro, y controles de granularidad (nivel residuo CA vs atómico) con parámetros configurables (distancia umbral, separación secuencial).' },
            ],
            features: [
                { title: 'Grafos Moleculares con Graphein/NetworkX', description: 'Construcción automática de grafos a partir de estructuras PDB con granularidad configurable (residuo CA o atómico), distancia umbral 6-12 Å, y separación secuencial para filtrar contactos triviales. Cálculo de métricas topológicas: degree, betweenness, closeness, eigenvector, clustering coefficient.' },
                { title: 'API REST Flask con Clean Architecture', description: 'Backend en Flask organizado en capas según principios de Clean Architecture. Endpoints REST v2 documentados: cálculo de grafos, exportación de métricas por péptido/familia, análisis de dipolos, listado de péptidos y familias, healthcheck. Sistema testeable y desacoplado.' },
                { title: 'Pipeline Automatizado UniProt → DB → Artefactos', description: 'Script run_full_pipeline.py que orquesta: búsqueda en UniProt, descarga XML, extracción de péptidos, inserción en SQLite, asociación de PDB/PSF, filtrado por motivo NaSpTx (gap_min/max, require_pair), generación de PSF/PDB para análisis de dipolos, y exportación opcional de JSON con anotaciones IA.' },
                { title: 'Base de Datos SQLite Normalizada', description: 'Esquema relacional con tablas Proteins, Peptides, Nav1_7_InhibitorPpeptides, familias y alias. Normalización automática de IC50 a nM (μM→nM, mM→nM). Almacenamiento de blobs PDB/PSF. Consultas optimizadas para exportación masiva por familia con metadatos y actividad.' },
                { title: 'Visualización 3D con Mol* y Grafos Interactivos', description: 'Interfaz web que integra Mol* para renderizado de estructuras 3D y panel paralelo de grafos 2D/3D interactivos (Plotly/JS). Modos de visualización: vectores dipolares, puentes disulfuro, combinados. Selección dinámica de péptidos, ajuste de parámetros de grafo y panel de métricas con identificación de residuos clave.' },
                { title: 'Filtrado Farmacofórico NaSpTx', description: 'Implementación del motivo inhibitorio X1X2-S-WCKX3 basado en literatura (Sharma et al., 2025). Filtrado configurable por gap_min/gap_max (separación entre residuos) y require_pair (exige par hidrofóbico). Exportación de PDB filtrados a pdbs/filtered/ para análisis posterior.' },
                { title: 'Análisis de Propiedades Electrostáticas', description: 'Cálculo de momento dipolar, centro geométrico y orientación vectorial usando MDAnalysis y VMD. Generación automática de PSF con psfgen para péptidos filtrados. Endpoint /v2/dipole para obtener magnitud, dirección y visualización de vectores dipolares.' },
                { title: 'Exportación Avanzada por Familias', description: 'Exportador a Excel/CSV con métricas de grafo, propiedades estructurales e IC50 normalizado por familia (μ-TRTX-H, μ-TRTX-C, κ-TRTX, etc.). Análisis de relación estructura-actividad (SAR). Herramienta /v2/export/family/<family_name> para datasets listos para publicación.' },
            ],
            process: [
                { title: 'Investigación y Estado del Arte', description: 'Revisión bibliográfica sobre Nav1.7 como blanco terapéutico, toxinas peptídicas tipo knottin, motivo farmacofórico NaSpTx, y estado de herramientas bioinformáticas fragmentadas. Definición de alcance: automatizar flujo completo de análisis estructural y priorización de candidatos inhibidores.' },
                { title: 'Diseño de Arquitectura y Modelado', description: 'Definición de arquitectura en capas (Clean Architecture) con separación de responsabilidades. Diseño del esquema de base de datos (MER) con normalización de IC50 y relaciones entre proteínas, péptidos, familias y estructuras. Diagramas de casos de uso y flujos de procesamiento.' },
                { title: 'Implementación del Pipeline de Datos', description: 'Desarrollo del flujo UniProt → DB: búsqueda async con aiohttp, parseo de XML (ElementTree), extracción de péptidos maduros (regex/logic), descarga de PDB/AlphaFold, recorte estructural (Biopython), y carga masiva a SQLite. Script run_full_pipeline.py con parámetros configurables y logging detallado.' },
                { title: 'Desarrollo de Módulos de Análisis', description: 'Implementación de adaptadores para Graphein (construcción de grafos CA/Atom), NetworkX (métricas de centralidad), VMD/MDAnalysis (cálculo de dipolos, generación de PSF). Servicios de dominio para filtrado NaSpTx, exportación por familias, y normalización de unidades.' },
                { title: 'Construcción de API y Frontend', description: 'Desarrollo de aplicación Flask v2 con controladores REST, blueprints modulares, manejo de errores y CORS. Templates Jinja con integración de Mol* (PDBeMolstar), Plotly para grafos, jQuery para controles dinámicos. CSS responsivo con dark theme científico. Healthcheck endpoint para monitoreo.' },
                { title: 'Validación y Testing', description: 'Suite de tests unitarios e integración con pytest. Scripts en tools/ para validación manual de componentes (métricas, exportaciones, filtros). Procesamiento de dataset completo (1308 péptidos) con análisis de tiempos por etapa. Validación cruzada de 44 candidatos filtrados contra literatura.' },
                { title: 'Documentación y Resultados', description: 'Elaboración de README técnico con arquitectura, pipeline, uso de API, esquema de BD y troubleshooting. Documentación de cada capa en src/*/README.md. Generación de resultados: candidatos priorizados, métricas por familia, exportaciones Excel, y análisis comparativo de motivos inhibitorios. Redacción de memoria de título.' },
            ],
        },
        en: {
            title: 'Thesis Work - Nav1.7 Toxin Analysis Platform',
            description: 'Modular bioinformatics platform for structural analysis of peptide toxins that modulate the Nav1.7 sodium channel. Combines molecular graphs, centrality metrics, interactive 3D visualization with Mol*, and automated processing pipeline from UniProt.',
            longDescription: 'Bioinformatics platform developed as a thesis project that automates structural analysis of peptide toxins (knottin-type) modulating the Nav1.7 sodium channel, a key therapeutic target for non-opioid analgesics. The system integrates molecular graph construction (Graphein/NetworkX), advanced topological metrics calculation, 3D visualization with Mol*, and a complete pipeline from UniProt search to inhibitor candidate identification.',
            category: 'Bioinformatics',
            skills: [
                { title: 'Bioinformatics & Computational Chemistry', description: 'Protein structural analysis expertise: molecular graph construction from PDB, topological descriptor calculation (degree centrality, betweenness, closeness, eigenvector), disulfide bridge analysis, dipole moment orientation, and sequence-based pharmacophoric filtering.' },
                { title: 'Scalable Software Architecture', description: 'Clean Architecture (Ports & Adapters) implementation with clear layered separation: domain (entities, value objects), application (use cases), infrastructure (SQLite, Graphein, VMD adapters), and HTTP interfaces (Flask, REST API v2). Modular, testable, maintainable system.' },
                { title: 'Data Processing Pipeline', description: 'End-to-end flow development: automated UniProt search, XML download and parsing, mature peptide extraction, PDB/AlphaFold structure trimming, activity data normalization (IC50 to nM), PSF generation with VMD/psfgen, and bulk family-based export.' },
                { title: 'Interactive Scientific Visualization', description: 'Mol* integration (3D biomolecule viewer) with dynamic metrics panels, interactive 2D/3D graphs (Plotly), dipole and disulfide bridge visualization modes, granularity controls (CA residue vs atomic level) with configurable parameters (distance threshold, sequence separation).' },
            ],
            features: [
                { title: 'Molecular Graphs with Graphein/NetworkX', description: 'Automatic graph construction from PDB structures with configurable granularity (CA residue or atomic), 6-12 Å distance threshold, and sequence separation to filter trivial contacts. Topological metrics calculation: degree, betweenness, closeness, eigenvector, clustering coefficient.' },
                { title: 'Flask REST API with Clean Architecture', description: 'Flask backend organized in layers following Clean Architecture principles. Documented REST v2 endpoints: graph calculation, metrics export by peptide/family, dipole analysis, peptide and family listing, healthcheck. Testable and decoupled system.' },
                { title: 'Automated Pipeline UniProt → DB → Artifacts', description: 'run_full_pipeline.py script orchestrating: UniProt search, XML download, peptide extraction, SQLite insertion, PDB/PSF association, NaSpTx motif filtering (gap_min/max, require_pair), PSF/PDB generation for dipole analysis, and optional JSON export with AI annotations.' },
                { title: 'Normalized SQLite Database', description: 'Relational schema with Proteins, Peptides, Nav1_7_InhibitorPpeptides, families, and aliases tables. Automatic IC50 normalization to nM (μM→nM, mM→nM). PDB/PSF blob storage. Optimized queries for bulk family-based export with metadata and activity.' },
                { title: '3D Visualization with Mol* & Interactive Graphs', description: 'Web interface integrating Mol* for 3D structure rendering and parallel panel for interactive 2D/3D graphs (Plotly/JS). Visualization modes: dipole vectors, disulfide bridges, combined. Dynamic peptide selection, graph parameter adjustment, and metrics panel with key residue identification.' },
                { title: 'NaSpTx Pharmacophoric Filtering', description: 'Inhibitory motif X1X2-S-WCKX3 implementation based on literature (Sharma et al., 2025). Configurable filtering by gap_min/gap_max (residue separation) and require_pair (requires hydrophobic pair). Filtered PDB export to pdbs/filtered/ for further analysis.' },
                { title: 'Electrostatic Property Analysis', description: 'Dipole moment, geometric center, and vector orientation calculation using MDAnalysis and VMD. Automatic PSF generation with psfgen for filtered peptides. /v2/dipole endpoint to obtain magnitude, direction, and dipole vector visualization.' },
                { title: 'Advanced Family-Based Export', description: 'Excel/CSV exporter with graph metrics, structural properties, and normalized IC50 by family (μ-TRTX-H, μ-TRTX-C, κ-TRTX, etc.). Structure-activity relationship (SAR) analysis. /v2/export/family/<family_name> tool for publication-ready datasets.' },
            ],
            process: [
                { title: 'Research & State of the Art', description: 'Literature review on Nav1.7 as therapeutic target, knottin-type peptide toxins, NaSpTx pharmacophoric motif, and fragmented bioinformatics tools landscape. Scope definition: automate complete structural analysis workflow and inhibitor candidate prioritization.' },
                { title: 'Architecture Design & Modeling', description: 'Layered architecture definition (Clean Architecture) with responsibility separation. Database schema design (ERD) with IC50 normalization and relationships between proteins, peptides, families, and structures. Use case diagrams and processing flows.' },
                { title: 'Data Pipeline Implementation', description: 'UniProt → DB flow development: async search with aiohttp, XML parsing (ElementTree), mature peptide extraction (regex/logic), PDB/AlphaFold download, structural trimming (Biopython), and bulk SQLite loading. run_full_pipeline.py script with configurable parameters and detailed logging.' },
                { title: 'Analysis Module Development', description: 'Adapter implementation for Graphein (CA/Atom graph construction), NetworkX (centrality metrics), VMD/MDAnalysis (dipole calculation, PSF generation). Domain services for NaSpTx filtering, family-based export, and unit normalization.' },
                { title: 'API & Frontend Construction', description: 'Flask v2 app development with REST controllers, modular blueprints, error handling, and CORS. Jinja templates with Mol* integration (PDBeMolstar), Plotly for graphs, jQuery for dynamic controls. Responsive CSS with scientific dark theme. Healthcheck endpoint for monitoring.' },
                { title: 'Validation & Testing', description: 'Unit and integration test suite with pytest. Scripts in tools/ for manual component validation (metrics, exports, filters). Complete dataset processing (1308 peptides) with stage time analysis. Cross-validation of 44 filtered candidates against literature.' },
                { title: 'Documentation & Results', description: 'Technical README with architecture, pipeline, API usage, DB schema, and troubleshooting. Layer-by-layer documentation in src/*/README.md. Result generation: prioritized candidates, family metrics, Excel exports, and inhibitory motif comparative analysis. Thesis writing.' },
            ],
        },
    },
}

const translations: Record<Language, Translations> = {
    es: {
        nav: {
            home: 'Inicio',
            projects: 'Proyectos',
            about: 'Sobre mí',
            contact: 'Contacto',
            downloadCV: 'Descargar CV',
        },
        hero: {
            available: 'Disponible para nuevos proyectos',
            greeting: 'Hola, soy',
            name: 'Edward',
            tagline: 'Construyo experiencias digitales que realmente funcionan.',
            description: 'Dev Full Stack con foco en apps web modernas y escalables. Me gusta que el código sea limpio, que las cosas funcionen bien y que el usuario no sufra.',
            viewProjects: 'Ver Proyectos',
            yearsExp: '+1 años exp.',
        },
        projects: {
            title: 'Proyectos Destacados',
            all: 'Todos',
            web: 'Web',
            desktop: 'Desktop',
            mobile: 'Mobile',
            viewDetails: 'Ver detalles',
            description: 'Descripción',
            screenshots: 'Capturas',
            technologies: 'Tecnologías',
            skillsShown: 'Skills Demostradas',
            viewCode: 'Ver Código',
            viewDemo: 'Ver Demo',
        },
        about: {
            sectionLabel: 'Sobre Mí',
            title: 'Sobre',
            titleHighlight: 'Mí',
            subtitle: 'Dev Full Stack con ganas de construir cosas que importen. ML y datos también me interesan.',
            mySkills: 'Lo que sé hacer',
            skillsDescription: 'Clean code, patrones de diseño y pensar en escalabilidad desde el día uno.',
            focus: 'Enfoque',
            mainStack: 'Stack Principal',
            philosophy: 'Filosofía',
            funFact: 'Fun Fact',
            funFactText: 'Las mejores soluciones salen cuando mezclas creatividad con lógica. Y café.',
            frontend: 'Frontend',
            backend: 'Backend',
            devops: 'DevOps & Tools',
            downloadCV: 'Descargar CV',
            headline: 'Ingeniero Civil en Informática',
            paragraphs: [
                'Me gusta construir cosas. Desde chico me llamó la atención entender cómo funcionan las cosas por debajo, y eso me llevó a la programación.',
                'Ahora me muevo en desarrollo full stack, pero lo que más me emociona es cuando puedo combinar código con datos. Machine learning y ciencia de datos son temas en los que paso bastante tiempo experimentando con Python.',
                'Creo que la mejor forma de aprender es haciendo. Cada proyecto es una oportunidad para probar algo nuevo, ya sea una tecnología, un patrón de diseño o una forma diferente de resolver un problema.',
                'Cuando no estoy programando, probablemente estoy aprendiendo sobre alguna tech nueva o pensando en la próxima idea para construir.',
            ],
        },
        contact: {
            title: '¿Trabajamos',
            titleHighlight: 'juntos',
            description: 'Estoy abierto a nuevas oportunidades y colaboraciones. Si tienes un proyecto en mente, escribeme y lo conversamos.',
            sendMessage: 'Enviar Mensaje',
            haveIdea: '¿Tienes una idea?',
            letsTalk: 'Hablemos',
            email: 'Email',
        },
        footer: {
            madeWith: 'Hecho con ❤️ y React.',
        },
    },
    en: {
        nav: {
            home: 'Home',
            projects: 'Projects',
            about: 'About',
            contact: 'Contact',
            downloadCV: 'Download CV',
        },
        hero: {
            available: 'Available for new projects',
            greeting: "Hey, I'm",
            name: 'Edward',
            tagline: 'I build digital experiences that actually work.',
            description: "Full Stack dev focused on modern, scalable web apps. I like clean code, things that work well, and users who don't suffer.",
            viewProjects: 'View Projects',
            yearsExp: '+1 years exp.',
        },
        projects: {
            title: 'Featured Projects',
            all: 'All',
            web: 'Web',
            desktop: 'Desktop',
            mobile: 'Mobile',
            viewDetails: 'View details',
            description: 'Description',
            screenshots: 'Screenshots',
            technologies: 'Technologies',
            skillsShown: 'Skills Demonstrated',
            viewCode: 'View Code',
            viewDemo: 'View Demo',
        },
        about: {
            sectionLabel: 'About Me',
            title: 'About',
            titleHighlight: 'Me',
            subtitle: 'Full Stack dev who wants to build things that matter. ML and data science also catch my interest.',
            mySkills: 'What I do',
            skillsDescription: 'Clean code, design patterns, and thinking about scalability from day one.',
            focus: 'Focus',
            mainStack: 'Main Stack',
            philosophy: 'Philosophy',
            funFact: 'Fun Fact',
            funFactText: 'The best solutions come from mixing creativity with logic. And coffee.',
            frontend: 'Frontend',
            backend: 'Backend',
            devops: 'DevOps & Tools',
            downloadCV: 'Download CV',
            headline: 'Software Engineer',
            paragraphs: [
                "I like building things. Since I was a kid, I've been curious about how things work under the hood, and that led me to programming.",
                "Now I work in full stack development, but what really excites me is combining code with data. Machine learning and data science are areas where I spend a lot of time experimenting with Python.",
                "I believe the best way to learn is by doing. Every project is a chance to try something new, whether it's a technology, a design pattern, or a different way to solve a problem.",
                "When I'm not coding, I'm probably learning about some new tech or thinking about the next thing to build.",
            ],
        },
        contact: {
            title: 'Shall we work',
            titleHighlight: 'together',
            description: "I'm open to new opportunities and collaborations. If you have a project in mind, drop me a message and let's talk.",
            sendMessage: 'Send Message',
            haveIdea: 'Have an idea?',
            letsTalk: "Let's talk",
            email: 'Email',
        },
        footer: {
            madeWith: 'Made with ❤️ and React.',
        },
    },
}

type I18nContextType = {
    lang: Language
    t: Translations
    toggleLang: () => void
    getProjectT: (projectId: string) => ProjectTranslations | null
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Language>('es')

    const toggleLang = () => {
        setLang(prev => prev === 'es' ? 'en' : 'es')
    }

    const getProjectT = (projectId: string): ProjectTranslations | null => {
        const projectT = projectTranslations[projectId]
        return projectT ? projectT[lang] : null
    }

    return (
        <I18nContext.Provider value={{ lang, t: translations[lang], toggleLang, getProjectT }}>
            {children}
        </I18nContext.Provider>
    )
}

export function useI18n() {
    const context = useContext(I18nContext)
    if (!context) {
        throw new Error('useI18n must be used within I18nProvider')
    }
    return context
}
