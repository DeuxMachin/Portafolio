import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold">
              <span className="text-white">Portfolio</span>
              <span className="text-teal-400">Dev</span>
            </div>
            <p className="text-gray-400 mt-2">{t('buildingWeb')}</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <a href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://twitter.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="mailto:your.email@example.com" 
                className="text-gray-400 hover:text-teal-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Edward Contreras. {t('allRightsReserved')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
