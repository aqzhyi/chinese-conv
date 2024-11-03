import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import packageJson from './package.json'

export default defineConfig(({ command, mode, isPreview, isSsrBuild }) => {
  return {
    plugins: [dts({ rollupTypes: true })],
    build: {
      lib: {
        entry: './src/index.ts',
        name: toCamelCase(packageJson.name),
        fileName: (format) => {
          return format === 'es' ? 'index.js' : `index.${format}.js`
        },
      },
      outDir: './dist',
    },
  }
})

function toCamelCase(str: string): string {
  return str.replace(/@/g, '').replace(/[/-]./g, (match) => match.charAt(1).toUpperCase())
}
