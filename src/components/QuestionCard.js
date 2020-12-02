import React from 'react'
import { useEffect } from 'react'

const QuestionCard = (props) => {
    

    return(
        <div>
            <div>{props.question}</div>
            <button>{props.answer1}</button>
            <button>{props.answer2}</button>
                <br/>
            <button>{props.answer3}</button>
            <button>{props.answer4}</button>
        </div>
    )
}

export default QuestionCard;