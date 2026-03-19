import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { projects } from '../../portfolio/model/projects'
import { ProjectDetailPage } from '../../../widgets/projects/ui/ProjectDetailPage'

export function ProjectPage() {
  const { id } = useParams<{ id: string }>()
  const project = projects.find(p => p.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!project) {
    return <Navigate to="/" replace />
  }

  return <ProjectDetailPage project={project} />
}
