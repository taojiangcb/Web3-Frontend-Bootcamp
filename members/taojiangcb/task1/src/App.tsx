import { useState, useEffect, useMemo } from 'react'
import './App.css'
import Header from './Header'
import { Todo } from './defined-object'
import TodoStore from './store';
import AddToDo from './AddToDo';
import { LOCAL_STORE_KEY } from './constants';


function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const json_str = localStorage.getItem(LOCAL_STORE_KEY);
    const todos = JSON.parse(json_str || '[]');
    return todos;
  });

  const initStore = useMemo(() => {
    function toSave(todos: Todo[]) {
      localStorage.setItem(LOCAL_STORE_KEY, JSON.stringify(todos || []));
    }

    function setStore(todos: Todo[]) {
      setTodos(todos)
      toSave(todos);
    }

    const addTodo = (todo: Todo) => {
      setStore([...todos, todo]);
    };

    const deleteTodo = (id: string) => {
      setStore(todos.filter((todo) => todo.id !== id));
    };

    const changeTodo = (id: string, text: string) => {
      setStore(todos.map((todo) => todo.id === id ? { ...todo, text } : todo));
    }
    return {
      todos,
      addTodo,
      deleteTodo,
      changeTodo
    }
  }, [todos]);

  return <div>
    <Header title="TODO List" />
    <TodoStore.Provider value={initStore}>
      <AddToDo/>
      <div className="todo-list">
      </div>
    </TodoStore.Provider>
  </div>
}

export default App;
