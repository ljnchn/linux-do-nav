import { defineConfig } from 'astro/config';
import UnoCSS from '@unocss/astro';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(), 
    tailwind()
  ]
});