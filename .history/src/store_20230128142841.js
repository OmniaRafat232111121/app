import counterSLice from "./auth/counterSLice";


export const store = configureStore({
    reducers: {
     counter:counterSLice
   }  
 })