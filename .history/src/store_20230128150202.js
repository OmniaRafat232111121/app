import counterSlice from "./auth/counterSlice";
import counterReducer from './auth/'
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
    reducers: {
     counter:counterReducer
   }  
 })