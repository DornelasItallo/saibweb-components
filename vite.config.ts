import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const config = {
  build: {
    lib: {
      entry: './src',
      name: '@saibweb/saibweb-components',
    },
  },
  plugins: [react()],
};

export default defineConfig(config);
