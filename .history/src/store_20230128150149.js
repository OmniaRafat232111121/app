import counterSlice from "./auth/counterSlice";
import count
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
    reducers: {
     counter:counterReducer
   }  
 })