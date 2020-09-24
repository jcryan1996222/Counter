import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
const subtract1 = function (x) {
  return x - 1
}
function add1(x) {
  return x + 1
}
const reset = () => 0

function App() {
  let state = useState(0)
  let counter = state[0]
  let setcounter = state[1]

  return (
    <div className="everything">
      <div className="counter">{counter}</div>
      <div className="buttons">
        <button
          className="btn"
          onClick={() => {
            const newCounterValue = add1(counter)
            setcounter(newCounterValue)
          }}
        >
          Add One
        </button>

        <button
          className="btn"
          onClick={() => {
            const newCounterValue = subtract1(counter)
            setcounter(newCounterValue)
          }}
        >
          Subtract One
        </button>

        <button
          className="btn"
          onClick={() => {
            const newCounterValue = reset()
            setcounter(newCounterValue)
          }}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default App
