const fs = require('fs').promises;
const DBSimulator = './data/toDoList.json';


async function fileReader() {
  const resultRaw = await fs.readFile(DBSimulator, 'utf-8');
  const result = await JSON.parse(resultRaw);
  return result;
}

async function addNewTask(newTask) {
  let biggestId;
  const toDoList = await fileReader(DBSimulator);
  if (toDoList.length === 0) {
    biggestId = -1;
  } else {
    const idList = toDoList.map((speaker) => speaker.id);
    biggestId = Math.max.apply(null, idList);
  }
  const taskWithId = { id: biggestId + 1, task: newTask}
  toDoList.push(taskWithId);
  await fs.writeFile(DBSimulator, JSON.stringify(toDoList));
  return taskWithId;
}

async function taskEditor(id, newTask) {
  const editedTask = { id, task: newTask };
  const toDoList = await fileReader(DBSimulator);
  const taskIndex = toDoList
    .findIndex((task) => task.id === parseInt(id));
  toDoList[taskIndex] = editedTask;
  fs.writeFile(DBSimulator, JSON.stringify(toDoList));
  return editedTask;
}

async function deleteTask(id) {
  const toDoList = await fileReader(DBSimulator);
  const newTaskList = toDoList
    .filter((task) => task.id !== parseInt(id));
  await fs.writeFile(DBSimulator, JSON.stringify(newTaskList));
}


module.exports = {
  fileReader,
  addNewTask,
  taskEditor,
  deleteTask,
};
