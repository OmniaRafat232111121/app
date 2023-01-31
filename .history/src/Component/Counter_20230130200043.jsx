import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Counter = () => {
  const data = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(increment)
  }
  const decrement = () => {
    dispatch(decrement);
  }
  return (
      <div>
          <h1>Counter</h1>
          <button onClick={increment}>+</button>
          <button  onClick={decrement} >-</button>
          
      
      </div>
  )
}

export default Counter