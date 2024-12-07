'use client'

import { motion } from 'framer-motion'
import { Instagram, Github, Linkedin, Mail, Copy } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const email = 'your.email@example.com'

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-20">
      <h2 className="text-4xl font-bold mb-10 text-center">Get in Touch</h2>
      <div className="max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-lg border border-blue-500 p-6">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Contact Me</h3>
          <p className="text-gray-300">Feel free to reach out through any of these platforms</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={copyEmail}
            className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
            <Copy className="w-5 h-5" />
          </motion.button>
          {copied && <span className="text-green-500 text-sm">Copied!</span>}

          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center space-x-2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg"
          >
            <Instagram className="w-5 h-5" />
            <span>Instagram</span>
          </motion.a>

          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center space-x-2 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg"
          >
            <Github className="w-5 h-5" />
            <span>Github</span>
          </motion.a>

          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center space-x-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </motion.a>
        </div>
      </div>
    </section>
  )
}