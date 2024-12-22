import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['swiper', 'swiper/react', 'swiper/css'], // Pre-bundling specific dependencies
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Separate React-related libraries into a vendor chunk
          swiper: ['swiper', 'swiper/react', 'swiper/css'], // Separate Swiper library into its own chunk
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase the warning limit to suppress warnings for chunks under 1000 kB
  },
});
