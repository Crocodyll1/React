function Random(){
     
    let number = Math.random() * 100;
    
    return <h3 style={{'background-color':'#549039'}}>random number is : {Math.round(number)}</h3>
}
export default Random;localStorage