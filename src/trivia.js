import { useState } from "react";
import axios from "axios";
import Intro from "./intro";
import Game from "./game";
import Results from "./results";
import he from "he";

const steps = {
    INTRO: "intro",
    GAME: "game",
    RESULTS: "results"
}

const App = () => {
    const [step, setStep] = useState(steps.INTRO)
    const [questions, setQuestions] = useState([])

    const onBegin = async () => {
        const response = await axios.get("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
        const data = response.data.results

        setQuestions(data.map(q => ({
            ...q,
            question: he.decode(q.question)
        })))
        setStep(steps.GAME)
    }

    switch (step) {
        case steps.INTRO:
            return <Intro onBegin={onBegin} />
        case steps.GAME:
            return <Game questions={questions} onFinish={() => setStep(steps.RESULTS)} />
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