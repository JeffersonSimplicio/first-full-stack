import React, { useEffect, useState } from 'react';
import toDoContext from './ToDoContext';
import { getToDoList } from '../services';

function ToDoProvider({ children }) {
  const [list, setList] = useState();
  const [editing, setEditing] = useState('');
  const [inEditing, setInEditing] = useState(false);
  const [newTask, setNewTask] = useState('')

  const EMPTY_TASK = 'Não é possível adicionar uma tarefa vazia. Por favor, digite algo!';


  useEffect(() => {
    async function getTasks() {
      const tasks = await getToDoList();
      tasks.sort((x, y) => x.id - y.id);
      setList(tasks);
    }
    getTasks();
  }, []);

  const context = {
    EMPTY_TASK,
    list,
    setList,
    editing,
    setEditing,
    inEditing,
    setInEditing,
    newTask,
    setNewTask,
  };

  return (
    <toDoContext.Provider value={ context }>
      {children}
    </toDoContext.Provider>
  );
}

export default ToDoProvider;