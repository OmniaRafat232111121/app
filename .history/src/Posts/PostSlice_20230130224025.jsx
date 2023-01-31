import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    posts: [],
    isloading: false,
    error:nill
}
const postSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: {
        
    }
})