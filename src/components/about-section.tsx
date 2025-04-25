"use client"

import React, { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Briefcase, GraduationCap, Heart, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Award } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { experienceData, educationData } from "../models/about-data"
import { useLanguage } from "../context/LanguageContext"

// Implementación simplificada de Tabs para evitar dependencias adicionales
const Tabs = ({ children, defaultValue, className = "" }) => {
  const [activeTab, setActiveTab] = useState(defaultValue)
  
  // Clonar children y pasar propiedades
  const getContent = () => {
    const childrenArray = React.Children.toArray(children)
    const tabsListArray = childrenArray.filter(child => child.type === TabsList)
    const tabsContentArray = childrenArray.filter(child => child.type === TabsContent)
    
    // Clonar TabsList y pasar valor activo
    const clonedTabsList = React.Children.map(tabsListArray, list => {
      return React.cloneElement(list, { 
        activeTab, 
        onChange: setActiveTab 
      })
    })
    
    // Encontrar contenido activo
    const activeContent = React.Children.toArray(tabsContentArray)
      .find(content => content.props.value === activeTab)
    
    return (
      <>
        {clonedTabsList}
        {activeContent}
      </>
    )
  }
  
  return (
    <div className={className}>
      {getContent()}
    </div>
  )
}

const TabsList = ({ children, activeTab, onChange, className = "" }) => {
  // Clonar children y pasar active state
  const clonedTriggers = React.Children.map(children, (child) => {
    return React.cloneElement(child, { 
      isActive: child.props.value === activeTab,
      onClick: () => onChange(child.props.value)
    })
  })
  
  return (
    <div className={`grid grid-cols-3 gap-2 ${className}`}>
      {clonedTriggers}
    </div>
  )
}

const TabsTrigger = ({ children, value, isActive, onClick, className = "" }) => {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${isActive ? 'bg-teal-500/10 text-teal-500' : 'text-gray-400 hover:text-teal-400'} 
                ${className}`}
    >
      {children}
    </button>
  )
}

const TabsContent = ({ children, value }) => {
  return <div>{children}</div>
}

export default function AboutSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])

  const [experiencePage, setExperiencePage] = useState(0)
  const [educationPage, setEducationPage] = useState(0)
  const [experience, setExperience] = useState(experienceData)
  const [education, setEducation] = useState(educationData)

  const itemsPerPage = 3
  const experiencePages = Math.ceil(experience.length / itemsPerPage)
  const educationPages = Math.ceil(education.length / itemsPerPage)

  const currentExperienceItems = experience.slice(
    experiencePage * itemsPerPage,
    (experiencePage + 1) * itemsPerPage,
  )

  const currentEducationItems = education.slice(
    educationPage * itemsPerPage,
    (educationPage + 1) * itemsPerPage,
  )

  const toggleExpand = (id: number, type: "experience" | "education") => {
    if (type === "experience") {
      setExperience(experience.map((item) => (item.id === id ? { ...item, expanded: !item.expanded } : item)))
    } else {
      setEducation(education.map((item) => (item.id === id ? { ...item, expanded: !item.expanded } : item)))
    }
  }

  const { t } = useLanguage()

  return (
    <section id="about" ref={sectionRef} className="relative py-20 overflow-hidden bg-gray-900">
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
              {t('aboutMe')}
            </div>
            <h2 className="text-4xl font-bold mb-4 text-white">{t('whoIAm')}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-400 mx-auto mt-4"></div>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="mb-12">
              <TabsTrigger value="about">
                <Heart className="mr-2 h-4 w-4" />
                {t('personal')}
              </TabsTrigger>
              <TabsTrigger value="experience">
                <Briefcase className="mr-2 h-4 w-4" />
                {t('experience')}
              </TabsTrigger>
              <TabsTrigger value="education">
                <GraduationCap className="mr-2 h-4 w-4" />
                {t('education')}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{t('myStory')}</h3>
                    <div className="space-y-4 text-gray-400">
                      <p>
                        {t('personalStory')}
                      </p>
                      <p>
                        {t('personalStory2')}
                      </p>
                      <p>
                        {t('personalStory3')}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{t('myPhilosophy')}</h3>
                    <div className="space-y-4">
                      <Card className="border border-gray-700 bg-gray-800/70 backdrop-blur-sm hover:bg-gray-800 transition-colors">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="bg-teal-500/10 p-3 rounded-full">
                              <Award className="h-6 w-6 text-teal-500" />
                            </div>
                            <div>
                              <h4 className="font-bold text-white">{t('qualityFirst')}</h4>
                              <p className="text-gray-400">
                                {t('qualityFirstDesc')}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border border-gray-700 bg-gray-800/70 backdrop-blur-sm hover:bg-gray-800 transition-colors">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="bg-teal-500/10 p-3 rounded-full">
                              <Award className="h-6 w-6 text-teal-500" />
                            </div>
                            <div>
                              <h4 className="font-bold text-white">{t('userCenteredDesign')}</h4>
                              <p className="text-gray-400">
                                {t('userCenteredDesignDesc')}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border border-gray-700 bg-gray-800/70 backdrop-blur-sm hover:bg-gray-800 transition-colors">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="bg-teal-500/10 p-3 rounded-full">
                              <Award className="h-6 w-6 text-teal-500" />
                            </div>
                            <div>
                              <h4 className="font-bold text-white">{t('continuousLearning')}</h4>
                              <p className="text-gray-400">
                                {t('continuousLearningDesc')}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="experience">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {currentExperienceItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="border border-gray-700 bg-gray-800/70 backdrop-blur-sm hover:bg-gray-800 transition-colors overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline" className="bg-teal-500/10 text-teal-400 border-teal-500/20">
                                {item.period}
                              </Badge>
                            </div>
                            <h3 className="text-xl font-bold text-white">{item.title}</h3>
                            <p className="text-teal-400 font-medium">{item.company}</p>
                          </div>
                          <Button
                            variant="ghost"
                            onClick={() => toggleExpand(item.id, "experience")}
                            aria-label={item.expanded ? "Collapse details" : "Expand details"}
                            className="rounded-full text-white hover:text-teal-400"
                          >
                            {item.expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                          </Button>
                        </div>
                        <p className="mt-2 text-gray-400">{item.description}</p>

                        <div className="flex flex-wrap gap-2 mt-4">
                          {item.skills.map((skill, index) => (
                            <Badge key={index} variant="outline" className="bg-gray-700/50 text-gray-300 border-gray-600">
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        {item.expanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 pt-4 border-t border-gray-700"
                          >
                            <h4 className="font-medium mb-2 text-white">{t('keyResponsibilities')}</h4>
                            <ul className="space-y-2">
                              {item.details.map((detail, index) => (
                                <li key={index} className="flex items-start gap-2 text-gray-400">
                                  <div className="rounded-full bg-teal-500/10 p-1 mt-0.5">
                                    <svg
                                      width="8"
                                      height="8"
                                      viewBox="0 0 6 6"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="text-teal-500"
                                    >
                                      <circle cx="3" cy="3" r="3" fill="currentColor" />
                                    </svg>
                                  </div>
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

                {/* Pagination */}
                {experiencePages > 1 && (
                  <div className="flex justify-center items-center gap-4 pt-4">
                    <Button
                      variant="outline"
                      onClick={() => setExperiencePage((prev) => Math.max(0, prev - 1))}
                      disabled={experiencePage === 0}
                      className="rounded-full border-gray-700 text-white hover:bg-gray-800"
                    >
                      <ChevronLeft size={16} />
                    </Button>

                    {Array.from({ length: experiencePages }).map((_, index) => (
                      <Button
                        key={index}
                        variant={experiencePage === index ? "default" : "outline"}
                        onClick={() => setExperiencePage(index)}
                        className={`w-8 h-8 p-0 rounded-full ${
                          experiencePage === index 
                            ? "bg-teal-500 hover:bg-teal-600 text-white" 
                            : "border-gray-700 text-white hover:bg-gray-800"
                        }`}
                      >
                        {index + 1}
                      </Button>
                    ))}

                    <Button
                      variant="outline"
                      onClick={() => setExperiencePage((prev) => Math.min(experiencePages - 1, prev + 1))}
                      disabled={experiencePage === experiencePages - 1}
                      className="rounded-full border-gray-700 text-white hover:bg-gray-800"
                    >
                      <ChevronRight size={16} />
                    </Button>
                  </div>
                )}
              </motion.div>
            </TabsContent>

            <TabsContent value="education">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {currentEducationItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="border border-gray-700 bg-gray-800/70 backdrop-blur-sm hover:bg-gray-800 transition-colors overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline" className="bg-teal-500/10 text-teal-400 border-teal-500/20">
                                {item.period}
                              </Badge>
                            </div>
                            <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                            <p className="text-teal-400 font-medium">{item.institution}</p>
                          </div>
                          <Button
                            variant="ghost"
                            onClick={() => toggleExpand(item.id, "education")}
                            aria-label={item.expanded ? "Collapse details" : "Expand details"}
                            className="rounded-full text-white hover:text-teal-400"
                          >
                            {item.expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                          </Button>
                        </div>
                        <p className="mt-2 text-gray-400">{item.description}</p>

                        {item.expanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 pt-4 border-t border-gray-700"
                          >
                            <h4 className="font-medium mb-2 text-white">{t('keyResponsibilities')}</h4>
                            <ul className="space-y-2">
                              {item.details.map((detail, index) => (
                                <li key={index} className="flex items-start gap-2 text-gray-400">
                                  <div className="rounded-full bg-teal-500/10 p-1 mt-0.5">
                                    <svg
                                      width="8"
                                      height="8"
                                      viewBox="0 0 6 6"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="text-teal-500"
                                    >
                                      <circle cx="3" cy="3" r="3" fill="currentColor" />
                                    </svg>
                                  </div>
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

                {/* Pagination */}
                {educationPages > 1 && (
                  <div className="flex justify-center items-center gap-4 pt-4">
                    <Button
                      variant="outline"
                      onClick={() => setEducationPage((prev) => Math.max(0, prev - 1))}
                      disabled={educationPage === 0}
                      className="rounded-full border-gray-700 text-white hover:bg-gray-800"
                    >
                      <ChevronLeft size={16} />
                    </Button>

                    {Array.from({ length: educationPages }).map((_, index) => (
                      <Button
                        key={index}
                        variant={educationPage === index ? "default" : "outline"}
                        onClick={() => setEducationPage(index)}
                        className={`w-8 h-8 p-0 rounded-full ${
                          educationPage === index 
                            ? "bg-teal-500 hover:bg-teal-600 text-white" 
                            : "border-gray-700 text-white hover:bg-gray-800"
                        }`}
                      >
                        {index + 1}
                      </Button>
                    ))}

                    <Button
                      variant="outline"
                      onClick={() => setEducationPage((prev) => Math.min(educationPages - 1, prev + 1))}
                      disabled={educationPage === educationPages - 1}
                      className="rounded-full border-gray-700 text-white hover:bg-gray-800"
                    >
                      <ChevronRight size={16} />
                    </Button>
                  </div>
                )}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </motion.div>
    </section>
  )
}