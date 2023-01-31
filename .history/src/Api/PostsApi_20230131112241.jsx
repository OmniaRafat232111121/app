import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllPosts = createAsyncThunk('posts/getAll', async (url,) => {
    const response = axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data
})