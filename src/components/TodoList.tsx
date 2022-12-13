import React from 'react'
import { Todo } from '../models';
import './style.css';

interface Props{
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList:React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div className='todos'>
      {todos.map(
        todo => todo)
      )}
    </div>
  )
}

export default TodoList