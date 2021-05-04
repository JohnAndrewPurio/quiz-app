import { useState } from 'react'
import './App.css'
import Quiz from "./Quiz/Quiz"
import { Switch, Route, Redirect } from 'react-router-dom'
import Results from './Results/Results'
import Start from './Start/Start'

//Categories: 18 - Computer, 19 - Math, 9 - General Knowledge, 27 - Animals, 17 - Science & Nature
// 26 - Celebrities, 25 - Art, 24 - Politics, 23 - History, 22 - Geography, 21 - Sports, 20 - Mythology, 16 - Board Games, 15 - Video Games
// 14 - Television, 13 - Musical & Theatres, 12 - Music, 11 - Film, 10 - Books

const URL = 'https://opentdb.com/api.php?amount=10&type=multiple'
const categoriesIndex = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
const categories = ['General Knowledge', 'Books', 'Film', 'Music', 'Musical & Theatres', 'Television', 'Video Games', 
                    'Board Games', 'Science & Nature', 'Science: Computer', 'Science: Math', 'Mythology', 'Sports', 'Geography', 
                    'History', 'Politics', 'Art', 'Celebrities', 'Animals']

export default function App() {
    const [quizData, setQuizData] = useState([])

    const getData = async (category) => {
        try {
            const fetchedData = await fetch(`${URL}${category ? `&category=${category}`: ''}`)
            const jsonData = await fetchedData.json()
            const data = jsonData.results
            let num = -1;
            const newData = data.map( ele => {
                const {question, correct_answer, incorrect_answers} = ele
                const formattedData = {
                    question: question,
                    choices: incorrect_answers
                }
                let correctAnswerIndex = Math.floor( Math.random() * formattedData.choices.length + 1 )
                
                while(num === correctAnswerIndex) {
                    correctAnswerIndex = Math.floor( Math.random() * formattedData.choices.length + 1 )
                }

                num = correctAnswerIndex

                formattedData.choices.splice(correctAnswerIndex, 0, correct_answer)
                formattedData.correctChoice = correctAnswerIndex
        
                return formattedData
            })
            
            setQuizData(newData)
        } catch(e) {
            console.log(e)
        }
    }
    
    const redirectToQuiz = (index) => {
        getData(index + 9)
    }

    return (
        <div className="App">
                <Switch>
                    <Route exact path="/quiz" > 
                        <Quiz quizData={quizData} />
                    </Route>
                    <Route exact path="/results" render={(props) => <Results data={props.location.state} />} ></Route>
                    <Route exact path="/">
                        {quizData.length > 0 ? <Redirect to='/quiz' />
                                : <Start categories={categories} categoriesIndex={categoriesIndex} redirectToQuiz={redirectToQuiz} />
                        }
                    </Route>
                </Switch>
        </div>
    )
}