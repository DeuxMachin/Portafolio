"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs"
import { SkillsGrid } from "./skills/skills-grid"
import { useLanguage } from "../context/LanguageContext"

// Definición de tipos
interface Skill {
  name: string
  level: number
  color: string
  category: "frontend" | "backend" | "tools" | "design"
  logo: string
}

export default function TechStackSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])

  const [activeCategory, setActiveCategory] = useState<"all" | "frontend" | "backend" | "tools" | "design">("all")

  const { t } = useLanguage()

  const skills: Skill[] = [
    {
      name: "React",
      level: 80,
      color: "#61DAFB",
      category: "frontend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "React Native",
      level: 85,
      color: "#61DAFB",
      category: "frontend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "TypeScript",
      level: 85,
      color: "#3178C6",
      category: "frontend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "HTML5",
      level: 95,
      color: "#E34F26",
      category: "frontend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      level: 90,
      color: "#1572B6",
      category: "frontend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Flutter",
      level: 75,
      color: "#02569B",
      category: "frontend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
      name: "Python",
      level: 85,
      color: "#3776AB",
      category: "backend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "R",
      level: 80,
      color: "#276DC3",
      category: "backend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
    },
    {
      name: "SQL",
      level: 80,
      color: "#4479A1",
      category: "backend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "MySQL",
      level: 80,
      color: "#4479A1",
      category: "backend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Firebase",
      level: 75,
      color: "#FFCA28",
      category: "backend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "Git",
      level: 85,
      color: "#F05032",
      category: "tools",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      level: 85,
      color: "#181717",
      category: "tools",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Linux",
      level: 75,
      color: "#FCC624",
      category: "tools",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    }
  ]

  const filteredSkills = activeCategory === "all" ? skills : skills.filter((skill) => skill.category === activeCategory)

  return (
    <section id="tech" ref={sectionRef} className="relative py-20 overflow-hidden bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-900/95 z-0" />

      <motion.div style={{ y, opacity }} className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-3 py-1 bg-teal-500/10 backdrop-blur-sm rounded-full text-sm font-medium text-teal-400 mb-6">
              {t('mySkills')}
            </div>
            <h2 className="text-4xl font-bold mb-4 text-white">{t('techStack')}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-400 mx-auto mt-4"></div>
          </motion.div>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={(value) => setActiveCategory(value as any)}>
          <div className="flex justify-center mb-12">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 bg-gray-800/50 backdrop-blur-sm">
              <TabsTrigger value="all" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">
                {t('all')}
              </TabsTrigger>
              <TabsTrigger value="frontend" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">
                {t('frontend')}
              </TabsTrigger>
              <TabsTrigger value="backend" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">
                {t('backend')}
              </TabsTrigger>
              <TabsTrigger value="tools" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">
                {t('tools')}
              </TabsTrigger>
              <TabsTrigger value="design" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">
                {t('design')}
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <SkillsGrid skills={filteredSkills} />
          </TabsContent>
          <TabsContent value="frontend" className="mt-0">
            <SkillsGrid skills={filteredSkills} />
          </TabsContent>
          <TabsContent value="backend" className="mt-0">
            <SkillsGrid skills={filteredSkills} />
          </TabsContent>
          <TabsContent value="tools" className="mt-0">
            <SkillsGrid skills={filteredSkills} />
          </TabsContent>
          <TabsContent value="design" className="mt-0">
            <SkillsGrid skills={filteredSkills} />
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center">
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm constantly learning and adding new technologies to my toolkit. My focus is on creating performant,
            accessible, and beautiful software solutions using the best tools for each specific project.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
