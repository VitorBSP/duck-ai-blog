---
name: duck-accessible-science
description: Traduzir estatistica, probabilidade, modelagem e IA para artigos cristalinos onde fazer o leitor entender a mensagem certa vale mais do que jargao tecnico impecavel.
---

# Ciência Entendível Primeiro (`duck-accessible-science`)

## O Princípio Central da Duck AI
> **Melhor do que uma frase 100% blindada para um parecerista chato (mas que ninguém entende) é uma explicação clara que faz a mensagem certa ficar na cabeça do leitor.**

Isso **não** significa inventar nem distorcer a ciência. Significa usar **simplificação honesta**: explicar o mecanismo real em linguagem cotidiana, preservando o sentido verdadeiro da incerteza e dos limites do método.

## O Método da Escada de 3 Degraus
Todo conceito técnico (Monte Carlo, Poisson, intervalo de confiança, data leakage, overfitting, margem de erro) deve subir nesta ordem:

1. **Degrau 1: A cena que o leitor já viveu (Concreto)**
   - Nunca comece pela definição formal.
   - Exemplo (*Simulação de Monte Carlo*): comece perguntando "se você pudesse jogar as últimas 5 rodadas do Brasileirão 10 mil vezes seguidas, em quantas delas o seu time escapa?".
   - Exemplo (*Data Leakage*): comece dizendo "é como estudar para uma prova olhando o gabarito antes e achar que virou gênio porque tirou 10".

2. **Degrau 2: A mecânica em palavras comuns (Intuição)**
   - Só dê o nome técnico **depois** que a imagem mental já funcionou: *"Na estatística, essa ideia de repetir o campeonato milhares de vezes no computador tem nome chique: simulação de Monte Carlo."*
   - Limite o artigo a **no máximo 2 ou 3 conceitos técnicos centrais**. Se o texto precisa de um glossário inteiro, o escopo está grande demais; divida em dois posts.

3. **Degrau 3: A simplificação honesta + porta opcional para o rigor (Profundidade sem travar)**
   - Use marcadores leves de honestidade sem soar pedante ("na prática, funciona bem parecido com...", "é uma simplificação, claro, porque no campo existe expulsão e lesão, mas ela captura a maior parte do jogo").
   - Se quiser agradar o leitor mais técnico (estatístico ou dev), coloque a equação, o detalhe da distribuição ou o link do código em um pequeno bloco separado no final (ex.: `### Para quem quer ver a conta`). O texto principal continua liso.

## O Teste da Mesa de Bar
Antes de aprovar qualquer parágrafo explicativo, faça duas perguntas:
1. *"Se eu lesse esse parágrafo em voz alta para um amigo inteligente que não é da área de dados, ele entenderia de primeira ou franziria a testa?"*
2. *"Se o leitor fechar a aba agora e explicar esse artigo para outra pessoa no almoço, qual frase ele vai repetir?"*

Se a resposta da pergunta 1 for "vai franzir a testa", reescreva trocando substantivos abstratos por exemplos numéricos pequenos (ex.: "15% de chance significa que, a cada 7 campeonatos parecidos, isso acontece em cerca de 1. Não é milagre, é só raro").
