import type { FormEventHandler } from 'react'

type ContactSectionProps = {
  onSubmit: FormEventHandler<HTMLFormElement>
}

export function ContactSection({ onSubmit }: ContactSectionProps) {
  return (
    <section id="contact" className="py-24 bg-black relative border-t border-slate-800">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      ></div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="glass-panel p-1 rounded-xl relative">
          <div className="corner-deco top-left"></div>
          <div className="corner-deco bottom-right"></div>

          <div className="bg-slate-900/90 rounded-lg p-8 md:p-12 relative overflow-hidden">
            <div className="flex items-center justify-between mb-12 border-b border-slate-700 pb-6">
              <div>
                <h3 className="text-tech-accent font-mono text-xs tracking-[0.3em] mb-2">CANAL SEGURO</h3>
                <h2 className="text-3xl font-black text-white">
                  ENLACE <span className="text-white/50">NEURAL</span>
                </h2>
              </div>
              <div className="hidden md:block text-right">
                <div className="text-xs font-mono text-slate-500">SIGNAL_STRENGTH</div>
                <div className="flex gap-1 justify-end mt-1">
                  <div className="w-1 h-4 bg-tech-accent"></div>
                  <div className="w-1 h-4 bg-tech-accent"></div>
                  <div className="w-1 h-4 bg-tech-accent"></div>
                  <div className="w-1 h-4 bg-tech-accent/50"></div>
                </div>
              </div>
            </div>

            <form onSubmit={onSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="cyber-input-group">
                  <label className="cyber-label">IDENTIDAD_ORIGEN</label>
                  <input type="text" className="cyber-input" placeholder="Tu Nombre / Alias" />
                </div>
                <div className="cyber-input-group">
                  <label className="cyber-label">FRECUENCIA_RETORNO</label>
                  <input type="email" className="cyber-input" placeholder="correo@ejemplo.com" />
                </div>
              </div>

              <div className="cyber-input-group">
                <label className="cyber-label">DATOS_TRANSMISIÓN</label>
                <textarea rows={4} className="cyber-input" placeholder="Inicializando mensaje..."></textarea>
              </div>

              <div className="flex justify-end items-center gap-6 pt-4">
                <div className="text-[10px] font-mono text-slate-500 hidden md:block">
                  ENCRYPTION_KEY: <span className="animate-pulse">XXXX-XXXX</span>
                </div>
                <button
                  type="submit"
                  className="group relative px-8 py-4 bg-tech-600 hover:bg-tech-500 text-white font-bold tracking-wider clip-path-polygon transition-all overflow-hidden"
                >
                  <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-shimmer"></div>
                  <span className="relative flex items-center gap-3">
                    TRANSMITIR DATOS <i className="fa-solid fa-paper-plane"></i>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
