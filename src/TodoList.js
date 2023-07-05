import React, { useState } from 'react'


function TodoList() {
    const [todos, setTodos] = useState(["walk the dog", "wash the car", "Buy vegetables"]);

    const removeTodo = (id) => {
        alert('todo removed!!!!!')
    }

    const updateTodo = (todo) => {
        console.log(document.getElementsByClassName('todo').innerHTML)
    }
  return (
    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems:'center', padding: '10px', backgroundColor: 'rgb(238, 238, 238)', width: '50%', margin: '20px auto', gap: '20px', borderRadius: '10px'}}>
        {todos.map(todo => {
            return <div style={{display:'flex', gap: '20px', border: '2px solid white', padding: '5px'}}>
                <div className='todo'>{todo}</div>
                <i className="bi bi-trash3" onClick={removeTodo}></i>
                <button onClick={updateTodo}>Update Todo</button>
            </div>
        })}
    </div>
  )
}

export default TodoList