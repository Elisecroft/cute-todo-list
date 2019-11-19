import React, { useState } from 'react';
import './App.css';
import FormTodo from './Components/FormTodo';
import CtxTodo from './Components/CtxTodo';
import Todos from './Components/Todos';

function App() {

  const [todos, setTodos] = useState([{
    title: 'First Example',
    description: 'Its just an example',
  }, {
    title: 'Second Example',
    description: 'An other example',
  }]);

  return (
    <div className="App container p-2">
      <CtxTodo.Provider value={[todos, setTodos]}>
        <Todos/>
        <FormTodo/>
      </CtxTodo.Provider>
    </div>
  );
}

export default App;
