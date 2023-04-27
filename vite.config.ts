import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

const config = {
  build: {
    lib: {
      entry: './src/index.ts',
      name: '@saibweb/saibweb-components',
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'saibweb-components.ts',
  },
  plugins: [react()],
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: 'raw-loader',
        include: [path.resolve(__dirname, './src', 'components')],
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
        exclude: [
          path.resolve(__dirname, '../', 'client'),
          path.resolve(__dirname, 'node_modules', 'cas-mt4-reader-renderer'),
          path.resolve(__dirname, 'node_modules', 'cas-mdoc-renderer'),
        ],
      },
      {
        test: /((.module).)*css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
              localsConvention: 'camelCase',
              sourceMap: true,
            },
          },
          'postcss-loader',
        ],
        include: [
          path.resolve(__dirname, '../', 'client'),
          path.resolve(__dirname, 'node_modules', 'cas-mt4-reader-renderer'),
          path.resolve(__dirname, 'node_modules', 'cas-mdoc-renderer'),
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css'],
  },
};

export default defineConfig(config);
