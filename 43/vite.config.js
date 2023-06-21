// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        PRE_PROD: resolve(__dirname, 'pages/pre_prod.html'),
        PROD: resolve(__dirname, 'pages/prod.html'),
        POST_PROD: resolve(__dirname, 'pages/post_prod.html'),
      },
    },
  },
  server: {
    open: '/index.html',
  },
})