function Time(){

    let now = new Date();
    let date = now.toLocaleDateString();
    let time = now.toLocaleTimeString();

    return (
        <span>{date} - {time}</span>
    )

}
export default Time;