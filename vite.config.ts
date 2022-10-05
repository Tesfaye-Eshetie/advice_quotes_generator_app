import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/advice_quotes_generator_app/",
  plugins: [react()],
});
