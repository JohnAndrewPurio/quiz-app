export default function Timer({timerLength}) {
    const style = {
        width: `${timerLength}%`,
         backgroundColor:`${timerLength <= 30 ? 'firebrick': timerLength <= 60 ? 'orange': '#adff2f'}`
    }

    return (
        <div className="timer" style={style}></div>
    )
}