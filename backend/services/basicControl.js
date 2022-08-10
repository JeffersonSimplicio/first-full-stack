const config = require('../utils/constants');
const {
  fileReader,
  addNewTask,
  taskEditor,
  deleteTask
} = require('../models/crud');
const { validator, schemaTask, schemaId } = require('../utils/schema')

async function getAllTask() {
  const allTasks = await fileReader();
  return { code: config.HTTP_OK, data: allTasks };
}

async function addTask(newTask) {
  const validatedTask = validator(schemaTask, newTask);
  if (validatedTask.message) {
    const { message } = validatedTask;
    return { code: config.HTTP_BAD_REQUEST, message };
  };
  const createdTask = await addNewTask(validatedTask.data);
  return { code: config.HTTP_CREATED, data: [ createdTask ] };
};

async function editionTask(id, newTask) {
  //Ta com BO
  const validatedTask = validator(schemaTask, newTask);
  if (validatedTask.message) {
    const { message } = validatedTask;
    return { code: config.HTTP_BAD_REQUEST, message };
  };

  const validatedId = validator(schemaId, id);
  if (validatedId.message) {
    const { message } = validatedId;
    return { code: config.HTTP_BAD_REQUEST, message };
  };

  const allTasks = await fileReader();
  const taskIndex = allTasks
    .findIndex((task) => task.id === validatedId.data);
  if (taskIndex === -1) {
    return { code: config.HTTP_NOT_FOUND, message: 'Id Not Found!' };
  };
  const editedTask = await taskEditor(validatedId.data, validatedTask.data);
  return { code: config.HTTP_OK, data: [ editedTask ] };
};

async function removeTask(id) {
  const validatedId = validator(schemaId, id);
  if (validatedId.message) {
    const { message } = validatedId;
    return { code: config.HTTP_BAD_REQUEST, message };
  };

  const allTasks = await fileReader();
  const taskIndex = allTasks
    .findIndex((task) => task.id === validatedId.data);
  if (taskIndex === -1) {
    return { code: config.HTTP_NOT_FOUND, message: 'Id Not Found!' };
  };
  await deleteTask(validatedId.data);
  return { code: config.HTTP_NO_CONTENT }
};


module.exports = { getAllTask, addTask, editionTask, removeTask };
