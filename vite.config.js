import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'env-css-breakpoints',
        enforce: 'pre',
        transform(code, id) {
          if (id.endsWith('.css')) {
            return code
              .replace(/__BP_MOBILE__/g, env.VITE_BP_MOBILE || '768px')
              .replace(/__BP_IPAD__/g, env.VITE_BP_IPAD || '1024px')
              .replace(/__BP_LANDSCAPE__/g, env.VITE_BP_LANDSCAPE || '1440px');
          }
        }
      }
    ],
  }
})
