import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import packageJson from './package.json' with { type: 'json' }

export default defineConfig({
  plugins: [
    dts({
      rollupTypes: true,
      outDir: 'dist',
      include: ['src/**/*'],
      emitDtsFiles: true,
      beforeWriteFile: (filePath, content) => {
        // Create .d.cts copy for CJS require condition
        if (filePath.endsWith('.d.ts') && !filePath.includes('.d.mts')) {
          return [
            {
              filePath: filePath,
              content: content
            },
            {
              filePath: filePath.replace('.d.ts', '.d.cts'),
              content: content
            }
          ]
        }
        return {
          filePath: filePath,
          content: content
        }
      }
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
