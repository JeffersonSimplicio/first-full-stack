const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3001;

// default, excluir ápos a implementasção
const toDoList = [
  {id: 2, task: 'Colocar roupa na lavadora'},
  {id: 3, task: 'Deixar criaças na escola'},
  {id: 1, task: 'Compar pão'},
  {id: 4, task: 'Reaunião as 9h30'},
  {id: 5, task: 'Mandar projeto para revisão'},
]

app.get('/to-do', (req, res) => {
  return res
    .status(200)
    .json(toDoList);
})

app.post('/to-do/create', (req, res) => {
  const { newTask } = req.body;
  const toDo = { id: Date.now(), task: newTask};
  toDoList.push(toDo);
  res
    .status(201)
    .json({ message: 'Recipe created successfully!'});
})

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});