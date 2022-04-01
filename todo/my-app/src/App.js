import React from 'react'
import './App.css'
import Todo from './Todo'
import { useState } from 'react'


function App() {
  const [task, setTask] = useState('');
  const [data, setData] = useState([])

  const inputHandler = (e) => {
    setTask(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (!task) {
      document.getElementById('abc').style.borderColor = "red";
    } else {
      const newdata = task;
      setData([...data, newdata])
      setTask('')
      document.getElementById('abc').style.borderColor = "";
    }

  }

  return (
    <>
      <div className='container'>
        <div className='row'>
          <h1>Todo App</h1>
          <input id="abc" type="text"placeholder='your todo' value={task} onChange={inputHandler} />
          <button onClick={submitHandler}>submit</button>
        </div>
        <h3>Todo</h3>
        {
          data.map((value, index) => {
            return <Todo
              key={index}
              id={index}
              task={value}
            />
          })
        }
        <Todo todoList={data} />
      </div>


    </>
  )
}

export default App