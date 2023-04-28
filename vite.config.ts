import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "es2017",
    lib: {
      entry: "src/main.ts",
      formats: ["es"],
    },
  },
  plugins: [
    svelte({
      configFile: false,
      preprocess: [sveltePreprocess({ typescript: true })],
      compilerOptions: {
        css: "injected",
        customElement: true,
      },
    }),
  ],
});
