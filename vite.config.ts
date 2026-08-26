import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use relative base ('./') so assets load correctly on both standard GitHub Pages
// paths (/GMS-Roadmap/) and private GitHub Pages domain redirects (which serve from root /).
export default defineConfig({
  base: './',
  plugins: [react()],
});
