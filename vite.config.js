import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'static-html-handler',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url?.startsWith('/papers-explainer/')) {
            const filePath = path.join(__dirname, 'public', req.url)
            // 如果是目录，尝试 index.html
            let targetPath = filePath
            if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
              targetPath = path.join(filePath, 'index.html')
            }
            if (fs.existsSync(targetPath)) {
              res.setHeader('Content-Type', 'text/html')
              res.end(fs.readFileSync(targetPath))
              return
            }
          }
          return next()
        })
      }
    }
  ],
  base: process.env.GITHUB_PAGES ? '/nsfc-62176129/' : '/',
  build: {
    outDir: 'dist',
  },
})
