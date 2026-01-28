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
