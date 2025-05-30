import { dirname, resolve } from 'node:path'
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      formats: ['es', 'iife'],
      name: 'AcerInputResponse'
    },
    minify: false
  }
})