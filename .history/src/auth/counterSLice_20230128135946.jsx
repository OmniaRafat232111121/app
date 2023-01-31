import { createSlice } from "@reduxjs/toolkit";
const initialValue = {
    count:0
}
const counterSlice = createSlice({
    name: 'counter',
    initialValue,
    reducers: {
        increment
        
    }
})