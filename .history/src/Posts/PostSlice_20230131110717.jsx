import {createSlice } from "@reduxjs/toolkit";

import {getAllPosts} from '../Api/PostsApi'

const initialState = {
    posts: [],
    isLoading: false,
    erorr :null ,
}
const PostSlice = createSlice({
    name: 'posts',
    initialState
    ,extraReducers:{
        [.pending] : (state,action)=>{
           state.isLoading=true;
           state.erorr=null;
        },
        [getAllposts.fulfilled] : (state,action)=>{
            state.posts=action.payload;
            state.isLoading=false;
            state.erorr=null;
        }
        , [getAllposts.rejected] : (state,action)=>{
            state.isLoading=false;
            state.erorr=action?.error?.message;
        }

    }
})


export default PostSlice.reducer;