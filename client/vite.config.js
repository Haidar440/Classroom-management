import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './src/main.js',
        vendor: './public/vendors/js/vendor.bundle.base.js',
      },
    },
  },
  plugins: [react()],
})
