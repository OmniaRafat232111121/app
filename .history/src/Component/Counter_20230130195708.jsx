import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const Counter = () => {
  const data = useSelector((state) => state.counter.value);
  const dispatch=useDispatch()
  return (
      <div>
          <h1>Counter</h1>
          <button on>+</button>
          <button>-</button>
          
      
      </div>
  )
}

export default Counter