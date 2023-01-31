import counterSlice from "./auth/counterSlice";

import {confi}
export const store = configureStore({
    reducers: {
     counter:counterSlice
   }  
 })