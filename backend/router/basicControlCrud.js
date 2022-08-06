const express = require('express');
const router = express.Router();
const rescue = require('../rescue');
require('dotenv').config();
const { fileReader, addNewTask, taskEditor, deleteTask } = require('../Models/crud');

const HTTP_OK = Number(process.env.HTTP_OK_STATUS); // 200
const HTTP_CREATED = Number(process.env.HTTP_CREATED_STATUS); // 201
const HTTP_NO_CONTENT = Number(process.env.HTTP_NO_CONTENT_STATUS); // 204
const HTTP_NOT_FOUND = Number(process.env.HTTP_NOT_FOUND_STATUS); // 404
const DBSimulator = '../toDoList.json';
// [{id: 123, task: "exemplo de tarefa"}]

router.get('/', rescue(async (_req, res) => {
  const toDoList = await fileReader(DBSimulator)
  return res.status(HTTP_OK).json(toDoList);
}));

router.post('/create', rescue(async (req, res) => {
  const { newTask } = req.body;
  const taskObject = await addNewTask(DBSimulator, newTask);
  res.status(HTTP_CREATED).json(taskObject);
}));

router.put('/edit/', rescue(async (req, res) => {
  const editedTask = req.body;
  const result = await taskEditor(DBSimulator, editedTask);
  if (result === -1) {
    return res.status(HTTP_NOT_FOUND).json({ message: 'Id Not Found' });
  }
  res.status(HTTP_OK).json(result);
}));

router.delete('/delete/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const result = await deleteTask(DBSimulator, id);
  if (result === -1) {
    return res.status(HTTP_NOT_FOUND).json({ message: 'Id Not Found' });
  }
  res.status(HTTP_NO_CONTENT).end();
}));

module.exports = router;
