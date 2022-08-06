import React, { useContext } from 'react';
import { addNewTask, editTask } from '../services/index';
import ToDoContext from '../context/ToDoContext';

function TaskForm() {
  const {
    EMPTY_TASK,
    list,
    setList,
    newTask,
    setNewTask,
    editing,
    inEditing,
    setInEditing,
    setEditing,
  } = useContext(ToDoContext);

  const handleSubmit = async (e) => {
    if (newTask !== '') {
      const responseRaw = await addNewTask(newTask);
      const response = await responseRaw.json();
      setList([...list, response]);
      setNewTask('');
    } else{
      alert(EMPTY_TASK);
    }
  };

  const handleEdit = async (e) => {
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

  const functionSelector = async (e) => {
    e.preventDefault();
    if (inEditing) {
      handleEdit();
    } else {
      handleSubmit()
    }
  };

  const textControl = (value) => {
    if (inEditing) {
      setEditing({...editing, task: value});
    } else {
      setNewTask(value);
    }
  };

  return (
    <form onSubmit={functionSelector}>
      <label>
        {inEditing ? 'Editar tarefa:' : 'Adicionar tarefa:'}
        <br/>
        <input
          type="text"
          value={inEditing ? editing.task : newTask}
          onChange={({target}) => textControl(target.value)}
          placeholder={!inEditing ? 'Ex: Comprar pão' : ''}
        />
      </label>
    </form>
  );
}

export default TaskForm;