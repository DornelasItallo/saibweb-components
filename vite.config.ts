import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import tsConfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vite';


const config = {
  plugins: [
    dts(),
    react(),
    tsConfigPaths(),
  ],
  build: {
    reportCompressedSize: true,
    lib: {
      entry: './src/index',
      name: '@saibweb/saibweb-components',
    },
  },
};

export default defineConfig(config);
