export default function Start({categories, redirectToQuiz, buttonsDisabled}) {
    return (
        <div className="start">
            <h1>Let's test your Knowledge</h1>
            <div className="categories">
                {
                    categories.map( (category, index) => <button disabled={buttonsDisabled} key={category} onClick={() => redirectToQuiz(index)} >{category}</button>)
                }
            </div>
        </div>
    )
}