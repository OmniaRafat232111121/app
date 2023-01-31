import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice';
import postReducer from './Posts/PostSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers} from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
  const persistConfig = {
    key: 'root',
    version:1,
  storage
};
const reducer = combineReducers({
  counter: counterReducer,
    post:postReducer
})
const persistReducer=persistReducer(persistConfig,reducer)
//1-create store

 