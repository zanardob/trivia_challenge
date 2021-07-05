import styles from "../trivia.module.css"
import { useState } from "react";
import fetchQuestions from "../triviaAPI";

const Intro = ({ onBegin }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState(false)

    const handleBegin = async () => {
        setIsLoading(true)

        const questions = await fetchQuestions()
        if(!questions) {
            setHasError(true)
            setIsLoading(false)
        } else {
            onBegin(questions)
        }
    }

    return <>
        <h1>{"Welcome to the Trivia Challenge!"}</h1>

        <div className={styles.content}>
            <div>
                <p>{"You will be presented with 10 True or False questions."}</p>
                <p>{"Can you score 100%?"}</p>
            </div>
            {hasError && <div>
                <p>{"There was a problem while fetching the trivia questions."}</p>
                <p>{"Can you try again?"}</p>
            </div>}
        </div>

        <div className={styles.actionArea}>
            <button onClick={handleBegin} disabled={isLoading} className={isLoading ? styles.loader : undefined}>{isLoading ? "" : "BEGIN"}</button>
        </div>
    </>
}

export default Intro;