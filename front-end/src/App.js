import React, { useEffect, useState } from "react";
import { getToDoList } from "./services";

function App() {
  const [list, setList] = useState();

  useEffect(() => {
    async function getTasks() {
      const characters = await getToDoList();
      setList(characters);
    }
    getTasks();
  }, []);

  return (
    <main>
      <h1>To Do List</h1>
      {list && (
        <section>
          {list.map((toDo) => (
            <p key={toDo.id}>{toDo.task}</p>
          ))}
        </section>
      )}
    </main>
  );
}

export default App;
