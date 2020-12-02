import './App.css';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import Home from './pages/Home';
import Istruzioni from './pages/Istruzioni';
import Game from './pages/Game';
import { useEffect, useState } from 'react'

function App() {

  const[numeroDomanda, setNumeroDomanda] = useState(0);
  const[questions, setQuestions] = useState(null)
  const[answers, setAnswers] = useState(null)

  useEffect(() => {
      getQuestions();
      console.log(questions);
  },[]);
 

  function progressQuestion(numeroDomanda){
    setNumeroDomanda(numeroDomanda +1);
  }

  function shuffleArray(array) {
      let i = array.length - 1;
      for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      console.log(array);
      return array;
  }

  const getQuestions = async () => {
      const response = await fetch(`https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple`);
      const questionsData = await response.json()
      setQuestions(questionsData.results);
      setAnswers(shuffleArray(questionsData.results[0].incorrect_answers.concat(questionsData.results[0].correct_answer)));
  }

  return (
    <Router>
      <div className="App">
        <Route path = "/" exact render = {() => <Home />}/>
        <Route path = "/istruzioni" render = {() => <Istruzioni /> }/>
        {questions && answers && (<Route path = "/game" render = {() => <Game
          questions = {questions}
          answers = {answers}
          numeroDomanda = {numeroDomanda}
        />}/>)}
      </div>
    </Router>
  );
}

export default App;
