import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charsallowed, setCharsAllowed] = useState(false)
  const [password, setPassword] = useState()

  //useRef Hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "012345678954653123154654"
    if (charsallowed) str += "~!@#$%^&*(){}[]"

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(index)
    }
    setPassword(pass)
  }, [length, numberAllowed, charsallowed, setPassword])


const copyPasswordToClipboard = useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,length)
  window.navigator.clipboard.writeText(password)
},[password])

  useEffect(()=>{passwordGenerator()}, [length, numberAllowed, charsallowed, passwordGenerator])



  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8  bg-gray-800 text-center">

        <h1 className="text-white text-center my-3">Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref = {passwordRef}
          />

          <button
            className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0' onClick={()=>{copyPasswordToClipboard()}}
          >Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">

          <div className="flex items-center gap-x-1">

            <input type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} />

            <label className='text-white'> Length: {length}</label>

          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" onClick={() => { setNumberAllowed(!(numberAllowed)) }} />
            <label className="text-white">Numbers</label>
          </div>


          <div className="flex items-center gap-x-1">
            <input type="checkbox" onChange={() => { setCharsAllowed(!(charsallowed)) }} />
            <label className="text-white">Characters</label>
          </div>

        </div>


      </div>
    </>
  )
}

export default App
