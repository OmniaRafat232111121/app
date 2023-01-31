import {counterReducer} from './features/'
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
    reducers: {
     counter:counterReducer
   }  
 })