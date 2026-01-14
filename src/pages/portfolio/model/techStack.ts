import { FaChartBar, FaDocker, FaGitAlt, FaGithub, FaLinux, FaNodeJs, FaPython, FaReact } from 'react-icons/fa'
import { SiFirebase, SiFlask, SiJavascript, SiMysql, SiNextdotjs, SiSupabase, SiTailwindcss, SiTypescript, SiVite } from 'react-icons/si'
import type { Tech } from './types'

export const techStack: Tech[] = [
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
