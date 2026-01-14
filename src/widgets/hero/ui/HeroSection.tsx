export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center perspective-container">
      <div className="cyber-grid"></div>

      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-tech-accent rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-500 rounded-full animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 space-y-8 fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-tech-accent font-mono text-xs tracking-widest border border-tech-accent/30 px-2 py-1 rounded bg-tech-accent/10">
              SYSTEM_ONLINE
            </span>
          </div>

          <div className="relative">
            <h2 className="text-xl md:text-2xl font-mono text-slate-400 mb-2">Ingeniero Civil en Informática</h2>
            <h1 className="text-6xl md:text-8xl font-black leading-none text-white tracking-tighter">
              EDWARD
              <br />
              <span className="text-stroke-accent relative inline-block">
                CONTRERAS
                <span
                  className="absolute top-0 left-0 -ml-1 text-tech-accent opacity-50 animate-glitch mix-blend-screen"
                  aria-hidden="true"
                >
                  CONTRERAS
                </span>
              </span>
            </h1>
          </div>

          <div className="holo-card p-6 rounded-lg border-l-4 border-l-tech-accent max-w-lg">
            <div className="font-mono text-xs text-slate-500 mb-2 border-b border-slate-700 pb-2 flex justify-between">
              <span>&gt; EXEC_PROFILE_SUMMARY.EXE</span>
              <span>CPU: 12%</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              <span className="text-tech-accent">&gt;</span> Desarrollador apasionado por crear soluciones tecnológicas innovadoras y
              experiencias digitales excepcionales. Especializado en desarrollo web{' '}
              <span className="text-white font-bold">full-stack</span> con tecnologías modernas.
            </p>
            <div className="mt-4 flex gap-4">
              <button
                type="button"
                onClick={() => document.getElementById('projects')?.scrollIntoView()}
                className="px-6 py-2 bg-tech-600 hover:bg-tech-500 text-white font-bold text-sm tracking-wider clip-path-polygon transition-all"
              >
                INICIAR MISIÓN
              </button>
              <button
                type="button"
                onClick={() => document.getElementById('contact')?.scrollIntoView()}
                className="px-6 py-2 border border-slate-600 hover:border-white text-slate-300 hover:text-white font-bold text-sm tracking-wider transition-all"
              >
                CONTACTO
              </button>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center items-center relative fade-in-up" style={{ animationDelay: '1.2s' }}>
          <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
            <div className="absolute inset-0 border border-slate-700 rounded-full"></div>
            <div className="absolute inset-4 border-2 border-dashed border-tech-accent/30 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-12 border border-purple-500/40 rounded-full animate-spin-reverse-slow"></div>
            <div className="absolute inset-0 rounded-full border-t-2 border-tech-accent opacity-50 animate-[spin_3s_linear_infinite]"></div>
            <div className="w-48 h-48 bg-slate-900 rounded-full border-4 border-tech-900 shadow-[0_0_50px_rgba(56,189,248,0.4)] flex items-center justify-center relative z-10 overflow-hidden group">
              <i className="fa-solid fa-user-astronaut text-7xl text-slate-200 group-hover:text-tech-accent transition-colors duration-500 relative z-20"></i>
              <div
                className="absolute top-0 left-0 w-full h-1 bg-tech-accent/50 blur-sm"
                style={{ animation: 'scan 2s linear infinite' }}
              ></div>
            </div>
            <div className="absolute -right-10 top-1/2 w-20 h-[1px] bg-slate-600"></div>
            <div className="absolute -right-14 top-1/2 text-[10px] font-mono text-slate-500 transform rotate-90 origin-left">
              DATA_CORE
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
