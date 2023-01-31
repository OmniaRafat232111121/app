import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { decrement, increment } from '../features/counter/counterSlice';

const Counter = () => {
  const data = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  
  const minusOne = () => {
    dispatch(decrement);
  }
  return (
      <div>
      <h1>Counter -{ data}</h1>
          <button onClick={()=>dispatch(increment)}>+</button>
          <button onClick={minusOne} >-</button>
          
      
      </div>
  )
}

export default Counter