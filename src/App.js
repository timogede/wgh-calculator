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
  const [amountOfScores, setAmountOfScores] = useState("");
  const scoreCounter = () =>{
  if(Object.keys(todos).length !== 0){
    console.log("first item score is " + todos[0].text);
  todos.map((item, currentScore)=>{
      currentScore = item.text;
      return currentScore;
  });
}
else{
  return 0;
}

};

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

  }, [todos]
);

  return (
    <div className="App">
    <header>
      <h1>Timo's World Golf<br />Handicap Rechner</h1>
    </header>
    <Form setAmountOfScores={setAmountOfScores} inputSlope={inputSlope} inputCourseRating={inputCourseRating} setInputCourseRating={setInputCourseRating} setInputSlope={setInputSlope} inputText={ inputText } setInputText={ setInputText } todos={ todos } setTodos={ setTodos } />
    <TodoList todos={ todos } setTodos={setTodos} />
    <Result todos={ todos } setAllScores={setAllScores} allScores={allScores} amountOfScores={amountOfScores} setAmountOfScores={setAmountOfScores} />
    </div>
  );
}

export default App;
