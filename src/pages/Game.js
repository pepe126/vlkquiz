import React from 'react'
import { useEffect, useState } from 'react'
import QuestionCard from '../components/QuestionCard'
import Infographic from '../components/Infographic'

const Game = () => {

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
        console.log(array);
        return array;
    }
    const getQuestions = async () => {
        const response = await fetch(`https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple`);
        const questionsData = await response.json()
        setQuestions(questionsData.results);
        setAnswers(shuffleArray(questionsData.results[0].incorrect_answers.concat(questionsData.results[0].correct_answer)));
    }


 

    return(
        <div>
            <Infographic />
            {questions && answers &&
            <QuestionCard 
                question = {questions[0].question}
                answer1 = {answers[0]}
                answer2 = {answers[1]}
                answer3 = {answers[2]}
                answer4 = {answers[3]}

            />}
        </div>
    )
}

export default Game;