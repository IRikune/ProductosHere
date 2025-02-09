// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

import { imageService } from '@unpic/astro/service';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  output: 'static',

  image: {
    service: imageService(),
  },
  integrations: [
    preact({
      include: ["src/components/**/*.{jsx,tsx}"]
    })],

  vite: {
    plugins: [tailwindcss()]
  }
});