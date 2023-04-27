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
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: 'esbuild-loader',
        options: {
          target: 'es2015',
        },
      },
    ],
  },
};

export default defineConfig(config);
