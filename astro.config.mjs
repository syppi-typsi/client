import { defineConfig } from 'astro/config';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  server: { host: 'syppi.localhost' },
  adapter: node({
    mode: "standalone"
  })
});