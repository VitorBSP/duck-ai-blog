export const SITE_TITLE = 'Duck AI';
export const SITE_TAGLINE = 'Estatística, IA e Open Code aplicados a produtos reais.';
export const SITE_DESCRIPTION =
	'Estatística, IA e Open Code na prática: bastidores de engenharia, probabilidades no futebol (Ainda Dá) e modelagem eleitoral (Radar Eleitoral) por Vítor Pereira.';
export const AUTHOR_NAME = 'Vítor Pereira';
export const BRAND_HANDLE_LABEL = 'Vítor Pereira | Duck AI';
export const X_PROFILE_URL = 'https://x.com/'; // Atualize com seu @ assim que criar o perfil
export const GITHUB_URL = 'https://github.com/vitorbsp';

// URL do formulário da Brevo / MailerLite (Fase 1 — substituir pelo endpoint real no Passo 4)
export const NEWSLETTER_ACTION_URL = '';

export type ProjectKey = 'blog-central' | 'ainda-da' | 'radar-eleitoral';

export interface ProjectMeta {
	id: ProjectKey;
	name: string;
	shortLabel: string;
	tagline: string;
	description: string;
	url: string;
	status: 'Ativo · Fase 1' | 'Hub Editorial';
	focus: string;
}

export const PHASE1_PROJECTS: Record<ProjectKey, ProjectMeta> = {
	'blog-central': {
		id: 'blog-central',
		name: 'Duck AI — Blog Central',
		shortLabel: 'Duck AI',
		tagline: 'Estatística, IA e Open Code em público',
		description:
			'Bastidores técnicos de arquitetura, automação de baixo custo e experimentos de monetização de produtos digitais.',
		url: '/blog',
		status: 'Hub Editorial',
		focus: 'IA & Open Code',
	},
	'ainda-da': {
		id: 'ainda-da',
		name: 'Ainda Dá',
		shortLabel: 'Ainda Dá',
		tagline: 'Probabilidades matemáticas no futebol brasileiro',
		description:
			'Simulações estatísticas de chances de título, classificação e risco de rebaixamento calculadas rodada a rodada.',
		url: 'https://vitorbsp.github.io/aindada/',
		status: 'Ativo · Fase 1',
		focus: 'Probabilidades & Futebol',
	},
	'radar-eleitoral': {
		id: 'radar-eleitoral',
		name: 'Radar Eleitoral',
		shortLabel: 'Radar Eleitoral',
		tagline: 'Modelagem estatística e transparência eleitoral',
		description:
			'Análise neutra, metodológica e verificável construída sobre séries históricas e bases oficiais do TSE e do IBGE.',
		url: 'https://radar-eleitoral-web-one.vercel.app/',
		status: 'Ativo · Fase 1',
		focus: 'Estatística & Modelagem',
	},
};

export interface RoadmapProject {
	name: string;
	niche: string;
	stage: string;
	summary: string;
}

export const PHASE2_ROADMAP: RoadmapProject[] = [
	{
		name: 'Robô do Cartola',
		niche: 'Fantasy & Estatística Esportiva',
		stage: 'Fase 2 · Sinergia direta com Ainda Dá',
		summary: 'Análises automatizadas de pontuação esperada e escalações orientadas por dados por rodada.',
	},
	{
		name: 'Atlas do Estudo',
		niche: 'Educação & Concursos',
		stage: 'Fase 2 · Recorrência & SEO',
		summary: 'Planejamento inteligente de revisões e mapeamento de editais com foco em retenção.',
	},
	{
		name: 'Viajador',
		niche: 'Turismo & Planejamento',
		stage: 'Fase 2 · Conteúdo orgânico & Afiliados',
		summary: 'Comparativos de rotas, custos e roteiros otimizados para viajantes independentes.',
	},
	{
		name: 'Paulo Transportes',
		niche: 'Serviços & Logística',
		stage: 'Fase 2 · Geração de leads locais',
		summary: 'Páginas regionais de alta intenção conectadas a atendimento rápido e orçamentos.',
	},
];

export function buildUtmUrl(baseUrl: string, campaignId: string, medium = 'cta'): string {
	try {
		const u = new URL(baseUrl);
		u.searchParams.set('utm_source', 'duckai_blog');
		u.searchParams.set('utm_medium', medium);
		u.searchParams.set('utm_campaign', campaignId);
		return u.toString();
	} catch {
		return baseUrl;
	}
}
