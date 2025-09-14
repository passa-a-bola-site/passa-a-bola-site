import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",                 // build com caminhos relativos (abre o dist direto)
  plugins: [react()],

  server: {
    strictPort: false,        // se 5173 estiver ocupada, ele pula pra outra
    open: true
  },
  preview: {
    strictPort: false,
    open: true
  },

  build: {
    outDir: "dist",
    emptyOutDir: true
  }
});
