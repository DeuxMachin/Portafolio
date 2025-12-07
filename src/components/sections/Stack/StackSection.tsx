import React, { useState } from 'react';
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

// Skill level indicator with a single flowing bar for a sleeker look
function SkillLevel({ level }: { level: Skill['level'] }) {
  const levels = {
    beginner: { value: 1, label: 'Principiante', color: 'from-[#ffb4b4] to-[#ff8f70]' },
    intermediate: { value: 2, label: 'Intermedio', color: 'from-[#ffd891] to-[#f6c95f]' },
    advanced: { value: 3, label: 'Avanzado', color: 'from-[#b6e3ff] to-[#77c7ff]' },
    expert: { value: 4, label: 'Experto', color: 'from-[#a8e6cf] to-[#5ce0a3]' },
  };

  const config = levels[level];
  const width = `${(config.value / 4) * 100}%`;

  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-2 rounded-full bg-[#1c2230] overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${config.color}`}
          style={{ width }}
        ></div>
      </div>
      <span className="text-[11px] text-[#AAB1C5] whitespace-nowrap">{config.label}</span>
    </div>
  );
}

type IconSize = 'sm' | 'md' | 'lg';

// Tech icon with sizing options so the layout can mix sizes
function TechIcon({ name, size = 'md' }: { name: string; size?: IconSize }) {
  const iconKey = name.toLowerCase().replace(/[.\s]/g, '');

  const dims: Record<IconSize, { wrap: string; icon: string }> = {
    sm: { wrap: 'w-8 h-8', icon: 'w-5 h-5' },
    md: { wrap: 'w-10 h-10', icon: 'w-6 h-6' },
    lg: { wrap: 'w-12 h-12', icon: 'w-7 h-7' },
  };

  const iconMap: Record<string, React.ReactElement> = {
    python: <SiPython className={dims[size].icon} />,
    typescript: <SiTypescript className={dims[size].icon} />,
    javascript: <SiJavascript className={dims[size].icon} />,
    r: <SiR className={dims[size].icon} />,
    dart: <SiDart className={dims[size].icon} />,
    react: <SiReact className={dims[size].icon} />,
    reactnative: <SiReact className={dims[size].icon} />,
    nodejs: <SiNodedotjs className={dims[size].icon} />,
    nextjs: <SiNextdotjs className={dims[size].icon} />,
    flask: <SiFlask className={dims[size].icon} />,
    tailwind: <SiTailwindcss className={dims[size].icon} />,
    vite: <SiVite className={dims[size].icon} />,
    mysql: <SiMysql className={dims[size].icon} />,
    postgresql: <SiPostgresql className={dims[size].icon} />,
    anaconda: <SiAnaconda className={dims[size].icon} />,
    firebase: <SiFirebase className={dims[size].icon} />,
    supabase: <SiSupabase className={dims[size].icon} />,
    conda: <SiCondaforge className={dims[size].icon} />,
    git: <SiGit className={dims[size].icon} />,
    github: <SiGithub className={dims[size].icon} />,
    linux: <SiLinux className={dims[size].icon} />,
    wsl: <SiLinux className={dims[size].icon} />,
  };

  const icon = iconMap[iconKey];

  if (icon) {
    return (
      <div
        className={`${dims[size].wrap} rounded-xl bg-[#101522] flex items-center justify-center border border-[#1f2635] shadow-[0_10px_40px_rgba(0,0,0,0.35)]`}
      >
        {icon}
      </div>
    );
  }

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
      className={`${dims[size].wrap} rounded-xl ${
        fallbackColors[iconKey] || 'bg-[#A8E6CF]'
      } flex items-center justify-center text-white text-xs font-bold shadow-[0_10px_40px_rgba(0,0,0,0.35)]`}
    >
      {name.slice(0, 2).toUpperCase()}
    </div>
  );
}

function LevelPill({ level }: { level: Skill['level'] }) {
  const map: Record<Skill['level'], string> = {
    beginner: 'bg-white/5 text-[#ffd0d0] border border-white/10',
    intermediate: 'bg-white/5 text-[#ffd891] border border-white/10',
    advanced: 'bg-white/5 text-[#9ed4ff] border border-white/10',
    expert: 'bg-white/5 text-[#b2f5dc] border border-white/10',
  };
  const label: Record<Skill['level'], string> = {
    beginner: 'Principiante',
    intermediate: 'Intermedio',
    advanced: 'Avanzado',
    expert: 'Experto',
  };
  return <span className={`px-2.5 py-1 rounded-full text-[11px] ${map[level]}`}>{label[level]}</span>;
}

export function StackSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const baseList = activeCategory
    ? skills.filter((skill) => skill.category === activeCategory)
    : skills;

  const featuredOrder = ['Python', 'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Supabase'];
  const featuredSkills = featuredOrder
    .map((name) => baseList.find((s) => s.name === name))
    .filter(Boolean) as Skill[];

  const toolkitSkills = baseList.filter((s) => !featuredOrder.includes(s.name));

  const categoryCounts = skillCategories.reduce<Record<string, number>>((acc, cat) => {
    acc[cat.id] = skills.filter((s) => s.category === cat.id).length;
    return acc;
  }, {});

  const categoryLabel = Object.fromEntries(skillCategories.map((c) => [c.id, c.name]));

  const groupedToolkit = toolkitSkills.reduce<Record<string, Skill[]>>((acc, skill) => {
    const key = skill.category;
    acc[key] = acc[key] ? [...acc[key], skill] : [skill];
    return acc;
  }, {});

  return (
    <section id="stack" className="py-24 bg-[#0B0F1A] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -left-10 top-16 w-72 h-72 bg-[#A8E6CF]/15 blur-3xl rounded-full"></div>
        <div className="absolute right-10 bottom-10 w-96 h-96 bg-[#7aa4ff]/10 blur-3xl rounded-full"></div>
        <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-[#A8E6CF]/40 to-transparent opacity-50"></div>
      </div>

      <div className="section-container relative z-10 space-y-10">
        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-6 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-[#A8E6CF]">
              <span>Tech radar personal</span>
              <span className="w-2 h-2 rounded-full bg-[#A8E6CF] animate-pulse"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Stack listo para producción</h2>
            <p className="text-[#AAB1C5] max-w-2xl">
              Tecnologías que uso de forma recurrente para shipping rápido, mantenible y con observabilidad.
              Curado para productos web, mobile y data.
            </p>
            <div className="flex flex-wrap gap-2">
              {['DX-friendly', 'SSR/ISR ready', 'Data-driven', 'Shipping rápido'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-xs text-[#C5CBE0] border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-[#0f1524] via-[#0f1b2f] to-[#111c30] border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.45)] p-5 space-y-4">
            <div className="flex items-center justify-between text-sm text-[#C5CBE0]">
              <span className="uppercase tracking-[0.08em] text-[11px] text-[#7AA4FF]">Comfort zone</span>
              <span className="text-xs text-[#A8E6CF]">Prod-ready</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {featuredSkills.slice(0, 4).map((skill) => (
                <div key={skill.name} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <TechIcon name={skill.icon} size="sm" />
                  <div>
                    <p className="text-sm text-white font-semibold">{skill.name}</p>
                    <LevelPill level={skill.level} />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 text-xs text-[#94A2C7]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#A8E6CF]/70"></span>
              <p>Stack actual, seleccionado por velocidad de entrega y comunidad.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all border backdrop-blur ${
              activeCategory === null
                ? 'bg-[#A8E6CF] text-[#0B0F1A] border-transparent shadow-lg shadow-[#A8E6CF]/30'
                : 'bg-white/5 text-[#C5CBE0] border-white/10 hover:border-white/20'
            }`}
          >
            Todo el stack
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 border backdrop-blur ${
                activeCategory === category.id
                  ? 'bg-[#A8E6CF] text-[#0B0F1A] border-transparent shadow-lg shadow-[#A8E6CF]/30'
                  : 'bg-white/5 text-[#C5CBE0] border-white/10 hover:border-white/20'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
              <span className="text-[11px] opacity-70">{categoryCounts[category.id] ?? 0}</span>
            </button>
          ))}
        </div>

        <div className="grid xl:grid-cols-[1.4fr_1fr] gap-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm text-[#7AA4FF] uppercase tracking-[0.08em]">
              <span>Destacados</span>
              <span className="text-[#C5CBE0] normal-case text-xs">Tech que uso para el core</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {featuredSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#111829] via-[#0f1524] to-[#0d1220] border border-white/10 p-4 shadow-[0_14px_60px_rgba(0,0,0,0.35)]"
                  style={{ animationDelay: `${index * 40}ms` } as React.CSSProperties}
                >
                  <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_20%_20%,rgba(168,230,207,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(122,164,255,0.18),transparent_30%)]"></div>
                  <div className="relative flex items-start gap-3">
                    <TechIcon name={skill.icon} size="lg" />
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-white font-semibold text-lg">{skill.name}</p>
                        <LevelPill level={skill.level} />
                      </div>
                      <p className="text-xs text-[#AAB1C5] capitalize">{categoryLabel[skill.category] || skill.category}</p>
                      <SkillLevel level={skill.level} />
                      <div className="flex flex-wrap gap-2 text-[11px] text-[#C5CBE0]">
                        <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">Focus</span>
                        <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">Prod</span>
                        <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">Docs</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-4 space-y-4 shadow-[0_18px_70px_rgba(0,0,0,0.35)]">
            <div className="flex items-center justify-between text-sm text-[#AAB1C5]">
              <span className="text-[#7AA4FF] uppercase tracking-[0.1em] text-[11px]">Niveles</span>
              <span className="text-xs text-[#C5CBE0]">Auto-reportado</span>
            </div>
            {(['expert', 'advanced', 'intermediate', 'beginner'] as Skill['level'][]).map((lvl) => (
              <div key={lvl} className="flex items-center gap-3">
                <LevelPill level={lvl} />
                <div className="flex-1 h-1 rounded-full bg-[#1c2230] overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${
                      lvl === 'expert'
                        ? 'from-[#a8e6cf] to-[#7aeac4]'
                        : lvl === 'advanced'
                        ? 'from-[#b6e3ff] to-[#77c7ff]'
                        : lvl === 'intermediate'
                        ? 'from-[#ffd891] to-[#f6c95f]'
                        : 'from-[#ffb4b4] to-[#ff8f70]'
                    }`}
                  ></div>
                </div>
              </div>
            ))}
            <p className="text-xs text-[#8A93AD]">
              Niveles basados en horas en producción, resolución de bugs y velocidad para shipping.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_70px_rgba(0,0,0,0.35)]">
          <div className="flex items-center justify-between text-sm text-[#7AA4FF] uppercase tracking-[0.08em] mb-4">
            <span>Catálogo completo</span>
            <span className="text-[#C5CBE0] normal-case text-xs">Agrupado por categoría seleccionada</span>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {Object.entries(groupedToolkit).map(([category, list]) => (
              <div key={category} className="rounded-xl bg-[#0f1524] border border-white/10 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <span className="text-lg">{skillCategories.find((c) => c.id === category)?.icon}</span>
                    <span>{categoryLabel[category] || category}</span>
                  </div>
                  <span className="text-xs text-[#AAB1C5]">{list.length} ítems</span>
                </div>
                <div className="space-y-2">
                  {list.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 border border-white/5"
                    >
                      <TechIcon name={skill.icon} size="sm" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-white font-semibold">{skill.name}</p>
                          <LevelPill level={skill.level} />
                        </div>
                        <SkillLevel level={skill.level} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StackSection;
