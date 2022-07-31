import React, { useEffect, useState } from "react";
import { getToDoList, addNewTask, deleteTask } from "./services";

function App() {
  const [list, setList] = useState();
  const [newTask, setNewTask] = useState('')
  const [inEditing, setInEditing] = useState(false)
  const [editing, setEditing] = useState({ id: '', task: ''})
  // const [taskEditing, setTaskEditing] = useState('')


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
      const builtTask = { id: Date.now(), task: newTask};
      setList([...list, builtTask]);
      addNewTask(builtTask);
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

  const openingEdit = (taskToEdit) => {
    setInEditing(true);
    setEditing(taskToEdit);
  }
  // handleEdit

  return (
    <main>
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Adicionar tarefa:
          <br/>
          <input
            type="text"
            value={newTask}
            onChange={({target}) => setNewTask(target.value)}
            placeholder="Ex: Comprar pão"
          />
        </label>
      </form>
      {inEditing && (
        <form>
          <label>
            Editar tarefa:
          <br/>
          <input
            type="text"
            value={editing.task}
            onChange={({target}) => setEditing({...editing, task: target.value})}
          />
        </label>
        </form>
      )}
      {list && list.length === 0 && <p>Ufa... Uma folga! Você não possui tarefas no momento.</p>}
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
              <button
                type="button"
                onClick={() => openingEdit({id, task})}
              >
                Editar
              </button>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}

export default App;
