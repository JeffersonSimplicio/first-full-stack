const control = require('../services/basicControl.js');
const config = require('../utils/constants');

async function getAll(_req,res) {
  const allTasks = await control.getAllTask();
  return res.status(config.HTTP_OK).json(allTasks);
};

async function createTask(req,res) {
  const { newTask } = req.body;
  const result = await control.addTask(newTask);
  if(result.message) {
    return res.status(config.HTTP_BAD_REQUEST).json(result.message);
  };
  return res.status(config.HTTP_CREATED).json(result);
};

async function editedTask(req,res) {
  const { id } = req.params;
  const { newTask } = req.body;
  const result = await control.editionTask(id, newTask);
  if(result.message) {
    if (result.message === 'Id Not Found!' ) {
      return res.status(config.HTTP_NOT_FOUND).json(result.message);
    }
    return res.status(config.HTTP_BAD_REQUEST).json(result.message);
  };
  return res.status(config.HTTP_OK).json(result);
};

async function deleteTask(req,res) {
  const { id } = req.params;
  const result = await control.removeTask(id);
  if(result.message) {
    if (result.message === 'Id Not Found!' ) {
      return res.status(config.HTTP_NOT_FOUND).json(result.message);
    }
    return res.status(config.HTTP_BAD_REQUEST).json(result.message);
  };
  return res.status(config.HTTP_NO_CONTENT).end();
};

module.exports = { getAll, createTask, editedTask, deleteTask };