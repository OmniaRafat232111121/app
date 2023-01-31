import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice'

export function Counter() {
  const data = useSelector((state) => state.counter)
  const dispatch = useDispatch();
   const [name, setName] = useState('');
   const changeName = () => {
        dispatch(setName(name));
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
        <span>{data?.count}</span>
        <input type="text" value={data?.name}/>
                <button onClick={changeName}>change name</button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

      </div>
    </div>
  )
}