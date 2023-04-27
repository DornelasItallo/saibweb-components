import { defineConfig } from 'vite';

const config = {
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'saibweb-components',
    },
  },
};

export default defineConfig(config);
