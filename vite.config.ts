import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  // server: {
  //    host: '0.0.0.0', // Allow to run in local
  // },
  plugins: [react()],
  assetsInclude: ['**/*.json'], // Include JSON files in the build this is to add the I18n translations
});
