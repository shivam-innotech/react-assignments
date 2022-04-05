import React, { useState } from "react";
import TodoList from "./TodoList";
import Addtodo from "./Addtodo";

function TodoContainer() {
  const todoList = [
    { id: 1, title: "Learn React", done: false },
    { id: 2, title: "Create a todo Application", done: true },
  ];
  
  const [todos, setTodos] = useState(todoList);
  const[editItem,setEditItem]=useState(null)
//   handle todo
  const handleAddTodo = (newTodo) => {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  };
// handle checkbox 
  const hanldeCheckboxChange = (id) => {
    const newTodoList = todos.map((todo) => {
      if (todo.id === id) return { ...todo, done: !todo.done };
      return todo;
    });
    setTodos(newTodoList);
  };

//   handle edit
  const handleEditTodo=(id)=>{
     
    const newTodoList=todos.find(todo=>todo.id===id)
    setTodos(newTodoList.title)
    setEditItem(setTodos)
    console.log(newTodoList);
    
    
}
  return (
    <>
      {todos.map((todo,index) =>{return(
        <TodoList
          todo={todo}
          key={todo.id}
          handleChange={hanldeCheckboxChange}
          editTodo={handleEditTodo}
        />
      )}
      )}
      <Addtodo addTodo={handleAddTodo} />
    </>
  );
}

export default TodoContainer;
