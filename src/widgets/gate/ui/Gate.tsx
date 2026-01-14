type GateProps = {
  hasEntered: boolean
  onEnter: () => void
}

export function Gate({ hasEntered, onEnter }: GateProps) {
  return (
    <div id="gate-container" className={`fixed inset-0 z-50 flex overflow-hidden ${hasEntered ? 'door-open' : ''}`}>
      <div className="left-panel door-panel w-1/2 h-full bg-slate-900 border-r-2 border-tech-accent relative flex items-center justify-end z-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute top-10 left-10 text-tech-accent font-mono text-xs opacity-50">
          USER: Edward Mathias Contreras
          <br />
          LOCATION: Chile
        </div>
      </div>

      <div className="right-panel door-panel w-1/2 h-full bg-slate-900 border-l-2 border-tech-accent relative flex items-center justify-start z-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute bottom-10 right-10 text-tech-accent font-mono text-xs opacity-50 text-right">
          PROFESSION: Ing. Civil en Informática
          <br />
          STATUS: Disponible para nuevos proyectos
        </div>
      </div>

      <div className="lock-mechanism absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center justify-center">
        <div className="relative group cursor-pointer" onClick={onEnter}>
          <div className="absolute inset-0 rounded-full border-2 border-tech-accent opacity-30 w-32 h-32 animate-[spin_4s_linear_infinite]"></div>
          <div className="absolute inset-0 rounded-full border border-dashed border-tech-500 opacity-50 w-32 h-32 animate-[spin_8s_linear_infinite_reverse]"></div>
          <button
            type="button"
            className="w-32 h-32 rounded-full bg-slate-900 border-4 border-tech-accent text-tech-accent shadow-[0_0_30px_rgba(56,189,248,0.5)] flex flex-col items-center justify-center hover:bg-tech-accent hover:text-white transition-all duration-300 group-hover:scale-110"
          >
            <i className="fa-solid fa-fingerprint text-4xl mb-2"></i>
            <span className="font-mono text-xs font-bold tracking-widest">ACCEDER</span>
          </button>
        </div>
        <div className="mt-4 text-tech-500 font-mono text-sm tracking-[0.3em] uppercase animate-pulse">
          Autenticación Requerida
        </div>
      </div>
    </div>
  )
}
