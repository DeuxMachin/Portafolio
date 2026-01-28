import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeroSection } from './HeroSection'
import { I18nProvider } from '../../../shared/i18n/I18nContext'

describe('HeroSection', () => {
  it('renderiza correctamente', () => {
    render(
      <I18nProvider>
        <HeroSection />
      </I18nProvider>
    )

    expect(screen.getByText('Hola, soy')).toBeInTheDocument()
  })

  it('muestra el tagline correctamente', () => {
    render(
      <I18nProvider>
        <HeroSection />
      </I18nProvider>
    )

    expect(screen.getByText(/Construyo experiencias digitales/i)).toBeInTheDocument()
  })

  it('muestra el badge de disponibilidad', () => {
    render(
      <I18nProvider>
        <HeroSection />
      </I18nProvider>
    )

    expect(screen.getByText('Disponible para nuevos proyectos')).toBeInTheDocument()
  })

  it('tiene el id "inicio" para la navegación', () => {
    const { container } = render(
      <I18nProvider>
        <HeroSection />
      </I18nProvider>
    )

    const section = container.querySelector('#inicio')
    expect(section).toBeInTheDocument()
  })

  it('renderiza los CTAs correctamente', () => {
    render(
      <I18nProvider>
        <HeroSection />
      </I18nProvider>
    )

    expect(screen.getByText('Ver Proyectos')).toBeInTheDocument()
    expect(screen.getByText('Enviar Mensaje')).toBeInTheDocument()
  })
})
