import React, { useContext } from 'react';
import Todo from './Todo';
import CtxTodo from './CtxTodo';

const Todos = () => {

  const [todos, setTodos] = useContext(CtxTodo);

  return(
    <div>
      {todos.map((todo, index) => {
        return <Todo title={todo.title} description={todo.description} index={index} />
      })}
    </div>
  )
}

export default Todos;
