import React from "react";
import Todo from "./Todo.js";

const TodoList = ({setAmountOfScores, todos, setTodos, sortedTodos, fullScores, calcScoreDifferential}) => {
const testFunction = () =>{
  return "ok";
}


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
     {fullScores.map((todo, i) => (
       <Todo setAmountOfScores={setAmountOfScores} calcScoreDifferential={todo.calcScoreDifferential} iAmGood={todo.iamgood} myRank={ todo.myrankis } test={testFunction} scoreDifferential={todo.scoreDifferential} order={i++} text={todo.text} slope={todo.slope} courseRating={todo.courseRating} key={todo.id} id={todo.id} todos={todos} setTodos={setTodos} todo={todo} sortedTodos={sortedTodos} />
     ))}
    </ul>
  </div>
  </div>



);

};

export default TodoList;
