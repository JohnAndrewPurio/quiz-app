const URL = 'https://opentdb.com/api.php?amount=10&category=19&type=multiple'

async function getData() {
    try {
        const fetchedData = await fetch(URL)
        const jsonData = await fetchedData.json()

        return formatData(jsonData.results) 
    } catch(e) {
        console.log(e)
    }

    
}

function formatData(data) {
    const newData = data.map( ele => {
        const {question, correct_answer, incorrect_answers} = ele

        console.log(question, correct_answer, incorrect_answers)

        const formattedData = {
            question: question,
            choices: incorrect_answers
        }
        const correctAnswerIndex = Math.floor( Math.random() * formattedData.choices.length + 1 )

        formattedData.choices.splice(correctAnswerIndex, 0, correct_answer)
        formattedData.correctChoice = correctAnswerIndex

        return formattedData
    })

    return newData
}

export default getData;