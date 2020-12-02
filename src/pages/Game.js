import React from 'react'

const Game = (props) => {

    const giveAnswer = (e) => {
        var givenAnswer = e.target.value;
        if (givenAnswer == props.questions[0].question){
            //Risposta giusta aggiorna stato parent
        }else{
            //risposta errata, devo creare l'elemento o pagina sconfitta
        }
    }

    return(
        <div>
            <h2>{props.questions[0].question}</h2>
            <button onClick={giveAnswer} value={props.answers[0]}>{props.answers[0]}</button>
            <button onClick={giveAnswer} value={props.answers[1]}>{props.answers[1]}</button>
                <br/>
            <button onClick={giveAnswer} value={props.answers[2]}>{props.answers[2]}</button>
            <button onClick={giveAnswer} value={props.answers[3]}>{props.answers[3]}</button>
        </div>
    )
}

export default Game;