import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const config = {
  build: {
    lib: {
      entry: './src/index.ts',
      name: '@saibweb/saibweb-components',
    },
  },
  plugins: [
    react({
      include: ['./src/**/*.tsx'],
    }),
    react({
      include: ['./node_modules/**/*.svelte'],
    }),
  ],
};

export default defineConfig(config);
