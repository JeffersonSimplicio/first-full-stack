const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3001;

// default, excluir ápos a implementasção
const toDoList = [];

app.get('/to-do', (req, res) => {
  return res
    .status(200)
    .json(toDoList);
});

app.post('/to-do/create', (req, res) => {
  const { newTask } = req.body;
  const toDo = { id: Date.now(), task: newTask};
  toDoList.push(toDo);
  res
    .status(201)
    .json({ message: 'Recipe created successfully!'});
});

app.delete('/to-do/delete/:id', function (req, res) {
  const { id } = req.params;
  const taskIndex = toDoList.findIndex((task) => task.id === Number(id));
  toDoList.splice(taskIndex, 1);
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});