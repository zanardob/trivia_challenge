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
        // TODO: Move this call to its own file
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
        default:
            throw new Error("Unknown value for step.")
    }
}

export default App;