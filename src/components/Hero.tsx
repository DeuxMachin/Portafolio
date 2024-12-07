'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center"
      >
        <motion.h1
          className="text-6xl font-bold mb-4"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
        >
          Edward Mathias Contreas Aqueveque
        </motion.h1>
        <motion.p
          className="text-2xl mb-8"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 120 }}
        >
          Web Developer & Designer
        </motion.p>
        <motion.button
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-full transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.button>
      </motion.div>
    </section>
  )
}

