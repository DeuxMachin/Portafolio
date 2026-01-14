import { Gate } from '../../../widgets/gate/ui/Gate'
import { Navbar } from '../../../widgets/navbar/ui/Navbar'
import { HeroSection } from '../../../widgets/hero/ui/HeroSection'
import { AboutSection } from '../../../widgets/about/ui/AboutSection'
import { TechStackSection } from '../../../widgets/tech-stack/ui/TechStackSection'
import { ProjectsSection } from '../../../widgets/projects/ui/ProjectsSection'
import { ContactSection } from '../../../widgets/contact/ui/ContactSection'
import { Footer } from '../../../widgets/footer/ui/Footer'
import { projects } from '../model/projects'
import { techStack } from '../model/techStack'
import { usePortfolioState } from '../model/usePortfolioState'

export function PortfolioPage() {
  const {
    hasEntered,
    isTerminalMode,
    projectView,
    activeTech,
    enterSystem,
    toggleTerminalMode,
    setProjectView,
    toggleTech,
    onSubmitContact,
  } = usePortfolioState()

  return (
    <>
      <Gate hasEntered={hasEntered} onEnter={enterSystem} />

      <div
        id="main-content"
        className={`min-h-screen transition-opacity duration-1000 delay-700 relative ${hasEntered ? 'opacity-100' : 'opacity-0'}`}
      >
        <Navbar isTerminalMode={isTerminalMode} onToggleTerminalMode={toggleTerminalMode} />

        <HeroSection />
        <AboutSection />

        <TechStackSection techStack={techStack} activeTech={activeTech} onToggleTech={toggleTech} />

        <ProjectsSection projects={projects} projectView={projectView} onChangeView={setProjectView} />

        <ContactSection onSubmit={onSubmitContact} />

        <Footer />
      </div>
    </>
  )
}
