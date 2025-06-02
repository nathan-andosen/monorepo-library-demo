import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

const rootDir = resolve(__dirname, '..', '..');
const outDir = resolve(rootDir, 'custom-elements', 'items');

export default defineConfig({
  plugins: [
    solid()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'items.ts'),
      formats: ['es', 'iife'],
      name: 'AcerItems'
    },
    outDir: outDir,
    minify: false,
    rollupOptions: {
      output: [
        {
          format: 'es',
          entryFileNames: () => 'acer-items.[format].mjs'
        },{
          name: 'AcerItems',
          format: 'iife',
          entryFileNames: () => 'acer-items.[format].js'
        }
      ]
    }
  }
})
