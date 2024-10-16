import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, 
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Servidor da API local
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: 'dist', // Diretório onde o Vite irá gerar os arquivos de produção
    sourcemap: true, // Gera mapas de origem para facilitar o debug em produção
  },
  resolve: {
    alias: {
      // Definir alias para facilitar a importação de componentes e arquivos
      '@': '/src',
    },
  },
  define: {
    'process.env': {}, // Define variáveis de ambiente (se necessário)
  },
})
