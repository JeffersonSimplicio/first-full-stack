import React, { useEffect, useState } from "react";
import { getToDoList, addNewTask, deleteTask } from "./services";

function App() {
  const [list, setList] = useState();
  const [newTask, setNewTask] = useState('')

  useEffect(() => {
    async function getTasks() {
      const tasks = await getToDoList();
      tasks.sort((x, y) => x.id - y.id);
      setList(tasks);
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
  };

  const handleDelete = (id) => {
    deleteTask(id);
    const filteredList = list.filter((task) => task.id !== id);
    setList(filteredList);
  };

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
      {list && list.length === 0 && <p>Você ainda não possui nehuma tarefa.</p>}
      {list && list.length > 0 && (
        <section>
          {list.map(({id, task}) => (
            <div key={id}>
              <p>{task}</p>
              <button
                type="button"
                onClick={() => handleDelete(id)}
              >
                Deletar
              </button>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}

export default App;
