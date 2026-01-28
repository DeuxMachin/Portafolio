import { Navbar } from '../../../widgets/navbar/ui/Navbar'
import { HeroSection } from '../../../widgets/hero/ui/HeroSection'
import { ProjectsSection } from '../../../widgets/projects/ui/ProjectsSection'
import { AboutSection } from '../../../widgets/about/ui/AboutSection'
import { ContactSection } from '../../../widgets/contact/ui/ContactSection'
import { Footer } from '../../../widgets/footer/ui/Footer'
import { projects } from '../model/projects'

export function PortfolioPage() {
  return (
    <div id="main-content" className="min-h-screen" role="main">
      <Navbar />

      <HeroSection />

      <ProjectsSection projects={projects} />

      <AboutSection />

      <ContactSection />

      <Footer />
    </div>
  )
}
