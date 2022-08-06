import React from 'react';
import TaskForm from './components/TaskForm';
import TaskListing from './components/TaskListing';

function App() {
  return (
    <main>
      <h1>To Do List</h1>
      <TaskForm />
      <TaskListing />
    </main>
  );
}

export default App;
