import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
// import dts from 'unplugin-dts/vite'
// import typescript2 from "rollup-plugin-typescript2"

const rootDir = resolve(__dirname, '..', '..', '..');
const outDir = resolve(rootDir, 'custom-elements', 'single-response-item');

export default defineConfig({
  plugins: [
    solid(),

    // TODO - trying to create declaration files, nothing is working

    // dts({
    //   bundleTypes: true,
    //   include: [
    //     resolve(rootDir, "typings/**/*.d.ts"),
    //     './src/**/*.component.tsx'
    //   ]
    // })
    // typescript2({
    //   tsconfigOverride: {
    //     noEmits: true,
    //     emitDeclarationOnly: true
    //   }
    // })
    // {
    //   ... typescript2({
    //     include: [
    //       resolve(rootDir, "typings/**/*.d.ts"),
    //       './src/**/*.component.tsx'
    //     ],
    //     tsconfig: resolve(rootDir, 'tsconfig.json'),
    //     tsconfigOverride: {
    //       declaration: true,
    //       noEmit: true,
    //       // emitDeclarationOnly: true
    //     }
    //   }),
    //   enforce: 'post'
    // }
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'iife'],
      name: 'AcerSingleResponseItem'
    },
    outDir: outDir,
    minify: false,
    rollupOptions: {
      // external: ['@response-components/input-response'],
      output: {
        // globals: {
        //   '@response-components/input-response': 'AcerInputResponse'
        // }
      }
    }
  }
})
