import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // plugins: [
  //   tailwindcss()
  // ],
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
