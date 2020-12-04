import React from 'react'
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import LostPage from './LostPage'
import { useHistory } from "react-router-dom"
import { useEffect, useState } from 'react'
import Infographic from '../components/Infographic'
import "../styles/Startupbtn.css"



const Game = () => {

    const history = useHistory()
    const[numeroDomanda, setNumeroDomanda] = useState(0);
    const [time, setTime] = useState(21)
    const[questions, setQuestions] = useState(null)
    const[answers, setAnswers] = useState(null)


    useEffect(() => {
        const interval = setInterval(() => {
          updateTime();
        }, 1000);
        
        if(time == 21){
            setTime(20)
            getQuestions();
        }
        
        window.addEventListener("popstate", () => {
            history.push("/");
        });

        return () => {
          clearInterval(interval);
        };
      }, [time])


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


    function updateTime () {
        if(time > 0){
            const newTime = time-1;
            setTime(newTime);
        } else {
            history.push("/LostPage")
        }
    }


    function progressQuestion(numeroDomanda){
        setNumeroDomanda(numeroDomanda +1);
     }

    const giveAnswer = (e) => {
        var givenAnswer = e.target.value;
        console.log(givenAnswer)
        if (givenAnswer == questions[numeroDomanda].correct_answer){
            if(numeroDomanda == 9){
                history.push("/WinPage")
            } else{
                progressQuestion(numeroDomanda);
                setTime(20)
            }
        }else{
            history.push("/LostPage")
        }
    }

    return(
        <div>
            
            {questions && answers && (<div>

            <h1>{time}</h1>
            <Infographic
                numero = {numeroDomanda + 1}
            />
            <h2>{questions[numeroDomanda].question}</h2>
            <button className = "btn btn-warning" onClick={giveAnswer} value={answers[numeroDomanda][0]}>{answers[numeroDomanda][0]}</button>
            <button className = "btn btn-warning" onClick={giveAnswer} value={answers[numeroDomanda][1]}>{answers[numeroDomanda][1]}</button>
                <br/>
            <button className = "btn btn-warning" onClick={giveAnswer} value={answers[numeroDomanda][2]}>{answers[numeroDomanda][2]}</button>
            <button className = "btn btn-warning" onClick={giveAnswer} value={answers[numeroDomanda][3]}>{answers[numeroDomanda][3]}</button>
        
            </div>)}

        </div>
    )
}

export default Game;