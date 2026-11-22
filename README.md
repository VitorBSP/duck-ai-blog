# Duck AI — Blog Central (Astro + MDX)

Blog editorial da marca **Vítor Pereira | Duck AI**, construído em **Astro + MDX** com **Vanilla CSS** (modo claro e escuro), Quality Gate em tempo de build via **Zod** e deploy gratuito na **Cloudflare Pages**.

## Deploy gratuito na Cloudflare Pages (2 cliques)
1. Suba este repositório no GitHub (`vitorbsp/duck-ai-blog`).
2. No painel da **Cloudflare Pages** → *Workers & Pages → Create → Pages → Connect to Git*:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** `22`
3. Depois de ativar o domínio próprio (ou o subdomínio `.pages.dev`), atualize `site` em `astro.config.mjs` e `site_url` em `cerebro-operacao/config/projects/blog-central.json`.

## Identidade Visual & Assets Prontos (`public/brand/`)
- `public/brand/logo-duck-ai.png` — Vencedor da auditoria visual (**Monograma Editorial "D"**, 92/100)
- `public/brand/avatar-x-400x400.png` — Pronto para upload como foto de perfil no X (`Vítor Pereira | Duck AI`)
- `public/brand/banner-x-1500x500.png` — Recorte exato 3:1 (1500×500px) pronto para capa do X
- `public/brand/og-default.jpg` — Open Graph padrão (1200×630px)
- `public/brand/opcoes/` — Todas as 5 opções `v2` auditadas caso queira trocar o logo depois (basta sobrescrever `logo-duck-ai.png` e `avatar-x-400x400.png`)

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
