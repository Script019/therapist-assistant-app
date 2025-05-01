import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/therapist-assistant-app/',
  plugins: [react()],
});
