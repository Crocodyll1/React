import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Time from './currentTime.jsx';


function App() {

  return (
    <div className="app">
      <h1>Bharat Clock</h1>
      <p>This is the clock that shows the time in Bharat at all times.</p>
      <div>this is the current time : <Time /></div>


    </div>

  )
}

export default App;
