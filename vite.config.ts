import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows binding to 0.0.0.0
    port: 4173, // Optional: Specify a default port
    allowedHosts: ['shoehaven-6zch.onrender.com'], // Allow your Render host
  },
  preview: {
    allowedHosts: ['shoehaven-6zch.onrender.com'], // Allow your Render host for preview
  },
});
