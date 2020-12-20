import React, { useState, useEffect } from "react";
import './App.css';
import Form from "./components/Form.js";
import TodoList from "./components/TodoList.js";
import Result from "./components/Result.js";
function App() {
  const [inputText, setInputText] = useState("");
  const [inputSlope, setInputSlope] = useState("");
  const [inputCourseRating, setInputCourseRating] = useState("");
  const [todos, setTodos] = useState([]);
  const [allScores, setAllScores] = useState("");
  const [allScoreDifferentials, setAllScoreDifferentials] = useState();
  const [amountOfScores, setAmountOfScores] = useState("");
  const [averageScore, setAverageScore] = useState("");
  const [averageScoreDifferential, setAverageScoreDifferential] = useState("");




const scoreCounter = todos.reduce((counter, obj) => {
  if (obj.text) counter += parseInt(obj.text);
  return counter;
}, 0); // 6

const scoreDifferentialCounter = todos.reduce((counter, obj) => {
  if (obj.scoreDifferential) counter = counter + parseFloat(obj.scoreDifferential);
    console.log("scoreDifferentialCounter function returns " + obj.scoreDifferential);
    console.log("which is a " + typeof scoreDifferential);
  return counter;
}, 0); // 6



  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };



  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify(todos));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  useEffect(() => {
    getLocalTodos();
  },[]);

  useEffect(() => {
    saveLocalTodos();
  }, [todos, inputText]);

  useEffect(() =>{
  setAmountOfScores(Object.keys(todos).length);
  setAllScores(scoreCounter);
  setAllScoreDifferentials((scoreDifferentialCounter).toFixed(1));
  }, [todos]
);

useEffect(()=>{
    setAverageScore((allScores / amountOfScores).toFixed(1));
    setAverageScoreDifferential((allScoreDifferentials / amountOfScores).toFixed(1));
  }, [amountOfScores]
);
console.log(allScoreDifferentials);
  return (
    <div className="App">
    <header>
      <h1>Timo's World Golf<br />Handicap Rechner</h1>
    </header>
    <Form setAmountOfScores={setAmountOfScores} inputSlope={inputSlope} inputCourseRating={inputCourseRating} setInputCourseRating={setInputCourseRating} setInputSlope={setInputSlope} inputText={ inputText } setInputText={ setInputText } todos={ todos } setTodos={ setTodos } />
    <TodoList todos={ todos } setTodos={setTodos} />
    <Result averageScoreDifferential={averageScoreDifferential} allScoreDifferentials={allScoreDifferentials} averageScore={averageScore} todos={ todos } setAllScores={setAllScores} allScores={allScores} amountOfScores={amountOfScores} setAmountOfScores={setAmountOfScores} />
    </div>
  );
}

export default App;
