import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/navbar';
import Home from './Home';
import AboutSection from './components/about-section';
import TechStackSection from './components/tech-stack-section';
import ProjectsSection from './components/projects-section';
import ContactSection from './components/contact-section';
import Footer from './components/footer';

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    setTimeout(() => {
      if (window.location.hash) {
        window.location.hash = '';
      }
    }, 0);
  }, []);

  return (
    <Router>
      <div className="min-h-screen text-white relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;