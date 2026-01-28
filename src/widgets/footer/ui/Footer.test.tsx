import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { I18nProvider } from '../../../shared/i18n/I18nContext'

describe('Footer', () => {
  it('renderiza correctamente', () => {
    render(
      <I18nProvider>
        <Footer />
      </I18nProvider>
    )
    
    // Verifica que el logo está presente
    const logo = screen.getByText('EC.')
    expect(logo).toBeInTheDocument()
  })

  it('muestra el año actual en el copyright', () => {
    render(
      <I18nProvider>
        <Footer />
      </I18nProvider>
    )
    
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument()
  })

  it('renderiza los enlaces sociales correctamente', () => {
    render(
      <I18nProvider>
        <Footer />
      </I18nProvider>
    )
    
    // Verifica que los enlaces existen
    const githubLink = screen.getByLabelText('GitHub')
    const linkedinLink = screen.getByLabelText('LinkedIn')
    const twitterLink = screen.getByLabelText('Twitter')
    
    expect(githubLink).toBeInTheDocument()
    expect(linkedinLink).toBeInTheDocument()
    expect(twitterLink).toBeInTheDocument()
  })

  it('los enlaces sociales tienen target="_blank"', () => {
    render(
      <I18nProvider>
        <Footer />
      </I18nProvider>
    )
    
    const githubLink = screen.getByLabelText('GitHub')
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
