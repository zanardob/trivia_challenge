import { useState } from "react";
import axios from "axios";
import Intro from "./intro";
import Game from "./game";
import Results from "./results";

const steps = {
    INTRO: "intro",
    GAME: "game",
    RESULTS: "results"
}

const App = () => {
    const [step, setStep] = useState(steps.INTRO)
    const [questions, setQuestions] = useState([])

    const onBegin = async () => {
        const questions = await axios.get("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
        setQuestions(questions.data.results)
        setStep(steps.GAME)
    }

    const onAnswer = (id, answer) => {
        const question = questions[id]
        question.answer = answer
        //setQuestions(questions) TODO: test without this
    }

    switch (step) {
        case steps.INTRO:
            return <Intro onBegin={onBegin} />
        case steps.GAME:
            return <Game questions={questions} onAnswer={onAnswer} onFinish={() => setStep(steps.RESULTS)} />
        case steps.RESULTS:
            return <Results questions={questions} onRestart={() => setStep(steps.INTRO)} />
    }
}

export default App;

// INTRO:
// pagina inicial, quando user clica begin, puxa as questoes (button loading) e muda pra step GAME

// GAME:
// recebe as questoes
// renderiza um component que guarda qual questao que ta
// quando termina, muda pra step RESULTS

// RESULT:
// recebe as respostas
// renderiza bonitinho
// quando user clicka play again, volta pra step INTRO