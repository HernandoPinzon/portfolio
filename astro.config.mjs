import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://hernandopinzon.github.io', // si el repo NO se llama usuario.github.io
  base: '/portfolio/',
  vite: {
    plugins: [tailwindcss()],
  },
});
