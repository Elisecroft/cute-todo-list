import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import CtxTodo from './CtxTodo';

const Modify = (props) => {

  const {title} = props.location.state;
  const {description} = props.location.state;
  const {kitty} = props.location.state;
  const {index} = props.location.state;

  const [todos, setTodos] = useContext(CtxTodo);

  const [form, setForm] = useState({
    title: {title}.title,
    description: {description}.description,
    kitty: {kitty}.kitty,
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
        <div className="form-group">
          <label htmlFor="kitty">Choose a kitty icon</label>
          <select className="form-control" value={form.kitty} id="kitty" onChange={(e) => setForm({...form, kitty: e.target.value})}>
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
        <Link to='/'><button className="btn btn-secondary" onClick={todoMofify}>Apply</button></Link>
      </div>
    </div>
  )
}

export default Modify;
