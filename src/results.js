const isAnswerCorrect = question => question.answer === question.correct_answer

const QuestionResult = ({ question }) => {
    return <div>
        {isAnswerCorrect(question) ? "+" : "-"}
        <p>{question.question}</p>
    </div>
}

const Results = ({ questions, onRestart }) => {
    const getScore = () => questions.reduce((score, q) => {
        if(isAnswerCorrect(q)) return score + 1
        else return score
    }, 0)

    return <div>
        <h3>{"You scored "}{getScore()}{" / "}{questions.length}</h3>

        {questions.map(q => <QuestionResult question={q} />)}

        <button onClick={onRestart}>{"PLAY AGAIN?"}</button>
    </div>
}

export default Results;