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
        [get]
    }
})
export default postSlice.reducer