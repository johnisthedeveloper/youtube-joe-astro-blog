import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  markdown: {},
  integrations: [mdx(), solidJs()]
});