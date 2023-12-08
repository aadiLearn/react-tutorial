import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userName : "hitesh",
    age : 31
  }

  let newArr=[1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4' >Tailwind Tests</h1>
      <Card userName="aadi" btnText="clickme"/>
      <Card userName="Paadi" btnText="clickme"/>

    </>
  )
}

export default App
