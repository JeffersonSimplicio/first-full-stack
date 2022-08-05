const fs = require('fs').promises;

async function fileReader(nameFile) {
  const resultRaw = await fs.readFile(nameFile, 'utf-8');
  const result = await JSON.parse(resultRaw);
  return result;
}

async function addNewTask(nameFile, newTask) {
  let biggestId;
  const toDoList = await fileReader(nameFile);
  if (toDoList.length === 0) {
    biggestId = -1;
  } else {
    const idList = toDoList.map((speaker) => speaker.id);
    biggestId = Math.max.apply(null, idList);
  }
  const taskWithId = { id: biggestId + 1, task: newTask}
  toDoList.push(taskWithId);
  await fs.writeFile(nameFile, JSON.stringify(toDoList));
  return taskWithId;
}

async function taskEditor(nameFile, newData) {
  const toDoList = await fileReader(nameFile);
  const taskIndex = toDoList
    .findIndex((task) => task.id === Number(newData.id));
  if (taskIndex === -1) return -1;
  toDoList[taskIndex] = { ...newData };
  fs.writeFile(nameFile, JSON.stringify(toDoList));
  return newData;
}

async function deleteTask(nameFile, idTask) {
  const toDoList = await fileReader(nameFile);
  const newTaskList = toDoList
    .filter((task) => task.id !== Number(idTask));
  fs.writeFile(nameFile, JSON.stringify(newTaskList));
}


module.exports = {
  fileReader,
  addNewTask,
  taskEditor,
  deleteTask,
};
