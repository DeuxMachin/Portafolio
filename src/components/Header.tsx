'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'

const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact']

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="/" className="text-2xl font-bold">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
            >
              YourName
            </motion.span>
          </a>
          <div className="hidden md:flex space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="px-4 py-2 rounded-full text-slate-300 hover:text-white hover:bg-cyan-500/20 transition-all"
                >
                  {item}
                </a>
              </motion.div>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <motion.div 
            className="mt-4 md:hidden bg-slate-800 rounded-lg overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="block py-2 px-4 text-slate-300 hover:text-white hover:bg-cyan-500/20 transition-all flex items-center justify-between"
                onClick={() => setIsOpen(false)}
              >
                {item}
                <ChevronRight size={16} />
              </a>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  )
}