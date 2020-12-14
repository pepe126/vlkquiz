import React from 'react'
import { useHistory } from "react-router-dom"
import { useEffect, useState } from 'react'
import Infographic from '../components/Infographic'
import "../styles/Startupbtn.css"

/* PAGINE GAME
Carica quando il quiz viene avviato.
Comprende l'infographic ('./components/Infographic.js') e le domande con risposte */

const Game = () => {

    const history = useHistory()

    //Stati utilizzati

    const[numeroDomanda, setNumeroDomanda] = useState(0);
    const [time, setTime] = useState(21)
    const[questions, setQuestions] = useState(null)
    const[answers, setAnswers] = useState(null)
    
    
    useEffect(() => {
        //Timer tramite setInterval
        const interval = setInterval(() => {
            //Funzione per update tempo
            updateTime();
        }, 1000);
        
        /*Il tempo è settato a 21 inizialmente e settato manualmente
        a 20 per evitare che le domande vengano ricaricate tramite
        la funzione getQuestions*/
        if(time === 21){
            setTime(20)
            getQuestions();
        }
        
        /*pop listener per evitare comportamenti indesiderati con
        il tasto back*/
        window.addEventListener("popstate", () => {
            history.push("/");
        });

        return () => {
          clearInterval(interval);
        };
      }, [time])

    //Funzione per mescolare un array
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

    /*funzione per fetchare domande,
     risposte etc da open trivia database*/
    const getQuestions = async () => {
        const response = await fetch(`https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple`);
        const questionsData = await response.json()
        setQuestions(questionsData.results);
        //Le risposte sbagliate e quella corretta sono riunite e mescolate in un array
        setAnswers(questionsData.results.map((data) => shuffleArray(data.incorrect_answers.concat(data.correct_answer))));
    }

    //Funzione per aggiornare il tempo rimanente
    function updateTime () {
        if(time > 0){
            const newTime = time-1;
            setTime(newTime);
        } else {
            //Se il tempo scende a 0 l'utente perde e viene caricata la pagina relativa
            history.push("/LostPage")
        }
    }

    /*Funzione per scorrere le domande, chiamata quando 
    viene data una domanda giusta*/
    function progressQuestion(numeroDomanda){
        setNumeroDomanda(numeroDomanda +1);
    }

    //funzione chiamata onClick sui bottoni
    const giveAnswer = (e) => {
        var givenAnswer = e.target.value;
        //Se la risposta corrisponde a quella corretta determinata dall'API 
        if (givenAnswer === questions[numeroDomanda].correct_answer){
            //Se l'utente si trovava all'ultima domanda viene caricata la pagina di vittoria
            if(numeroDomanda === 9){
                history.push("/WinPage")
            } else{
                //Se la domanda non era l'ultima viene triggerata la funz per scorrere le domande
                progressQuestion(numeroDomanda);
                //Il tempo viene resettato a 20
                setTime(20)
            }
        }else{
            //Se le risposte non corrispondono l'utente viene portato nella pagina sconfitta
            history.push("/LostPage")
        }
    }

    return(
        <div className="section">
            
            {questions && answers && (<div>

            <h1>{time}</h1>
            <Infographic
                /*Il numero della domanda viene passato +1 
                perchè utilizzato come indice dell'array restituito dall'API*/
                numero = {numeroDomanda + 1}
            />
            <h2>{questions[numeroDomanda].question}</h2>
            <button className = "smallbtn risp" onClick={giveAnswer} value={answers[numeroDomanda][0]}>{answers[numeroDomanda][0]}</button>
            <button className = "smallbtn risp" onClick={giveAnswer} value={answers[numeroDomanda][1]}>{answers[numeroDomanda][1]}</button>
                <br/>
            <button className = "smallbtn risp" onClick={giveAnswer} value={answers[numeroDomanda][2]}>{answers[numeroDomanda][2]}</button>
            <button className = "smallbtn risp" onClick={giveAnswer} value={answers[numeroDomanda][3]}>{answers[numeroDomanda][3]}</button>
        
            </div>)}

        </div>
    )
}

export default Game;