import {counterReducer} from './features/counter/counterSlice'
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
    reducers: {
     counter:counterReducer
   }  
 })