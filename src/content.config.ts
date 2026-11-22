import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const RADAR_ALLOWED_DOMAINS = [
	'tse.jus.br',
	'dadosabertos.tse.jus.br',
	'ibge.gov.br',
	'camara.leg.br',
	'senado.leg.br',
	'radar-eleitoral-web-one.vercel.app',
	'agenciabrasil.ebc.com.br',
];

function isAllowedRadarSource(urlStr: string): boolean {
	try {
		const host = new URL(urlStr).hostname.toLowerCase();
		return RADAR_ALLOWED_DOMAINS.some((d) => host === d || host.endsWith('.' + d));
	} catch {
		return false;
	}
}

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z
		.object({
			title: z.string().min(10),
			description: z.string().min(30).max(200),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			project: z.enum(['blog-central', 'ainda-da', 'radar-eleitoral']),
			campaign_id: z
				.string()
				.regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}-[a-z0-9-]+$/, 'Use formato YYYY-MM-DD-slug'),
			tags: z.array(z.string()).min(1).max(6),
			readingTimeMinutes: z.number().int().min(1).max(45).default(5),
			primarySources: z
				.array(
					z.object({
						label: z.string().min(3),
						url: z.string().url(),
					})
				)
				.default([]),
			methodologyNote: z.string().optional(),
			ctaLabel: z.string().optional(),
			ctaUrl: z.string().url().optional(),
			heroImage: z.string().optional(),
			draft: z.boolean().default(false),
		})
		.superRefine((data, ctx) => {
			// Quality Gate em tempo de build para Radar Eleitoral
			if (data.project === 'radar-eleitoral') {
				if (data.primarySources.length === 0) {
					ctx.addIssue({
						code: z.ZodIssueCode.custom,
						path: ['primarySources'],
						message: 'Artigos do Radar Eleitoral exigem ao menos 1 fonte primária oficial.',
					});
				}
				for (const src of data.primarySources) {
					if (!isAllowedRadarSource(src.url)) {
						ctx.addIssue({
							code: z.ZodIssueCode.custom,
							path: ['primarySources'],
							message: `Fonte fora da allowlist oficial do Radar Eleitoral: ${src.url}`,
						});
					}
				}
				if (!data.methodologyNote || data.methodologyNote.trim().length < 20) {
					ctx.addIssue({
						code: z.ZodIssueCode.custom,
						path: ['methodologyNote'],
						message: 'Artigos do Radar Eleitoral exigem methodologyNote preenchida.',
					});
				}
			}
		}),
});

export const collections = { blog };
