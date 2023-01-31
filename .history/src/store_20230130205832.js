import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
//create storw
export const store = configureStore({
  reducer: {
    counter :counterReducer
  },
  
     devTools: true,


})