import { useEffect, useState } from 'react'
import './App.css'
import Quiz from "./Quiz/Quiz"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Results from './Results/Results'
import Start from './Start/Start'

const URL = 'https://opentdb.com/api.php?amount=10&category=19&type=multiple'

export default function App() {
    const [quizData, setQuizData] = useState([])

    const getData = async () => {
        try {
            const fetchedData = await fetch(URL)
            const jsonData = await fetchedData.json()
            const data = jsonData.results
            
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
        
            setQuizData(newData)
        } catch(e) {
            console.log(e)
        }
    }

    useEffect( () => {
        getData()
    }, [])

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/"> 
                        {
                            quizData.length === 0 ? <h2>Loading...</h2>: <Quiz quizData={quizData} />
                        }
                    </Route>
                    <Route exact path="/start">
                        <Start />
                    </Route>
                    <Route exact path="/results" render={(props) => <Results data={props.location.state} />} ></Route>
                </Switch>
            </Router>
        </div>
    )
}