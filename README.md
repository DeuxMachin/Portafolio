# Portafolio Personal - Edward Mathias Contreras

Mi portafolio personal donde muestro mis proyectos y habilidades como desarrollador. Construido con tecnologías modernas y buenas prácticas de desarrollo.

## Stack Tecnológico

- **Runtime**: React 19 + TypeScript 5.9
- **Build Tool**: Vite 7.2
- **Estilos**: Tailwind CSS 4.1
- **Iconografía**: Lucide React
- **Testing**: Vitest + React Testing Library
- **E2E**: Playwright (smoke tests)
- **CI/CD**: GitHub Actions (lint + test en cada push)
- **Deploy**: Vercel

## Arquitectura

El proyecto usa **Feature-Sliced Design (FSD)**, una forma de organizar el código que mantiene todo ordenado y escalable. Básicamente, cada pieza de la aplicación vive en su propia capa y las dependencias fluyen en un solo sentido.

### Estructura de Directorios

```
src/
├── app/
│   └── App.tsx                     # Punto de entrada de la aplicación
├── pages/
│   └── portfolio/
│       ├── model/                  # Lógica de negocio y datos
│       │   ├── projects.ts         # Catálogo de proyectos
│       │   ├── types.ts            # Tipos TypeScript
│       │   └── usePortfolioState.ts # Hook principal de estado
│       └── ui/
│           └── PortfolioPage.tsx  # Página contenedora
├── shared/
│   └── i18n/
│       └── I18nContext.tsx         # Internacionalización + cambio de idioma
└── widgets/
    ├── navbar/ui/Navbar.tsx       # Navegación principal
    ├── hero/ui/HeroSection.tsx    # Sección hero
    ├── about/ui/AboutSection.tsx  # Sección sobre mí
    ├── projects/ui/ProjectsSection.tsx  # Galería de proyectos
    ├── contact/ui/ContactSection.tsx    # Formulario de contacto
    └── footer/ui/Footer.tsx        # Pie de página
```

### Flujo de Dependencias

```
app → pages → widgets → shared (cuando se necesite)
```

- **app**: Inicializa la aplicación
- **pages**: Compone los widgets y maneja el estado
- **widgets**: Componentes de UI reutilizables
- **shared**: Utilidades comunes (como i18n)

## SEO y PWA

### Archivos Estáticos (`public/`)

| Archivo | Para qué sirve |
|---------|-----------|
| `manifest.json` | Permite instalar el sitio como app en tu dispositivo |
| `robots.txt` | Le dice a Google y otros buscadores qué indexar |
| `sitemap.xml` | Mapa del sitio para que Google lo encuentre fácil |
| `favicon.svg` | Icono del sitio en formato vectorial |
| `CV.pdf` | Mi currículum para descargar |
| `Perfil.webp` | Foto de perfil optimizada |
| `proyects/` | Capturas de los proyectos |

### Meta Tags

El sitio tiene configurados varios meta tags para:
- **Open Graph**: Se ve bien cuando lo compartes en Facebook, LinkedIn o WhatsApp
- **Twitter Cards**: Previews bonitos en Twitter/X
- **Schema.org**: Datos estructurados para que Google entienda mejor el contenido
- **PWA tags**: Para que puedas instalar el sitio como app

### Accesibilidad

- Navegación por teclado con skip to content
- Roles ARIA para lectores de pantalla
- `aria-labels` en botones e interacciones
- Respeta `prefers-reduced-motion` si tienes animaciones desactivadas
- Focus visible para saber dónde estás navegando

## Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Servidor local en localhost:5173

# Build
npm run build        # Compila TypeScript y genera build para producción

# Preview
npm run preview      # Ve cómo se ve el build antes de subirlo

# Linting
npm run lint         # Revisa el código con ESLint

# Testing
npm run test         # Corre las pruebas unitarias con Vitest
npm run test:ui      # Pruebas con interfaz gráfica
npm run test:coverage # Ve la cobertura de código

# E2E
npm run test:e2e     # Corre las pruebas end-to-end con Playwright
npm run test:e2e:ui  # Playwright con interfaz gráfica
```

## Testing

El proyecto tiene pruebas automáticas que se ejecutan cada vez que subo código:

### Pruebas Unitarias (Vitest + React Testing Library)

Valido que cada componente funcione como debe:
- ✅ **Navbar** - 5 tests (navegación, cambio de idioma)
- ✅ **Footer** - 4 tests (enlaces sociales, copyright)
- ✅ **HeroSection** - 5 tests (presentación, CTA)
- ✅ **AboutSection** - 2 tests (contenido, estructura)

**Total:** 16 tests pasando

**Configuración:**
- Framework: Vitest 3.0.5
- Utilidades: React Testing Library 16.1.0
- Entorno: jsdom con jest-dom matchers
- Setup: `src/test/setup.ts`

Ejecutar pruebas:
```bash
npm test              # Modo watch (se ejecuta cuando guardas)
npm run test:ui       # Interfaz gráfica
npm run test:coverage # Cobertura de código
```

### Pruebas E2E (Playwright)

Smoke tests que validan los flujos principales:
- ✅ La página carga correctamente
- ✅ La navegación funciona  
- ✅ La sección hero se muestra bien
- ✅ Los proyectos son accesibles
- ✅ El footer aparece al final
- ✅ El cambio de idioma funciona

**Total:** 6 tests pasando

**Configuración:**
- Framework: Playwright 1.50.0
- Navegador: Chromium (sin interfaz gráfica)
- Base URL: `http://localhost:5173`
- Servidor: Vite se inicia automáticamente

Ejecutar pruebas E2E:
```bash
npm run test:e2e      # Modo headless (automático)
npm run test:e2e:ui   # Modo interactivo (ves el navegador)
npx playwright install # Instala los navegadores (primera vez)
```

### Resultados Actuales

**Última ejecución - 28 de Enero de 2026**

```
 RESUMEN

Unitarias (Vitest):
  ✅ 16 tests pasando
  ⚠️  0 tests fallando
  ⏱️  ~3.0s

E2E (Playwright):
  ✅ 6 tests pasando
  ⚠️  0 tests fallando
  ⏱️  ~7.2s
```

| Suite de Tests | Estado | Detalles |
|-----------|--------|---------|
| AboutSection.test.tsx | ✅ | 2/2 tests |
| Navbar.test.tsx | ✅ | 5/5 tests |
| Footer.test.tsx | ✅ | 4/4 tests |
| HeroSection.test.tsx | ✅ | 5/5 tests |
| portfolio.spec.ts (E2E) | ✅ | 6/6 tests |

### CI/CD

GitHub Actions ejecuta automáticamente en cada push:
1. 🔍 ESLint (revisa calidad de código)
2. ✅ Tests unitarios (Vitest)
3. 🌐 Tests E2E (Playwright)

Si algo falla, el merge se bloquea. Puedes ver la configuración en [.github/workflows/ci.yml](.github/workflows/ci.yml).

## Deploy

### Variables de Entorno

Si quieres probar localmente, crea un archivo `.env` (no lo subas a Git):

```env
VITE_CONTACT_EMAIL=tu-email@example.com
VITE_DOMAIN=https://tudominio.com
```

### Deploy en Vercel

Es muy simple:
1. Conecta tu repo en [vercel.com](https://vercel.com)
2. Framework Preset: `Vite`
3. Build Command: `pnpm build`
4. Output Directory: `dist`

Vercel se encarga del resto: builds automáticos, HTTPS, CDN global.

### Deploy en Netlify

También funciona en Netlify:
1. Conecta tu repo en [netlify.com](https://netlify.com)
2. Build Command: `pnpm build`
3. Publish Directory: `dist`

## Optimizaciones

Cosas que hice para que el sitio cargue rápido:
- **Preconnect**: Conecta anticipadamente a Google Fonts y CDNs
- **Font display: swap**: Las fuentes no bloquean el contenido
- **Lazy loading**: Las imágenes se cargan solo cuando las vas a ver
- **Code splitting**: Vite divide el código automáticamente
- **CSS optimizado**: Tailwind elimina todo lo que no usas

El resultado: **Lighthouse 95+** en todas las métricas.

## Licencia

MIT © Edward Mathias Contreras
