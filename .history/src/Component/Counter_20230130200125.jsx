import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { increment } from '../features/counter/counterSlice';

const Counter = () => {
  const data = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const addOne = () => {
    dispatch(increment)
  }
  const minusOne = () => {
    dispatch(de);
  }
  return (
      <div>
          <h1>Counter</h1>
          <button onClick={addOne}>+</button>
          <button  onClick={minusOne} >-</button>
          
      
      </div>
  )
}

export default Counter