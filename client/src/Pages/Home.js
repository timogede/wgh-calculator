import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import MyHeader from "../components/MyHeader.js";
import MyIntro from "../components/MyIntro.js";
import Form from "../components/Form.js";
import TodoList from "../components/TodoList.js";
import Result from "../components/Result.js";
import EmptyState from "../components/EmptyState.js";
import Faq from "../components/Faq.js";
// import allData from "../util.js";
import axios from "axios";
import { features } from "process";

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [inputSlope, setInputSlope] = useState("");
  const [inputCourseRating, setInputCourseRating] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [sortedTodos, setSortedTodos] = useState([]);
  const [allScores, setAllScores] = useState("");
  const [allCr, setAllCr] = useState("");
  const [allSlope, setAllSlope] = useState("");
  const [allScoreDifferentials, setAllScoreDifferentials] = useState("");
  const [amountOfScores, setAmountOfScores] = useState("");
  const [averageScore, setAverageScore] = useState("");
  const [averageSlope, setAverageSlope] = useState("");
  const [averageCr, setAverageCr] = useState("");
  const [averageScoreDifferential, setAverageScoreDifferential] = useState("");
  const [fullScores, setFullScores] = useState([]);
  const [theHandicap, setTheHandicap] = useState("");
  const [rerender, setRerender] = useState(0);
  const [fulldata, setFulldata] = useState([]);

  //This has to be changed
  const currentlyLoggedIn = 333;
  const url = "http://localhost:3333";

  const scoreCounter = todos.reduce((counter, obj) => {
    if (obj.text) counter += parseInt(obj.text);
    return counter;
  }, 0); // 6

  const scoreDifferentialCounter = todos.reduce((counter, obj) => {
    if (obj.scoreDifferential)
      counter = counter + parseFloat(obj.scoreDifferential);
    return counter;
  }, 0); // 6

  const crCounter = todos.reduce((counter, obj) => {
    if (obj.courseRating) counter = counter + parseFloat(obj.courseRating);
    return counter;
  }, 0); // 6

  const slopeCounter = todos.reduce((counter, obj) => {
    if (obj.slope) counter = counter + parseFloat(obj.slope);
    return counter;
  }, 0); // 6

  const calcScoreDifferential = (sc, sl, cr) => {
    // let sc = give.text;
    // let sl = give.slope;
    // let cr = give.courseRating;
    let standardSlope = 113;
    let scoreDifferential = (((sc - cr) * standardSlope) / sl).toFixed(1);

    return scoreDifferential;
  };

  const saveLocalTodos = () => {
    console.log("I pushed todos to MongoDB");
    const newFulldata = {
      user_id: 333,
      everything: todos,
    };

    axios.post("http://localhost:3333/create", newFulldata);
    console.log(newFulldata);
  };

  const saveToCloud = () => {
    const newFulldata = {
      user_id: currentlyLoggedIn,
      everything: todos,
    };
    axios.post("http://localhost:3333/update", newFulldata);
    console.log("update");
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify(todos));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  const sortFunction = (a, b) => {
    if (a["scoreDifferential"] === b["scoreDifferential"]) {
      return 0;
    } else {
      return parseFloat(a["scoreDifferential"]) <
        parseFloat(b["scoreDifferential"])
        ? -1
        : 1;
    }
  };

  const sortTodos = (sortthisarray) => {
    const sortedArray = [...sortthisarray];
    sortedArray.sort(sortFunction);
    const cuttedSortedArray = sortedArray.slice(0, 8);

    setSortedTodos(cuttedSortedArray);
    const fullScoresArray = sortthisarray;

    for (let y = 0; y < fullScoresArray.length; y++) {
      fullScoresArray[y]["iamgood"] = false;
      fullScoresArray[y]["myrankis"] = 999;
    }

    for (let x = 0; x < cuttedSortedArray.length; x++) {
      let searchId = cuttedSortedArray[x]["id"];

      for (let i = 0; i < fullScoresArray.length; i++) {
        if (fullScoresArray[i]["id"] == searchId) {
          fullScoresArray[i]["iamgood"] = true;
          fullScoresArray[i]["myrankis"] = x + 1;
        }
      }
    }
    setFullScores(fullScoresArray);
  };

  const calculateHandicap = () => {
    let theHandicap = 0;
    for (let i = 0; i < sortedTodos.length; i++) {
      theHandicap =
        theHandicap + parseFloat(sortedTodos[i]["scoreDifferential"]);
    }
    theHandicap = (theHandicap / sortedTodos.length).toFixed(1);

    setTheHandicap(theHandicap);
  };

  const filterHandler = () => {
    switch (status) {
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
  };

  useEffect(() => {
    const fetchData = async () => {
      const showMe = await axios.get(`${url}/fulldata/${currentlyLoggedIn}`);

      console.log("fetchedData: " + showMe.data);
      if (showMe.data == null) {
        console.log("i asyncly fetched empty");
        setTodos([]);
      } else {
        setTodos(showMe.data.everything);
        console.log("i asyncly fetched something");
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (rerender) {
      saveToCloud();
    }
  }, [rerender]);

  useEffect(() => {
    filterHandler();
  }, [status, todos, amountOfScores]);

  useEffect(() => {
    setAmountOfScores(Object.keys(todos).length);
    setAllScores(scoreCounter);
    setAllScoreDifferentials(scoreDifferentialCounter.toFixed(1));
    setAllCr(crCounter.toFixed(1));
    setAllSlope(slopeCounter.toFixed(1));
    sortTodos(todos);
  }, [todos]);

  useEffect(() => {
    setAverageScore((allScores / amountOfScores).toFixed(1));
    setAverageScoreDifferential(
      (allScoreDifferentials / amountOfScores).toFixed(1)
    );
    setAverageCr((allCr / amountOfScores).toFixed(1));
    setAverageSlope((allSlope / amountOfScores).toFixed(1));
    calculateHandicap();
  }, [amountOfScores]);

  if (Object.keys(todos).length === 0) {
    return (
      <React.Fragment>
        <MyIntro />
        <Form
          setRerender={setRerender}
          rerender={rerender}
          calcScoreDifferential={calcScoreDifferential}
          setStatus={setStatus}
          setAmountOfScores={setAmountOfScores}
          inputSlope={inputSlope}
          inputCourseRating={inputCourseRating}
          setInputCourseRating={setInputCourseRating}
          setInputSlope={setInputSlope}
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
        />
        <EmptyState />
        <Faq />
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <MyIntro />
        <Form
          setRerender={setRerender}
          rerender={rerender}
          calcScoreDifferential={calcScoreDifferential}
          setStatus={setStatus}
          setAmountOfScores={setAmountOfScores}
          inputSlope={inputSlope}
          inputCourseRating={inputCourseRating}
          setInputCourseRating={setInputCourseRating}
          setInputSlope={setInputSlope}
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
        />
        <TodoList
          setRerender={setRerender}
          rerender={rerender}
          setStatus={setStatus}
          setAmountOfScores={setAmountOfScores}
          calcScoreDifferential={calcScoreDifferential}
          fullScores={fullScores}
          todos={todos}
          setTodos={setTodos}
          sortedTodos={sortedTodos}
        />
        <Result
          averageSlope={averageSlope}
          averageCr={averageCr}
          theHandicap={theHandicap}
          averageScoreDifferential={averageScoreDifferential}
          allScoreDifferentials={allScoreDifferentials}
          averageScore={averageScore}
          todos={todos}
          setAllScores={setAllScores}
          allScores={allScores}
          amountOfScores={amountOfScores}
          setAmountOfScores={setAmountOfScores}
        />
        <Faq />
      </React.Fragment>
    );
  }
};

export default Home;
