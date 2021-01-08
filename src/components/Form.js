import React from "react";
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


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

const openElement = (e) =>{
  const clickedId = e.target.id;
  if(clickedId == "faq-score-trigger" ){
    document.getElementById("faq-score").classList.add("active");
  }
  if(clickedId == "faq-cr-trigger" ){
    document.getElementById("faq-cr").classList.add("active");
  }
  if(clickedId == "faq-slope-trigger" ){
    document.getElementById("faq-slope").classList.add("active");
  }
  }

  const scrollWidthOffset = (el) => {
      const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
      const yOffset = -70;
      window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  }


  return(
    <div className="myform container">
    <div className="myform__inside container__inside">
    <form>
    <div className="myform__input-wrap">
      <div className="myform__input-box">
      <span>Score<HashLink scroll={scrollWidthOffset} smooth onClick={openElement} to="/#faq-score" id="myform__score-trigger"><i id="faq-score-trigger" className="fas fa-info-circle"></i></HashLink></span>
      <input onChange={ inputTextHandler } value={ inputText } type="number" className="todo-input" placeholder="89" required />
      </div>
      <div className="myform__input-box">
      <span>C. Rating<HashLink scroll={scrollWidthOffset} smooth onClick={openElement} to="/#faq-cr" id="myform__cr-trigger"><i id="faq-cr-trigger" className="fas fa-info-circle"></i></HashLink></span>
      <input onChange={ inputCourseRatingHandler } value={ inputCourseRating } type="number" className="todo-input" placeholder="71.9" required />
      </div>
      <div className="myform__input-box">
      <span>Slope<HashLink scroll={scrollWidthOffset} smooth onClick={openElement} to="/#faq-slope" id="myform__slope-trigger"><i id="faq-slope-trigger" className="fas fa-info-circle"></i></HashLink></span>
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
