import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CtxTodo from './CtxTodo';
import './Todo.css';

const Todo = (props) => {

  const [todos, setTodos] = useContext(CtxTodo);

  const alertDelete = () => {
    if (window.confirm('Are you sure to delete this todo ?')) {
      todoDelete();
    }
  }

  const todoDelete = () => {
    let newTodos = [...todos];
    newTodos.splice(props.index, 1);
    setTodos(newTodos);
    localStorage.setItem('CuteTodos', JSON.stringify(newTodos));
  }

  return(
    <div className="card mb-5 todo">
      <div className="card-body">
        <img src={`${process.env.PUBLIC_URL}/assets/images/kitty-${props.kitten}.png`} alt={props.kitten}/>
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <button className="btn btn-danger mr-4" onClick={alertDelete}>Delete</button>
        <Link to={{ pathname: `/todo/${props.index}`, state: { title: props.title, description: props.description, kitten: props.kitten, index: props.index}}}>
          <button className="btn btn-warning">Modify</button>
        </Link>
      </div>
    </div>
  )
}

export default Todo;
