
import react from '@vitejs/plugin-react';
import path from 'path';

import { defineConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';

const config = {
  build: {
    manifest: true,
    minify: true,
    reportCompressedSize: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@saibweb/saibweb-components',
    }
  },
  plugins: [react(), viteTsconfigPaths()],
};

export default defineConfig(config);
