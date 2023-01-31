import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice';
import postRed
//1-create store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    post:postReducer
  },
  
     devTools: true,


})