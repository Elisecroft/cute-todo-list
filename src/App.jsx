import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import FormTodo from './Components/FormTodo';
import CtxTodo from './Components/CtxTodo';
import Todos from './Components/Todos';
import Modify from './Components/Modify';
import Header from './Components/Header';

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const addOriginal = () => {
      let original = [{title: 'Example of todo', description: 'It\'s just an example todo, do it what you want !'}];
      if (localStorage.hasOwnProperty('CuteTodos')) {
        if (localStorage.getItem('CuteTodos').length > 0) {
          original = JSON.parse(localStorage.getItem('CuteTodos'));
        }
      } else {
        localStorage.setItem('CuteTodos', JSON.stringify(original));
      }
      setTodos(original);
    };

    addOriginal();
  }, []);
  
  return (
    <div className="App">
      <Header/>
      <div className="container p-2">
        <CtxTodo.Provider value={[todos, setTodos]}>
          <Switch>
            <Route exact path='/' component={Todos}/>
            <Route path='/create' component={FormTodo}/>
            <Route path='/todo/:id' component={Modify}/>
          </Switch>
        </CtxTodo.Provider>
      </div>
    </div>
  );
}

export default App;
