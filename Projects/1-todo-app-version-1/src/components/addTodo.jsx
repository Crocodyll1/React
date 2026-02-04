function AddTodo() {
    return (
    <div className="container text-center">
        <div className="row sk-row">
            <div className="col-4">
                <input type="text" placeholder="Input Text Here" />
            </div>
            <div className="col-4">
                <input type="date" placeholder="Enter Date" />
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-success sk-btn">ADD</button>
            </div>
        </div> 
    </div>
    );
}
export default AddTodo;