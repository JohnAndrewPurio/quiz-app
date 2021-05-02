import Confetti from 'react-dom-confetti'

const config = {
    spread: 360,
    startVelocity: 70,
    elementCount: 100,
    duration: 2000
}

export default function Choices({choice, index, checkAnswer, chosenAnswer, answeredCorrect, disabled, correctAnswer}) {
    const selected = index === chosenAnswer
    const key = index === correctAnswer

    console.log(answeredCorrect, selected)

    return (
        <button className={disabled ? `disabled ${selected ? answeredCorrect ? 'correct': 'mistaken': key ? 'correct': ''}`: "choice"} 
            onClick={() => checkAnswer(index) } disabled={disabled} >
                {choice}
                <Confetti active={answeredCorrect && selected} config={config} />
        </button>
    )
}