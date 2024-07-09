/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    // css: true,
  },
  resolve: {
    alias: {
      '@': '/src',
      '@shared': '/src/shared/',
      '@widgets': '/src/widgets/',
      '@entities': '/src/entities/',
      '@features': '/src/features/',
    },
  },
});
