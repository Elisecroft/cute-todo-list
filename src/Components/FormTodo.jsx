import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import CtxTodo from './CtxTodo';

const FormTodo = () => {

  const [todos, setTodos] = useContext(CtxTodo);

  const [form, setForm] = useState({
    title: '',
    description: '',
    kitty: 'angel',
  });

  const addTodo = () => {
    let newTodos = [...todos, form];
    setTodos(newTodos);
    localStorage.setItem('CuteTodos', JSON.stringify(newTodos));
    setForm({
      title: '',
      description: '',
      kitty: 'angel',
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
        <div className="form-group">
          <label htmlFor="kitty">Choose a kitty icon</label>
          <select className="form-control" id="kitty" onChange={(e) => setForm({...form, kitty: e.target.value})}>
            <option>angel</option>
            <option>book</option>
            <option>bubble</option>
            <option>coffee</option>
            <option>cook</option>
            <option>doctor</option>
            <option>evil</option>
            <option>fish</option>
            <option>flower</option>
            <option>ice</option>
            <option>love</option>
            <option>music</option>
            <option>party</option>
            <option>pc</option>
            <option>pencil</option>
            <option>pirate</option>
            <option>scared</option>
            <option>sleep</option>
            <option>space</option>
            <option>super</option>
          </select>
        </div>
        <Link to='/'>
          <button className="btn btn-primary" onClick={addTodo}>Add</button>
        </Link>
      </div>
    </div>
  )
}

export default FormTodo;
