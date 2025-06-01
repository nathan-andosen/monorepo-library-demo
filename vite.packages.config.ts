import { dirname, resolve, join } from 'node:path'
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

const inputResponseDir = join(__dirname, 'packages', 'response-components', 
  'input-response');
const indexPath = resolve(inputResponseDir, 'src', 'index.tsx');
const outDir = resolve(inputResponseDir, 'dist');

export default defineConfig({
  plugins: [solid()],
  build: {
    lib: {
      entry: indexPath,
      fileName: 'input-response',
      formats: ['es', 'iife'],
      name: 'AcerInputResponse'
    },
    minify: false,
    outDir: outDir
  }
})