import React, { useContext } from 'react';
import { addNewTask } from '../services/index';
import ToDoContext from '../context/ToDoContext';

function NewTaskForm() {
  const {
    EMPTY_TASK,
    list,
    setList,
    newTask,
    setNewTask
  } = useContext(ToDoContext);

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

  return (
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
  );
}

export default NewTaskForm;