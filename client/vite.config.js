import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  server:{
    port:3000,
    proxy:{
      "/api": {
        target: "https://localhost:8800",
        changeOrigin: true,
      },
    },
  },
}); 
