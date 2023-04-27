import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const config = {
  build: {
    lib: {
      entry: './src/index.ts',
      name: '@saibweb/saibweb-components',
    },
  },
  plugins: [react()],
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  },
};

export default defineConfig(config);
