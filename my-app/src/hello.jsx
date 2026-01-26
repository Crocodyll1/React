function Hello(){
    let myName = 'Sushant';
    let fullName = () => {
        return 'Sushant kumar yadav';
    }
    return <h3>hey {fullName()}</h3>
}

export default Hello;
