import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AboutSection } from './AboutSection'
import { I18nProvider } from '../../../shared/i18n/I18nContext'

function renderAboutSection() {
  return render(
    <MemoryRouter>
      <I18nProvider>
        <AboutSection />
      </I18nProvider>
    </MemoryRouter>
  )
}

describe('AboutSection', () => {
  it('renderiza correctamente', () => {
    renderAboutSection()

    expect(screen.getByRole('heading', { name: /Sobre\s*M[ií]/i })).toBeInTheDocument()
  })

  it('tiene el id "sobre-mi" para la navegacion', () => {
    const { container } = renderAboutSection()

    const section = container.querySelector('#sobre-mi')
    expect(section).toBeInTheDocument()
  })
})
