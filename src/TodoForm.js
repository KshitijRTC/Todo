import React, { useState } from 'react'
import TodoList from './TodoList';

function TodoForm() {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([])

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const addTodo = () => {
        setInput("")
    }
  return (
    <div>
        <input value={input} onChange={handleChange} placeholder='Write your task here...'></input>
        <button onClick={addTodo}>Add Todo</button>
        <TodoList />
    </div>
  )
}

export default TodoForm