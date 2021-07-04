import styles from "./trivia.module.css"

const Intro = ({ onBegin }) => {
    return <>
        <h3>{"Welcome to the Trivia Challenge!"}</h3>

        <div className={styles.content}>
            <p>{"You will be presented with 10 True or False questions."}</p>
            <p>{"Can you score 100%?"}</p>
        </div>

        <div className={styles.actionArea}>
            <button onClick={onBegin}>{"BEGIN"}</button>
        </div>
    </>
}

export default Intro;