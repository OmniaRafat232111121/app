import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice';
import postReducer from './Posts/PostSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
//1-create store
const persistedReducer = persistReducer(persistConfig, reducers)


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    post: postReducer
    reducer: persistedReducer
  },
  
     devTools: true,


})