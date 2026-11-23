---
name: duck-astro-publish
description: Estruturar artigos prontos para o blog Astro da Duck AI (frontmatter, ritmo web, titulos naturais, resumo honesto e execucao obrigatoria do editorial_lint.py).
---

# Publicação no Blog Astro da Duck AI (`duck-astro-publish`)

## 1. Estrutura Ideal de um Artigo da Duck AI (5 a 7 min de leitura)
1. **Abertura (2 a 3 parágrafos curtos)**: entre direto numa cena concreta, pergunta curiosa ou dado surpreendente. Sem aquecimento genérico.
2. **Desenvolvimento (3 a 4 seções com subtítulos claros)**:
   - Parágrafos curtos (2 a 4 linhas na tela do celular).
   - Use negrito com moderação para guiar o olhar, não para pintar metade do texto.
   - Prefira exemplos numéricos concretos e comparações simples a listas gigantes de bullet points.
3. **Caixa opcional de aprofundamento (`Para quem quer ver a conta` ou `Limitações do modelo`)**: mantém o rigor visível sem pesar o fluxo principal.
4. **Fechamento humano**: amarre com a ideia principal que o leitor deve guardar e, quando fizer sentido, convide para testar a ferramenta (`Ainda Dá`, `Radar Eleitoral`) ou conferir o código aberto no GitHub.

## 2. Regras de Título e Resumo (Frontmatter Astro)
- Antes de criar um arquivo novo, confira 1 post existente em `src/content/blog/` para espelhar exatamente os campos do schema Astro (`title`, `description`, `pubDate`, `category`, etc.).
- **Títulos**: claros, curtos (ideal até 65 caracteres), humanos e **sem travessão**. Evite repetir o formato `Tema: por que X importa mais que Y`.
- **Description**: 1 a 2 frases diretas dizendo o que o leitor vai entender ao ler o texto.

## 3. Quality Gate Obrigatório Antes de Entregar
Rode sempre:
```bash
python scripts/editorial_lint.py caminho/do/artigo.md
```
- **Bloqueio automático (`valid: false`)**: qualquer travessão (`\u2014`) ou meia-risca usada como aposto (` \u2013 `).
- **Revisão obrigatória**: revise todos os avisos de clichês de IA, frases acima de 38 palavras ou parágrafos muito longos (>95 palavras) antes de considerar o texto finalizado.
