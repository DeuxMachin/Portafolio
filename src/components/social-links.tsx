import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      <a
        href="https://github.com/DeuxMachin"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-teal-400 transition-colors"
      >
        <Github size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/edward-contreras-aqueveque-8339b9360/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-teal-400 transition-colors"
      >
        <Linkedin size={24} />
      </a>

      <a
        href="mailto:mathias.contreras.a@gmail.com"
        className="text-gray-400 hover:text-teal-400 transition-colors"
      >
        <Mail size={24} />
      </a>
    </div>
  );
}

