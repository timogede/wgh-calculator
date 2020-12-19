import React from "react";
import Todo from "./Todo.js";

const TodoList = ({todos, setTodos}) => {
const calcScoreDifferential = (give) =>{
  let text = give.text;
  let slope = give.slope;
  let courseRating = give.courseRating;
  let standardSlope = 113;
  let scoreDifferential = (((text - courseRating)* standardSlope ) / slope).toFixed(1);
  console.log("score is " + text + " courseRating is " + courseRating);
  console.log(text - courseRating);
  console.log("slope is " + slope);

  return scoreDifferential;
};
return(
  <div>
<ul className="todo-container">
<div className="todo-list heading-list">
  <div className="todo">
  <li className="todo-item">#</li>
  <li className="todo-item">Score</li>
  <li className="todo-item">CR</li>
  <li className="todo-item">Slope</li>
  <li className="todo-item">SD</li>
  <button className="todo-item last-todo"></button>

  </div>
</div>
</ul>
  <div className="todo-container">
    <ul className="todo-list">
     {todos.map((todo, i) => (
       <Todo scoreDifferential={calcScoreDifferential(todo)} order={i++} text={todo.text} slope={todo.slope} courseRating={todo.courseRating} key={todo.id} todos={todos} setTodos={setTodos} todo={todo} />
     ))}
    </ul>
  </div>
  </div>



);

};

export default TodoList;
