import typescript from '@rollup/plugin-typescript';


import { typescriptPaths } from 'rollup-plugin-typescript-paths';
import { defineConfig } from 'vite';


const config = {
  build: {
    manifest: true,
    minify: true,
    reportCompressedSize: true,
    lib: {
      entry: './src/index',
      name: '@saibweb/saibweb-components',
    },
    rollupOptions: {
      external: [],
      plugins: [
        typescriptPaths({
          preserveExtensions: true,
        }),
        typescript({
          sourceMap: false,
          declaration: true,
          outDir: 'dist',
        }),
      ],
      output: {
        sourcemapExcludeSources: true,
      },
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};

export default defineConfig(config);
