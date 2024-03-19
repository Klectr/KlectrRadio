/// <reference types="vitest" />
import { defineConfig } from "vite"
import kaioken from "vite-plugin-kaioken"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [kaioken()],
  esbuild: {
    jsxInject: `import * as kaioken from "kaioken"`,
    jsx: "transform",
    jsxFactory: "kaioken.createElement",
    jsxFragment: "kaioken.fragment",
    loader: "tsx",
    include: ["**/*.tsx", "**/*.ts", "**/*.jsx", "**/*.js"],
  },
  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
  envPrefix: ["VITE_", "TAURI_"],
  test: {
    exclude: ["src-tauri/**/*", "node_modules"],
    globals: true,
    environment: "jsdom",
  },
})
