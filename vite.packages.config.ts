import { resolve, join } from 'node:path'
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import dts from 'unplugin-dts/vite'

const inputResponseDir = join(__dirname, 'components', 'response-elements',
  'input-response');
const indexPath = resolve(inputResponseDir, 'src', 'index.tsx');
// const outDir = resolve(inputResponseDir, 'dist');
const outDir = resolve(__dirname, 'custom-elements');
const itemComponentsDir = join(__dirname, 'components', 'items');

export default defineConfig({
  plugins: [solid(), dts({
    include: [
      "typings/**/*.d.ts",
      '**/*.component.tsx'
    ]
  })],//{ bundleTypes: true, tsconfigPath: './tsconfig.json' })],
  build: {
    lib: {
      entry: {
        "singleResponseItem": resolve(itemComponentsDir, 'single-response-item', 'src', 'index.ts'),
        "multiResponseItem": resolve(itemComponentsDir, 'multi-response-item', 'src', 'index.ts')
      },
      fileName: 'input-response',
      formats: ['es'], //['es', 'iife'],
      name: 'AcerInputResponse'
    },
    minify: false,
    outDir: outDir,
    rollupOptions: {
      output: {
        entryFileNames: () => '[name].mjs',
        // dir: outDir
      }
    }
  }
})