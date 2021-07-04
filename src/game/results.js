import styles from "../trivia.module.css"

const Results = ({ questions, onRestart }) => {
    const isAnswerCorrect = question => question.correct_answer === question.user_answer

    const computeScore = () => questions.reduce((score, q) => {
        if(isAnswerCorrect(q)) return score + 1
        else return score
    }, 0)

    const QuestionResult = ({ question, isCorrect }) => {
        return <div key={question.question} className={`${styles.result} ${isCorrect ? styles.correct : styles.incorrect}`}>
            <span className={styles.answer}>{`${isCorrect ? "✓" : "⨯"} ${question.correct_answer.toUpperCase()}`}</span>
            <span className={styles.question}>{question.question}</span>
        </div>
    }

    return <>
        <h1>{"You scored "}{computeScore()}{" / "}{questions.length}</h1>

        <div className={styles.content}>
            {questions.map(q => <QuestionResult key={q.question} question={q} isCorrect={isAnswerCorrect(q)} />)}
        </div>

        <div className={styles.actionArea}>
            <button onClick={onRestart}>{"PLAY AGAIN?"}</button>
        </div>
    </>
}

export default Results;