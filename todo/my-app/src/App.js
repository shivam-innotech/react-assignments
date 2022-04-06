import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([
    { id: 1, name: "create your todo", isChecked: true },
  ]);
  const [isEdit, setIsEdit] = useState();
  const [toggleBtn, setToggleBtn] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!input){
      let ele = document.getElementById("valid");
      ele.classList.add("is-invalid");
    }else if (input && !toggleBtn) {
      setTask(
        task.map((elem) => {
          if (elem.id === isEdit) {
            return { ...elem, name: input };
          }
          return elem;
        })
      );
      setInput("");
      setIsEdit(null);
      setToggleBtn(true);
    } else {
      const newData = { id: Math.random(), name: input, isChecked: false };
      setTask([...task, newData]);
      setInput("");
      let ele = document.getElementById("valid");
      ele.classList.remove("is-invalid");
    }
  };

  const checkboxChange = (id) => {
    const change = task.map((todo) => {
      if (todo.id === id) return { ...todo, isChecked: !todo.isChecked };
      return todo;
    });
    setTask(change);
   
  };

  const editItem = (id) => {
    const updateItem = task.find((todo) => {
      return todo.id === id;
    });
    setInput(updateItem.name);
    setIsEdit(id);
    setToggleBtn(false);
  };
 
  return (
    <>
      <h1>Todo Application</h1>
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto">
            <form>
              <input
                type="text"
                value={input}
                id="valid"
                className="form-control my-3 "
                required
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />
              {toggleBtn ? (
                <button className="btn btn-primary my-3" onClick={handleSubmit}>
                  submit
                </button>
              ) : (
                <button className="btn btn-primary my-3" onClick={handleSubmit}>
                  edit
                </button>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* list */}
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto">
            <ul className="list-group">
              {task.map((item) => {
                return (
                  <li
                    className="list-group-item list todo-list my-3 todolist"
                    key={item.id}
                  >
                    <input
                      type="checkbox"
                      checked={item.isChecked}
                      onChange={() => {
                        checkboxChange(item.id);
                      }}
                    />
                    <h6>{item.name}</h6>
                    <div className="span">
                      <span className="badge bg-secondary ">
                        {item.isChecked === true ? "complete" : null}
                      </span>
                      <span
                        className="badge bg-secondary ms-2"
                        onClick={() => {
                          editItem(item.id);
                        }}
                      >
                        edit
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
