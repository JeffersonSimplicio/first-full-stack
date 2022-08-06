import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ToDoProvider from './context/ToDoProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ToDoProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ToDoProvider>
);