import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Counter = () => {
  const data = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const addOne = () => {
    dispatch(in)
  }
  const minusOne = () => {
    dispatch(decrement);
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