// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
	// Atualize para seu domínio próprio assim que apontar na Cloudflare Pages
	site: 'https://duck-ai-blog.pages.dev',
	integrations: [mdx(), sitemap()],
	markdown: {
		shikiConfig: {
			theme: 'github-dark-default',
			wrap: true,
		},
	},
});
