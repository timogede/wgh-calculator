import React from "react";
import Todo from "./Todo.js";

const TodoList = ({setStatus, setAmountOfScores, todos, setTodos, sortedTodos, fullScores, calcScoreDifferential}) => {
const testFunction = () =>{
  return "ok";
}
const statusHandler = (e) =>{
  setStatus(e.target.value);
}

return(
  <React.Fragment>
  <div className="scoretable container">
    <div className="scoretable__inside container__inside">
    <div className="myform__filter">
    <select onChange={statusHandler} name="todos" className="filter-todo">
    <option value="all">Alle Scores</option>
    <option value="best">Die Besten</option>
    <option value="worst">Nicht gewertet</option>
    </select>
    </div>
  <table className="scoretable__table">
  <thead className="scoretable__head">
  <tr className="">
  <th className="scoretable__headline-scoredifferential">SD</th>
  <th className="scoretable__headline-edit"></th>
  <th className="scoretable__headline-delete"></th>
  <th className="scoretable__headline-order">#</th>
  <th className="scoretable__headline-score">Score</th>
  <th className="scoretable__headline-courserating">CR</th>
  <th className="scoretable__headline-slope">Slope</th>
  </tr>
  </thead>
  <tbody>
  {fullScores.map((todo, i) => (
    <Todo setAmountOfScores={setAmountOfScores} calcScoreDifferential={todo.calcScoreDifferential} iAmGood={todo.iamgood} myRank={ todo.myrankis } test={testFunction} scoreDifferential={todo.scoreDifferential} order={i++} text={todo.text} slope={todo.slope} courseRating={todo.courseRating} key={todo.id} id={todo.id} todos={todos} setTodos={setTodos} todo={todo} sortedTodos={sortedTodos} />
  ))}
  </tbody>
  </table>
  </div>
  </div>




    </React.Fragment>



);

};

export default TodoList;
