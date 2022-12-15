import React from "react";
import { Todo } from "../models";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import "./style.css";

import {MdDone} from "react-icons/md"

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  return (
    <form className="todos__single">
      <span className="todos__single--Text">{todo.todo}</span>

      <div>
        <span className="icon">
          <AiFillEdit name="TS"/>
        </span>
        <span className="icon">
            <AiFillDelete />
        </span>
        <span className="icon">
            <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
