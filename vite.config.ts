 import { defineConfig } from 'vite'
      import react from '@vitejs/plugin-react'

      // https://vitejs.dev/config/
      export default defineConfig({
        plugins: [react()],
        assetsInclude: ['**/*.glb', '**/*.MP4', '**/*.mp4', '**/*.webm', '**/*.MOV', '**/*.mov'],
        server: {
          port: 5173,
          strictPort: true
        },
        preview: {
          port: 5173
        }
      })