function TodoItem1() {

    let TodoName = "Buy Milk";
    let TodoDate = "4/10/2023";

    return (
        <div className="container text-center">

            <div class="row">
                <div class="col-4">
                   {TodoName}
                </div>
                <div class="col-4">
                   { TodoDate }
                </div>
                <div class="col-2">
                    <button type="button" class="btn btn-danger">Delete</button>
                </div>


            </div>
        </div>
    );


}
export default TodoItem1;