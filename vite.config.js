import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  // Especifica la carpeta base del proyecto
  base: "/flores-amarillas/",
  // Especifica el directorio donde se generará el código compilado
  build: {
    outDir: "dist",
  },
  // Configura los plugins de Vite
  plugins: [react()],
});
