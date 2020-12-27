import React from "react";

const Todo = ({iAmGood, myRank, text, slope, courseRating, id, todos, sortedTodos, setTodos, todo, order, scoreDifferential}) => {
  const deleteHandler = () => {
    setTodos(todos.filter(lol => lol.id !== todo.id));
  }



return(

  <div className={`todo ${iAmGood ? "isgood" : "isbad"}`} id={"iamrank_" + myRank}>

    <li className="todo-item todo-order">#{order + 1}</li>
    <li className="todo-item todo-text">{text}</li>
    <li className="todo-item todo-courserating">{courseRating}</li>
    <li className="todo-item todo-slope">{slope}</li>
    <li className="todo-item todo-scoredifferential">{scoreDifferential}</li>
    <button onClick={deleteHandler} className="trash-btn last-todo"><i className="fas fa-trash"></i></button>
  </div>
);
};


export default Todo;
