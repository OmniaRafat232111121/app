import counterSlice from "./auth/counterSlice";

import {con}
export const store = configureStore({
    reducers: {
     counter:counterSlice
   }  
 })