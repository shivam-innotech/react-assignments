import React from 'react'
import { useState } from 'react'
import Showtodo from './Showtodo'

function ToDo() {
  const [task, setTask] = useState('')
  const [data, setData] = useState([])
  const onChangeHandler = (e) => {
    setTask(e.target.value)

  }

  const submitHandler = (e) => {
    e.preventDefault()
    const newdata = task;
    setData([...data, newdata])

    setTask('')
    
  }

  const deleteItem = (id) => {
    const finalData = data.filter((curElm, index) => {
      return index !== id
    })
    setData(finalData)
  }

  return (
    <>
      <main>
        <div className="todo-container">
          <h3>ToDo</h3>
          <input type="text" placeholder='add some task' value={task} onChange={onChangeHandler} />
          <button type='submit' onClick={submitHandler}>add todo</button>
          {
            data.map((value, index) => {
              return <Showtodo
                key={index}
                id={index}
                task={value}
                onSelect={deleteItem}
              />
            })
          }
        </div>
      </main>
    </>
  )
}

export default ToDo