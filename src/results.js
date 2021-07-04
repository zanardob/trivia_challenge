import styles from "./trivia.module.css"

const Results = ({ questions, onRestart }) => {
    const isAnswerCorrect = question => question.user_answer === question.correct_answer

    const getScore = () => questions.reduce((score, q) => {
        if(isAnswerCorrect(q)) return score + 1
        else return score
    }, 0)

    return <>
        <h3>{"You scored "}{getScore()}{" / "}{questions.length}</h3>

        <div className={styles.content}>
            {questions.map(q => <div key={q.question} className={styles.result}>
                <span>{isAnswerCorrect(q) ? "+" : "-"}</span>
                <span>{q.question}</span>
            </div>)}
        </div>

        <div className={styles.actionArea}>
            <button onClick={onRestart}>{"PLAY AGAIN?"}</button>
        </div>
    </>
}

export default Results;