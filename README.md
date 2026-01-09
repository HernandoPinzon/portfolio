# Hernando Nuñez - Portfolio

A modern, bilingual (English/Spanish) portfolio website built with Astro and Tailwind CSS 4, featuring a neo-brutalist design aesthetic.

## Features

- **Bilingual Support**: Full English and Spanish language support with URL-based routing
- **Neo-Brutalist Design**: Bold borders, high contrast, flat colors, and geometric shapes
- **Dark/Light Mode**: Theme toggle with localStorage persistence
- **Fully Responsive**: Mobile-first design that works on all devices
- **Modern Stack**: Built with Astro 4.x and Tailwind CSS 4
- **Zero JavaScript by Default**: Lightning-fast static site generation
- **SEO Optimized**: Proper meta tags, structured data ready

## Project Structure

```text
portfolio/
├── src/
│   ├── components/      # Reusable UI components
│   ├── constants/       # Site configuration and translations
│   ├── data/           # JSON data files (CV, projects)
│   ├── layouts/        # Page layouts
│   ├── pages/          # File-based routing
│   │   ├── index.astro        # Spanish homepage
│   │   └── en/index.astro     # English homepage
│   ├── styles/         # Global CSS and Tailwind config
│   └── utils/          # Helper functions (i18n, etc.)
├── public/
│   ├── cv/             # CV PDFs (add your PDFs here)
│   └── images/         # Project images
└── BACKLOG.md          # Future features and enhancements
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Add your CV PDFs to `public/cv/`:
   - `CV-Hernando-Nunez-ES.pdf` (Spanish version)
   - `CV-Hernando-Nunez-EN.pdf` (English version)

4. Update project data in `src/data/projects.json` with your actual projects

5. (Optional) Replace placeholder images in `src/data/projects.json` with your own

### Development

Start the development server:

```bash
npm run dev
```

Visit `http://localhost:4321` to see your portfolio.

### Build for Production

Build the static site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

The built site will be in the `dist/` directory, ready to deploy to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

## Customization

### Update Your Information

1. **Personal Data**: Edit `src/data/cv-data.json`
2. **Contact Info**: Edit `src/constants/social.ts`
3. **Projects**: Edit `src/data/projects.json`
4. **Site Config**: Edit `src/constants/site.ts`

### Change Colors

Edit `src/styles/global.css` and update the CSS variables in the `@theme` block:

```css
@theme {
  --color-primary: #6366f1;    /* Your primary color */
  --color-secondary: #8b5cf6;  /* Your secondary color */
  /* ... */
}
```

### Add New Content

- **Add a new page**: Create a new `.astro` file in `src/pages/`
- **Add a new component**: Create a new `.astro` file in `src/components/`
- **Add translations**: Update `src/constants/translations.ts`

## Tech Stack

- **Framework**: [Astro](https://astro.build/) 4.x
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4.0
- **Language**: TypeScript
- **Deployment**: Static site (can be deployed anywhere)

## Future Enhancements

See [BACKLOG.md](./BACKLOG.md) for planned features including:

- Blog/Articles section
- Individual project detail pages
- Testimonials section
- Contact form backend integration
- Analytics integration

## License

All rights reserved © 2026 Hernando Nuñez

## Contact

- Email: hernandonunez13@gmail.com
- GitHub: [@HernandoPinzon](https://github.com/HernandoPinzon)
