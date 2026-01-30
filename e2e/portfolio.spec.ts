import { test, expect } from '@playwright/test'

test.describe('Portfolio - Smoke Test', () => {
  test('página principal carga correctamente', async ({ page }) => {
    await page.goto('/')
    
    // Verifica que el título contiene el nombre
    await expect(page).toHaveTitle(/Edward|Portafolio/i)
    
    // Verifica que el logo del navbar está visible (evita duplicados con footer)
    const nav = page.getByRole('navigation')
    await expect(nav.getByRole('link', { name: 'EC.' })).toBeVisible()
  })

  test('navegación funciona correctamente', async ({ page }) => {
    await page.goto('/')
    
    // Verifica que los enlaces de navegación existen 
    const nav = page.getByRole('navigation')
    await expect(nav.getByRole('link', { name: 'Inicio' }).first()).toBeVisible()
    await expect(nav.getByRole('link', { name: 'Proyectos' }).first()).toBeVisible()
    await expect(nav.getByRole('link', { name: 'Sobre mí' }).first()).toBeVisible()
    await expect(nav.getByRole('link', { name: 'Contacto' }).first()).toBeVisible()
  })

  test('sección hero se muestra correctamente', async ({ page }) => {
    await page.goto('/')
    
    const hero = page.locator('#inicio')

    // Verifica que el hero contiene el nombre (el H1 no muestra el apellido)
    await expect(hero.getByRole('heading', { level: 1 })).toContainText(/Edward/i)
    
    // Verifica que hay un badge de disponibilidad
    await expect(hero.getByText('Disponible para nuevos proyectos')).toBeVisible()
  })

  test('sección de proyectos es accesible', async ({ page }) => {
    await page.goto('/')
    
    // Click en el enlace de proyectos
    const nav = page.getByRole('navigation')
    await nav.getByRole('link', { name: 'Proyectos' }).first().click()
    
    // Espera a que la sección sea visible
    await expect(page.locator('#proyectos')).toBeInViewport()
  })

  test('footer se muestra al final de la página', async ({ page }) => {
    await page.goto('/')
    
    // Scroll al final
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    
    // Verifica que el footer está visible
    const footer = page.locator('footer')
    await expect(footer).toBeVisible()
    
    // Verifica enlaces sociales
    await expect(footer.getByRole('link', { name: 'GitHub' })).toBeVisible()
    await expect(footer.getByRole('link', { name: 'LinkedIn' })).toBeVisible()
  })

  test('cambio de idioma funciona', async ({ page }) => {
    await page.goto('/')
    
    const nav = page.getByRole('navigation')
    const langButton = nav.getByRole('button', { name: 'Cambiar idioma' })

    await expect(langButton).toContainText(/es/i)
    await langButton.click()
    await expect(langButton).toContainText(/en/i)
  })
})
