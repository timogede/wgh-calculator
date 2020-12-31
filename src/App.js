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
  const [status, setStatus] = useState("all");
  const [sortedTodos, setSortedTodos] = useState([]);
  const [allScores, setAllScores] = useState("");
  const [allScoreDifferentials, setAllScoreDifferentials] = useState("");
  const [amountOfScores, setAmountOfScores] = useState("");
  const [averageScore, setAverageScore] = useState("");
  const [averageScoreDifferential, setAverageScoreDifferential] = useState("");
  const [fullScores, setFullScores] = useState([]);
  const [theHandicap, setTheHandicap] = useState("");




const scoreCounter = todos.reduce((counter, obj) => {
  if (obj.text) counter += parseInt(obj.text);
  return counter;
}, 0); // 6

const scoreDifferentialCounter = todos.reduce((counter, obj) => {
  if (obj.scoreDifferential) counter = counter + parseFloat(obj.scoreDifferential);
  return counter;
}, 0); // 6


const calcScoreDifferential = (sc, sl, cr) =>{
  // let sc = give.text;
  // let sl = give.slope;
  // let cr = give.courseRating;
  let standardSlope = 113;
  let scoreDifferential = (((sc - cr)* standardSlope ) / sl).toFixed(1);

  return scoreDifferential;
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

  const sortFunction = (a, b) => {
    if (a["scoreDifferential"] === b["scoreDifferential"]) {
        return 0;
    }
    else {
        return (parseFloat(a["scoreDifferential"]) < parseFloat(b["scoreDifferential"])) ? -1 : 1;
    }
  }

  const sortTodos = (sortthisarray) => {
    const sortedArray = [...sortthisarray];
    sortedArray.sort(sortFunction);
    const cuttedSortedArray = sortedArray.slice(0, 8);

    setSortedTodos(cuttedSortedArray);
    const fullScoresArray = (sortthisarray);

    for (let y = 0; y < fullScoresArray.length; y++) {
        fullScoresArray[y]["iamgood"] = false;
        fullScoresArray[y]["myrankis"] = 999;
  }


    for (let x = 0; x < cuttedSortedArray.length; x++) {
      let searchId = cuttedSortedArray[x]["id"];

    for (let i = 0; i < fullScoresArray.length; i++) {
      if (fullScoresArray[i]["id"] == searchId) {
        fullScoresArray[i]["iamgood"] = true;
        fullScoresArray[i]["myrankis"] = x+1;
        console.log(fullScoresArray[i]["id"] + "is the matching id, right?");
        console.log(fullScoresArray[i]["scoreDifferential"] + "is the SD, right?");
    }

  }
}
    setFullScores(fullScoresArray);

  };

  const calculateHandicap = () =>{
    let theHandicap = 0;
    for (let i = 0; i < sortedTodos.length; i++) {

    theHandicap = theHandicap + parseFloat(sortedTodos[i]["scoreDifferential"]);
      console.log("the Handicap is " + theHandicap);
  }
  theHandicap = (theHandicap / sortedTodos.length).toFixed(1);
  console.log("divide that trough " + sortedTodos.length + " and you get:");
    console.log("the Handicap completely " + theHandicap);
  setTheHandicap(theHandicap);
  }

  const filterHandler = () =>{
    switch(status){
      case "best":
      setFullScores(todos.filter((todo) => todo.iamgood === true));
      break;
      case "worst":
      setFullScores(todos.filter((todo) => todo.iamgood === false));
      break;
      default:
      setFullScores(todos);
      break;
    }
  }



  useEffect(() => {
    getLocalTodos();
  },[]);

  useEffect(() => {
    saveLocalTodos();
  }, [todos, inputText]);


  useEffect(() => {
    filterHandler();
  }, [status, todos, amountOfScores]);


  useEffect(() =>{
  setAmountOfScores(Object.keys(todos).length);
  setAllScores(scoreCounter);
  setAllScoreDifferentials((scoreDifferentialCounter).toFixed(1));
  sortTodos(todos);

  }, [todos]
);

useEffect(()=>{
    setAverageScore((allScores / amountOfScores).toFixed(1));
    setAverageScoreDifferential((allScoreDifferentials / amountOfScores).toFixed(1));
    calculateHandicap();

  }, [amountOfScores]
);

  return (
    <div className="App">
    <header>
      <h1>Timo's World Golf<br />Handicap Rechner</h1>
    </header>
    <Form calcScoreDifferential={this.calcScoreDifferential} setStatus={setStatus} setAmountOfScores={setAmountOfScores} inputSlope={inputSlope} inputCourseRating={inputCourseRating} setInputCourseRating={setInputCourseRating} setInputSlope={setInputSlope} inputText={ inputText } setInputText={ setInputText } todos={ todos } setTodos={ setTodos } />
    <TodoList calcScoreDifferential={this.calcScoreDifferential} fullScores={ fullScores } todos={ todos } setTodos={setTodos} sortedTodos={sortedTodos} />
    <Result theHandicap={theHandicap} averageScoreDifferential={averageScoreDifferential} allScoreDifferentials={allScoreDifferentials} averageScore={averageScore} todos={ todos } setAllScores={setAllScores} allScores={allScores} amountOfScores={amountOfScores} setAmountOfScores={setAmountOfScores} />
    </div>
  );
}

export default App;
