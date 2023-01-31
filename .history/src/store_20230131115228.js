import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice';
import postReducer from './Posts/PostSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
//1-create store
const persistedReducer = persistReducer(persistConfig, reducers)

const Store = configureStore({
  reducer: persistedReducer
})
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    post:postReducer
  },
  
     devTools: true,


})