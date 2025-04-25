"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Send, Mail, Phone, MapPin, Check, AlertCircle } from "lucide-react"
import { Button } from "./ui/button"
import emailjs from "@emailjs/browser"
import { useLanguage } from "../context/LanguageContext"

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const { t } = useLanguage()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])

  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = t("nameRequired")
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t("emailRequired")
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("emailInvalid")
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = t("subjectRequired")
    }
    
    if (!formData.message.trim()) {
      newErrors.message = t("messageRequired")
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    setSubmitStatus("idle")
    
    try {
    
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: new Date().toLocaleString() 
      };
     
      const result = await emailjs.send(
        'service_67esn82', // Service ID from EmailJS
        'template_049r5io', // Template ID from EmailJS
        templateParams,
        'K0SZadZrPbqdAGm1s' // Public Key from EmailJS
      );
      
      if (result.text === 'OK') {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error('Failed to send email:', error)
      setSubmitStatus("error")
    
      if (error instanceof Error) {
        console.log('Error message:', error.message)
       
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="relative py-20 overflow-hidden bg-gray-900">
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
              {t('getInTouch')}
            </div>
            <h2 className="text-4xl font-bold mb-4 text-white">{t('contactMe')}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-400 mx-auto mt-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto mt-6">
              {t('contactDescription')}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-6">{t('contactInformation')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-500/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{t('email')}</h4>
                    <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-teal-400 transition-colors">
                      your.email@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-teal-500/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{t('phone')}</h4>
                    <a href="tel:+123456789" className="text-gray-400 hover:text-teal-400 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-teal-500/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{t('location')}</h4>
                    <p className="text-gray-400">
                      Temuco, Chile
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-gray-800 pt-8">
                <h4 className="text-lg font-semibold text-white mb-4">{t('followMe')}</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-teal-400 hover:bg-gray-700/70 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-teal-400 hover:bg-gray-700/70 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-teal-400 hover:bg-gray-700/70 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-6">{t('sendMessage')}</h3>
              
              {submitStatus === "success" && (
                <div className="mb-6 bg-teal-500/10 border border-teal-500/20 text-teal-400 px-4 py-3 rounded-lg flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  <p>{t('messageSentSuccess')}</p>
                </div>
              )}
              
              {submitStatus === "error" && (
                <div className="mb-6 bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  <p>{t('messageSentError')}</p>
                </div>
              )}
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">{t('name')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-gray-700/50 border ${errors.name ? 'border-red-500' : 'border-gray-600'} rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-transparent`}
                    placeholder={t('namePlaceholder')}
                  />
                  {errors.name && <p className="mt-1 text-red-400 text-sm">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">{t('email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-gray-700/50 border ${errors.email ? 'border-red-500' : 'border-gray-600'} rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-transparent`}
                    placeholder={t('emailPlaceholder')}
                  />
                  {errors.email && <p className="mt-1 text-red-400 text-sm">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">{t('subject')}</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full bg-gray-700/50 border ${errors.subject ? 'border-red-500' : 'border-gray-600'} rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-transparent`}
                    placeholder={t('subjectPlaceholder')}
                  />
                  {errors.subject && <p className="mt-1 text-red-400 text-sm">{errors.subject}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">{t('message')}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full bg-gray-700/50 border ${errors.message ? 'border-red-500' : 'border-gray-600'} rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-transparent`}
                    placeholder={t('messagePlaceholder')}
                  />
                  {errors.message && <p className="mt-1 text-red-400 text-sm">{errors.message}</p>}
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 mt-4 flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t('sending')}
                    </>
                  ) : (
                    <>
                      {t('sendMessage')} <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}