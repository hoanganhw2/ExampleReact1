import { useState, useEffect, use } from 'react'
import './Components/todo/todo.css'
import TodoNew from './Components/todo/TodoNew'
import TodoData from './Components/todo/TodoData'
import Logo from './assets/abc.jpg'

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning React" },
    { id: 2, name: "Whatching Youtube" },
  ]);

  const addNewTodo = (todoName) => {
    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      name: todoName
    };
    setTodoList([...todoList, newTodo]);
  }
  const deleteTodo = (id) => {
    setTodoList(todoList.filter(item => item.id !== id));
  }
  return (
    <div className='todo-container'>
      <header className='todo-header'>
        <img src={Logo} alt="todo" className='todo-logo' />
        <h1 className='todo-title'>Todo List</h1>
      </header>
      <main className='todo-main'>
        <TodoNew addNewTodo={addNewTodo} />
        <TodoData
          todoList={todoList} deleteTodo={deleteTodo}
        />
      </main>
    </div>
  )
}

export default App
