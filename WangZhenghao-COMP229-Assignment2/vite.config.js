// Vite configuration: enables the React plugin (JSX + Fast Refresh).
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Base path is set to './' so the built site works from any folder or GitHub Pages.
  base: './',
});
