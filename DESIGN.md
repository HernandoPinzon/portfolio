# Documento de Diseño - Portfolio Hernando Nuñez

## Resumen del Proyecto

Portfolio web bilingüe (Español/Inglés) con diseño neo-brutalista, construido con Astro 4.x y Tailwind CSS 4. El sitio es completamente estático, con JavaScript mínimo solo para los toggles de tema e idioma.

---

## Sistema de Diseño Neo-Brutalista

### Filosofía de Diseño

**Neo-brutalismo** se caracteriza por:
- Bordes gruesos y negros/blancos según el tema
- Sin sombras (excepto las "sombras brutales" desplazadas)
- Colores planos sin degradados (excepto acentos estratégicos)
- Formas geométricas y ángulos de 90 grados
- Alto contraste
- Tipografía bold y en mayúsculas

### Paleta de Colores

#### Colores Primarios
```css
--color-primary: #6366f1     /* Indigo Blue - color principal */
--color-secondary: #8b5cf6   /* Purple - color secundario */
```

#### Modo Claro (Light Mode)
```css
--color-bg-light: #ffffff           /* Fondo principal */
--color-surface-light: #f3f4f6      /* Superficies/tarjetas */
--color-text-light: #111827         /* Texto principal */
--color-border-light: #000000       /* Bordes (negro) */
--color-muted-light: #6b7280        /* Texto secundario */
```

#### Modo Oscuro (Dark Mode)
```css
--color-bg-dark: #0f172a            /* Fondo principal */
--color-surface-dark: #1e293b       /* Superficies/tarjetas */
--color-text-dark: #f1f5f9          /* Texto principal */
--color-border-dark: #ffffff        /* Bordes (blanco) */
--color-muted-dark: #94a3b8         /* Texto secundario */
```

#### Gradientes
Solo se usan en elementos de acento estratégicos (badges, botones CTA):
```css
background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
```

### Bordes

Tres variantes de grosor:
- `--border-width-thin: 2px` - Elementos pequeños
- `--border-width: 3px` - Uso estándar (tarjetas, botones)
- `--border-width-thick: 4px` - Énfasis visual

**Importante**: `border-radius: 0` - Sin esquinas redondeadas

### Sombras "Brutales"

En lugar de `box-shadow` tradicional, usamos sombras desplazadas:
```css
box-shadow: 6px 6px 0 var(--color-border-light);
```

Al hacer hover, la sombra se agranda y el elemento se desplaza:
```css
transform: translate(-2px, -2px);
box-shadow: 8px 8px 0 var(--color-border-light);
```

### Tipografía

- **Font family**: System font stack (sin fuentes custom para rendimiento)
- **Headings**: Bold (700+), UPPERCASE, tamaños grandes
- **Body**: Tamaños legibles (16px base)
- **Botones/Labels**: Bold, UPPERCASE, tracking aumentado

---

## Arquitectura del Proyecto

### Estructura de Carpetas

```
src/
├── components/          # Componentes reutilizables de UI
│   ├── Header.astro          # Navegación sticky con toggles
│   ├── Footer.astro          # Pie de página
│   ├── Hero.astro            # Sección hero con nombre y CTAs
│   ├── About.astro           # Sobre mí y educación
│   ├── Experience.astro      # Historial laboral
│   ├── Skills.astro          # Habilidades técnicas
│   ├── Projects.astro        # Grid de proyectos
│   ├── ProjectCard.astro     # Tarjeta individual de proyecto
│   ├── Contact.astro         # Formulario y contacto
│   ├── ThemeToggle.astro     # Toggle light/dark
│   └── LanguageToggle.astro  # Toggle ES/EN
│
├── layouts/
│   └── BaseLayout.astro      # Layout base con <head>, meta tags, theme script
│
├── pages/
│   ├── index.astro           # Homepage español (/)
│   └── en/
│       └── index.astro       # Homepage inglés (/en)
│
├── constants/
│   ├── site.ts              # Config del sitio, navegación
│   ├── translations.ts      # Todas las traducciones ES/EN
│   └── social.ts            # Info de contacto y redes sociales
│
├── data/
│   ├── cv-data.json         # Datos del CV (experiencia, educación, skills)
│   └── projects.json        # Lista de proyectos
│
├── utils/
│   └── i18n.ts              # Helpers de internacionalización
│
└── styles/
    └── global.css           # Tailwind import + theme + utilidades brutales
```

---

## Sistema de Internacionalización (i18n)

### Estrategia

**URL-based routing**:
- Español (default): `/`
- Inglés: `/en`

### Archivos Clave

#### 1. `src/constants/site.ts`
- Configuración del sitio
- Navegación por idioma
- Idiomas disponibles

#### 2. `src/constants/translations.ts`
```typescript
export const translations = {
  'hero.greeting': {
    en: 'Hi, I am',
    es: 'Hola, soy',
  },
  // ... más traducciones
};
```

Estructura: `seccion.clave` como key, objeto con `en` y `es`.

#### 3. `src/utils/i18n.ts`
Funciones helper:
- `getCurrentLang(pathname)` - Detecta idioma desde URL
- `t(key, lang)` - Obtiene traducción
- `getAlternateLangUrl(currentPath, targetLang)` - URLs alternativas
- `getOppositeLang(currentLang)` - Idioma opuesto

#### 4. `src/data/cv-data.json` y `src/data/projects.json`
Estructura bilingüe:
```json
{
  "title": {
    "en": "English Title",
    "es": "Título Español"
  }
}
```

### Cómo Funciona

1. Cada página recibe `lang` como prop
2. Se pasa `lang` a todos los componentes
3. Los componentes usan `t(key, lang)` para textos estáticos
4. Los datos JSON acceden a `data[lang]` para contenido dinámico

---

## Componentes Detallados

### Header.astro

**Ubicación**: Sticky top con `z-index: 50`

**Elementos**:
- Logo/Nombre (link a home según idioma)
- Navegación desktop (oculta en mobile)
- LanguageToggle
- ThemeToggle
- Menú mobile (hamburger button)

**Navegación**:
```typescript
NAVIGATION = {
  es: [
    { label: 'Acerca de', href: '#about' },
    { label: 'Experiencia', href: '#experience' },
    // ...
  ],
  en: [
    { label: 'About', href: '#about' },
    // ...
  ]
}
```

### Hero.astro

**Elementos**:
- Saludo pequeño arriba
- Nombre grande (5xl → 7xl → 8xl responsivo)
- Rol en card con gradiente
- Tagline
- 2 CTAs: "Ver Proyectos" (primario) y "Descargar CV"

**Background**: Formas geométricas con bordes gruesos, baja opacidad

### About.astro

**Secciones**:
1. Card principal con texto "About Me"
2. Grid de educación (2 columnas en desktop)

**Datos**: Lee de `cv-data.json`

### Experience.astro

**Diseño**: Timeline vertical con indicador circular a la izquierda

**Elementos por item**:
- Badge de período con gradiente
- Rol (heading)
- Empresa (texto con color primario)
- Descripción

**Background**: `bg-surface-light/dark`

### Skills.astro

**Grid**: 3 columnas en desktop (1 en mobile)

**Categorías**:
1. **Languages** (Idiomas): Lista con bullets cuadrados
2. **Frameworks**: Tags con gradiente
3. **Tools**: Tags planos con borde

### Projects.astro

**Estructura**:
- Featured projects: Grid 2 columnas
- Regular projects: Grid 3 columnas

**ProjectCard.astro**:
- Imagen (16:9 ratio, hover scale)
- Título
- Descripción (max 3 líneas)
- Tags de tecnologías
- Botones: "Ver Demo" (primario) / "Ver Código"

### Contact.astro

**Grid 2 columnas**:

**Izquierda - Formulario**:
- Campos: Nombre, Email, Mensaje
- Botón disabled (nota: "Backend próximamente")

**Derecha - Info**:
1. Card "Descargar CV"
2. Card con detalles de contacto (email, ubicación, GitHub)
3. Card de referencias

### Footer.astro

**Secciones**:
- Brand + rol
- Links sociales
- "Built with" badges
- Copyright (año dinámico)

### ThemeToggle.astro

**Funcionalidad**:
- Detecta tema de `localStorage` o system preference
- Script `is:inline` en BaseLayout para evitar flash
- Alterna clase `dark` en `<html>`
- Iconos de sol/luna según tema actual

### LanguageToggle.astro

**Diseño**: 2 botones (ES | EN) con divisor vertical

**Estado activo**: Fondo con color primario, texto blanco

---

## Utilities CSS Custom

### En `src/styles/global.css`

#### `.border-brutal`
```css
border: var(--border-width) solid var(--color-border-light);
/* En dark mode: border-color: var(--color-border-dark); */
```

Variantes: `.border-brutal-thin`, `.border-brutal-thick`

#### `.card-brutal`
Card con borde grueso y sombra desplazada:
```css
.card-brutal {
  background: var(--color-surface-light);
  border: var(--border-width) solid var(--color-border-light);
  border-radius: 0;
  box-shadow: 6px 6px 0 var(--color-border-light);
}

.card-brutal:hover {
  transform: translate(-2px, -2px);
  box-shadow: 8px 8px 0 var(--color-border-light);
}
```

#### `.btn-brutal`
Botón base con borde y sombra

#### `.btn-brutal-primary`
Botón con fondo de color primario

#### `.bg-gradient-brutal`
Gradiente de primario a secundario

#### `.container`
Contenedor responsive con max-width 1200px

---

## Datos JSON

### `src/data/cv-data.json`

```json
{
  "name": "Hernando Nuñez",
  "role": { "en": "...", "es": "..." },
  "location": "...",
  "about": { "en": "...", "es": "..." },
  "experience": [
    {
      "role": { "en": "...", "es": "..." },
      "company": "...",
      "period": { "en": "...", "es": "..." },
      "description": { "en": "...", "es": "..." }
    }
  ],
  "education": [
    {
      "degree": { "en": "...", "es": "..." },
      "institution": "...",
      "year": "..."
    }
  ],
  "skills": {
    "languages": [
      { "name": { "en": "...", "es": "..." }, "level": "..." }
    ],
    "frameworks": ["Angular", "React", ...],
    "tools": ["Git", ...]
  }
}
```

### `src/data/projects.json`

```json
[
  {
    "id": "1",
    "title": { "en": "...", "es": "..." },
    "description": { "en": "...", "es": "..." },
    "image": "URL",
    "technologies": ["React", "Node.js"],
    "githubUrl": "...",      // opcional
    "liveUrl": "...",        // opcional
    "featured": true
  }
]
```

**Imágenes actuales**: Lorem Picsum placeholders
- `https://picsum.photos/seed/project1/1200/675`

---

## Responsive Design

### Breakpoints (Tailwind)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### Estrategia Mobile-First

#### Navegación
- Mobile: Menú hamburger colapsable
- Desktop: Horizontal inline

#### Grids
- **Projects**:
  - Mobile: 1 columna
  - Tablet: 2 columnas
  - Desktop: 2 (featured) / 3 (regular)

- **Skills**: 1 → 3 columnas
- **Education**: 1 → 2 columnas

#### Tipografía
Hero name:
- Mobile: `text-5xl`
- Tablet: `text-7xl`
- Desktop: `text-8xl`

---

## Performance y SEO

### Optimizaciones
- Astro genera HTML estático (sin hidratación innecesaria)
- JavaScript solo para:
  - Theme toggle
  - Language toggle
  - Mobile menu
- Lazy loading en imágenes de proyectos

### Meta Tags (en BaseLayout.astro)
- Title dinámico por idioma
- Description
- Open Graph tags
- Twitter cards
- Alternate language links (`hreflang`)

### Theme Script
Script `is:inline` en `<head>` que se ejecuta ANTES del render para evitar flash:
```javascript
const theme = localStorage.getItem('theme') ||
              (window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark' : 'light');
if (theme === 'dark') {
  document.documentElement.classList.add('dark');
}
```

---

## Convenciones de Código

### Naming
- Componentes: PascalCase (`Hero.astro`)
- Archivos de datos: kebab-case (`cv-data.json`)
- Constantes: SCREAMING_SNAKE_CASE (`SITE_CONFIG`)
- Funciones: camelCase (`getCurrentLang`)

### Props Interface
Cada componente con props tiene:
```typescript
export interface Props {
  lang: Language;
  // ... más props
}

const { lang } = Astro.props;
```

### Imports
Orden:
1. Layouts
2. Componentes
3. Constantes/Utils
4. Data/JSON
5. Tipos

---

## Decisiones de Diseño Importantes

### ¿Por qué Neo-brutalismo?

1. **Reconocible**: Estilo distintivo que destaca
2. **Minimalista pero no básico**: Cumple requisito de no ser "básico"
3. **Moderno**: Tendencia actual en diseño web
4. **Alto contraste**: Excelente legibilidad
5. **Futurista**: Geométrico y bold

### ¿Por qué Tailwind 4?

- CSS-first con `@theme` block
- Purging automático = CSS mínimo
- Utilities custom fáciles de agregar
- Excelente DX con Astro

### ¿Por qué URL-based routing para i18n?

- SEO-friendly
- Compartir links específicos por idioma
- Simple de implementar sin librerías
- Estándar web

### ¿Por qué JSON para datos?

- Fácil de editar sin tocar código
- Estructura clara y tipada
- Separación de contenido y presentación
- Escalable para agregar más proyectos/experiencias

---

## Limitaciones Actuales

### Contact Form
- Solo frontend (botón disabled)
- Nota: "Backend integration coming soon"
- **Para implementar**: Ver BACKLOG.md opciones (Formspree, Netlify Forms, etc.)

### CV PDFs
- **No incluidos** en el repo
- Usuario debe agregarlos a `public/cv/`
- Nombres esperados:
  - `CV-Hernando-Nunez-ES.pdf`
  - `CV-Hernando-Nunez-EN.pdf`

### Imágenes de Proyectos
- Actualmente: Placeholders de Lorem Picsum
- Usuario debe reemplazar con screenshots reales
- Ratio recomendado: 16:9 (1200x675px)

---

## Próximos Pasos Recomendados

### Inmediato
1. Agregar CVs a `public/cv/`
2. Actualizar proyectos en `src/data/projects.json` con datos reales
3. Reemplazar imágenes placeholder
4. Verificar toda la info del CV en `cv-data.json`

### Futuro (ver BACKLOG.md)
1. Blog/Articles section con Astro Content Collections
2. Páginas individuales de proyectos
3. Backend para contact form
4. Testimonials
5. Analytics

---

## Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build
npm run build

# Preview build
npm run preview

# Type checking
npm run astro check

# Linting (si se configura)
npm run lint
```

---

## Estructura de Página (Orden de Secciones)

1. **Header** (sticky)
2. **Hero** - Intro + CTAs
3. **About** - Bio + Educación
4. **Experience** - Historial laboral
5. **Skills** - Habilidades técnicas
6. **Projects** - Portafolio de proyectos
7. **Contact** - Formulario + Info
8. **Footer**

---

## Notas de Implementación

### Dark Mode
- Clase `dark` en `<html>` controla todo
- CSS variables cambian automáticamente con `.dark` parent
- localStorage persiste preferencia
- Respeta `prefers-color-scheme` si no hay preferencia guardada

### Animaciones
- Todas con `transition` CSS
- `@media (prefers-reduced-motion: reduce)` respetado
- Hover states suaves (200-300ms)
- No animaciones excesivas o distractoras

### Accesibilidad
- Aria labels en botones de toggle
- Alto contraste (WCAG AA+)
- Navegación por teclado funciona
- Semantic HTML
- Alt text en imágenes (cuando se agreguen reales)

---

## Variables CSS Principales

```css
/* En src/styles/global.css @theme block */

/* Colores */
--color-primary
--color-secondary
--color-gradient-from
--color-gradient-to
--color-bg-light / --color-bg-dark
--color-surface-light / --color-surface-dark
--color-text-light / --color-text-dark
--color-border-light / --color-border-dark
--color-muted-light / --color-muted-dark

/* Bordes */
--border-width-thin
--border-width
--border-width-thick

/* Tipografía */
--font-sans
--font-mono

/* Espaciado */
--spacing-xs hasta --spacing-3xl
```

---

## Debugging Tips

### Theme no cambia
- Check `localStorage.theme`
- Verificar script en BaseLayout se ejecuta
- Inspeccionar clase `dark` en `<html>`

### Traducciones no aparecen
- Verificar key existe en `translations.ts`
- Confirmar formato: `seccion.clave`
- Check que `lang` prop se pasa correctamente

### Estilos no aplican
- Tailwind: verificar purge no elimine clases
- CSS custom: check que esté en `global.css`
- Dark mode: verificar selector `.dark` parent

### Navegación entre idiomas
- URLs correctas: `/` (es) y `/en` (en)
- Links en LanguageToggle correctos
- Paths en Header según idioma

---

## Contacto y Recursos

**Desarrollador**: Hernando Nuñez
**GitHub**: [@HernandoPinzon](https://github.com/HernandoPinzon)
**Email**: hernandonunez13@gmail.com

**Frameworks**:
- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

**Inspiración Neo-brutalista**:
- [neobrutalism.dev](https://neobrutalism.dev/)
- [Brutalist Websites](https://brutalistwebsites.com/)

---

**Última actualización**: 2026-01-09
**Versión del documento**: 1.0
