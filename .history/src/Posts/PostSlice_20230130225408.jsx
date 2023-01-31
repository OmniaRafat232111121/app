import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from "../Api/PostsApi";
const initialState = {
    posts: [],
    isLoading: false,
    error:null
}
const postSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: {
        [getAllPosts.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.isLoading=false,
        },
        [getAllPosts.rejected]: (state, action) => {
            state.isLoading=true,
        }

    }
})
export default postSlice.reducer