import axios from "axios";
import he from "he";

const fetchQuestions = async () => {
    let response
    try {
        response = await axios.get("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
    }
    catch (error) {
        if(error.response)
            console.log(error.response.data.error)
        else console.log(error)

        return false
    }

    const success = response.data.response_code
    if(success !== 0) return false

    const data = response.data.results
    if(data.length === 0) return false

    return data.map(q => ({
        ...q,
        question: he.decode(q.question)
    }))
}

export default fetchQuestions;