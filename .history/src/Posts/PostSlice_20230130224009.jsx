import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    posts:[]
}
const postSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: {
        
    }
})