import React, { useEffect, useState } from "react";
import { getToDoList, addNewTask } from "./services";

function App() {
  const [list, setList] = useState();
  const [newTask, setNewTask] = useState('')

  useEffect(() => {
    async function getTasks() {
      const characters = await getToDoList();
      setList(characters);
    }
    getTasks();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask !== '') {
      addNewTask(newTask);
      setList([...list, { id: Date.now(), task: newTask}]);
      setNewTask('');
    } else{
      alert('Não é possível adicionar uma tarefa vazia. Por favor, digite algo!');
    }
  }

  return (
    <main>
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Adicionar tarefa:
          <br/>
          <input
            type="text"
            id="User"
            value={newTask}
            onChange={({target}) => setNewTask(target.value)}
            placeholder="Ex: Comprar pão"
          />
        </label>
      </form>
      {list && (
        <section>
          {list.map(({id, task}) => (
            <p key={id}>{task}</p>
          ))}
        </section>
      )}
    </main>
  );
}

export default App;
