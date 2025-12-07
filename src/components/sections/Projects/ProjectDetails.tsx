import type { Project } from '../../../types';

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  // Contenido específico para MiPortalVentas
  const isMiPortalVentas = project.title === 'MiPortalVentas - Dashboard';

  const projectFeatures = isMiPortalVentas ? [
    {
      title: 'Liderazgo Scrum',
      description: 'Guié al equipo con ceremonias cortas y claras, quitando bloqueos rápido y manteniendo foco en entregables cortos.',
      color: '#A8E6CF'
    },
    {
      title: 'Arquitectura Técnica',
      description: 'Elegí Next.js + Supabase y documenté decisiones para que el equipo pudiera moverse rápido sin perder calidad.',
      color: '#FFCCCB'
    },
    {
      title: 'Gestión de Requisitos',
      description: 'Traducí lo que pedían obra a obra en historias accionables y priorizadas con los dueños.',
      color: '#FFD1DC'
    },
    {
      title: 'Calidad y Testing',
      description: 'Introduje revisiones cortas y pruebas básicas antes de subir a producción para evitar sorpresas.',
      color: '#E6E6FA'
    }
  ] : [
    {
      title: 'Funcionalidad',
      description: 'Sistema completo con interfaz moderna y responsiva, optimizado para diferentes dispositivos.',
      color: '#A8E6CF'
    },
    {
      title: 'Arquitectura',
      description: 'Implementación de patrones de diseño modernos y arquitectura limpia para mantenibilidad.',
      color: '#FFCCCB'
    },
    {
      title: 'Performance',
      description: 'Optimización de rendimiento con lazy loading, code splitting y caching estratégico.',
      color: '#FFD1DC'
    },
    {
      title: 'UX/UI',
      description: 'Diseño centrado en el usuario con animaciones fluidas y navegación intuitiva.',
      color: '#E6E6FA'
    }
  ];

  const developmentProcess = isMiPortalVentas ? [
    {
      title: 'Análisis y Planificación',
      description: 'Escuché a los equipos de venta y obra, levanté lo esencial y armé una hoja de ruta sencilla pero clara.',
      color: '#A8E6CF'
    },
    {
      title: 'Coordinación del Equipo',
      description: 'Mantuvimos dailies breves y plannings acotados; mi foco fue desatorar al equipo y comunicar avances con stakeholders.',
      color: '#FFCCCB'
    },
    {
      title: 'Supervisión Técnica',
      description: 'Revisé las piezas críticas, validé que la lógica de negocio calzara con lo que pedían y mantuve el código legible.',
      color: '#FFD1DC'
    },
    {
      title: 'Despliegue y Optimización',
      description: 'Coordiné el deploy en Vercel con chequeos mínimos de calidad y monitoreé el arranque para ajustar rápido.',
      color: '#E6E6FA'
    }
  ] : [
    {
      title: 'Planificación y Diseño',
      description: 'Análisis de requisitos, wireframes y prototipado de la interfaz.',
      color: '#A8E6CF'
    },
    {
      title: 'Desarrollo Frontend',
      description: 'Implementación de componentes, estados y lógica de presentación.',
      color: '#FFCCCB'
    },
    {
      title: 'Testing y Optimización',
      description: 'Pruebas unitarias, integración y optimización de rendimiento.',
      color: '#FFD1DC'
    },
    {
      title: 'Deployment',
      description: 'Configuración de CI/CD y despliegue en producción.',
      color: '#E6E6FA'
    }
  ];

  return (
    <div className="space-y-6">

      {/* Información Principal */}
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-[#FFD1DC]">{project.title}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Proyecto desarrollado en 2025</span>
            </div>
          </div>
          <div className="flex gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                aria-label="Ver código en GitHub"
              >
                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#A8E6CF] hover:bg-[#98D8C8] text-gray-900 rounded-lg transition-colors"
                aria-label="Ver proyecto en vivo"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
      </div>

      {/* Tecnologías */}
      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-[#FFD1DC]">Tecnologías Utilizadas</h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-800 text-[#A8E6CF] rounded-full text-sm font-medium border border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Habilidades Demostradas */}
      {isMiPortalVentas && (
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-[#FFD1DC]">Habilidades Demostradas</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3 bg-gray-800/30 rounded-lg border border-gray-700">
              <h5 className="font-medium text-[#A8E6CF] text-sm mb-1">Liderazgo Técnico</h5>
              <p className="text-xs text-gray-400">Tomé decisiones de stack y dejé guías simples para que el equipo avanzara sin fricción.</p>
            </div>
            <div className="p-3 bg-gray-800/30 rounded-lg border border-gray-700">
              <h5 className="font-medium text-[#FFCCCB] text-sm mb-1">Gestión Ágil</h5>
              <p className="text-xs text-gray-400">Facilité ceremonias cortas, prioricé backlog y mantuve a todos informados.</p>
            </div>
            <div className="p-3 bg-gray-800/30 rounded-lg border border-gray-700">
              <h5 className="font-medium text-[#FFD1DC] text-sm mb-1">Análisis de Requisitos</h5>
              <p className="text-xs text-gray-400">Escuché a ventas y obra, y convertí sus pedidos en historias claras.</p>
            </div>
            <div className="p-3 bg-gray-800/30 rounded-lg border border-gray-700">
              <h5 className="font-medium text-[#E6E6FA] text-sm mb-1">Calidad de Código</h5>
              <p className="text-xs text-gray-400">Propuse revisiones rápidas y checklists sencillos antes de desplegar.</p>
            </div>
          </div>
        </div>
      )}

      {/* Características del Proyecto */}
      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-[#FFD1DC]">Características Principales</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projectFeatures.map((feature, index) => (
            <div key={index} className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
              <h5 className="font-medium mb-2" style={{ color: feature.color }}>{feature.title}</h5>
              <p className="text-sm text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Galería de Imágenes */}
      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-[#FFD1DC]">Capturas del Proyecto</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
            <img
              src="/images/MiPortalVentas/ImagenDashboard.png"
              alt="Dashboard MiPortalVentas"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Proceso de Desarrollo */}
      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-[#FFD1DC]">Proceso de Desarrollo</h4>
        <div className="space-y-3">
          {developmentProcess.map((step, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: step.color }}></div>
              <div>
                <h5 className="font-medium text-gray-200">{step.title}</h5>
                <p className="text-sm text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}