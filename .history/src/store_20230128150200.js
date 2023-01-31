import counterSlice from "./auth/counterSlice";
import counterReducer from './a'
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
    reducers: {
     counter:counterReducer
   }  
 })