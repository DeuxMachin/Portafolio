import type { FormEventHandler } from 'react'
import { useEffect, useState } from 'react'
import type { ProjectView } from './types'

export function usePortfolioState() {
  const [hasEntered, setHasEntered] = useState(false)
  const [isTerminalMode, setIsTerminalMode] = useState(false)
  const [projectView, setProjectView] = useState<ProjectView>('grid')
  const [activeTech, setActiveTech] = useState<string | null>(null)

  useEffect(() => {
    document.body.style.overflowY = hasEntered ? 'auto' : 'hidden'
    return () => {
      document.body.style.overflowY = 'auto'
    }
  }, [hasEntered])

  useEffect(() => {
    if (isTerminalMode) {
      document.body.classList.add('terminal-mode')
    } else {
      document.body.classList.remove('terminal-mode')
    }
  }, [isTerminalMode])

  const enterSystem = () => {
    setHasEntered(true)
    window.setTimeout(() => {
      document.body.style.overflowY = 'auto'
    }, 1000)
  }

  const toggleTech = (key: string) => {
    setActiveTech((prev) => (prev === key ? null : key))
  }

  const toggleTerminalMode = () => {
    setIsTerminalMode((v) => !v)
  }

  const onSubmitContact: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    alert('Transmisión enviada al servidor central.')
  }

  return {
    hasEntered,
    isTerminalMode,
    projectView,
    activeTech,
    enterSystem,
    toggleTerminalMode,
    setProjectView,
    toggleTech,
    onSubmitContact,
  }
}
