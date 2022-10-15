import { defineConfig } from 'vitest/config'
import { resolve } from 'path'
export default defineConfig({
  test: {
    globals: true,
  },
  resolve: {
    alias: [
      {
        find: /@mini-vue\/(\w*)/,
        replacement: resolve(__dirname, 'packages') + '/$1/src',
      },
    ],
  },
})
