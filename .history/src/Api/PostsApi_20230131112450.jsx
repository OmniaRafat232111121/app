import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllPosts = createAsyncThunk('posts/getAll', async (url,thunkAPI) => {
    const { rejectedWithValue } = thunkAPI;
    try {
        const response=await axios.
    }
    catch (err) {
        return rejectedWithValue(err.message)
    }
})