import { useState } from "react";
import styles from "./trivia.module.css"

const Question = ({ question, progress, onAnswer }) => {
    const answerQuestion = answer => {
        question.user_answer = answer
        onAnswer()
    }

    return <>
        <h1>{question.category}</h1>

        <div className={styles.content}>
            <div className={styles.questionBox}>
                <p>{question.question}</p>
            </div>
            <p>{progress}</p>
        </div>

        <div className={styles.actionArea}>
            <button onClick={() => answerQuestion("True")}>{"TRUE"}</button>
            <button onClick={() => answerQuestion("False")}>{"FALSE"}</button>
        </div>
    </>
}

const Game = ({ questions, onFinish }) => {
    const [index, setIndex] = useState(0)

    const onAnswer = () => {
        if(index < questions.length - 1) setIndex(index + 1)
        else onFinish()
    }

    return <Question question={questions[index]} progress={`${index + 1} of ${questions.length}`} onAnswer={onAnswer} />
}

export default Game;