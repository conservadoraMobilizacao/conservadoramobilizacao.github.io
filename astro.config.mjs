import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

const host = "https://mobilizacaoconservadora.github.io"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: host
});