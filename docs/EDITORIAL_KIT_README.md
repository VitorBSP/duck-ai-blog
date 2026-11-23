# Kit Editorial da Duck AI (`duck_ai_editorial_kit`)

Pacote pronto para o agente redator do blog da **Duck AI** (`https://duck-ai-blog.pages.dev/`), focado em:
1. **Escrita humana natural** (sem tiques de LLM, sem fórmulas repetitivas e com **zero travessão**).
2. **Divulgação científica que realmente ensina** (intuição e mensagem correta acima de pedantismo técnico).
3. **Alinhamento total com os pilares da Duck AI** (`Ainda Dá`, `Radar Eleitoral`, `Duck AI`, fontes primárias verificáveis e neutralidade analítica).
4. **Quality Gate determinístico** (`scripts/editorial_lint.py`) que trava automaticamente qualquer travessão, clichê de IA ou parede de texto antes de publicar no Astro.

## Como usar
1. Extraia `duck_ai_editorial_kit.zip` na raiz do repositório do blog da Duck AI (Astro).
2. Abra o projeto no Antigravity (ou Codex/Claude) e cole o prompt inicial de `docs/PROMPTS_ESCRITA.md`.
3. Sempre valide novos artigos com:
   ```bash
   python scripts/editorial_lint.py src/content/blog/seu-artigo.md
   ```
