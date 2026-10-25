import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative assets work on GitHub Pages, including repository subdirectories.
export default defineConfig({ plugins: [react()], base: './' });
