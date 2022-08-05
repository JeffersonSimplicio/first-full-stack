const express = require('express');
const router = express.Router();
require('dotenv').config();
const { fileReader, addNewTask, taskEditor, deleteTask } = require('../service/crud');

const HTTP_OK = Number(process.env.HTTP_OK_STATUS); // 200
const HTTP_CREATED = Number(process.env.HTTP_CREATED_STATUS); // 201
 // 204 NÃO PERMITE RESPOSTA
const HTTP_NO_CONTENT = Number(process.env.HTTP_NO_CONTENT_STATUS); // 204
const DBSimulator = '../toDoList.json';
// [{id: 123, task: "exemplo de tarefa"}]

router.get('/', async (_req, res) => {
  const toDoList = await fileReader(DBSimulator)
  return res.status(HTTP_OK).json(toDoList);
});

router.post('/create', async (req, res) => {
  const { newTask } = req.body;
  const taskObject = await addNewTask(DBSimulator, newTask);
  res.status(HTTP_CREATED).json(taskObject);
});

router.put('/edit/', async (req, res) => {
  const editedTask = req.body;
  const result = await taskEditor(DBSimulator, editedTask);
  // WIP: trabalhar o renorno em caso de id não encontrado
  // if (validation === -1) {
  //   erro
  // }
  res.status(HTTP_OK).json(result);
});

router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  await deleteTask(DBSimulator, id);
  res.status(HTTP_NO_CONTENT).end();
});

module.exports = router;
