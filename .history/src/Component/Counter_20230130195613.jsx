import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const Counter = () => {
  const data=useSelector((state)=>state.counter.value)
  return (
      <div>
          <h1>Counter</h1>
          <button>+</button>
          <button>-</button>
          
      
      </div>
  )
}

export default Counter