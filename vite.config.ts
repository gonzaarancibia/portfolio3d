import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.json'], // Incluye archivos JSON en el build esto es para agregar las translations de I18n
});
