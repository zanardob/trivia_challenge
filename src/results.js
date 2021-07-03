const Results = ({ questions, onRestart }) => {
    const isAnswerCorrect = question => question.answer === question.correct_answer

    const getScore = () => questions.reduce((score, q) => {
        if(isAnswerCorrect(q)) return score + 1
        else return score
    }, 0)

    return <div>
        <h3>{"You scored "}{getScore()}{" / "}{questions.length}</h3>

        {questions.map(q => <div key={q.question}>
            {isAnswerCorrect(q) ? "+" : "-"}
            <p>{q.question}</p>
        </div>)}

        <button onClick={onRestart}>{"PLAY AGAIN?"}</button>
    </div>
}

export default Results;