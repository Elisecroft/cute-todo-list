import React, { useState, useContext } from 'react';
import CtxTodo from './CtxTodo';

const FormTodo = () => {

  const [todos, setTodos] = useContext(CtxTodo);

  const [form, setForm] = useState({
    title: '',
    description: '',
  });

  const addTodo = () => {
    setTodos([...todos, form]);
    setForm({
      title: '',
      description: '',
    });
  }

  return(
    <div className="card mb-3">
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="Title">Title</label>
          <input type="text"
          className="form-control" 
          id="Title"
          onChange={(e) => setForm({...form, title: e.target.value})}
          value={form.title}/>
        </div>
        <div className="form-group">
          <label htmlFor="Description">Description</label>
          <input type="text" 
          className="form-control" 
          id="Description" 
          onChange={(e) => setForm({...form, description: e.target.value})}
          value={form.description}/>
        </div>
        <button className="btn btn-primary" onClick={addTodo}>Add</button>
      </div>
    </div>
  )
}

export default FormTodo;
