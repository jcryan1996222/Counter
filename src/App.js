import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
const subtract1 = function (x) {
  return x - 1
}
function add1(x) {
  return x + 1
}
const reset = function (x) {
  return (x = 0)
}

function App() {
  let state = useState(0)
  let counter = state[0]
  let setcounter = state[1]

  return (
    <div>
      <div>{counter}</div>
      <button
        onClick={() => {
          const newCounterValue = add1(counter)
          setcounter(newCounterValue)
        }}
      >
        Add One
      </button>

      <button
        onClick={() => {
          const newCounterValue = subtract1(counter)
          setcounter(newCounterValue)
        }}
      >
        Subtract One
      </button>

      <button
        onClick={() => {
          const newCounterValue = reset(counter)
          setcounter(newCounterValue)
        }}
      >
        Reset
      </button>
    </div>
  )
}

export default App
