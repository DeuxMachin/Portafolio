import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'
import { I18nProvider } from '../../../shared/i18n/I18nContext'

describe('Navbar', () => {
  it('renderiza correctamente', () => {
    render(
      <I18nProvider>
        <Navbar />
      </I18nProvider>
    )

    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('renderiza todos los enlaces de navegación', () => {
    render(
      <I18nProvider>
        <Navbar />
      </I18nProvider>
    )

    expect(screen.getAllByText('Inicio').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Proyectos').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Sobre mí').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Contacto').length).toBeGreaterThan(0)
  })

  it('el logo enlaza a #inicio', () => {
    render(
      <I18nProvider>
        <Navbar />
      </I18nProvider>
    )

    const logoLink = screen.getByText('EC.').closest('a')
    expect(logoLink).toHaveAttribute('href', '#inicio')
  })

  it('tiene el atributo role="navigation"', () => {
    const { container } = render(
      <I18nProvider>
        <Navbar />
      </I18nProvider>
    )

    const nav = container.querySelector('nav')
    expect(nav).toHaveAttribute('role', 'navigation')
  })

  it('renderiza el botón de cambio de idioma', () => {
    render(
      <I18nProvider>
        <Navbar />
      </I18nProvider>
    )

    const langButton = screen.getByRole('button', { name: 'Cambiar idioma' })
    expect(langButton).toBeInTheDocument()
  })
})
