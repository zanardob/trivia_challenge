const Intro = ({ onBegin }) => {
    return <div>
        <h3>{"Welcome to the Trivia Challenge!"}</h3>

        <p>{"You will be presented with 10 True or False questions."}</p>
        <p>{"Can you score 100%?"}</p>

        <button onClick={onBegin}>{"BEGIN"}</button>
    </div>
}

export default Intro;