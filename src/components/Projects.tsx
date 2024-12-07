'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack online store application with user authentication, product management, and payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/yourusername/ecommerce-platform',
    live: 'https://your-ecommerce-platform.com'
  },
  {
    title: 'Task Management App',
    description: 'A Kanban-style project management tool with real-time updates and team collaboration features.',
    technologies: ['Vue.js', 'Firebase', 'Vuex'],
    github: 'https://github.com/yourusername/task-management-app',
    live: 'https://your-task-app.com'
  },
  {
    title: 'Weather Forecast Dashboard',
    description: 'An interactive weather dashboard that provides real-time forecasts and historical weather data visualization.',
    technologies: ['React', 'D3.js', 'OpenWeatherMap API'],
    github: 'https://github.com/yourusername/weather-dashboard',
    live: 'https://your-weather-dashboard.com'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-4xl font-bold mb-10 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full flex flex-col bg-gray-800 border border-blue-500 rounded-lg overflow-hidden"
          >
            <div className="p-6 border-b border-gray-700">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
            </div>
            <div className="p-6 flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-blue-600 text-sm rounded-full text-gray-100">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 border-t border-gray-700 flex justify-between">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-transparent border border-gray-100 text-gray-100 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-transparent border border-gray-100 text-gray-100 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}