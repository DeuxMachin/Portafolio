import type { FormEventHandler } from 'react'
import { useEffect, useState } from 'react'
import { FaReact, FaPython, FaNodeJs, FaDocker, FaGitAlt, FaGithub, FaLinux, FaChartBar } from 'react-icons/fa'
import { SiTypescript, SiJavascript, SiNextdotjs, SiTailwindcss, SiVite, SiMysql, SiFirebase, SiSupabase, SiFlask } from 'react-icons/si'

function App() {
  const [hasEntered, setHasEntered] = useState(false)
  const [isTerminalMode, setIsTerminalMode] = useState(false)
  const [projectView, setProjectView] = useState<'grid' | 'list'>('grid')
  const [activeTech, setActiveTech] = useState<string | null>(null)

  useEffect(() => {
    document.body.style.overflowY = hasEntered ? 'auto' : 'hidden'
    return () => {
      document.body.style.overflowY = 'auto'
    }
  }, [hasEntered])

  useEffect(() => {
    if (isTerminalMode) {
      document.body.classList.add('terminal-mode')
    } else {
      document.body.classList.remove('terminal-mode')
    }
  }, [isTerminalMode])

  const enterSystem = () => {
    setHasEntered(true)
    window.setTimeout(() => {
      document.body.style.overflowY = 'auto'
    }, 1000)
  }

  const projects = [
    {
      id: 'PV-01',
      statusPing: true,
      icon: 'fa-chart-line',
      title: 'MiPortalVentas - Dashboard',
      description:
        'Dashboard web para la gestión integral de ventas en el sector construcción. Muchas empresas de construcción tenían un problema con la gestión de ventas.',
      tags: [
        { label: 'Next.js', className: 'text-[10px] bg-slate-900 text-white border border-slate-700 px-2 py-1 font-mono uppercase' },
        { label: 'React', className: 'text-[10px] bg-slate-900 text-tech-accent border border-slate-700 px-2 py-1 font-mono uppercase' },
        { label: 'TypeScript', className: 'text-[10px] bg-slate-900 text-blue-500 border border-slate-700 px-2 py-1 font-mono uppercase' },
        { label: 'Tailwind CSS', className: 'text-[10px] bg-slate-900 text-cyan-400 border border-slate-700 px-2 py-1 font-mono uppercase' },
        { label: 'Supabase', className: 'text-[10px] bg-slate-900 text-green-400 border border-slate-700 px-2 py-1 font-mono uppercase' },
      ],
      meta: 'STATUS: Destacado',
      overlayRightClass: 'text-[10px] font-mono text-tech-accent',
      overlayRightText: 'LIVE',
      scanDelay: undefined as string | undefined,
    },
    {
      id: 'EL-02',
      statusPing: false,
      icon: 'fa-graduation-cap',
      title: 'Plataforma E-Learning',
      description:
        'Plataforma educativa con cursos interactivos, sistema de seguimiento de progreso, evaluaciones automatizadas y certificaciones para el aprendizaje online.',
      tags: [
        { label: 'Vue.js', className: 'text-[10px] bg-slate-900 text-green-400 border border-slate-700 px-2 py-1 font-mono uppercase' },
        { label: 'Python', className: 'text-[10px] bg-slate-900 text-yellow-400 border border-slate-700 px-2 py-1 font-mono uppercase' },
        { label: 'Django', className: 'text-[10px] bg-slate-900 text-green-600 border border-slate-700 px-2 py-1 font-mono uppercase' },
        { label: 'MongoDB', className: 'text-[10px] bg-slate-900 text-green-500 border border-slate-700 px-2 py-1 font-mono uppercase' },
        { label: 'AWS', className: 'text-[10px] bg-slate-900 text-orange-400 border border-slate-700 px-2 py-1 font-mono uppercase' },
      ],
      meta: 'STATUS: Destacado',
      overlayRightClass: 'text-[10px] font-mono text-green-500',
      overlayRightText: 'ACTIVE',
      scanDelay: '1s',
    },
    {
      id: 'API-03',
      statusPing: false,
      icon: 'fa-code',
      title: 'API REST Full-Stack',
      description:
        'Sistema backend robusto con arquitectura escalable, autenticación JWT, documentación automática y despliegue en la nube.',
      tags: [
        { label: 'Node.js', className: 'text-[10px] bg-slate-900 text-green-500 border border-slate-700 px-2 py-1 font-mono uppercase' },
        { label: 'TypeScript', className: 'text-[10px] bg-slate-900 text-blue-500 border border-slate-700 px-2 py-1 font-mono uppercase' },
        { label: 'PostgreSQL', className: 'text-[10px] bg-slate-900 text-blue-400 border border-slate-700 px-2 py-1 font-mono uppercase' },
        { label: 'Docker', className: 'text-[10px] bg-slate-900 text-blue-500 border border-slate-700 px-2 py-1 font-mono uppercase' },
      ],
      meta: 'STATUS: Production',
      overlayRightClass: 'text-[10px] font-mono text-blue-400',
      overlayRightText: 'DEPLOY',
      scanDelay: '2s',
    },
  ]

  const techStack = [
    { name: 'React', icon: FaReact, color: 'text-[#61DAFB]', level: 'Avanzado', category: 'Framework' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-[#3178C6]', level: 'Avanzado', category: 'Lenguaje' },
    { name: 'Python', icon: FaPython, color: 'text-[#3776AB]', level: 'Avanzado', category: 'Lenguaje' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-[#F7DF1E]', level: 'Avanzado', category: 'Lenguaje' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-white', level: 'Avanzado', category: 'Framework' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-[#06B6D4]', level: 'Avanzado', category: 'Framework' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-[#339933]', level: 'Intermedio', category: 'Framework' },
    { name: 'Vite', icon: SiVite, color: 'text-[#646CFF]', level: 'Avanzado', category: 'Herramienta' },
    { name: 'Flask', icon: SiFlask, color: 'text-white', level: 'Intermedio', category: 'Framework' },
    { name: 'MySQL', icon: SiMysql, color: 'text-[#4479A1]', level: 'Intermedio', category: 'Base de Datos' },
    { name: 'Firebase', icon: SiFirebase, color: 'text-[#FFCA28]', level: 'Intermedio', category: 'Base de Datos' },
    { name: 'Supabase', icon: SiSupabase, color: 'text-[#3ECF8E]', level: 'Avanzado', category: 'Base de Datos' },
    { name: 'Docker', icon: FaDocker, color: 'text-[#2496ED]', level: 'Intermedio', category: 'Herramienta' },
    { name: 'Git', icon: FaGitAlt, color: 'text-[#F05032]', level: 'Experto', category: 'Herramienta' },
    { name: 'GitHub', icon: FaGithub, color: 'text-white', level: 'Experto', category: 'Herramienta' },
    { name: 'Linux', icon: FaLinux, color: 'text-[#FCC624]', level: 'Intermedio', category: 'Herramienta' },
    { name: 'PowerBI', icon: FaChartBar, color: 'text-[#F2C811]', level: 'Intermedio', category: 'Herramienta' },
  ]

  const toggleTech = (key: string) => {
    setActiveTech((prev) => (prev === key ? null : key))
  }

  const onSubmitContact: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    alert('Transmisión enviada al servidor central.')
  }

  return (
    <>
      {/* ==================== LA PUERTA (GATE) ==================== */}
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
          <div className="relative group cursor-pointer" onClick={enterSystem}>
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

      {/* ==================== CONTENIDO PRINCIPAL ==================== */}
      <div
        id="main-content"
        className={`min-h-screen transition-opacity duration-1000 delay-700 relative ${hasEntered ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Navbar Flotante */}
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
                  <a
                    href="#projects"
                    className="hover:text-tech-accent px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
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
                  onClick={() => setIsTerminalMode((v) => !v)}
                  className="flex items-center gap-2 px-3 py-1 rounded border border-slate-600 hover:border-tech-accent text-xs font-mono transition-all"
                >
                  <i className="fa-solid fa-code"></i>
                  <span id="mode-text">MODO: {isTerminalMode ? 'TERMINAL' : 'UI'}</span>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* === HERO SECTION EXÓTICO === */}
        <section id="home" className="relative min-h-screen flex items-center justify-center perspective-container">
          <div className="cyber-grid"></div>

          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-tech-accent rounded-full animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-500 rounded-full animate-pulse-slow"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Identidad / Datos */}
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
                  <span className="text-tech-accent">&gt;</span> Desarrollador apasionado por crear soluciones tecnológicas innovadoras y experiencias digitales excepcionales. Especializado en desarrollo web{' '}
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

            {/* Núcleo Holográfico */}
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

        {/* === SECCIÓN: SOBRE MÍ "PERFIL DE OPERADOR" === */}
        <section id="about" className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-800">
          {/* Decorative */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-tech-purple to-transparent opacity-50"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-12 text-center">
              <span className="font-mono text-tech-purple text-xs tracking-widest uppercase">Identity Verification</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
                PERFIL DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-purple to-white">OPERADOR</span>
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-stretch">
              {/* Tarjeta ID Simplificada */}
              <div className="w-full lg:w-1/3">
                <div className="glass-panel rounded-xl p-8 h-full relative overflow-hidden border border-tech-purple/30">
                  {/* Header ID */}
                  <div className="flex justify-between items-start border-b border-slate-700/50 pb-4 mb-6">
                    <div>
                      <div className="text-[10px] text-slate-400 font-mono">ID_REF</div>
                      <div className="text-lg font-bold text-white tracking-wider">EC-2024</div>
                    </div>
                    <i className="fa-solid fa-fingerprint text-3xl text-tech-accent"></i>
                  </div>

                  {/* Avatar Simplificado */}
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center border-4 border-tech-accent shadow-[0_0_30px_rgba(56,189,248,0.3)]">
                      <i className="fa-solid fa-user text-5xl text-slate-300"></i>
                    </div>
                    <div className="absolute bottom-0 right-0 bg-green-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                      Activo
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="space-y-4 font-mono text-xs">
                    <div className="flex justify-between text-slate-400">
                      <span>NOMBRE:</span>
                      <span className="text-white">Edward M. Contreras</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>ROL:</span>
                      <span className="text-tech-accent">Ingeniero Full-Stack</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>NIVEL:</span>
                      <span className="text-tech-purple">Senior Developer</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>UBICACIÓN:</span>
                      <span className="text-tech-accent flex items-center gap-1">
                        <i className="fa-solid fa-location-dot text-red-400"></i> Chile
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>ESTADO:</span>
                      <span className="text-green-400">✨ Disponible</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terminal Window */}
              <div className="w-full lg:w-2/3">
                <div className="bg-[#0d1117] border border-[#30363d] rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] h-full flex flex-col">
                  {/* Terminal Header */}
                  <div className="bg-[#161b22] px-4 py-2 border-b border-[#30363d] flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    <span className="ml-4 text-xs text-slate-500 font-mono">edward@portfolio:~/about.md</span>
                  </div>

                  {/* Terminal Content */}
                  <div className="p-6 font-mono text-sm text-slate-300 leading-relaxed overflow-y-auto flex-1">
                    <div className="mb-4">
                      <span className="text-tech-purple">➜</span> <span className="text-tech-accent">~</span>{' '}
                      <span className="text-yellow-400">cat</span> biography.md
                    </div>

                    <p className="mb-4 text-slate-400 text-xs">
                      <span className="text-slate-600">// Initializing personal data stream...</span>
                    </p>

                    <h3 className="text-white font-bold mb-3">Ingeniero Civil en Informática</h3>

                    <p className="mb-4">
                      Soy Ingeniero Civil en Informática con experiencia en desarrollo de software y soluciones tecnológicas.
                      Me especializo en crear{' '}
                      <span className="text-tech-accent font-semibold">aplicaciones web modernas y escalables</span>, combinando
                      buenas prácticas de ingeniería con un enfoque centrado en el usuario.
                    </p>

                    <p className="mb-4">
                      Hoy me muevo como <span className="text-white font-semibold">full stack</span>, y también disfruto bastante
                      la ciencia de datos y el ML; paso harto tiempo con estos temas y me siento cómodo en{' '}
                      <span className="text-yellow-400">Python</span> para experimentarlos en proyectos reales.
                    </p>

                    <p className="mb-6">
                      Mi formación me ha permitido desarrollar habilidades tanto técnicas como analíticas, lo que me permite
                      abordar problemas complejos desde múltiples perspectivas. Disfruto trabajar en equipos colaborativos y
                      seguir aprendiendo tecnologías que sumen.
                    </p>

                    <div className="border-t border-slate-700/50 pt-4 mt-6">
                      <div className="text-xs text-slate-500 mb-3 uppercase tracking-wider">Experiencia Destacada</div>
                      <div className="space-y-3">
                        <div className="flex gap-4">
                          <span className="text-tech-accent w-28 shrink-0 text-xs">2023-Presente</span>
                          <div>
                            <div className="text-white font-semibold text-sm">Desarrollador Full-Stack</div>
                            <div className="text-xs text-slate-400">Desarrollo de dashboards y plataformas educativas.</div>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <span className="text-slate-500 w-28 shrink-0 text-xs">2021-2023</span>
                          <div>
                            <div className="text-slate-300 text-sm">Proyectos Freelance</div>
                            <div className="text-xs text-slate-500">Soluciones web personalizadas para diversos clientes.</div>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <span className="text-slate-600 w-28 shrink-0 text-xs">FORMACIÓN</span>
                          <div>
                            <div className="text-slate-400 text-sm">Ingeniería Civil en Informática</div>
                            <div className="text-xs text-slate-600">Especialización en desarrollo de software.</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <span className="text-tech-purple">➜</span> <span className="text-tech-accent">~</span>{' '}
                      <span className="animate-pulse">_</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack - Nuevo Diseño Grid */}
        <section id="stack" className="py-24 bg-gradient-to-b from-tech-dark via-slate-900 to-tech-dark relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-tech-accent rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[120px]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-tech-accent"></div>
                <i className="fa-solid fa-microchip text-tech-accent text-xl animate-pulse"></i>
                <h3 className="text-tech-accent font-mono text-xs tracking-[0.3em] uppercase">Arsenal Técnico</h3>
                <i className="fa-solid fa-microchip text-tech-accent text-xl animate-pulse"></i>
                <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-tech-accent"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                STACK <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-accent to-purple-400">TECNOLÓGICO</span>
              </h2>
              <p className="text-slate-400 font-mono text-sm max-w-2xl mx-auto">
                Herramientas y tecnologías que domino para construir soluciones escalables y robustas
              </p>
            </div>

            {/* Tech Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {techStack.map((tech, index) => {
                const Icon = tech.icon
                const isActive = activeTech === tech.name
                
                return (
                  <div
                    key={tech.name}
                    className={`tech-card group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg p-6 cursor-pointer transition-all duration-300 hover:border-tech-accent hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:-translate-y-2 ${
                      isActive ? 'border-tech-accent shadow-[0_0_20px_rgba(56,189,248,0.3)] -translate-y-2' : ''
                    }`}
                    onClick={() => toggleTech(tech.name)}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Corner Decorations */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-tech-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-tech-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    {/* Icon */}
                    <div className="flex flex-col items-center gap-3">
                      <div className={`text-5xl ${tech.color} transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_currentColor]`}>
                        <Icon />
                      </div>
                      
                      {/* Name */}
                      <h4 className="font-mono font-bold text-sm text-white text-center group-hover:text-tech-accent transition-colors">
                        {tech.name}
                      </h4>
                      
                      {/* Level Badge */}
                      <div className={`text-[9px] font-mono px-2 py-1 rounded border transition-all ${
                        isActive 
                          ? 'bg-tech-accent/20 border-tech-accent text-tech-accent' 
                          : 'bg-slate-800/50 border-slate-700 text-slate-400 group-hover:border-tech-accent group-hover:text-tech-accent'
                      }`}>
                        {tech.level}
                      </div>
                      
                      {/* Category (visible on hover/active) */}
                      <div className={`text-[8px] font-mono text-slate-500 uppercase tracking-wider transition-opacity ${
                        isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`}>
                        {tech.category}
                      </div>
                    </div>

                    {/* Scan Line Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none overflow-hidden rounded-lg">
                      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-tech-accent to-transparent animate-[scan_2s_linear_infinite]"></div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Stats Bar */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-lg">
                <div className="text-3xl font-black text-tech-accent mb-1">{techStack.length}</div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Tecnologías</div>
              </div>
              <div className="text-center p-4 bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-lg">
                <div className="text-3xl font-black text-tech-accent mb-1">{techStack.filter(t => t.level === 'Experto').length}</div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Experto</div>
              </div>
              <div className="text-center p-4 bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-lg">
                <div className="text-3xl font-black text-tech-accent mb-1">{techStack.filter(t => t.level === 'Avanzado').length}</div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Avanzado</div>
              </div>
              <div className="text-center p-4 bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-lg">
                <div className="text-3xl font-black text-tech-accent mb-1">{techStack.filter(t => t.level === 'Intermedio').length}</div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Intermedio</div>
              </div>
            </div>
          </div>
        </section>

        {/* === NUEVA SECCIÓN: PROYECTOS "MISSION LOGS" === */}
        <section id="projects" className="py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-tech-900/20 to-transparent pointer-events-none"></div>
          <div className="absolute top-20 right-20 text-[10rem] font-black text-white/5 font-mono select-none pointer-events-none">LOGS</div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-tech-accent/30 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <i className="fa-solid fa-satellite-dish text-tech-accent animate-pulse"></i>
                  <h2 className="text-xs font-mono text-tech-accent tracking-widest uppercase">Base de Datos</h2>
                </div>
                <h2 className="text-4xl font-black text-white">
                  PROTOCOLOS{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-accent to-white">ACTIVOS</span>
                </h2>
              </div>

              <div className="flex gap-2 mt-4 md:mt-0 bg-slate-900/80 p-1 rounded border border-slate-700">
                <button
                  type="button"
                  onClick={() => setProjectView('grid')}
                  id="btn-grid"
                  className={`px-4 py-2 rounded text-xs font-mono font-bold transition-all flex items-center gap-2 ${
                    projectView === 'grid'
                      ? 'bg-tech-600 text-white shadow-lg shadow-tech-500/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <i className="fa-solid fa-border-all"></i> GRID_VIEW
                </button>
                <button
                  type="button"
                  onClick={() => setProjectView('list')}
                  id="btn-list"
                  className={`px-4 py-2 rounded text-xs font-mono font-bold transition-all flex items-center gap-2 ${
                    projectView === 'list'
                      ? 'bg-tech-600 text-white shadow-lg shadow-tech-500/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <i className="fa-solid fa-list"></i> DATA_LIST
                </button>
              </div>
            </div>

            <div
              id="projects-container"
              className={
                projectView === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500'
                  : 'flex flex-col gap-4 transition-all duration-500 max-w-4xl mx-auto'
              }
            >
              {projects.map((p) => {
                const cardClass =
                  projectView === 'grid' ? 'project-card cyber-card group' : 'project-card cyber-card group flex items-center'
                const contentClass =
                  projectView === 'grid' ? 'p-6 relative' : 'p-4 flex-1 flex items-center justify-between flex-wrap gap-4 relative'

                return (
                  <div key={p.id} className={cardClass}>
                    {projectView === 'grid' ? (
                      <div className="project-image h-56 bg-slate-900 relative overflow-hidden border-b border-tech-accent/20">
                        <div className="scan-line animate-scanline" style={p.scanDelay ? { animationDelay: p.scanDelay } : undefined}></div>

                        <div className="w-full h-full flex items-center justify-center text-slate-700 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 to-slate-900">
                          <i
                            className={`fa-solid ${p.icon} text-7xl text-slate-600 group-hover:text-tech-accent transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]`}
                          ></i>
                        </div>

                        <div className="absolute top-0 left-0 p-3 w-full flex justify-between items-start z-20">
                          <span className="bg-black/70 backdrop-blur text-[10px] font-mono px-2 py-1 text-tech-accent border border-tech-accent/50">
                            ID: {p.id}
                          </span>
                          <div className="flex gap-1">
                            {p.statusPing ? <div className="w-1 h-1 bg-tech-accent rounded-full animate-ping"></div> : null}
                            <span className={p.overlayRightClass}>{p.overlayRightText}</span>
                          </div>
                        </div>
                      </div>
                    ) : null}

                    <div className={contentClass}>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-tech-accent transition-colors">{p.title}</h3>
                        <p className="text-slate-400 text-xs font-mono mb-4 leading-relaxed border-l-2 border-slate-700 pl-3">
                          {p.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {p.tags.map((tag) => (
                            <span key={`${p.id}-${tag.label}`} className={tag.className}>
                              {tag.label}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-auto">
                        <div className="text-[10px] text-slate-500 font-mono">{p.meta}</div>
                        <a
                          href="#"
                          className="text-xs font-bold text-white bg-tech-600 hover:bg-tech-500 px-4 py-2 clip-path-polygon transition-all flex items-center gap-2"
                        >
                          ACCEDER <i className="fa-solid fa-chevron-right text-[10px]"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* === NUEVA SECCIÓN: CONTACTO "NEURAL UPLINK" === */}
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

                <form onSubmit={onSubmitContact} className="space-y-8">
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

        <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-800 bg-black">
          <p>© 2026 Edward Mathias Contreras. Todos los derechos reservados.</p>
          <div className="mt-2 text-xs font-mono">Built with React + TypeScript + Tailwind CSS + Vite</div>
        </footer>
      </div>
    </>
  )
}

export default App
