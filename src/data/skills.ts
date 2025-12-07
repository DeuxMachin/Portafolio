import type { Skill } from '../types';

export const skills: Skill[] = [
  // Languages
  {
    name: 'Python',
    icon: 'python',
    level: 'advanced',
    category: 'languages',
  },
  {
    name: 'TypeScript',
    icon: 'typescript',
    level: 'advanced',
    category: 'languages',
  },
  {
    name: 'JavaScript',
    icon: 'javascript',
    level: 'advanced',
    category: 'languages',
  },
  {
    name: 'R',
    icon: 'r',
    level: 'advanced',
    category: 'languages',
  },
  {
    name: 'Dart',
    icon: 'dart',
    level: 'beginner',
    category: 'languages',
  },
  // Frameworks & Tools
  {
    name: 'React',
    icon: 'react',
    level: 'advanced',
    category: 'frameworks',
  },
  {
    name: 'React Native',
    icon: 'reactnative',
    level: 'intermediate',
    category: 'frameworks',
  },
  {
    name: 'Node.js',
    icon: 'nodejs',
    level: 'advanced',
    category: 'frameworks',
  },
  {
    name: 'Next.js',
    icon: 'nextjs',
    level: 'advanced',
    category: 'frameworks',
  },
  {
    name: 'Flask',
    icon: 'flask',
    level: 'advanced',
    category: 'frameworks',
  },
  {
    name: 'Tailwind CSS',
    icon: 'tailwind',
    level: 'advanced',
    category: 'frameworks',
  },
  {
    name: 'Vite',
    icon: 'vite',
    level: 'advanced',
    category: 'frameworks',
  },
  // Databases & Data Tools
  {
    name: 'MySQL',
    icon: 'mysql',
    level: 'advanced',
    category: 'database',
  },
  {
    name: 'SQL Server',
    icon: 'sqlserver',
    level: 'intermediate',
    category: 'database',
  },
  {
    name: 'PostgreSQL',
    icon: 'postgresql',
    level: 'advanced',
    category: 'database',
  },
  {
    name: 'Anaconda',
    icon: 'anaconda',
    level: 'advanced',
    category: 'database',
  },
  {
    name: 'Firebase',
    icon: 'firebase',
    level: 'beginner',
    category: 'database',
  },
  {
    name: 'Supabase',
    icon: 'supabase',
    level: 'advanced',
    category: 'database',
  },
  {
    name: 'Conda',
    icon: 'conda',
    level: 'advanced',
    category: 'database',
  },
  // Other Tools
  {
    name: 'Git',
    icon: 'git',
    level: 'advanced',
    category: 'tools',
  },
  {
    name: 'GitHub',
    icon: 'github',
    level: 'expert',
    category: 'tools',
  },
  {
    name: 'Linux',
    icon: 'linux',
    level: 'intermediate',
    category: 'tools',
  },
  {
    name: 'WSL',
    icon: 'wsl',
    level: 'advanced',
    category: 'tools',
  },
  {
    name: 'PowerBI',
    icon: 'powerbi',
    level: 'intermediate',
    category: 'tools',
  },
];

export const skillCategories = [
  { id: 'languages', name: 'Lenguajes', icon: '💻' },
  { id: 'frameworks', name: 'Frameworks', icon: '🚀' },
  { id: 'database', name: 'Bases de Datos', icon: '🗄️' },
  { id: 'tools', name: 'Herramientas', icon: '🛠️' },
];
