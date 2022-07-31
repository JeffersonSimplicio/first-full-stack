import React, { useEffect, useState } from "react";
import { getToDoList } from "./services";

function App() {
  const [list, setList] = useState();

  useEffect(() => {
    async function getToDo() {
      const characters = await getToDoList();
      setList(characters);
    }
    getToDo();
  }, []);

  return (
    <main>
      <h1>Olá, mundo!</h1>
      {list && (
        <section>
          {list.map((toDo) => (
            <p key={toDo.id}>{toDo.title}</p>
          ))}
        </section>
      )}
    </main>
  );
}

export default App;
