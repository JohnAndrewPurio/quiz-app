import Summary from "./Summary"
import './Results.css'

export default function Results({data}) {
    const {answers, quizData, score} = data

    return (
        <div className="results">
            <a href='/' >Go Home</a>
            <div className="title">
                <h1>Results</h1>
                <h3>Score: {score} / {quizData.length}</h3>
            </div>

            <Summary answers={answers} quizData={quizData}/>
        </div>
    )
}