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

  return (
    <div className="App">
    <header>
      <h1>Timo's World Golf<br />Handicap Rechner</h1>
    </header>
    <Form inputSlope={inputSlope} inputCourseRating={inputCourseRating} setInputCourseRating={setInputCourseRating} setInputSlope={setInputSlope} inputText={ inputText } setInputText={ setInputText } todos={ todos } setTodos={ setTodos } />
    <TodoList todos={ todos } setTodos={setTodos} />
    <Result />
    </div>
  );
}

export default App;
