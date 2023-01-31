import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    posts: [],
    isloading:false,
}
const postSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: {
        
    }
})