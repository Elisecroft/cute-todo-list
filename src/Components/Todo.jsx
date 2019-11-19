import React, { useContext } from 'react';
import CtxTodo from './CtxTodo';

const Todo = (props) => {

  const [todos, setTodos] = useContext(CtxTodo);

  const todoDelete = () => {
    let newTodos = [...todos];
    newTodos.splice(props.index, 1);
    setTodos(newTodos);
    localStorage.setItem('CuteTodos', JSON.stringify(newTodos));
  }

  return(
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <button className="btn btn-danger" onClick={todoDelete}>Delete</button>
      </div>
    </div>
  )
}

export default Todo;
