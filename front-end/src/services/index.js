export async function getToDoList() {
  const dataRaw = await fetch("http://localhost:3001/books");
  const data = await dataRaw.json();
  return data;
}