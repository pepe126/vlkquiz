import './App.css';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import Home from './pages/Home';
import Istruzioni from './pages/Istruzioni';
import Game from './pages/Game';
import { useEffect, useState } from 'react'
import LostPage from './pages/LostPage'
import WinPage from './pages/WinPage'

function App() {

  const[questions, setQuestions] = useState(null)
  const[answers, setAnswers] = useState(null)


  useEffect(() => {
      getQuestions();
  },[]);
 


  function shuffleArray(array) {
      let i = array.length - 1;
      for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
  }

  const getQuestions = async () => {
      const response = await fetch(`https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple`);
      const questionsData = await response.json()
      setQuestions(questionsData.results);
      setAnswers(questionsData.results.map((data) => shuffleArray(data.incorrect_answers.concat(data.correct_answer))));
      console.log(questionsData.results);
  }

  return (
    <Router>
      <div className="App">
        <Route path = "/vlkquiz" exact render = {() => <Home />}/>
        <Route path = "/istruzioni" render = {() => <Istruzioni /> }/>
        {questions && answers && (<Route path = "/game" render = {() => <Game
          questions = {questions}
          answers = {answers}
        />}/>)}
        <Route path = "/LostPage" render = {() => <LostPage/>} />
        <Route path = "/WinPage" render = {() => <WinPage/>} />
      </div>
    </Router>
  );
}

export default App;
