import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://hernando.pinzon.dev',
  base: '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
