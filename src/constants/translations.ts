import type { Language } from './site';

type Translations = {
  [key: string]: {
    [K in Language]: string;
  };
};

export const translations: Translations = {
  // Hero section
  'hero.greeting': {
    en: 'Hi, I am',
    es: 'Hola, soy',
  },
  'hero.tagline': {
    en: 'Passionate about technology and building amazing projects',
    es: 'Apasionado por la tecnología y la construcción de proyectos increíbles',
  },
  'hero.cta.projects': {
    en: 'View Projects',
    es: 'Ver Proyectos',
  },
  'hero.cta.cv': {
    en: 'Download CV',
    es: 'Descargar CV',
  },

  // About section
  'about.title': {
    en: 'About Me',
    es: 'Acerca de Mí',
  },
  'about.description': {
    en: 'A passionate about technology, I really like to build amazing projects and translate ideas into code. I am always up to date in new technologies, in my free time I like to create projects to practice what I am learning.',
    es: 'Apasionado por la tecnología, me gusta mucho construir proyectos increíbles y traducir ideas en código. Siempre estoy al día en nuevas tecnologías, en mi tiempo libre me gusta crear proyectos para practicar lo que estoy aprendiendo.',
  },

  // Experience section
  'experience.title': {
    en: 'Experience',
    es: 'Experiencia',
  },
  'experience.opitech.role': {
    en: 'FrontEnd Developer',
    es: 'Desarrollador FrontEnd',
  },
  'experience.opitech.company': {
    en: 'Opitech',
    es: 'Opitech',
  },
  'experience.opitech.period': {
    en: 'August 2022 - Now (+3 years)',
    es: 'Agosto 2022 - Actualidad (+3 años)',
  },
  'experience.opitech.description': {
    en: 'In this company I played my role as a web and mobile application developer. Working on different projects and with different teams.',
    es: 'En esta empresa desempeñé mi rol como desarrollador de aplicaciones web y móviles. Trabajando en diferentes proyectos y con diferentes equipos.',
  },

  // Education section
  'education.title': {
    en: 'Education',
    es: 'Educación',
  },
  'education.university.degree': {
    en: 'Software Engineer',
    es: 'Ingeniero de Software',
  },
  'education.university.institution': {
    en: 'Universidad Autonoma de Manizales',
    es: 'Universidad Autónoma de Manizales',
  },
  'education.university.year': {
    en: '2025',
    es: '2025',
  },
  'education.sena.degree': {
    en: 'Systems Technician',
    es: 'Técnico en Sistemas',
  },
  'education.sena.institution': {
    en: 'SENA',
    es: 'SENA',
  },
  'education.sena.year': {
    en: '2018',
    es: '2018',
  },

  // Skills section
  'skills.title': {
    en: 'Skills',
    es: 'Habilidades',
  },
  'skills.languages': {
    en: 'Languages',
    es: 'Idiomas',
  },
  'skills.frameworks': {
    en: 'Frameworks & Libraries',
    es: 'Frameworks y Librerías',
  },
  'skills.tools': {
    en: 'Tools & Technologies',
    es: 'Herramientas y Tecnologías',
  },

  // Projects section
  'projects.title': {
    en: 'Projects',
    es: 'Proyectos',
  },
  'projects.featured': {
    en: 'Featured Projects',
    es: 'Proyectos Destacados',
  },
  'projects.viewLive': {
    en: 'View Live',
    es: 'Ver Demo',
  },
  'projects.viewCode': {
    en: 'View Code',
    es: 'Ver Código',
  },

  // Contact section
  'contact.title': {
    en: 'Get In Touch',
    es: 'Contáctame',
  },
  'contact.description': {
    en: 'I am currently open to new opportunities. Feel free to reach out!',
    es: 'Actualmente estoy abierto a nuevas oportunidades. No dudes en contactarme!',
  },
  'contact.form.name': {
    en: 'Name',
    es: 'Nombre',
  },
  'contact.form.email': {
    en: 'Email',
    es: 'Correo Electrónico',
  },
  'contact.form.message': {
    en: 'Message',
    es: 'Mensaje',
  },
  'contact.form.send': {
    en: 'Send Message',
    es: 'Enviar Mensaje',
  },
  'contact.form.note': {
    en: 'Backend integration coming soon',
    es: 'Integración de backend próximamente',
  },
  'contact.references': {
    en: 'References',
    es: 'Referencias',
  },
  'contact.location': {
    en: 'Location',
    es: 'Ubicación',
  },

  // Footer
  'footer.rights': {
    en: 'All rights reserved',
    es: 'Todos los derechos reservados',
  },
  'footer.builtWith': {
    en: 'Built with Astro & Tailwind CSS',
    es: 'Construido con Astro y Tailwind CSS',
  },

  // Language toggle
  'lang.spanish': {
    en: 'Spanish',
    es: 'Español',
  },
  'lang.english': {
    en: 'English',
    es: 'Inglés',
  },

  // Theme toggle
  'theme.light': {
    en: 'Light',
    es: 'Claro',
  },
  'theme.dark': {
    en: 'Dark',
    es: 'Oscuro',
  },
  'theme.toggle': {
    en: 'Toggle theme',
    es: 'Cambiar tema',
  },
};

export function getTranslation(key: string, lang: Language): string {
  return translations[key]?.[lang] ?? key;
}
