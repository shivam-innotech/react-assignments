import React,{useState} from 'react'

const Addtodo = ({addTodo}) => {
    const[title,setTitle]=useState()

    const handleSubmit=(e)=>{
     e.preventDefault()
     const newTodo = { id: Math.random(), title: title, done: false }
        addTodo(newTodo)
        setTitle("")
    }
  return (
    <>
    <div className="container">
        <div className="row">
          <div className="col-6 mx-auto">
            <form onSubmit={handleSubmit}>   
              <input
                type="text"
                value={title}
                className="form-control my-3"
               onChange={(e)=>{setTitle(e.target.value)}} 
               required 
              />
              <button className="btn btn-primary my-3">submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Addtodo