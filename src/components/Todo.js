import React from "react";

const Todo = ({text, slope, courseRating, id, todos, setTodos, todo, order, scoreDifferential}) => {
  const deleteHandler = () => {
    setTodos(todos.filter(lol => lol.id !== todo.id));
  }

return(
  <div className="todo" id={id}>
    <li className={`todo-item todo-order ${todo.completed ? "completed" : ""}`}>#{order + 1}</li>
    <li className={`todo-item todo-text ${todo.completed ? "completed" : ""}`}>{text}</li>
    <li className={`todo-item todo-courserating ${todo.completed ? "completed" : ""}`}>{courseRating}</li>
    <li className={`todo-item todo-slope ${todo.completed ? "completed" : ""}`}>{slope}</li>
    <li className={`todo-item todo-scoredifferential ${todo.completed ? "completed" : ""}`}>{scoreDifferential}</li>
    <button onClick={deleteHandler} className="trash-btn last-todo"><i className="fas fa-trash"></i></button>
  </div>
);
};


export default Todo;
