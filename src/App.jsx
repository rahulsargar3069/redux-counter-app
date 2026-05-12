import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, IncrementByAmount } from './ReduxStore/counterSlice'

const App = () => {

  const counter = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const [num, setNum] = useState(5)

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={()=> dispatch(increment())}>Increment</button>
      <button onClick={()=> dispatch(decrement())}>Decrement</button>
      <input value={num} type="number" onChange={(e)=>setNum(e.target.value)} />
      <button onClick={()=> dispatch(IncrementByAmount(Number(num)))}>Increment By Amount</button>
    </div>
  )
}

export default App
