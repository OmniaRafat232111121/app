import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from "../Api/PostsApi";
const initialState = {
    posts: [],
    isLoading: false,
    erorr:null
}
const PostSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: {
        [getAllPosts.pending]: (state,action) => {
            state.isLoading = true;
            state.eror=null
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.posts=action.payload
            state.isLoading = false,
            state.error=null
        },
        [getAllPosts.rejected]: (state, action) => {
            state.isLoading = false,
            state.error=action?.error?.message
        }

    }
})
export default PostSlice.reducer