import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import packageJson from "./package.json" with { type: "json" };

const __dirname = dirname(fileURLToPath(import.meta.url));
const externalDependencies = [...Object.keys(packageJson.peerDependencies ?? {})];
const externalDependenciesRegex = externalDependencies.map((dep) => new RegExp(`^${dep}(/.*)?`));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "lib/index.mts"),
      formats: ["es"],
      fileName: () => "index.mjs",
    },
    rollupOptions: {
      external: externalDependenciesRegex,
    },
  },
});
