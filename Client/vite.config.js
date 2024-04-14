import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  // ...
  build: {
    target: 'esnext', // you can also use 'es2020' here
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext', // you can also use 'es2020' here
    },
  },
  base: './',
});
