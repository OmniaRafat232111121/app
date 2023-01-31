import counterSLice from "./auth/counterSLice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducers: {
     counter:counterSLice  
   }  
 })