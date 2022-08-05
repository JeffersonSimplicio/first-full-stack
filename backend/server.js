const express = require('express');
const cors = require('cors');
const { fileReader, addNewTask, taskEditor, deleteTask } = require('./service/crud')
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const HTTP_OK = Number(process.env.HTTP_OK_STATUS); // 200
const HTTP_CREATED = Number(process.env.HTTP_CREATED_STATUS); // 201
 // 204 NÃO PERMITE RESPOSTA
const HTTP_NO_CONTENT = Number(process.env.HTTP_NO_CONTENT_STATUS); // 204
const API_PORT = Number(process.env.API_PORT) || 3001;
const DBSimulator = '../toDoList.json'
// [{id: 123, task: "exemplo de tarefa"}]

app.get('/to-do', async (_req, res) => {
  const toDoList = await fileReader(DBSimulator)
  return res
    .status(HTTP_OK)
    .json(toDoList);
});

app.post('/to-do/create', async (req, res) => {
  const { newTask } = req.body;
  const taskObject = await addNewTask(DBSimulator, newTask);
  res
    .status(HTTP_CREATED)
    .json(taskObject);
});

app.put('/to-do/edit/', async (req, res) => {
  const editedTask = req.body;
  const result = await taskEditor(DBSimulator, editedTask);
  // WIP: trabalhar o renorno em caso de id não encontrado
  // if (validation === -1) {
  //   erro
  // }
  res.status(HTTP_OK).json(result);
});

app.delete('/to-do/delete/:id', async (req, res) => {
  const { id } = req.params;
  await deleteTask(DBSimulator, id);
  res.status(HTTP_NO_CONTENT).end();
});

app.listen(API_PORT, () => {
  console.log(`Aplicação ouvindo na porta ${API_PORT}`);
});