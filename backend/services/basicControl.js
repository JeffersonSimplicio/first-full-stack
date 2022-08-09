const config = require('../globalConfig');
const {
  fileReader,
  addNewTask,
  taskEditor,
  deleteTask
} = require('../models/crud');

async function getAllTask() {
  const allTasks = await fileReader();
  return { code: config.HTTP_OK, data: allTasks };
}

async function addTask(newTask) {
  const createdTask = await addNewTask(newTask);
  return { code: config.HTTP_CREATED, data: createdTask }
};

async function editionTask(id, newTask) {
  const allTasks = await fileReader();
  const taskIndex = allTasks
    .findIndex((task) => task.id === parseInt(id, 10));
  if (taskIndex === -1) {
    return { code: config.HTTP_NOT_FOUND, message: 'Id Not Found!' };
  };
  const editedTask = await taskEditor(id, newTask);
  return { code: config.HTTP_OK, data: editedTask };
};

async function removeTask(id) {
  const allTasks = await fileReader();
  const taskIndex = allTasks
    .findIndex((task) => task.id === parseInt(id, 10));
  if (taskIndex === -1) {
    return { code: config.HTTP_NOT_FOUND, message: 'Id Not Found!' };
  };
  await deleteTask(id);
  return { code: config.HTTP_NO_CONTENT }
};


module.exports = { getAllTask, addTask, editionTask, removeTask };