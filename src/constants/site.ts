export const SITE_CONFIG = {
  name: 'Hernando Nuñez',
  role: {
    en: 'Frontend Developer',
    es: 'Desarrollador Frontend',
  },
  description: {
    en: 'Frontend Developer specialized in React, Angular, Next.js, and React Native. Building amazing projects and translating ideas into code.',
    es: 'Desarrollador Frontend especializado en React, Angular, Next.js y React Native. Construyendo proyectos increíbles y traduciendo ideas en código.',
  },
  url: 'https://hernandonunez.dev',
  languages: ['en', 'es'] as const,
  defaultLanguage: 'es' as const,
};

export const NAVIGATION = {
  en: [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
  es: [
    { label: 'Acerca de', href: '#about' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Contacto', href: '#contact' },
  ],
};

export type Language = typeof SITE_CONFIG.languages[number];
