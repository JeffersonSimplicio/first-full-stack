const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = 3001;

const books = [
	{ id: 1, title: 'O Senhor dos Anéis', author: 'J.R.R. Tolkien'},
	{ id: 2, title: 'Duna', author: 'Frank Herbert'},
	{ id: 3, title: 'Fundação', author: 'Isaac Asimov'},
	{ id: 4, title: 'O Homem do Castelo Alto', author: 'Philip K Dick'},
	{ id: 5, title: '1984', author: 'George Orwell'},
	{ id: 6, title: 'Admirável Mundo Novo', author: 'Aldous Huxley'}
];

app.get('/books', (req, res) => {
  return res
    .status(200)
    .json(books);
})

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});