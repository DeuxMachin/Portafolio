'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: 'JavaScript', icon: '/icons/javascript.svg' },
  { name: 'TypeScript', icon: '/icons/typescript.svg' },
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'Node.js', icon: '/icons/nodejs.svg' },
  { name: 'Python', icon: '/icons/python.svg' },
  { name: 'Java', icon: '/icons/java.svg' },
  { name: 'HTML5', icon: '/icons/html5.svg' },
  { name: 'CSS3', icon: '/icons/css3.svg' },
]

const otherSkills = ['Git', 'RESTful APIs', 'GraphQL', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS']

const learning = ['Rust', 'Go', 'Machine Learning', 'Blockchain']

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-4xl font-bold mb-10 text-center">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 border border-blue-500 rounded-lg p-6">
          <div className="border-b border-gray-700 pb-4 mb-4">
            <h3 className="text-2xl font-semibold">Programming Languages & Frameworks</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
                <span className="text-gray-100">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="bg-gray-800 border border-blue-500 rounded-lg p-6">
          <div className="border-b border-gray-700 pb-4 mb-4">
            <h3 className="text-2xl font-semibold">Other Skills</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {otherSkills.map((skill) => (
              <span key={skill} className="px-2 py-1 bg-blue-600 text-sm rounded-full text-gray-100">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-gray-800 border border-blue-500 rounded-lg p-6">
          <div className="border-b border-gray-700 pb-4 mb-4">
            <h3 className="text-2xl font-semibold">Currently Learning</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {learning.map((skill) => (
              <span key={skill} className="px-2 py-1 bg-blue-600 text-sm rounded-full text-gray-100">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}