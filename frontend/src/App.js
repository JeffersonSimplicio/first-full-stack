import React from 'react';
import NewTaskForm from './components/NewTaskForm';
import TaskEditForm from './components/TaskEditForm';
import TaskListing from './components/TaskListing';

function App() {
  return (
    <main>
      <h1>To Do List</h1>
      <NewTaskForm />
      <TaskEditForm />
      <TaskListing />
    </main>
  );
}

export default App;
