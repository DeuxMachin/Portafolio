import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutSection } from './AboutSection'
import { I18nProvider } from '../../../shared/i18n/I18nContext'

describe('AboutSection', () => {
  it('renderiza correctamente', () => {
    render(
      <I18nProvider>
        <AboutSection />
      </I18nProvider>
    )
    
    expect(screen.getByRole('heading', { name: /Sobre\s*Mí/i })).toBeInTheDocument()
  })

  it('tiene el id "sobre-mi" para la navegación', () => {
    const { container } = render(
      <I18nProvider>
        <AboutSection />
      </I18nProvider>
    )
    
    const section = container.querySelector('#sobre-mi')
    expect(section).toBeInTheDocument()
  })
})
