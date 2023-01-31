import { createSlice } from "@reduxjs/toolkit";
const initialValue = {
    count:0
}
//create SLice (action+reducer)
const counterSlice = createSlice({
    name: 'counter',
    initialValue,
    reducers: {
        increment: (state) => {
            state.count+1
        }
        ,
        decrement:(state)=> {
            state.count-1
        }
    }
})