# Portafolio (React + TypeScript + Vite + Tailwind)

Portafolio web con enfoque UI “cyber/terminal”, construido con React 19, TypeScript, Vite y Tailwind.

## Scripts

- `pnpm dev`: entorno de desarrollo
- `pnpm build`: build de producción (`tsc -b` + `vite build`)
- `pnpm preview`: preview del build
- `pnpm lint`: análisis estático

## Arquitectura

Se utiliza **Feature-Sliced Design (FSD)** como arquitectura de organización del frontend. El objetivo es evitar monolitos de UI y mantener separación explícita entre composición de páginas, widgets de UI y modelo (estado/datos).

Principios aplicados:

- **Capas (layers) por responsabilidad**: `app` (bootstrap), `pages` (composición por ruta/pantalla), `widgets` (secciones de UI reutilizables), `shared` (primitivas y utilidades cuando aplique).
- **Slice-first**: el código se agrupa por “slice” (p. ej. `pages/portfolio`) con `model` (tipos, estado, datos) y `ui` (componentes).
- **Flujo de dependencias**: `app` → `pages` → `widgets` → `shared`. Los `model` se consumen desde `pages` y se inyectan a `widgets` vía props.

Estructura relevante:

```
src/
  app/
    App.tsx
  pages/
    portfolio/
      model/
        about.ts
        projects.ts
        techStack.ts
        types.ts
        usePortfolioState.ts
      ui/
        PortfolioPage.tsx
  widgets/
    gate/ui/Gate.tsx
    navbar/ui/Navbar.tsx
    hero/ui/HeroSection.tsx
    about/ui/AboutSection.tsx
    tech-stack/ui/TechStackSection.tsx
    projects/ui/ProjectsSection.tsx
    contact/ui/ContactSection.tsx
    footer/ui/Footer.tsx
```

## Convenciones

- `model/` contiene tipos, estado local (hooks) y data estática que describe el portafolio.
- `ui/` contiene componentes presentacionales; no deben duplicar data que ya vive en `model/`.
- Las secciones se implementan como `widgets` para mantener `pages` enfocadas en composición (layout y wiring).

## CV (PDF)

- El botón “Descargar CV” apunta a `/cv.pdf`.
- Coloca tu archivo en `public/cv.pdf` para que Vite lo sirva como asset estático en dev/build.

