import React from 'react'
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import LostPage from './LostPage'
import { useHistory } from "react-router-dom"
import { useEffect, useState } from 'react'
import Infographic from '../components/Infographic'


const Game = (props) => {

    const history = useHistory()
    const[numeroDomanda, setNumeroDomanda] = useState(0);


     function progressQuestion(numeroDomanda){
        setNumeroDomanda(numeroDomanda +1);
     }

    const giveAnswer = (e) => {
        var givenAnswer = e.target.value;
        console.log(givenAnswer)
        if (givenAnswer == props.questions[numeroDomanda].correct_answer){
            if(numeroDomanda == 9){
                history.push("/WinPage")
            } else{
                progressQuestion(numeroDomanda);
            }
        }else{
            history.push("/LostPage")
        }
    }

    return(
        <div>
            <Infographic
                numero = {numeroDomanda + 1}
            />
            <h2>{props.questions[numeroDomanda].question}</h2>
            <button onClick={giveAnswer} value={props.answers[numeroDomanda][0]}>{props.answers[numeroDomanda][0]}</button>
            <button onClick={giveAnswer} value={props.answers[numeroDomanda][1]}>{props.answers[numeroDomanda][1]}</button>
                <br/>
            <button onClick={giveAnswer} value={props.answers[numeroDomanda][2]}>{props.answers[numeroDomanda][2]}</button>
            <button onClick={giveAnswer} value={props.answers[numeroDomanda][3]}>{props.answers[numeroDomanda][3]}</button>
        </div>
    )
}

export default Game;