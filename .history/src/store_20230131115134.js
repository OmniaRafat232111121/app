import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice';
import postReducer from './Posts/PostSlice'
import storage from 'redux-persist/lib/storage'
//1-create store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    post:postReducer
  },
  
     devTools: true,


})