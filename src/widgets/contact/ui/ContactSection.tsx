import { useState, useRef } from 'react'
import type { FormEventHandler } from 'react'

type ContactSectionProps = {
  onSubmit: FormEventHandler<HTMLFormElement>
}

type SubmitState = 'idle' | 'sending' | 'success' | 'error'

const submitMessages: Record<SubmitState, string> = {
  idle: 'Enviar Mensaje',
  sending: 'Enviando...',
  success: '¡Mensaje Enviado!',
  error: 'Error al enviar'
}

const stateIcons: Record<SubmitState, string> = {
  idle: 'fa-paper-plane',
  sending: 'fa-spinner',
  success: 'fa-check-circle',
  error: 'fa-exclamation-triangle'
}

export function ContactSection({ onSubmit }: ContactSectionProps) {
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [progressSteps, setProgressSteps] = useState<string[]>([])
  const buttonRef = useRef<HTMLButtonElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)

  const createParticles = () => {
    if (!buttonRef.current || !particlesRef.current) return

    const container = particlesRef.current
    container.innerHTML = ''

    const colors = ['#38bdf8', '#a855f7', '#10b981', '#f59e0b', '#ef4444']

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle-burst'
      particle.style.left = '50%'
      particle.style.top = '50%'
      particle.style.setProperty('--tx', `${(Math.random() - 0.5) * 200}px`)
      particle.style.setProperty('--ty', `${(Math.random() - 0.5) * 200}px`)
      particle.style.background = colors[Math.floor(Math.random() * colors.length)]
      container.appendChild(particle)
    }
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    if (submitState !== 'idle') return

    setProgressSteps([])

    // Sending animation
    setSubmitState('sending')
    setProgressSteps(prev => [...prev, '✓ Validando información...'])
    await new Promise(r => setTimeout(r, 600))

    setProgressSteps(prev => [...prev, '✓ Preparando mensaje...'])
    await new Promise(r => setTimeout(r, 800))

    setProgressSteps(prev => [...prev, '✓ Enviando...'])
    await new Promise(r => setTimeout(r, 600))

    // Success
    setSubmitState('success')
    setProgressSteps(prev => [...prev, '✓ ¡Mensaje enviado correctamente!'])
    createParticles()

    onSubmit(event)

    // Reset after delay
    await new Promise(r => setTimeout(r, 3000))
    setSubmitState('idle')
    setProgressSteps([])
  }

  const getButtonClasses = () => {
    const base = 'submit-btn group relative px-8 py-4 font-bold tracking-wide transition-all overflow-hidden min-w-[200px] flex items-center justify-center gap-3 rounded-xl text-base'

    switch (submitState) {
      case 'success':
        return `${base} bg-gradient-to-r from-emerald-600 to-emerald-500 text-white`
      case 'error':
        return `${base} bg-gradient-to-r from-red-600 to-red-500 text-white`
      case 'idle':
        return `${base} bg-gradient-to-r from-tech-600 to-tech-500 text-white hover:shadow-lg hover:shadow-tech-accent/30 hover:-translate-y-0.5`
      default:
        return `${base} bg-gradient-to-r from-tech-600 to-purple-600 text-white cursor-wait`
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-tech-dark via-slate-950 to-tech-dark relative border-t border-white/5 scroll-mt-24">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-tech-accent/30 bg-tech-accent/5 text-tech-accent text-sm font-medium tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-tech-accent mr-2 animate-pulse" />
            Contacto
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            ¿Tienes un <span className="bg-gradient-to-r from-tech-accent to-purple-500 bg-clip-text text-transparent">proyecto</span> en mente?
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Estoy disponible para nuevas oportunidades y colaboraciones.
            Envíame un mensaje y te responderé lo antes posible.
          </p>
        </div>

        <div className="glass-panel rounded-2xl p-1 relative">
          <div className="bg-slate-900/80 rounded-xl p-8 md:p-10 relative overflow-hidden">

            {/* Progress feedback during sending */}
            {progressSteps.length > 0 && (
              <div className="mb-8 bg-slate-800/50 rounded-lg p-4 border border-tech-accent/20">
                <div className="space-y-2">
                  {progressSteps.map((step, i) => (
                    <div
                      key={`step-${i}`}
                      className={`text-sm ${step.includes('correctamente') ? 'text-emerald-400 font-medium' : 'text-slate-300'
                        } animate-[fadeIn_0.3s_ease-out]`}
                    >
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-tech-accent focus:ring-1 focus:ring-tech-accent transition-colors text-base"
                    placeholder="Tu nombre"
                    required
                    disabled={submitState !== 'idle'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-tech-accent focus:ring-1 focus:ring-tech-accent transition-colors text-base"
                    placeholder="tu@email.com"
                    required
                    disabled={submitState !== 'idle'}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  name="subject"
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-tech-accent focus:ring-1 focus:ring-tech-accent transition-colors text-base"
                  placeholder="¿En qué puedo ayudarte?"
                  disabled={submitState !== 'idle'}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  rows={5}
                  name="message"
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-tech-accent focus:ring-1 focus:ring-tech-accent transition-colors resize-none text-base"
                  placeholder="Cuéntame más sobre tu proyecto o idea..."
                  required
                  disabled={submitState !== 'idle'}
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
                <p className="text-sm text-slate-500">
                  También puedes contactarme en{' '}
                  <a href="mailto:edward@example.com" className="text-tech-accent hover:underline">
                    edward@example.com
                  </a>
                </p>

                <div className="relative" ref={particlesRef}>
                  <button
                    ref={buttonRef}
                    type="submit"
                    disabled={submitState !== 'idle'}
                    className={getButtonClasses()}
                  >
                    {/* Progress bar at bottom of button */}
                    {submitState === 'sending' && (
                      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-tech-accent via-purple-500 to-emerald-500 rounded-b-xl animate-[transmitProgress_2s_ease-in-out]" />
                    )}

                    <span className="relative flex items-center gap-3">
                      {submitState === 'sending' && (
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      )}
                      <span className="btn-text">{submitMessages[submitState]}</span>
                      {submitState !== 'sending' && (
                        <i className={`fa-solid ${stateIcons[submitState]} ${submitState === 'success' ? 'animate-bounce' : ''
                          }`} />
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
