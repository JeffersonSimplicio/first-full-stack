export async function getToDoList() {
  const dataRaw = await fetch("http://localhost:3001/to-do");
  const data = await dataRaw.json();
  return data;
}

export async function addNewTask(newTask) {
  await fetch("http://localhost:3001/to-do/create", {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      newTask,
    })
  })
}
