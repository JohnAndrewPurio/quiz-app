import './Summary.css'

export default function Summary({answers, quizData}) {
    return (
        <table> 
            <thead>
                <tr>
                    <th>Question</th>
                    <th>Your Answer</th>
                    <th>Correct Answer</th>
                </tr>
            </thead>
            
            <tbody>
                {
                    answers.map( (answer, index) => <tr key={index}>
                                                <td dangerouslySetInnerHTML={{__html: quizData[index].question}}></td>
                                                <td className={`answers ${answer === quizData[index].correctChoice ? 'correct': 'mistaken'}`}
                                                    dangerouslySetInnerHTML={{__html: quizData[index].choices[answer]}}>
                                                </td>
                                                <td className="answers correct" dangerouslySetInnerHTML={{__html: quizData[index].choices[quizData[index].correctChoice]}}> 
                                                </td>
                                            </tr> 
                    )
                }
            </tbody>  
        </table>
    )
}