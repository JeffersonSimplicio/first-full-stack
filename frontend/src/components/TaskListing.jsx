import React, { useContext } from 'react';
import { deleteTask } from '../services/index';
import ToDoContext from '../context/ToDoContext';

function TaskListing() {
  const {
    list,
    setList,
    setInEditing,
    setEditing
  } = useContext(ToDoContext);

  const handleDelete = async (id) => {
    await deleteTask(id);
    const filteredList = list.filter((task) => task.id !== id);
    setList(filteredList);
  };

  const openingEdit = (taskToEdit) => {
    setInEditing(true);
    setEditing(taskToEdit);
  };

  return (
    <>
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
    </>
  );
}

export default TaskListing;
