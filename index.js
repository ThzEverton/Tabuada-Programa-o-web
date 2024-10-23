const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  // Pega o número da tabuada e a sequência da URL (com padrão 10 se não for informado)
  const number = req.query.number ? parseInt(req.query.number) : 10;
  const sequence = req.query.sequence ? parseInt(req.query.sequence) : 10;

  // Cria a resposta com a tabuada
  let response = `<h1>Tabuada do ${number}</h1><ul>`;
  for (let i = 1; i <= sequence; i++) {
    response += `<li>${number} x ${i} = ${number * i}</li>`;
  }
  response += '</ul>';

  // Envia a resposta para o navegador
  res.send(response);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
