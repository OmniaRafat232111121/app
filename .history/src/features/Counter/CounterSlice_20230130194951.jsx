import { bindActionCreators, createSlice } from "@reduxjs/toolkit";
const initialState = {
    value:0
}
const counterSlice = createSlice({
    name: counter,
    initialState,
    reducers: {
        increment: (state) => {
            state.value=+1
        },
         decrement: (state) => {
            state.value=-1
        },
        incrementByAmount: (state) => {
            state.value += action.payload;
         },
    },
})
export const {increment,decrement,in}
export default counterSlice.reducer;