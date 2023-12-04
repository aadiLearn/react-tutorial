import React, { useState } from 'react'
import './App.css'
import TextForm from './components/TextForm'

function App(){
 const [counter, setCounter]= useState(0)
  

  const addValue = () =>{
    if(counter<20)
    setCounter(counter+1)
    console.log("Value added", counter);
  }

  const removeValue=()=>{
   if(counter==0){}
    else
    setCounter(counter-1)
    console.log("removed",counter);
  }

  return (
    <>
      <div className="counter">
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
     <footer>This is a counter value displayed in footer {counter}</footer>
     </div>

      <div className="container">
     <TextForm heading="Enter the text to analyze"/>
     </div>
    </>
  )
}



export default App
