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

    return (
        <button className={disabled ? `disabled ${selected ? answeredCorrect ? 'correct': 'mistaken': key ? 'correct': ''}`: "choice"} 
            onClick={() => checkAnswer(index) } disabled={disabled} >
                <h2 dangerouslySetInnerHTML={{__html: choice}}></h2>
                <Confetti active={selected && key} config={config} />
        </button>
    )
}