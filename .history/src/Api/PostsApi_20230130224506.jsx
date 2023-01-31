import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllPosts = createAsyncThunk('posts/getAllPosts', async () => {
    const response=axios.get('https://jsonplaceholder.typicode.com/posts')
})