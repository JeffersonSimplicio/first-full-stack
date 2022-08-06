import React, { useContext } from 'react';
import {editTask,} from '../services/index';
import ToDoContext from '../context/ToDoContext';

function TaskEditForm() {
  const {
    editing,
    list,
    setList,
    inEditing,
    setInEditing,
    setEditing,
    EMPTY_TASK,
  } = useContext(ToDoContext);

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
    <>
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
    </>
  );
}

export default TaskEditForm;