import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'favicon-no-cache-dev',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url ?? ''
          if (url.includes('skilltrixa-favicon') || url.includes('favicon')) {
            res.setHeader('Cache-Control', 'no-store, max-age=0')
          }
          next()
        })
      },
    },
  ],
})
