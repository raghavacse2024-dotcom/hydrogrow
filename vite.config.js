import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default {
  // ...
  build: {
    rollupOptions: {
      external: ['some-large-external-package']
    }
  }
}
