function TodoItem1() {

    let TodoName = "Buy Milk";
    let TodoDate = "4/10/2023";

    return (
        <div className="container">

            <div className="row">
                <div class="col-4">
                   {TodoName}
                </div>
                <div className="col-4">
                   { TodoDate }
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger">Delete</button>
                </div>


            </div>
        </div>
    );


}
export default TodoItem1;