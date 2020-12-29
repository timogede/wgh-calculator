import React from "react";



const Form = ({ setStatus, inputText, setInputText, inputSlope, setInputSlope, setInputCourseRating, inputCourseRating, todos, setTodos, setAmountOfScores, scoreDifferential }) => {

  const inputTextHandler = (e) => {

        setInputText(e.target.value);
  };

  const inputSlopeHandler = (e) => {

        setInputSlope(e.target.value);
  };

  const inputCourseRatingHandler = (e) => {

        setInputCourseRating(e.target.value);
  };

  const calcScoreDifferential = (sc, sl, cr) =>{
    // let sc = give.text;
    // let sl = give.slope;
    // let cr = give.courseRating;
    let standardSlope = 113;
    let scoreDifferential = (((sc - cr)* standardSlope ) / sl).toFixed(1);

    return scoreDifferential;
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    let scoreDifferential = calcScoreDifferential(inputText, inputSlope, inputCourseRating);
    setTodos([
      ...todos,
      { scoreDifferential: scoreDifferential, text: inputText, slope: inputSlope, courseRating: inputCourseRating, scoreDifferential: scoreDifferential, completed: false, id: "key_" + (Math.random() * 100000).toFixed(0)}
    ]);

      setInputText("");
      setInputSlope("");
      setInputCourseRating("");
  };


  const statusHandler = (e) =>{
    setStatus(e.target.value);
  }

  return(
    <form>
      <input onChange={ inputTextHandler } value={ inputText } type="number" className="todo-input" placeholder="Score" required />
      <input onChange={ inputCourseRatingHandler } value={ inputCourseRating } type="number" className="todo-input" placeholder="Course Rating" required />
      <input onChange={ inputSlopeHandler } value={ inputSlope } type="number" className="todo-input" placeholder="Slope" required />
      <button className="todo-button" onClick={ submitTodoHandler } type="submit">
        <i className="fas fa-plus"></i>
      </button>
      <div className="select">
      <select onChange={statusHandler} name="todos" className="filter-todo">
      <option value="all">All</option>
      <option value="best">Best</option>
      <option value="worst">Worst</option>
      </select>
      </div>

    </form>
  );
};


export default Form;
