import express from 'express'; // Importação do express como módulo

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  // Pega o número da tabuada e a sequência da URL (com padrão 10 se não for informado)
  const number = req.query.number ? parseInt(req.query.number) : 10;
  const sequence = req.query.sequence ? parseInt(req.query.sequence) : 10;

  // Instruções para o usuário
  let instructions = `
    <h1>Instruções</h1>
    <p>Para usar a aplicação, adicione os parâmetros <strong>number</strong> e <strong>sequence</strong> à URL:</p>
    <ul>
      <li><strong>number</strong>: Número da tabuada que deseja gerar (padrão: 10).</li>
      <li><strong>sequence</strong>: Quantidade de multiplicações que deseja exibir (padrão: 10).</li>
    </ul>
    <p>Exemplo de uso: <code>http://localhost:${port}/?number=5&sequence=12</code></p>
    <hr>
  `;

  // Cria a resposta com a tabuada
  let response = `<h1>Tabuada do ${number}</h1><ul>`;
  for (let i = 1; i <= sequence; i++) {
    response += `<li>${number} x ${i} = ${number * i}</li>`;
  }
  response += '</ul>';

  // Exibe as instruções e a tabuada
  res.send(instructions + response);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
