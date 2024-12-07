// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { getImages } from '@utils/getImages.js';


// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	site: 'https://gnartb.github.io',
	resolve: {
		alias: {
		  '@utils': './src/utils', // Optional: Define a custom path alias
		},
	  },
});


  