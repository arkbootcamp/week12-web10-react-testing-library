import React, { useState } from 'react'

const Todo = () => {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  
  const handleAddTodo = ()=>{
    setTimeout(()=>{
      setTodos([...todos, todo])
      setTodo('')
    }, 2000)
   
  }
  return (
    <div>
      {todos.length !== 0 ? <ul>
        {todos.map((item, index) =>
          <li data-testid="listdata" key={index}>{item}</li>
        )}
      </ul>: null}
      
      <p data-testid="ket">jumlah pekerjaan saya = {todos.length}</p>
      <input type="text" value={todo} name="name" placeholder="masukan nama anda" onChange={(e)=>setTodo(e.target.value)} />
      
      <button onClick={handleAddTodo}>Add</button>
    </div>
  )
}

export default Todo