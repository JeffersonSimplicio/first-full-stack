const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = 3001;

// default, excluir ápos a implementasção
const toDo = [
  {id: 1, toDo: 'Compar pão'},
  {id: 2, toDo: 'Colocar roupa na lavadora'},
  {id: 3, toDo: 'Deixar criaças na escola'},
  {id: 4, toDo: 'Reaunião as 9h30'},
  {id: 5, toDo: 'Mandar projeto para revisão'},
]

app.get('/to-do', (req, res) => {
  return res
    .status(200)
    .json(toDo);
})

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});