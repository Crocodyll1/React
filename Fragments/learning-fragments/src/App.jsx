import "bootstrap/dist/css/bootstrap.min.css";  
import React from "react";
import './App.css'

function App() {
  let foodItems = [];
//  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];
//  if(foodItems.length === 0){
//   return <h3>I am still hungry</h3>
// let empty = foodItems.length === 0 ? <h3>I am still hungry</h3> : null
//  }

  return (
   <>
      <h1>Healthy Food</h1>
      <ul className ="list-group">  
        {foodItems.length === 0 && <h3>I am still hungry</h3>}
        {foodItems.map((item) => (
          <li className= "list-group-items">{item}</li>
        ))}
        
      </ul>

    </>
  )
}

export default App
