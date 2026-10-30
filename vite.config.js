import adapter from "@sveltejs/adapter-static";
import { sveltekit } from "@sveltejs/kit/vite";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";
import { defineConfig } from "vite";
import { mdsvexConfig } from "./mdsvex.config.js";

export default defineConfig({
  plugins: [
    sveltekit({
      extensions: [".svelte", ...mdsvexConfig.extensions],
      preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],
      adapter: adapter({ pages: "build", assets: "build" }),
    }),
  ],
});
