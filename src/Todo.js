import React from 'react'

const Todo = (props) => {
  return (
    <>
     <div className="container">
        <div className="row">
            <div className="col-6 mx-auto">
                <ul className="list-group">
                <li className="list-group-item list todo-list">
                    <input type="checkbox" onChange={(e)=>{props.checkData()}} />
                    <h5 >my todo</h5>
                    <div className="span">
                    <span className="badge bg-secondary ">success</span> 
                    <span className="badge bg-secondary ms-2">edit</span> 
                    </div>
                </li>   
                </ul>
            </div>
        </div>
    </div>
   
    </>
  )
}

export default Todo