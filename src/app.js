import { useState } from "react";
import Intro from "./intro";
import Game from "./game";
import Results from "./results";
import getQuestions from "./triviaAPI"
import styles from "./trivia.module.css"

const steps = {
    INTRO: "intro",
    GAME: "game",
    RESULTS: "results"
}

const App = () => {
    const [step, setStep] = useState(steps.INTRO)
    const [questions, setQuestions] = useState([])

    const onBegin = async () => {
        const result = await getQuestions()
        setQuestions(result)
        setStep(steps.GAME)
    }

    let component
    switch (step) {
        case steps.INTRO:
            component = <Intro onBegin={onBegin} />
            break;
        case steps.GAME:
            component = <Game questions={questions} onFinish={() => setStep(steps.RESULTS)} />
            break;
        case steps.RESULTS:
            component = <Results questions={questions} onRestart={() => setStep(steps.INTRO)} />
            break;
        default:
            throw new Error("Unknown value for step.")
    }

    return <div className={styles.mainContainer}>
        <div className={styles.gameContainer}>
            {component}
        </div>
    </div>
}

export default App;