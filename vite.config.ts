import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import tsConfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vite';
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";


const config = {
  plugins: [
    dts({
      include: ['src/'],
      insertTypesEntry: true,
    }),
    react(),
    tsConfigPaths(),
  ],
  build: {
    manifest: true,
    minify: true,
    reportCompressedSize: true,
    lib: {
      entry: './src/index',
      name: '@saibweb/saibweb-components',
    },
    rollupOptions: {
      plugins: [
        peerDepsExternal(),
        // typescript({ useTsconfigDeclarationDir: true }),
        resolve(),
        commonjs(),
        postcss({
          extensions: ['.css']
        })
      ],
    },
  },
};

export default defineConfig(config);
