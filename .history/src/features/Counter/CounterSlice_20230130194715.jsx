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
    }
})
import { createSlice } from "@reduxjs/toolkit";
const initialValue = {
    count: 0,
    name:'omnia'
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
        },
        setName: (state) => {
            state.name='rafat'
        },
    }
})
export const { increment, decrement, setName } = counterSlice.actions;
export default counterSlice.reducer;