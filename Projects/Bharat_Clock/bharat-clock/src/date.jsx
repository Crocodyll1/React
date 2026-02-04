function DateComponent(){
     let date = new Date();
    return (
        <div>{date.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })}</div>
    )
}

export default DateComponent;