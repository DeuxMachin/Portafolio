import { FaDownload, FaCode, FaRocket, FaLightbulb } from 'react-icons/fa'
import { about } from '../../../pages/portfolio/model/about'

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-tech-dark via-slate-950 to-tech-dark relative overflow-hidden scroll-mt-24">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-tech-neon rounded-full blur-[110px]"></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-tech-accent rounded-full blur-[110px]"></div>
      </div>

      {/* Animated Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent via-tech-neon/40 to-transparent"></div>
        <div className="absolute bottom-0 left-1/3 w-[1px] h-32 bg-gradient-to-t from-transparent via-tech-accent/30 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-tech-neon"></div>
            <i className="fa-solid fa-user-astronaut text-tech-neon text-xl animate-pulse"></i>
            <h3 className="text-tech-neon font-mono text-xs tracking-[0.3em] uppercase">Sobre Mí</h3>
            <i className="fa-solid fa-user-astronaut text-tech-neon text-xl animate-pulse"></i>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-tech-neon"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {about.greeting} SOY{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-neon to-tech-accent">EDWARD</span>
          </h2>
          <p className="text-slate-400 font-mono text-sm max-w-2xl mx-auto">
            {about.shortBio}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Main Content Card */}
          <div className="lg:col-span-3 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-tech-neon/15 via-tech-accent/10 to-tech-neon/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="relative bg-slate-900/70 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 hover:border-tech-neon/40 transition-all duration-300">
              {/* Corner Decorations */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-tech-neon/70 opacity-70"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-tech-neon/70 opacity-70"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-tech-neon/70 opacity-70"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-tech-neon/70 opacity-70"></div>

              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-700/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-slate-500 font-mono text-xs ml-2">~/about-me/historia.md</span>
              </div>

              {/* Title with animated underline */}
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">{about.name}</h3>
                <div className="relative inline-block mt-2">
                  <span className="text-tech-accent font-mono text-sm">{about.headline}</span>
                  <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-tech-accent to-transparent"></div>
                </div>
              </div>

              {/* Paragraphs with nice styling */}
              <div className="space-y-4 text-slate-300 leading-relaxed">
                {about.paragraphs.map((text, index) => (
                  <div key={text} className="flex gap-3 group/p">
                    <span className="text-tech-accent font-mono text-sm opacity-50 group-hover/p:opacity-100 transition-opacity mt-1">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="flex-1">{text}</p>
                  </div>
                ))}
              </div>

              {/* Download CV Button */}
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={about.cv.href}
                  download={about.cv.downloadFileName}
                  className="group/btn inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-tech-accent to-tech-600 text-white font-bold px-6 py-3.5 hover:from-tech-accent hover:to-tech-500 transition-all duration-300 shadow-lg shadow-tech-accent/20 hover:shadow-tech-accent/30 hover:-translate-y-0.5"
                >
                  <FaDownload className="group-hover/btn:animate-bounce" />
                  <span>Descargar mi CV</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 rounded-xl border-2 border-slate-600 text-slate-300 font-bold px-6 py-3.5 hover:border-emerald-500 hover:text-emerald-400 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span>Hablemos</span>
                  <span className="text-lg">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Side Cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* Highlights Cards */}
            {about.highlights.map((item, i) => {
              const icons = [FaCode, FaRocket, FaLightbulb]
              const Icon = icons[i % icons.length]
              return (
                <div
                  key={item.label}
                  className="group relative bg-slate-900/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-tech-accent/40 transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-tech-accent/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-tech-accent/10 border border-tech-accent/30 text-tech-accent group-hover:bg-tech-accent/15 transition-colors">
                      <Icon className="text-xl" />
                    </div>
                    <div>
                      <div className="text-slate-500 font-mono text-xs uppercase tracking-wider mb-1">{item.label}</div>
                      <div className="text-white font-bold text-lg">{item.value}</div>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Fun Fact Card */}
            <div className="relative bg-gradient-to-br from-tech-accent/10 via-slate-900/60 to-tech-neon/10 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="absolute top-2 right-2 text-2xl">💡</div>
              <h4 className="text-tech-accent font-mono text-xs uppercase tracking-wider mb-2">Fun Fact</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Creo que las mejores soluciones nacen cuando combinamos creatividad con lógica.
                Por eso disfruto tanto programar — es como resolver puzzles infinitos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
