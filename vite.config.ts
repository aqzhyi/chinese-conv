import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import packageJson from './package.json' with { type: 'json' }

export default defineConfig({
  plugins: [
    dts({
      rollupTypes: true,
      outDir: 'dist',
      include: ['src/**/*']
    })
  ],
  build: {
    lib: {
      entry: './src/index.ts',
      name: toCamelCase(packageJson.name),
      formats: ['es', 'cjs'],
      fileName: (format) => {
        return format === 'es' ? 'index.js' : `index.cjs`
      },
    },
    outDir: './dist',
    sourcemap: true,
    rollupOptions: {
      external: [],
      output: {
        globals: {}
      }
    }
  },
})

function toCamelCase(str: string): string {
  return str.replace(/@/g, '').replace(/[/-]./g, (match) => match.charAt(1).toUpperCase())
}
