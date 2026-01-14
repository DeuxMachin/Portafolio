import { useState, type FormEventHandler } from 'react'

type ContactSectionProps = {
  onSubmit: FormEventHandler<HTMLFormElement>
}

export function ContactSection({ onSubmit }: ContactSectionProps) {
  const [focusedField, setFocusedField] = useState<string | null>(null)

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tech-accent/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 mb-6">
            <i className="fa-solid fa-envelope text-tech-accent text-sm"></i>
            <span className="text-sm font-medium text-slate-300 tracking-wide">Contacto</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ¿Tienes un proyecto en <span className=" bg-clip-text from-tech-accent to-purple-400">mente</span>?
          </h2>
          <p className="text-slate-400 max-w-md mx-auto">
            Cuéntame sobre tu idea y trabajemos juntos para hacerla realidad.
          </p>
        </div>

        {/* Form Container */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-tech-accent/20 via-purple-500/20 to-tech-accent/20 rounded-2xl blur-xl opacity-10"></div>

          <div className="relative bg-slate-900/90 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 md:p-10">
            <form onSubmit={onSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-slate-300">
                    <i className="fa-solid fa-user text-slate-500 text-xs"></i>
                    Nombre
                  </label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-slate-800/50 border rounded-xl text-white placeholder-slate-500 text-sm transition-all duration-300 outline-none ${focusedField === 'name'
                      ? 'border-tech-accent ring-2 ring-tech-accent/20'
                      : 'border-slate-700 hover:border-slate-600'
                      }`}
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-slate-300">
                    <i className="fa-solid fa-at text-slate-500 text-xs"></i>
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    placeholder="correo@ejemplo.com"
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-slate-800/50 border rounded-xl text-white placeholder-slate-500 text-sm transition-all duration-300 outline-none ${focusedField === 'email'
                      ? 'border-tech-accent ring-2 ring-tech-accent/20'
                      : 'border-slate-700 hover:border-slate-600'
                      }`}
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-slate-300">
                  <i className="fa-solid fa-tag text-slate-500 text-xs"></i>
                  Asunto
                </label>
                <select
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 bg-slate-800/50 border rounded-xl text-white text-sm transition-all duration-300 outline-none appearance-none cursor-pointer ${focusedField === 'subject'
                    ? 'border-tech-accent ring-2 ring-tech-accent/20'
                    : 'border-slate-700 hover:border-slate-600'
                    }`}
                >
                  <option value="">Selecciona una opción</option>
                  <option value="work">Oportunidad laboral</option>
                  <option value="project">Proyecto freelance</option>
                  <option value="collab">Colaboración</option>
                  <option value="question">Consulta técnica</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-slate-300">
                  <i className="fa-solid fa-message text-slate-500 text-xs"></i>
                  Mensaje
                </label>
                <textarea
                  rows={5}
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 bg-slate-800/50 border rounded-xl text-white placeholder-slate-500 text-sm transition-all duration-300 outline-none resize-none ${focusedField === 'message'
                    ? 'border-tech-accent ring-2 ring-tech-accent/20'
                    : 'border-slate-700 hover:border-slate-600'
                    }`}
                ></textarea>
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                <p className="text-sm text-slate-500">
                  Respondo en menos de 24 horas
                </p>

                <button
                  type="submit"
                  className="group flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-tech-accent to-cyan-400 rounded-xl font-semibold text-slate-900 transition-all duration-300 hover:shadow-lg hover:shadow-tech-accent/25 hover:scale-[1.02]"
                >
                  <span>Enviar mensaje</span>
                  <i className="fa-solid fa-paper-plane group-hover:translate-x-1 transition-transform"></i>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 mb-4">O encuéntrame en</p>
          <div className="flex justify-center gap-4">
            {[
              { icon: 'fa-brands fa-github', label: 'GitHub', href: '#' },
              { icon: 'fa-brands fa-linkedin', label: 'LinkedIn', href: '#' },
              { icon: 'fa-brands fa-twitter', label: 'Twitter', href: '#' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex items-center justify-center w-11 h-11 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 transition-all duration-300 hover:border-tech-accent hover:text-tech-accent hover:scale-110"
              >
                <i className={`${social.icon} text-lg`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
