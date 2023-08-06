import path from 'path';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import devtoolsPlugin from 'solid-devtools/vite';

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  plugins: [
    devtoolsPlugin(),
    solidPlugin(),
    splitVendorChunkPlugin(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true,
  },
  resolve: {
    conditions: ['development', 'browser'],
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
});
