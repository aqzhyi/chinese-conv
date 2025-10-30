/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      exclude: ['*.mjs', '*.config.*', 'dist', '**/*.d.ts', '**/node_modules/**'],
    },
  },
})
