import { useState } from 'react';
import { Card } from '../../ui/Card';
import { Button } from '../../ui/Button';
import { Modal } from '../../ui/Modal';
import { ProjectDetails } from './ProjectDetails';
import { GitHubIcon, ExternalLinkIcon } from '../../ui/Icons';
import { projects } from '../../../data/projects';
import type { Project } from '../../../types';

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-24 relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#A8E6CF] font-mono text-sm tracking-wider">
            // PROYECTOS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F8F9FA] mt-2">
            Mis Trabajos Destacados
          </h2>
          <div className="w-20 h-1 bg-[#A8E6CF] mx-auto mt-4 rounded-full"></div>
          <p className="text-[#7A8090] mt-4 max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades y
            experiencia en desarrollo de software.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <Card
              key={project.id}
              className="overflow-hidden group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-[#2E333D] -mx-6 -mt-6 mb-4 overflow-hidden flex items-center justify-center">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full">
                    <div className="text-6xl opacity-20">
                      {project.featured ? '⭐' : '📁'}
                    </div>
                  </div>
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#1A1D23]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-12 h-12 rounded-xl bg-[#A8E6CF] text-[#1A1D23] flex items-center justify-center hover:bg-[#98D8C8] transition-all"
                    aria-label="Ver detalles del proyecto"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-[#2A2F3A] flex items-center justify-center text-[#B8BCC8] hover:text-[#A8E6CF] hover:bg-[#2E333D] transition-all"
                      aria-label="Ver código"
                    >
                      <GitHubIcon size={24} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-[#2A2F3A] flex items-center justify-center text-[#B8BCC8] hover:text-[#A8E6CF] hover:bg-[#2E333D] transition-all"
                      aria-label="Ver demo"
                    >
                      <ExternalLinkIcon size={24} />
                    </a>
                  )}
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3 bg-[#A8E6CF] text-[#1A1D23] text-xs font-semibold px-2 py-1 rounded-lg">
                    Destacado
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div>
                <h3 className="text-xl font-bold text-[#F8F9FA] mb-2 group-hover:text-[#A8E6CF] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#7A8090] text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-lg bg-[#2E333D] text-[#B8BCC8] border border-[#3A4050]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Show More Button */}
        {projects.length > 3 && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Ver menos' : `Ver todos los proyectos (${projects.length})`}
            </Button>
          </div>
        )}
      </div>

      {/* Project Modal */}
      <Modal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
      >
        {selectedProject && <ProjectDetails project={selectedProject} />}
      </Modal>
    </section>
  );
}

export default ProjectsSection;
