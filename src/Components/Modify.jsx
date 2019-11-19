import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import CtxTodo from './CtxTodo';

const Modify = (props) => {

  const {title} = props.location.state;
  const {description} = props.location.state;
  const {index} = props.location.state;

  const [todos, setTodos] = useContext(CtxTodo);

  const [form, setForm] = useState({
    title: {title}.title,
    description: {description}.description,
  });

  const todoMofify = () => {
    let newTodos = [...todos];
    newTodos[{index}.index] = form;
    setTodos(newTodos);
    localStorage.setItem('CuteTodos', JSON.stringify(newTodos));
  }

  return(
    <div className="card mb-3">
      <div className="card-body">
      <div className="form-group">
          <label htmlFor="Title">New Title</label>
          <input type="text"
          className="form-control" 
          id="Title"
          onChange={(e) => setForm({...form, title: e.target.value})}
          value={form.title}/>
        </div>
        <div className="form-group">
          <label htmlFor="Description"> New Description</label>
          <input type="text" 
          className="form-control" 
          id="Description" 
          onChange={(e) => setForm({...form, description: e.target.value})}
          value={form.description}/>
        </div>
        <Link exact to='/'><button className="btn btn-warning" onClick={todoMofify}>Apply</button></Link>
      </div>
    </div>
  )
}

export default Modify;
