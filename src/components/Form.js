import React from "react";



const Form = ({ inputText, setInputText, inputSlope, setInputSlope, setInputCourseRating, inputCourseRating, todos, setTodos, setAmountOfScores }) => {

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
    setTodos([
      ...todos,
      { text: inputText, slope: inputSlope, courseRating: inputCourseRating, completed: false, id: Math.random() * 1000}
    ]);

      setInputText("");
      setInputSlope("");
      setInputCourseRating("");
  };


  return(
    <form>
      <input onChange={ inputTextHandler } value={ inputText } type="number" className="todo-input" placeholder="Score" required />
      <input onChange={ inputCourseRatingHandler } value={ inputCourseRating } type="number" className="todo-input" placeholder="Course Rating" required />
      <input onChange={ inputSlopeHandler } value={ inputSlope } type="number" className="todo-input" placeholder="Slope" required />
      <button className="todo-button" onClick={ submitTodoHandler } type="submit">
        <i className="fas fa-plus"></i>
      </button>

    </form>
  );
};


export default Form;
