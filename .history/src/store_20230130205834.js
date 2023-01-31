import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
//1-create storw
export const store = configureStore({
  reducer: {
    counter :counterReducer
  },
  
     devTools: true,


})