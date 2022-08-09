const control = require('../services/basicControl.js');

async function getAll(_req,res) {
  const { code, data } = await control.getAllTask();
  return res.status(code).json(data);
};

async function createTask(req,res) {
  const { newTask } = req.body;
  const { code, data } = await control.addTask(newTask);
  return res.status(code).json(data);
};

async function editedTask(req,res) {
  const { id, newTask } = req.body;
  const { code, data, message } = await control.editionTask(id, newTask);
  if(!data) {
    return res.status(code).json({ message });
  };
  return res.status(code).json(data);
};

async function deleteTask(req,res) {
  const { id } = req.params;
  const { code, data, message } = await control.removeTask(id);
  if(!data) {
    return res.status(code).json({ message });
  };
  return res.status(code).json(data);
};

module.exports = { getAll, createTask, editedTask, deleteTask };