// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

import react from '@astrojs/react';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  integrations: [react({
    include: "./src/components/react/**/*.tsx"
  }), preact({
    include: "./src/components/**/*.tsx",
    exclude: "./src/components/react/**/*.tsx"
  })],
  vite: {
    plugins: [
      tailwindcss()
    ]
  }
});