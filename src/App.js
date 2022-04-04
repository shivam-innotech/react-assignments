import React, { useState } from "react";
import "./App.css";

const App = () => {
  
  const [task, setTask] = useState('');
  const[taskData,setTaskData]=useState([])
  const [select, setSelect] = useState(false);
  
 
// submit data
const handleSubmit = (e) => {
  e.preventDefault()
if(!task){
  document.getElementById("abc").style.borderColor = "red";
}else{
    const newData =task;
    setTaskData([...taskData,newData]);
    setTask("");
    document.getElementById("abc").style.borderColor = "";
  };
}

  
  

  // checkbox select
  const checkHandle = (e) => {
    setSelect(e.target.checked);
    console.log(select);
    
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto">
            <form 
             onSubmit={handleSubmit}
             >   
              <input
                type="text"
                className="form-control my-3"
                placeholder="set to do here"
                id="abc"
                name="task"
                value={task}
                onChange={(e)=>{ setTask(e.target.value)}}
              />
              <button className="btn btn-primary my-3">submit</button>
            </form>
          </div>
        </div>
      </div>

{/* show todo */}
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto">
            <ul className="list-group">
              <h3>mytodo</h3>
              {
                taskData.map((element,index)=>{
                  return (
                  <li className="list-group-item list todo-list my-3"key={index}>
                <input type="checkbox" checked={select} onChange={checkHandle} />
                <h5>{element}</h5>
                <div className="span">
                  <span className="badge bg-secondary ">
                    {select === true  ? "complete" : null}
                  </span>
                  <span className="badge bg-secondary ms-2">edit</span>
                </div>
              </li>
                )})
              }
              
            </ul>
          </div>
        </div>
      </div>

    </>
  );
};

export default App;
