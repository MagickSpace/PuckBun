import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({
    applyBaseStyles: false
  }), alpinejs(), partytown({
    config: { debug: true },
  }),]
});