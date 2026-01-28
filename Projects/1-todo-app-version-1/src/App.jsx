import AppName from './component/appName.jsx';


function App() {
  return <center class='todo-container'>
     <AppName/>
    <div class="container text-center">

      <div class="row">
        <div class="col-4">
          <input type="text" placeholder="Input Text Here" />
        </div>
        <div class="col-4">
          <input type="date" placeholder="Enter Date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success">ADD</button>
        </div>

        
      </div>
      <div class="row">
        <div class="col-4">
           Buy Milk
        </div>
        <div class="col-4">
          4/10/2023
        </div>
        <div class="col-2">
         <button type="button" class="btn btn-danger">Delete</button>
        </div>

        
      </div>
      <div class="row">
        <div class="col-4">
          Go to college
        </div>
        <div class="col-4">
          5/10/2023
        </div>
        <div class="col-2">
        <button type="button" class="btn btn-danger">Delete</button>
        </div>

        
      </div>
    </div>
  </center>
}

export default App
