import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    posts: [],
    isloading: false,
    error:null
}
const postSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: {
        
    }
})
export default postSlice.reducer