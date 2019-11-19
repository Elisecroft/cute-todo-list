import React, { useContext, useState } from 'react';
import CtxTodo from './CtxTodo';

const Modify = (props) => {

  const [todos, setTodos] = useContext(CtxTodo);

  const [form, setForm] = useState({
    title: props.title,
    description: props.description,
  });

  const todoMofify = () => {
    let newTodos = [...todos];
    newTodos[props.index] = form;
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
        <button className="btn btn-warning" onClick={todoMofify}>Apply</button>
      </div>
    </div>
  )
}

export default Modify;
