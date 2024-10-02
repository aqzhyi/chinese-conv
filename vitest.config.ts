/// <reference types="vitest" />
import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
  test: {
    coverage: {
      exclude: ['*.mjs', '*.config.*', 'dist', '**/*.d.ts', '**/node_modules/**'],
    },
  },
})
