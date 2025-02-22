import React, { useState, useEffect } from "react";
import MyIntro from "../components/MyIntro.js";
import Form from "../components/Form.js";
import TodoList from "../components/TodoList.js";
import Result from "../components/Result.js";
import EmptyState from "../components/EmptyState.js";
import Faq from "../components/Faq.js";
import Donate from "../components/Donate.js";
import Changelog from "./Changelog.js";
import axios from "axios";
import RegisterAccount from "./RegisterAccount.js";
import LoginAccount from "./LoginAccount.js";
import loggedReducer from "../reducers/isLogged.js";
import { useSelector, useDispatch } from "react-redux";
import {
  changeTodos,
  login,
  logout,
  changeUsername,
  removeUsername,
} from "../actions/index.js";
import MetaTags from "react-meta-tags";

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [inputSlope, setInputSlope] = useState("");
  const [inputCourseRating, setInputCourseRating] = useState("");
  // const [todos, setTodos] = useState([]);
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
  const [adjustment, setAdjustment] = useState("");
  const [fullScores, setFullScores] = useState([]);
  const [theHandicap, setTheHandicap] = useState("");
  const [rerender, setRerender] = useState(0);
  const isLogged = useSelector((state) => state.loggedReducer);
  const isUsername = useSelector((state) => state.usernameReducer);
  const todos = useSelector((state) => state.todosReducer);
  const dispatch = useDispatch();

  // const [fulldata, setFulldata] = useState([]);

  //This has to be changed
  // const currentlyLoggedIn = 333;
  const url = "http://localhost:3333";

  // const checkLoginStatus = () => {
  //   if (localStorage.getItem("auth") === null) {
  //     localStorage.setItem("todos", JSON.stringify(todos));
  //   } else {
  //     let todoLocal = JSON.parse(localStorage.getItem("todos"));
  //     // setTodos(todoLocal);
  //   }
  // };

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
    let standardSlope = 113;
    let scoreDifferential = (((sc - cr) * standardSlope) / sl).toFixed(1);

    return scoreDifferential;
  };

  const saveToLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // const getLocalTodos = () => {
  //   if (localStorage.getItem("todos")) {
  //     let todoLocal = JSON.parse(localStorage.getItem("todos"));
  //     dispatch(changeTodos(todoLocal));
  //   }
  // };

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
    const fullScoresArray = [...sortthisarray];

    for (let y = 0; y < fullScoresArray.length; y++) {
      fullScoresArray[y]["iamgood"] = false;
      fullScoresArray[y]["myrankis"] = 999;
      fullScoresArray[y]["myorder"] = y + 1;
    }

    const fullScoresArrayCutted = [...fullScoresArray].slice(0, 20);
    const sortedArray = [...fullScoresArrayCutted];
    sortedArray.sort(sortFunction);
    const sortedArraySize = sortedArray.length;
    if (sortedArraySize == 1 || sortedArraySize == 2 || sortedArraySize == 3) {
      console.log("sortedArraySize is: " + sortedArraySize);
      setAdjustment(2);
      var slice = 1;
    }
    if (sortedArraySize == 4) {
      console.log("sortedArraySize is: " + sortedArraySize);
      setAdjustment(1);
      var slice = 1;
    }
    if (sortedArraySize == 5) {
      console.log("sortedArraySize is: " + sortedArraySize);
      setAdjustment(0);
      var slice = 1;
    }
    if (sortedArraySize == 6) {
      console.log("sortedArraySize is: " + sortedArraySize);
      setAdjustment(1);
      var slice = 2;
    }
    if (sortedArraySize == 7 || sortedArraySize == 8) {
      console.log("sortedArraySize is: " + sortedArraySize);
      setAdjustment(0);
      var slice = 2;
    }
    if (
      sortedArraySize == 9 ||
      sortedArraySize == 10 ||
      sortedArraySize == 11
    ) {
      console.log("sortedArraySize is: " + sortedArraySize);
      setAdjustment(0);
      var slice = 3;
    }
    if (
      sortedArraySize == 12 ||
      sortedArraySize == 13 ||
      sortedArraySize == 14
    ) {
      console.log("sortedArraySize is: " + sortedArraySize);
      setAdjustment(0);
      var slice = 4;
    }
    if (sortedArraySize == 15 || sortedArraySize == 16) {
      console.log("sortedArraySize is: " + sortedArraySize);
      setAdjustment(0);
      var slice = 5;
    }
    if (sortedArraySize == 17 || sortedArraySize == 18) {
      console.log("sortedArraySize is: " + sortedArraySize);
      setAdjustment(0);
      var slice = 6;
    }
    if (sortedArraySize == 19) {
      console.log("sortedArraySize is: " + sortedArraySize);
      setAdjustment(0);
      var slice = 7;
    }
    if (sortedArraySize > 19) {
      console.log("sortedArraySize is: " + sortedArraySize);
      setAdjustment(0);
      var slice = 8;
    }
    const cuttedSortedArray = sortedArray.slice(0, slice);

    setSortedTodos(cuttedSortedArray);

    for (let x = 0; x < cuttedSortedArray.length; x++) {
      let searchId = cuttedSortedArray[x]["id"];

      for (let i = 0; i < fullScoresArray.length; i++) {
        if (fullScoresArray[i]["id"] === searchId) {
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
      console.log("handicap in loop" + theHandicap);
      theHandicap =
        theHandicap + parseFloat(sortedTodos[i]["scoreDifferential"]);
      console.log("handicap in loop" + theHandicap);
    }
    console.log("handicap before " + theHandicap);
    theHandicap = (theHandicap / sortedTodos.length).toFixed(2);
    console.log("handicap after " + theHandicap);
    theHandicap = Math.round(theHandicap * 10) / 10;
    console.log("handicap after text " + theHandicap);
    theHandicap = (theHandicap - adjustment).toFixed(1);
    console.log("handicap last " + theHandicap);
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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const localStorageToken = localStorage.getItem("auth-token");
  //       const showMe = await axios.get(`${url}/fulldata`, {
  //         headers: {
  //           "auth-token": localStorageToken,
  //         },
  //       });

  //       console.log("fetchedData: " + JSON.stringify(showMe.data));
  //       if (showMe.data == null) {
  //         // setTodos([]);
  //         dispatch(changeTodos([]));
  //       } else {
  //         // setTodos(showMe.data.everything);
  //         dispatch(changeTodos(showMe.data.everything));
  //         dispatch(changeUsername(showMe.data.name));
  //         dispatch(login());
  //         console.log(isLogged);
  //       }
  //     } catch (err) {
  //       console.log(err);
  //       getLocalTodos();
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const saveToCloud = () => {
      const localStorageToken = localStorage.getItem("auth-token");
      const newFulldata = {
        everything: todos,
      };
      axios.post("http://localhost:3333/update", newFulldata, {
        headers: {
          "auth-token": localStorageToken,
        },
      });
    };
    if (rerender && isLogged) {
      saveToCloud();
    }
    if (rerender && !isLogged) {
      saveToLocal();
    }
  }, [rerender]);

  useEffect(() => {
    filterHandler();
  }, [status, todos, amountOfScores]);

  useEffect(() => {
    console.log("use effect is fire");
  }, [isLogged]);

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
        {isUsername && <h3>Hallo, {isUsername}</h3>}
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
          // todos={todos}
          // setTodos={setTodos}
        />
        <EmptyState />
        <Donate />
        <Faq />
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <MetaTags>
          <title>Handicap berechnen mit handicap.report</title>
          <meta
            name="description"
            content="Einfach gespielte Runden eingeben und sofort dein neues Handicap erhalten. handicap.report ist die einzige Seite in 2025, die dir sofort dein neues Handicap anzeigt."
          />
          <link rel="canonical" href="https://handicap.report/" />
        </MetaTags>
        {isUsername && <h3>Hallo, {isUsername}</h3>}
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
          // todos={todos}
          // setTodos={setTodos}
        />
        <TodoList
          setRerender={setRerender}
          rerender={rerender}
          setStatus={setStatus}
          setAmountOfScores={setAmountOfScores}
          calcScoreDifferential={calcScoreDifferential}
          fullScores={fullScores}
          // todos={todos}
          // setTodos={setTodos}
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
          adjustment={adjustment}
          setAdjustment={setAdjustment}
        />
        <Donate />
        <Faq />
      </React.Fragment>
    );
  }
};

export default Home;
