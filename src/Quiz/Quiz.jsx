import { useState, useEffect } from 'react'
import './Quiz.css'
import Choices from './Choices'
import Question from './Question'
import { Redirect } from 'react-router'
import Timer from './Timer'

export default function Quiz({quizData}) {
    const [quizNum, setQuizNum] = useState(0)
    const [answeredCorrect, setAnsweredCorrect] = useState(false)
    const [chosenAnswer, setChosenAnswer] = useState(null)
    const [score, setScore] = useState(0)
    const [disableButtons, setDisableButtons] = useState(false)
    const [selectedAnswers, setSelectedAnswers] = useState([])
    const [timerLength, setTimerLength] = useState(100)
    const [timerID, setTimerID] = useState('')
    const [countdownID, setCountdownID] = useState('')
    const currentNum = quizData[quizNum]

    useEffect(() => {
        if(quizNum < quizData.length) {
            adjustTimer()
            clearInterval(timerID)
            clearTimeout(countdownID)
        }

        // eslint-disable-next-line
    }, [quizNum])

    const adjustTimer = () => {
        const timer = setInterval( () => setTimerLength(current => current - 0.20), 10)
        const countdown = setTimeout( () => checkAnswer(-1), 5000)

        setCountdownID(countdown)
        setTimerID(timer)
    }

    const checkAnswer = (index) => {
        const correct = index === currentNum.correctChoice
        const pointEarned = correct ? score + 1: score;
        const answersSelected = [...selectedAnswers]

        answersSelected.push(index)
        clearInterval(timerID)
        clearTimeout(countdownID)

        setTimerLength(0)
        setSelectedAnswers(answersSelected)
        setScore(pointEarned)
        setChosenAnswer(index)
        setAnsweredCorrect(correct)
        setDisableButtons(true)

        setTimeout( () => nextQuestion(), 3000)
    }

    const nextQuestion = () => {
        const questionNum = quizNum + 1

        setTimerLength(100);
        setQuizNum(questionNum)
        setDisableButtons(false)
    }

    const redirectToResults = () => {
        clearTimeout(countdownID)

        return <Redirect to={{
            pathname: '/results',
            state: {
                score: score,
                quizData: quizData,
                answers: selectedAnswers
            }
        }} />
    }

    console.log('Yay')

    return (
         quizNum === quizData.length ? redirectToResults() :
            <div className="quiz">
                <Timer timerLength={timerLength}/>
                <div className="score"><h3>Score: {score}</h3></div>
                <Question question={currentNum.question} />
                <div className="choices">
                    {
                        currentNum.choices.map( (choice, index) => {
                            return <Choices key={choice} choice={choice} index={index} checkAnswer={checkAnswer} chosenAnswer={chosenAnswer}
                                        answeredCorrect={answeredCorrect} disabled={disableButtons} correctAnswer={currentNum.correctChoice} />
                        })
                    }
                </div>  
            </div>  
    )
}