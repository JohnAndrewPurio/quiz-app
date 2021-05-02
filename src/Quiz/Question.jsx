export default function Question({question}) {
    return (
        <div className="question">
            <h2 dangerouslySetInnerHTML={{__html: question}}></h2>
        </div>
    )
}