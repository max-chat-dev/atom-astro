import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import { loadConfigFromFile } from 'vite';

// Load Vite configuration
const viteConfig = await loadConfigFromFile({ command: 'serve' }, './vite.config.js');

export default defineConfig({
  integrations: [tailwind(), react()],
  site: 'https://anarchy.ai',
  vite: viteConfig.config,
});
