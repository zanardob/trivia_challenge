import { useState } from "react";

const Question = ({ question, progress, onAnswer }) => {
    return <div>
        <h3>{question.category}</h3>

        <div>
            <p>{question.question}</p>
        </div>
        <p>{progress}</p>

        <button onClick={() => onAnswer("True")}>{"TRUE"}</button>
        <button onClick={() => onAnswer("False")}>{"FALSE"}</button>
    </div>
}

const Game = ({ questions, onFinish }) => {
    const [index, setIndex] = useState(0)

    const onAnswer = answer => {
        questions[index].answer = answer

        if(index < questions.length - 1) setIndex(index + 1)
        else onFinish()
    }

    return <Question question={questions[index]} progress={`${index} of ${questions.length}`} onAnswer={onAnswer} />
}

export default Game;