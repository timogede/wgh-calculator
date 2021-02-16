import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTodos } from "../actions/index.js";

const Todo = ({
  setRerender,
  rerender,
  setAmountOfScores,
  amountOfScores,
  iAmGood,
  myRank,
  text,
  slope,
  courseRating,
  id,
  // todos,
  // setTodos,
  todo,
  order,
  scoreDifferential,
}) => {
  const todos = useSelector((state) => state.todosReducer);
  const dispatch = useDispatch();
  const deleteHandler = () => {
    // setTodos(todos.filter((lol) => lol.id !== todo.id));
    dispatch(changeTodos(todos.filter((lol) => lol.id !== todo.id)));
    setRerender(rerender + 1);
  };

  const calcScoreDifferential = (sc, sl, cr) => {
    let standardSlope = 113;
    let scoreDifferential = (((sc - cr) * standardSlope) / sl).toFixed(1);

    return scoreDifferential;
  };

  const editHandler = (id) => {
    //get id from clicked row
    const clickedKey = id;
    const clickedElement = document.getElementById(clickedKey);

    //get the clicked elements and input values
    let textInput = document
      .getElementById(id)
      .getElementsByClassName("scoretable-text-input")[0]
      .getElementsByTagName("input")[0];
    let textInputValue = textInput.value;
    let crInput = document
      .getElementById(id)
      .getElementsByClassName("scoretable-courserating-input")[0]
      .getElementsByTagName("input")[0];
    let crInputValue = crInput.value;
    let slopeInput = document
      .getElementById(id)
      .getElementsByClassName("scoretable-slope-input")[0]
      .getElementsByTagName("input")[0];
    let slopeInputValue = slopeInput.value;

    //get the clicked elements current values so you can put them as kind of a placeholder to the inputs
    const outputArray = [...todos];

    //edit_mode toggle off
    if (clickedElement.classList.contains("edit_mode")) {
      clickedElement.classList.remove("edit_mode");
      for (let x = 0; x < outputArray.length; x++) {
        if (outputArray[x]["id"] === clickedKey) {
          outputArray[x]["text"] = textInputValue;
          outputArray[x]["courseRating"] = crInputValue;
          outputArray[x]["slope"] = slopeInputValue;
          let newScoreDifferential = calcScoreDifferential(
            textInputValue,
            slopeInputValue,
            crInputValue
          );
          outputArray[x]["scoreDifferential"] = newScoreDifferential;
          console.log("textInputValue: " + textInputValue);
          console.log("crInputValue: " + crInputValue);
          console.log("slopeInputValue: " + slopeInputValue);
          console.log("new score differential is " + newScoreDifferential);
        }
      }

      console.log(outputArray);
      setAmountOfScores(amountOfScores);
      // setTodos(outputArray);
      dispatch(changeTodos(outputArray));
      setRerender(rerender + 1);

      //edit_mode toggle on
      //put current values into inputs which are now shown cause of edit_mode class via css
    } else {
      clickedElement.classList.add("edit_mode");
      console.log(todo.text);
      console.log("edit_mode added");
      textInput.value = todo.text;
      crInput.value = todo.courseRating;
      slopeInput.value = todo.slope;
    }
  };

  return (
    <React.Fragment>
      <tr
        className={
          `scoretable__row  ${iAmGood ? "isgood " : "isbad "}iamrank_` + myRank
        }
        id={id}
      >
        <td className="scoretable__headline-scoredifferential">
          {scoreDifferential}
        </td>
        <td className="scoretable__headline-edit">
          <button
            onClick={() => editHandler(id)}
            className="complete-btn edit-btn"
          >
            <i className="far fa-pen"></i>
          </button>
        </td>
        <td className="scoretable__headline-delete">
          <button onClick={deleteHandler} className="trash-btn last-todo">
            <i className="far fa-trash-alt"></i>
          </button>
        </td>
        <td className="scoretable__headline-order">{order + 1}</td>
        <td className="scoretable__headline-score">{text}</td>
        <td className="scoretable-text-input">
          <input type="number" placeholder={text} />
        </td>
        <td className="scoretable__headline-courserating">{courseRating}</td>
        <td className="scoretable-courserating-input">
          <input type="number" placeholder={courseRating} />
        </td>
        <td className="scoretable__headline-slope">{slope}</td>
        <td className="scoretable-slope-input">
          <input type="number" placeholder={slope} />
        </td>
      </tr>
    </React.Fragment>
  );
};

export default Todo;
