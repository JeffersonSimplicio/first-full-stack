const {
  fileReader,
  addNewTask,
  taskEditor,
  deleteTask
} = require('../models/crud');
const { validator, schemaTask, schemaId } = require('../utils/schema')

async function getAllTask() {
  const allTasks = await fileReader();
  return allTasks;
}

async function addTask(newTask) {
  const validatedTask = validator(schemaTask, newTask);
  if (validatedTask.message) {
    return { message: validatedTask.message };
  };
  const createdTask = await addNewTask(validatedTask.data);
  return createdTask;
};

async function editionTask(id, newTask) {
  const {data: dataTask, message: messageTask } = validator(schemaTask, newTask);
  const {data: dataId, message: messageId } = validator(schemaId, id);
  if (messageTask || messageId) {
    return { message: messageTask || messageId };
  }

  const allTasks = await fileReader();
  const taskIndex = allTasks
    .findIndex((task) => task.id === dataId);
  if (taskIndex === -1) {
    return { message: 'Id Not Found!' };
  };
  const editedTask = await taskEditor(dataId, dataTask);
  return editedTask;
};

async function removeTask(id) {
  const validatedId = validator(schemaId, id);
  if (validatedId.message) {
    return { message: validatedId.message };
  };

  const allTasks = await fileReader();
  const taskIndex = allTasks
    .findIndex((task) => task.id === validatedId.data);
  if (taskIndex === -1) {
    return { message: 'Id Not Found!' };
  };
  await deleteTask(validatedId.data);
  return true;
};


module.exports = { getAllTask, addTask, editionTask, removeTask };
