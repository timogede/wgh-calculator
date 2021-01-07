import React from "react";



const Form = ({calcScoreDifferential, setStatus, inputText, setInputText, inputSlope, setInputSlope, setInputCourseRating, inputCourseRating, todos, setTodos, setAmountOfScores, scoreDifferential }) => {

  const inputTextHandler = (e) => {

        setInputText(e.target.value);
  };

  const inputSlopeHandler = (e) => {

        setInputSlope(e.target.value);
  };

  const inputCourseRatingHandler = (e) => {

        setInputCourseRating(e.target.value);
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




  return(
    <div className="myform container">
    <div className="myform__inside container__inside">
    <form>
    <div className="myform__input-wrap">
      <div className="myform__input-box">
      <span>Score<i className="fas fa-info-circle" id="myform__score-trigger"></i></span>
      <input onChange={ inputTextHandler } value={ inputText } type="number" className="todo-input" placeholder="89" required />
      </div>
      <div className="myform__input-box">
      <span>C. Rating<i className="fas fa-info-circle" id="myform__courserating-trigger"></i></span>
      <input onChange={ inputCourseRatingHandler } value={ inputCourseRating } type="number" className="todo-input" placeholder="71.9" required />
      </div>
      <div className="myform__input-box">
      <span>Slope<i className="fas fa-info-circle" id="myform__slope-trigger"></i></span>
      <input onChange={ inputSlopeHandler } value={ inputSlope } type="number" className="todo-input" placeholder="127" required />
    </div>
    </div>
    <div className="myform__button-wrap">
      <button className="todo-button" onClick={ submitTodoHandler } type="submit">
        <i className="fas fa-plus"></i>
      </button>
      </div>




    </form>

    </div>
    </div>
  );
};


export default Form;
