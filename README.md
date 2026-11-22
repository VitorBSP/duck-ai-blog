# Duck AI — Blog Central (Astro + MDX)

Blog editorial da marca **Vítor Pereira | Duck AI**, construído em **Astro + MDX** com **Vanilla CSS** (modo claro e escuro), Quality Gate em tempo de build via **Zod** e deploy gratuito na **Cloudflare Pages**.

## Deploy gratuito na Cloudflare Pages (2 cliques)
1. Suba este repositório no GitHub (`vitorbsp/duck-ai-blog`).
2. No painel da **Cloudflare Pages** → *Workers & Pages → Create → Pages → Connect to Git*:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** `22`
3. Depois de ativar o domínio próprio (ou o subdomínio `.pages.dev`), atualize `site` em `astro.config.mjs` e `site_url` em `cerebro-operacao/config/projects/blog-central.json`.

## Identidade Visual em 3 Níveis (`public/brand/`)
- **Uso Comum / Principal:** `public/brand/logo-duck-ai.png` (ícone puro para cabeçalho/favicon) + `public/brand/logo-duck-ai-padrao.png` e `public/brand/avatar-x-400x400.png` (ícone + wordmark **Duck AI** para avatar do X)
- **Versão Expandida (Horizontal):** `public/brand/logo-duck-ai-expandido.png` (pato Curva de Probabilidade + `Duck AI · ESTATÍSTICA · IA · OPEN CODE`)
- **Versão Tunada / PRO:** `public/brand/logo-duck-ai-pro.png` (pato geométrico facetado sobre petróleo escuro + badge **Duck AI PRO**)
- **Banner do X (`1500×500px` exato):** `public/brand/banner-x-1500x500.png` (`Duck AI · Estatística · IA · Open Code`)
- **Card Open Graph (`1200×630px`):** `public/brand/og-default.jpg`
- **Backup das 5 opções originais:** `public/brand/opcoes/`

## Contrato de Publicação para o Agente 2 (Editor)
- Todo novo artigo deve ser gravado em `src/content/blog/<slug>.mdx` via Pull Request (nunca direto na `main`).
- O schema Zod em `src/content.config.ts` bloqueia automaticamente o build de qualquer artigo `project: "radar-eleitoral"` que não tenha `primarySources` dentro da allowlist oficial (TSE/IBGE/Câmara/Senado/Agência Brasil/Radar Eleitoral) ou `methodologyNote` preenchida.
- Componentes MDX prontos em `src/components/mdx/`:
  - `<NotaMetodologica titulo="..." projeto="...">...</NotaMetodologica>`
  - `<CaixaCTA titulo="..." descricao="..." rotuloBotao="..." url="..." campaignId="..." />`
  - `<DestaqueMetrica itens={[...]} />`

## Comandos Locais
```bash
npm install
npm run dev      # servidor local de desenvolvimento
npm run build    # valida Zod + gera build estático em dist/
npm run preview  # serve dist/ localmente
```
