import React from 'react'


const TodoList = ({todo,handleChange,editTodo}) => {
    const hanldeCheckboxChange=()=>{
        if(todo.done)
            return null;
        handleChange(todo.id)
       
    }
  return (
    
    <>
     <div className="container">
        <div className="row">
          <div className="col-6 mx-auto">
            <ul className="list-group">
               <li className="list-group-item list todo-list my-3 todolist">
                  <input type="checkbox"
                  checked={todo.done}
                  onChange={()=>hanldeCheckboxChange()}
                  />
                  <h6>{todo.title}</h6>
                  <div className="span">
                    <span className="badge bg-secondary ">
                      {todo.done === true ? "complete" : null}
                    </span>
                    <span className="badge bg-secondary ms-2"onClick={()=>{editTodo(todo) }}>edit</span>
                  </div>
                </li>
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}

export default TodoList