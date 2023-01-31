import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,setName } from '../features/counter/counterSlice'

export function Counter() {
  const data = useSelector((state) => state.counter)
  const dispatch = useDispatch();
  const changeName = () => {
        dispatch(setName('o));
    }
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{data?.value}</span>
      
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <input type="text" value={data?.name} />
        <button onClick={changeName}>change name</button>

      </div>
    </div>
  )
}