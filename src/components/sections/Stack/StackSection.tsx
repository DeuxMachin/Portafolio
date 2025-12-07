import { useState } from 'react';
import { Card } from '../../ui/Card';
import { skills, skillCategories } from '../../../data/skills';
import type { Skill } from '../../../types';
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiR,
  SiDart,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiFlask,
  SiTailwindcss,
  SiVite,
  SiMysql,
  SiPostgresql,
  SiAnaconda,
  SiFirebase,
  SiSupabase,
  SiCondaforge,
  SiGit,
  SiGithub,
  SiLinux,
} from 'react-icons/si';

// Skill level indicator
function SkillLevel({ level }: { level: Skill['level'] }) {
  const levels = {
    beginner: { bars: 1, color: 'bg-[#F5C6D6]' },
    intermediate: { bars: 2, color: 'bg-[#FFDAB9]' },
    advanced: { bars: 3, color: 'bg-[#B4D4E7]' },
    expert: { bars: 4, color: 'bg-[#A8E6CF]' },
  };

  const { bars, color } = levels[level];

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full ${
            i <= bars ? color : 'bg-[#3A4050]'
          }`}
        ></div>
      ))}
    </div>
  );
}

// Tech icon with real technology icons
function TechIcon({ name }: { name: string }) {
  const iconKey = name.toLowerCase().replace(/[.\s]/g, '');
  
  const iconMap: Record<string, React.ReactElement> = {
    python: <SiPython className="w-6 h-6" />,
    typescript: <SiTypescript className="w-6 h-6" />,
    javascript: <SiJavascript className="w-6 h-6" />,
    r: <SiR className="w-6 h-6" />,
    dart: <SiDart className="w-6 h-6" />,
    react: <SiReact className="w-6 h-6" />,
    reactnative: <SiReact className="w-6 h-6" />,
    nodejs: <SiNodedotjs className="w-6 h-6" />,
    nextjs: <SiNextdotjs className="w-6 h-6" />,
    flask: <SiFlask className="w-6 h-6" />,
    tailwind: <SiTailwindcss className="w-6 h-6" />,
    vite: <SiVite className="w-6 h-6" />,
    mysql: <SiMysql className="w-6 h-6" />,
    postgresql: <SiPostgresql className="w-6 h-6" />,
    anaconda: <SiAnaconda className="w-6 h-6" />,
    firebase: <SiFirebase className="w-6 h-6" />,
    supabase: <SiSupabase className="w-6 h-6" />,
    conda: <SiCondaforge className="w-6 h-6" />,
    git: <SiGit className="w-6 h-6" />,
    github: <SiGithub className="w-6 h-6" />,
    linux: <SiLinux className="w-6 h-6" />,
    wsl: <SiLinux className="w-6 h-6" />,
  };

  const icon = iconMap[iconKey];
  
  if (icon) {
    return (
      <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
        {icon}
      </div>
    );
  }

  // Fallback for icons not yet implemented
  const fallbackColors: Record<string, string> = {
    markdown: 'bg-[#083FA1]',
    latex: 'bg-[#008080]',
    reactnative: 'bg-[#61DAFB]',
    nextjs: 'bg-[#000000]',
    flask: 'bg-[#000000]',
    tailwind: 'bg-[#06B6D4]',
    vite: 'bg-[#646CFF]',
    mysql: 'bg-[#4479A1]',
    sqlserver: 'bg-[#CC2927]',
    anaconda: 'bg-[#44A833]',
    firebase: 'bg-[#FFCA28]',
    supabase: 'bg-[#3ECF8E]',
    conda: 'bg-[#44A833]',
    github: 'bg-[#181717]',
    powershell: 'bg-[#5391FE]',
    linux: 'bg-[#FCC624]',
    wsl: 'bg-[#B4D4E7]',
    postgresql: 'bg-[#336791]',
    powerbi: 'bg-[#F2C811]',
  };

  return (
    <div
      className={`w-10 h-10 rounded-xl ${
        fallbackColors[iconKey] || 'bg-[#A8E6CF]'
      } flex items-center justify-center text-white text-xs font-bold shadow-lg hover:scale-110 transition-transform`}
    >
      {name.slice(0, 2).toUpperCase()}
    </div>
  );
}

export function StackSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredSkills = activeCategory
    ? skills.filter((skill) => skill.category === activeCategory)
    : skills;

  return (
    <section id="stack" className="py-24 bg-[#161B22] relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#A8E6CF] font-mono text-sm tracking-wider">
            // TECNOLOGÍAS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F8F9FA] mt-2">
            Mi Stack Tecnológico
          </h2>
          <div className="w-20 h-1 bg-[#A8E6CF] mx-auto mt-4 rounded-full"></div>
          <p className="text-[#7A8090] mt-4 max-w-2xl mx-auto">
            Herramientas y tecnologías que utilizo para construir soluciones
            digitales robustas y escalables.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeCategory === null
                ? 'bg-[#A8E6CF] text-[#1A1D23]'
                : 'bg-[#2A2F3A] text-[#B8BCC8] hover:bg-[#2E333D]'
            }`}
          >
            Todas
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-[#A8E6CF] text-[#1A1D23]'
                  : 'bg-[#2A2F3A] text-[#B8BCC8] hover:bg-[#2E333D]'
              }`}
            >
              <span>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill, index) => (
            <Card
              key={skill.name}
              className="p-4 text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` } as React.CSSProperties}
            >
              <div className="flex flex-col items-center gap-3">
                <TechIcon name={skill.icon} />
                <div>
                  <h4 className="text-[#F8F9FA] font-medium text-sm group-hover:text-[#A8E6CF] transition-colors">
                    {skill.name}
                  </h4>
                  <div className="mt-2 flex justify-center">
                    <SkillLevel level={skill.level} />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-[#7A8090]">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-[#F5C6D6]"></div>
            </div>
            <span>Principiante</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-[#FFDAB9]"></div>
              <div className="w-2 h-2 rounded-full bg-[#FFDAB9]"></div>
            </div>
            <span>Intermedio</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-[#B4D4E7]"></div>
              <div className="w-2 h-2 rounded-full bg-[#B4D4E7]"></div>
              <div className="w-2 h-2 rounded-full bg-[#B4D4E7]"></div>
            </div>
            <span>Avanzado</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-[#A8E6CF]"></div>
              <div className="w-2 h-2 rounded-full bg-[#A8E6CF]"></div>
              <div className="w-2 h-2 rounded-full bg-[#A8E6CF]"></div>
              <div className="w-2 h-2 rounded-full bg-[#A8E6CF]"></div>
            </div>
            <span>Experto</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StackSection;
