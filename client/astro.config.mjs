// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

import react from '@astrojs/react';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), preact()],
  vite: {
    plugins: [
      tailwindcss()
    ]
  }
});