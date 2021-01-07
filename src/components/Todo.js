import React from "react";

const Todo = ({setAmountOfScores, amountOfScores, iAmGood, myRank, text, slope, courseRating, id, todos, sortedTodos, setTodos, todo, order, scoreDifferential}) => {
  const deleteHandler = () => {
    setTodos(todos.filter(lol => lol.id !== todo.id));
  }

  const calcScoreDifferential = (sc, sl, cr) =>{
    // let sc = give.text;
    // let sl = give.slope;
    // let cr = give.courseRating;
    let standardSlope = 113;
    let scoreDifferential = (((sc - cr)* standardSlope ) / sl).toFixed(1);

    return scoreDifferential;
  };

  const editHandler = (e) => {
    const clickedKey = e.target.parentNode.id;
    const clickedElement = document.getElementById(clickedKey);
    let textInputValue = clickedElement.getElementsByClassName( 'todo-text-input' )[0].value;
    let crInputValue = clickedElement.getElementsByClassName( 'todo-courserating-input' )[0].value;
    let slopeInputValue = clickedElement.getElementsByClassName( 'todo-slope-input' )[0].value;

    const outputArray = [...todos];

    if(clickedElement.classList.contains("edit_mode")){
        clickedElement.classList.remove("edit_mode");
        for (let x = 0; x < outputArray.length; x++) {
          if (outputArray[x]["id"] == clickedKey) {
              outputArray[x]["text"] = textInputValue;
              outputArray[x]["courseRating"] = crInputValue;
              outputArray[x]["slope"] = slopeInputValue;
             let newScoreDifferential = calcScoreDifferential(textInputValue, slopeInputValue, crInputValue);
             outputArray[x]["scoreDifferential"] = newScoreDifferential;
             console.log("textInputValue: " + textInputValue);
             console.log("crInputValue: " + crInputValue);
             console.log("slopeInputValue: " + slopeInputValue);
             console.log("new score differential is " + newScoreDifferential);
        }
      }

      console.log(outputArray);
      setAmountOfScores(amountOfScores);
      setTodos(outputArray);



    }else{
        clickedElement.classList.add("edit_mode");

        console.log("edit_mode added");

  }

  }


return(
<React.Fragment>
{/*
  <div className={`todo ${iAmGood ? "isgood " : "isbad "}iamrank_`+myRank} id={id}>
    <li className="todo-item todo-order">#{order + 1}</li>
    <li className="todo-item todo-text">{text}</li>
    <input className="todo-item todo-text todo-text-input" placeholder={text} />
    <li className="todo-item todo-courserating">{courseRating}</li>
    <input className="todo-item todo-courserating todo-courserating-input" placeholder={courseRating}/>
    <li className="todo-item todo-slope">{slope}</li>
    <input className="todo-item todo-slope todo-slope-input" placeholder={slope}/>
    <li className="todo-item todo-scoredifferential">{scoreDifferential}</li>
    <button onClick={editHandler} className="complete-btn edit-btn"><i className="fas fa-pen"></i></button>
    <button onClick={deleteHandler} className="trash-btn last-todo"><i className="fas fa-trash"></i></button>
  </div>
  */}
  <tr className={`scoretable__row todo ${iAmGood ? "isgood " : "isbad "}iamrank_`+myRank} id={id}>
  <td className="todo-item todo-scoredifferential scoretable__headline-scoredifferential">{scoreDifferential}</td>
  <td className="scoretable__headline-edit"><button onClick={editHandler} className="complete-btn edit-btn"><i className="far fa-pen"></i></button></td>
  <td className="scoretable__headline-delete"><button onClick={deleteHandler} className="trash-btn last-todo"><i className="far fa-trash-alt"></i></button></td>
  <td className="todo-item todo-order scoretable__headline-order">{order + 1}</td>
  <td className="todo-item todo-text scoretable__headline-score">{text} <input className="todo-item todo-text todo-text-input" placeholder={text} /></td>
  <td className="todo-item todo-courserating scoretable__headline-courserating">{courseRating} <input className="todo-item todo-courserating todo-courserating-input" placeholder={courseRating}/></td>
  <td className="todo-item todo-slope scoretable__headline-slope">{slope} <input className="todo-item todo-slope todo-slope-input" placeholder={slope}/></td>
  </tr>
  </React.Fragment>
);
};


export default Todo;
