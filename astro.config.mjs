import { defineConfig } from 'astro/config';
import UnoCSS from '@unocss/astro';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [UnoCSS({
    injectReset: true,
    // or a path to the reset file
    theme: {
      extend: {
        colors: {
          gray: {
            900: '#1a1a1a'
          }
        }
      }
    },
    // 开启暗模式
    darkMode: 'class' // 或者 'media'
  }), react()]
});