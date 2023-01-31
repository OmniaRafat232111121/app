import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value:0
}
const counterSlice = createSlice({
    name: counter,
    initialState,
    reducers: {
        increment: (state) => {
            state.value=+1
        }
         increment: (state) => {
            state.value=+1
        }
    }
})
