import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/Hero';
import { AboutSection } from './components/sections/About';
import { StackSection } from './components/sections/Stack';
import { ProjectsSection } from './components/sections/Projects';
import { ReferencesSection } from './components/sections/References';
import { ContactSection } from './components/sections/Contact';

function App() {
  return (
    <div className="w-full min-h-screen bg-[#1A1D23] flex flex-col">
      <Navbar />
      <main className="flex-1 overflow-hidden">
        <HeroSection />
        <AboutSection />
        <StackSection />
        <ProjectsSection />
        <ReferencesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App
