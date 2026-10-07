# Tabuada Web — Express

Aplicação acadêmica simples em Node.js que gera uma tabuada dinamicamente a partir de parâmetros enviados pela URL.

## Como funciona

A rota principal aceita dois parâmetros:

- `number` — número da tabuada
- `sequence` — quantidade de multiplicações

Exemplo:

```text
/?number=5&sequence=12
```

Sem parâmetros, a aplicação utiliza o valor 10 para ambos.

## Stack

- Node.js
- Express
- JavaScript ES Modules

## Executando localmente

```bash
npm install
npm start
```

Depois acesse:

```text
http://localhost:3000
```

## Contexto

Projeto acadêmico criado para praticar rotas HTTP, query parameters e geração dinâmica de HTML com Express.
