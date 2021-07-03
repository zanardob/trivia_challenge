import {useState} from "react";

const Question = ({ question, index, count, onAnswer }) => {
    return <div>
        <h3>{question.category}</h3>

        <div> {/* Border */}
            <p>{question.question}</p>
        </div>
        <p>{index}{" of "}{count}</p>

        <button onClick={() => onAnswer("True")}>{"TRUE"}</button>
        <button onClick={() => onAnswer("False")}>{"FALSE"}</button>
    </div>
}

const Game = ({ questions, onFinish, onAnswer }) => {
    const [index, setIndex] = useState(0)

    const onQuestionAnswer = answer => {
        onAnswer(index, answer)

        if(index < questions.length - 1) setIndex(index + 1)
        else onFinish()
    }

    return <Question question={questions[index]} index={index} count={questions.length} onAnswer={onQuestionAnswer} />
}

export default Game;