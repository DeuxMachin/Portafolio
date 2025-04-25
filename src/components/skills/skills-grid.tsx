import { SkillCard } from "./skill-card"

interface Skill {
  name: string
  level: number
  color: string
  category: "frontend" | "backend" | "tools" | "design"
  logo: string
}

interface SkillsGridProps {
  skills: Skill[]
}

export function SkillsGrid({ skills }: SkillsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <SkillCard
          key={skill.name}
          name={skill.name}
          level={skill.level}
          color={skill.color}
          category={skill.category}
          logo={skill.logo}
          index={index}
        />
      ))}
    </div>
  )
}