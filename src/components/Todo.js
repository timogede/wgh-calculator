import React from "react";

const Todo = ({iAmGood, myRank, text, slope, courseRating, id, todos, sortedTodos, setTodos, todo, order, scoreDifferential}) => {
  const deleteHandler = () => {
    setTodos(todos.filter(lol => lol.id !== todo.id));
  }

  const editHandler = (e) => {
  console.log(e.target.id);
  const clickedKey = e.target.id;
  const clickedElement = document.getElementsByClassName(clickedKey)[0];
  console.log(clickedElement);
  if(clickedElement.classList.contains("edit_mode")){
    clickedElement.classList.remove("edit_mode");
    console.log("edit_mode removed");

  }
  else{
    clickedElement.classList.add("edit_mode");
      console.log("edit_mode added");

  }
  }


return(

  <div className={`todo ${iAmGood ? "isgood " : "isbad "}` + id} id={"iamrank_" + myRank}>
    <li className="todo-item todo-order">#{order + 1}</li>
    <li className="todo-item todo-text">{text}</li>
    <input className="todo-item todo-text" value={text} />
    <li className="todo-item todo-courserating">{courseRating}</li>
    <input className="todo-item todo-courserating" value={courseRating}/>
    <li className="todo-item todo-slope">{slope}</li>
    <input className="todo-item todo-slope" value={slope}/>
    <li className="todo-item todo-scoredifferential">{scoreDifferential}</li>
    <button id={id} onClick={editHandler} className="complete-btn edit-btn"><i className="fas fa-pen"></i></button>
    <button onClick={deleteHandler} className="trash-btn last-todo"><i className="fas fa-trash"></i></button>
  </div>
);
};


export default Todo;
