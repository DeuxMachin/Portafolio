'use client'

import { motion } from 'framer-motion'
import { Code, BookOpen, Coffee } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-cyan-400">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
              {/* Reemplaza la siguiente línea con la ruta de tu imagen */}
              <img
                src="/placeholder.svg"
                alt="Your Name"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Your Name</h3>
                <p className="text-cyan-400">Computer Science Student</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="flex items-start">
                <Code className="w-6 h-6 text-cyan-400 mr-4" />
                <div>
                  <h4 className="text-xl font-semibold text-white">Coding</h4>
                  <p className="text-gray-400">I love to code and build amazing projects.</p>
                </div>
              </div>
              <div className="flex items-start">
                <BookOpen className="w-6 h-6 text-cyan-400 mr-4" />
                <div>
                  <h4 className="text-xl font-semibold text-white">Learning</h4>
                  <p className="text-gray-400">I am always eager to learn new technologies and improve my skills.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Coffee className="w-6 h-6 text-cyan-400 mr-4" />
                <div>
                  <h4 className="text-xl font-semibold text-white">Coffee</h4>
                  <p className="text-gray-400">I enjoy a good cup of coffee while working on my projects.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
