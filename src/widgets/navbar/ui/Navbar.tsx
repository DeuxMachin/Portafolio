type NavbarProps = {
  isTerminalMode: boolean
  onToggleTerminalMode: () => void
}

export function Navbar({ isTerminalMode, onToggleTerminalMode }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full z-40 glass-panel border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-terminal text-tech-accent text-xl"></i>
            <span className="font-mono font-bold text-xl tracking-tight">
              EDWARD<span className="text-tech-accent">.DEV</span>
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
              <a href="#stack" className="hover:text-tech-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Stack
              </a>
              <a href="#projects" className="hover:text-tech-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Proyectos
              </a>
              <a href="#contact" className="hover:text-tech-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contacto
              </a>
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={onToggleTerminalMode}
              className="flex items-center gap-2 px-3 py-1 rounded border border-slate-600 hover:border-tech-accent text-xs font-mono transition-all"
            >
              <i className="fa-solid fa-code"></i>
              <span id="mode-text">MODO: {isTerminalMode ? 'TERMINAL' : 'UI'}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
