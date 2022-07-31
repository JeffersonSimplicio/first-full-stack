export async function getToDoList() {
  const dataRaw = await fetch("http://localhost:3001/to-do");
  const data = await dataRaw.json();
  return data;
}