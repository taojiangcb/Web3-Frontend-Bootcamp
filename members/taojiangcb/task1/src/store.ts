import React from "react";
import { Todo as Todo } from "./defined-object";


interface ITodoStore {
  todos: Todo[];
  addTodo: (task: Todo) => void;
  changeTodo: (id: string, text: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoStore = React.createContext<ITodoStore>({
  todos: [],
  addTodo: () => { },
  changeTodo: () => { },
  deleteTodo: () => { }
})

export default TodoStore