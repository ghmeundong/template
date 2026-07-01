import { defineConfig } from "vite";
import path from "path";

const __dirname = path.resolve();

export default defineConfig({
  root: "./",
  publicDir: "public",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    "import.meta.env.VITE_API_URL": JSON.stringify(
      process.env.VITE_API_URL || "http://localhost:8787"
    ),
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    host: true,
    port: Number(process.env.PORT) || 5173,
    strictPort: false,
  },
});
