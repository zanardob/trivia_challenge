import axios from "axios";
import he from "he";

const getQuestions = async () => {
    let response
    try {
        response = await axios.get("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
    }
    catch (error) {
        console.log(error.response.data.error)
        return
    }

    const data = response.data.results
    return data.map(q => ({
        ...q,
        question: he.decode(q.question)
    }))
}

export default getQuestions;