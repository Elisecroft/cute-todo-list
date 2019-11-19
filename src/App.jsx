import React from 'react';
import './App.css';
import FormTodo from './Components/FormTodo';
import Todos from './Components/Todos';

function App() {
  return (
    <div className="App container p-2">
      <Todos/>
      <FormTodo/>
    </div>
  );
}

export default App;
