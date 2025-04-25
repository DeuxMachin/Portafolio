"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Github, ExternalLink, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { ButtonLink } from "./ui/button-link"
import { useLanguage } from "../context/LanguageContext"

// Definición de tipos
interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

export default function ProjectsSection() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])

  // Datos de proyectos
  const projects: Project[] = [
    {
      id: 1,
      title: "Análisis de Imágenes para Microscopía",
      description: "Aplicación móvil desarrollada con React Native para el análisis de imágenes microscópicas. Permite a los usuarios seleccionar puntos de interés en imágenes, calcular distancias en píxeles y convertirlas a unidades de micrómetros mediante algoritmos de calibración personalizados.",
      image: "https://images.unsplash.com/photo-1581093199863-68c87a5166c8?q=80&w=2940&auto=format&fit=crop",
      tags: ["React Native", "Android", "Image Processing", "JavaScript", "UI/UX Design"],
      liveUrl: "https://play.google.com/store",
      githubUrl: "https://github.com/yourusername/microscopy-app",
      featured: true
    },
    // Puedes agregar más proyectos después
  ]

  return (
    <section id="projects" ref={sectionRef} className="relative py-20 overflow-hidden bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-900/95 z-0" />

      <motion.div style={{ y, opacity }} className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-3 py-1 bg-teal-500/10 backdrop-blur-sm rounded-full text-sm font-medium text-teal-400 mb-6">
              My Work
            </div>
            <h2 className="text-4xl font-bold mb-4 text-white">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-400 mx-auto mt-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto mt-6">
              These are some of the key projects I've worked on. Each demonstrates 
              different skills and approaches to solving real-world problems.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative group overflow-hidden rounded-xl border border-gray-700/50 bg-gray-800/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 h-full flex flex-col">
                {/* Image Container with Overlay */}
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge variant="outline" className="bg-teal-500/20 text-teal-300 border-teal-500/30 backdrop-blur-sm">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="bg-gray-700/50 text-gray-300 border-gray-600">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <ButtonLink
                        variant="default"
                        className="flex-1"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                        <ExternalLink size={16} className="ml-2" />
                      </ButtonLink>
                    )}
                    {project.githubUrl && (
                      <ButtonLink
                        variant="outline"
                        className="flex-1"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} className="mr-2" />
                        Source Code
                      </ButtonLink>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

  
      </motion.div>
    </section>
  )
}