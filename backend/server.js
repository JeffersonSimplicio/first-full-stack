const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3001;

const toDoList = [];
// [{id: 123, task: "exemplo de tarefa"}]

app.get('/to-do', (req, res) => {
  return res
    .status(200)
    .json(toDoList);
});

app.post('/to-do/create', (req, res) => {
  const { newTask } = req.body;
  toDoList.push(newTask);
  res
    .status(201)
    .json({ message: 'Recipe created successfully!'});
});

// app.put('/to-do/edit/:id', (req, res) => {
//   const { id } = req.params;
//   const { editedTask: task } = req.body;
//   const taskIndex = toDoList.findIndex((task) => task.id === Number(id));
//   toDoList[taskIndex] = { ...toDoList[taskIndex], task };
//   res.status(204).end();
// });

app.delete('/to-do/delete/:id', (req, res) => {
  const { id } = req.params;
  const taskIndex = toDoList.findIndex((task) => task.id === Number(id));
  toDoList.splice(taskIndex, 1);
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});