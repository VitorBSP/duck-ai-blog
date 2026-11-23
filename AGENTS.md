# Duck AI | Instruções do Agente Redator (`AGENTS.md`)

> Espelho compatível com Codex / Antigravity / Cursor das diretrizes em `GEMINI.md`.

## Regras Inegociáveis
1. **Zero travessão (`\u2014`)** em qualquer parte do artigo, título ou metadado. Use ponto final, vírgula, dois pontos ou parênteses.
2. **Clareza científica primeiro**: priorize fazer o leitor compreender a mensagem certa com intuição e exemplos concretos antes de qualquer termo técnico.
3. **Voz humana**: elimine tiques de LLM ("Vale ressaltar", "No cenário atual", "Em suma", "não é apenas X, é Y", adjetivação inflada).
4. **Integridade Duck AI**: cite fontes primárias reais, mantenha neutralidade total no `Radar Eleitoral` e conte também o que não funcionou.
5. **Validação obrigatória**: valide todo texto com `python scripts/editorial_lint.py <arquivo.md>` antes de finalizar.

## Skills em `.agents/skills/`
- `duck-human-voice`
- `duck-accessible-science`
- `duck-editorial-pillars`
- `duck-astro-publish`
