import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import sass from 'vite-plugin-sass';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), sass()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
		host: true,
    port: 11000
  },
	publicDir: "../MediaBucket/"
})
