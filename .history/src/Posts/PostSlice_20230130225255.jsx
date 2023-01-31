import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from "../Api/PostsApi";
const initialState = {
    posts: [],
    isloading: false,
    error:null
}
const postSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: {
        [getAllPosts.pending]:(state,action)
    }
})
export default postSlice.reducer