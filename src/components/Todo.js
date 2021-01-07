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



  const editHandler = (id) => {

    const clickedKey = id;
        console.log("clickedKey " + id);
    const clickedElement = document.getElementById(clickedKey);
    let textInputValue = document.getElementById(id).getElementsByClassName( 'scoretable-text-input' )[0].getElementsByTagName( 'input' )[0].value;
    let crInputValue = document.getElementById(id).getElementsByClassName( 'scoretable-courserating-input' )[0].getElementsByTagName( 'input' )[0].value;
    let slopeInputValue = document.getElementById(id).getElementsByClassName( 'scoretable-slope-input' )[0].getElementsByTagName( 'input' )[0].value;
    console.log("textInputValue " + textInputValue);
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
  <tr className={`scoretable__row  ${iAmGood ? "isgood " : "isbad "}iamrank_`+myRank} id={id}>
    <td className="scoretable__headline-scoredifferential">{scoreDifferential}</td>
    <td className="scoretable__headline-edit"><button onClick={() => editHandler(id)} className="complete-btn edit-btn"><i className="far fa-pen"></i></button></td>
    <td className="scoretable__headline-delete"><button onClick={deleteHandler} className="trash-btn last-todo"><i className="far fa-trash-alt"></i></button></td>
    <td className="scoretable__headline-order">{order + 1}</td>
    <td className="scoretable__headline-score">{text}</td>
    <td className="scoretable-text-input"><input type="number" placeholder={text} /></td>
    <td className="scoretable__headline-courserating">{courseRating}</td>
    <td className="scoretable-courserating-input"><input type="number" placeholder={courseRating}/></td>
    <td className="scoretable__headline-slope">{slope}</td>
    <td className="scoretable-slope-input"><input type="number" placeholder={slope}/></td>
  </tr>
</React.Fragment>
);
};


export default Todo;
