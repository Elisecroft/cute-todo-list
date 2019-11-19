import React from 'react';

const FormTodo = () => {
  return(
    <div className="card mb-3">
      <div className="card-body">
        <div class="form-group">
          <label for="Title">Title</label>
          <input type="text" class="form-control" id="Title" placeholder="Title"/>
        </div>
        <div class="form-group">
          <label for="Description">Description</label>
          <input type="text" class="form-control" id="Description" placeholder="Description"/>
        </div>
        <button className="btn btn-primary">Add</button>
      </div>
    </div>
  )
}

export default FormTodo;
