import counterSlice from "./auth/counterSlice";


export const store = configureStore({
    reducers: {
     counter:counterSLice
   }  
 })