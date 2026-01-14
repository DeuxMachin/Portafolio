import type { IconType } from 'react-icons'

export type ProjectView = 'grid' | 'list'

export type ProjectTag = {
  label: string
  className: string
}

export type ProjectDetailCard = {
  title: string
  description: string
}

export type ProjectScreenshot = {
  src: string
  alt: string
}

export type ProjectDetails = {
  year?: number
  longDescription?: string
  skills?: ProjectDetailCard[]
  features?: ProjectDetailCard[]
  process?: ProjectDetailCard[]
  screenshots?: ProjectScreenshot[]
}

export type ProjectLinks = {
  repoUrl?: string
  liveUrl?: string
}

export type Project = {
  id: string
  statusPing: boolean
  icon: string
  title: string
  description: string
  tags: ProjectTag[]
  meta: string
  overlayRightClass: string
  overlayRightText: string
  scanDelay?: string
  links?: ProjectLinks
  details?: ProjectDetails
}

export type TechLevel = 'Experto' | 'Avanzado' | 'Intermedio'

export type TechCategory = 'Framework' | 'Lenguaje' | 'Herramienta' | 'Base de Datos'

export type Tech = {
  name: string
  icon: IconType
  color: string
  level: TechLevel
  category: TechCategory
}
