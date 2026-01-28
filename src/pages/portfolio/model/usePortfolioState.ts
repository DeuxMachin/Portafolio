import { useState } from 'react'
import type { ProjectView } from './types'

export function usePortfolioState() {
  const [projectView, setProjectView] = useState<ProjectView>('grid')

  return {
    projectView,
    setProjectView,
  }
}
