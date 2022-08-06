import React, { useEffect, useState } from "react";
import { getToDoList, addNewTask, editTask, deleteTask } from "./services";

function App() {
  const [list, setList] = useState();
  const [newTask, setNewTask] = useState('')
  const [inEditing, setInEditing] = useState(false)
  const [editing, setEditing] = useState('')


  const EMPTY_TASK = 'Não é possível adicionar uma tarefa vazia. Por favor, digite algo!';

  useEffect(() => {
    async function getTasks() {
      const tasks = await getToDoList();
      tasks.sort((x, y) => x.id - y.id);
      setList(tasks);
    }
    getTasks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newTask !== '') {
      const responseRaw = await addNewTask(newTask);
      const response = await responseRaw.json();
      setList([...list, response]);
      setNewTask('');
    } else{
      alert(EMPTY_TASK);
    }
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    const filteredList = list.filter((task) => task.id !== id);
    setList(filteredList);
  };

  const openingEdit = (taskToEdit) => {
    setInEditing(true);
    setEditing(taskToEdit);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    if (editing.task !== '') {
      const responseRaw = await editTask(editing);
      const response = await responseRaw.json();
      const newList = [...list];
      const taskIndex = list.findIndex((task) => task.id === Number(editing.id));
      newList[taskIndex] = response;
      setList(newList);
      setInEditing(false);
      setEditing('');
    } else{
      alert(EMPTY_TASK);
    }
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
            value={newTask}
            onChange={({target}) => setNewTask(target.value)}
            placeholder="Ex: Comprar pão"
          />
        </label>
      </form>
      {inEditing && (
        <form  onSubmit={handleEdit}>
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
