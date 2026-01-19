import { useState, useRef, useEffect } from 'react'

type NavbarProps = {
  isTerminalMode: boolean
  onToggleTerminalMode: () => void
}

// Confetti particle type
type Particle = {
  id: number
  x: number
  y: number
  color: string
  rotation: number
  velocity: { x: number; y: number }
}

export function Navbar({ onToggleTerminalMode }: NavbarProps) {
  const [isPartyMode, setIsPartyMode] = useState(false)
  const [particles, setParticles] = useState<Particle[]>([])
  const [partyCount, setPartyCount] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Create confetti explosion
  const createConfetti = () => {
    const colors = ['#38bdf8', '#a855f7', '#10b981', '#f59e0b', '#ef4444', '#ec4899', '#8b5cf6']
    const newParticles: Particle[] = []

    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: Date.now() + i,
        x: 50 + (Math.random() - 0.5) * 30,
        y: 0,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        velocity: {
          x: (Math.random() - 0.5) * 15,
          y: Math.random() * 8 + 5
        }
      })
    }

    setParticles(prev => [...prev, ...newParticles])

    // Clean up particles after animation
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.some(np => np.id === p.id)))
    }, 3000)
  }

  const handlePartyClick = () => {
    setIsPartyMode(true)
    setPartyCount(prev => prev + 1)
    createConfetti()

    // Trigger the terminal mode toggle for functionality
    onToggleTerminalMode()

    // Reset party mode visual after animation
    setTimeout(() => {
      setIsPartyMode(false)
    }, 1000)
  }

  // Animate particles
  useEffect(() => {
    if (particles.length === 0) return

    const animationFrame = requestAnimationFrame(() => {
      setParticles(prev => prev.map(p => ({
        ...p,
        x: p.x + p.velocity.x * 0.1,
        y: p.y + p.velocity.y,
        rotation: p.rotation + 5,
        velocity: {
          ...p.velocity,
          y: p.velocity.y + 0.3 // gravity
        }
      })))
    })

    return () => cancelAnimationFrame(animationFrame)
  }, [particles])

  return (
    <>
      {/* Confetti container - positioned fixed to cover viewport */}
      <div
        ref={containerRef}
        className="fixed top-0 left-0 w-full h-screen pointer-events-none z-50 overflow-hidden"
      >
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute w-3 h-3 rounded-sm"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}px`,
              backgroundColor: particle.color,
              transform: `rotate(${particle.rotation}deg)`,
              opacity: Math.max(0, 1 - particle.y / 800)
            }}
          />
        ))}
      </div>

      <nav className={`fixed top-0 w-full z-40 glass-panel border-b border-white/10 transition-all duration-300 ${isPartyMode ? 'bg-gradient-to-r from-purple-900/40 via-pink-900/40 to-blue-900/40' : ''
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <i className={`fa-solid fa-terminal text-xl transition-colors duration-300 ${isPartyMode ? 'text-pink-400 animate-bounce' : 'text-tech-accent'
                }`} />
              <span className="font-mono font-bold text-xl tracking-tight">
                EDWARD<span className={`transition-colors duration-300 ${isPartyMode ? 'text-pink-400' : 'text-tech-accent'
                  }`}>.DEV</span>
              </span>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="hover:text-tech-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Inicio
                </a>
                <a href="#about" className="hover:text-tech-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Perfil
                </a>
                <a href="#projects" className="hover:text-tech-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Proyectos
                </a>
                <a href="#stack" className="hover:text-tech-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Stack
                </a>
                <a href="#contact" className="hover:text-tech-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Contacto
                </a>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={handlePartyClick}
                className={`group flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all duration-300 relative overflow-hidden ${isPartyMode
                  ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white scale-110 shadow-lg shadow-purple-500/30'
                  : 'border border-slate-600 hover:border-tech-accent hover:bg-tech-accent/10 text-slate-300 hover:text-white'
                  }`}
              >
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />

                <i className={`fa-solid transition-transform duration-300 ${isPartyMode
                  ? 'fa-party-horn animate-bounce'
                  : 'fa-wand-magic-sparkles group-hover:rotate-12'
                  }`} />
                <span className="relative">
                  {isPartyMode ? '🎉 ¡Fiesta!' : '✨ Sorpresa'}
                </span>

                {/* Party counter badge */}
                {partyCount > 0 && (
                  <span className={`absolute -top-1 -right-1 w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold ${isPartyMode
                    ? 'bg-yellow-400 text-yellow-900'
                    : 'bg-tech-accent text-tech-dark'
                    }`}>
                    {partyCount > 99 ? '99+' : partyCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
