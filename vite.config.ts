import { defineConfig } from 'vite'
import dts from 'unplugin-dts/vite'
import packageJson from './package.json' with { type: 'json' }

export default defineConfig({
  plugins: [
    dts({
      bundleTypes: true,
      outDir: 'dist',
      include: ['src/**/*']
    })
  ],
  build: {
    lib: {
      entry: {
        index: './src/index.ts',
        phrase: './src/phrase.ts',
      },
      name: toCamelCase(packageJson.name),
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => {
        return format === 'es' ? `${entryName}.js` : `${entryName}.cjs`
      },
    },
    outDir: './dist',
    sourcemap: true,
    rolldownOptions: {
      output: {
        // Rolldown 預設 'auto' 不在 CJS 產物輸出 "use strict"；設 true 維持 Vite 7（Rollup）時期 CJS 的 strict mode 語意
        strict: true,
      },
    },
  },
})

function toCamelCase(str: string): string {
  return str.replace(/@/g, '').replace(/[/-]./g, (match) => match.charAt(1).toUpperCase())
}
