import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { getAllPosts } from '../features/counter/counterSlice'
import { useDispatch, useSelector } from 'react-redux';

const Post = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.post.posts);
    const isLoading = useSelector(state => state.post.isLoading);
    const error = useSelector(state => state.post.error);

    
    // const [ posts, setPosts ]= useState([]);
    // useEffect(() => {
    //     const getData = async () => {
    //         const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //         setPosts(response.data);
    //     }
    //     getData()
    // })

    useEffect(() => {
        dispatch(getAllPosts)
    },[dispatch])
  return (
      <>
          {
             isLoading ?<h1>Loading...</h1>: postMessage.length >= 1 ? (posts.map(post=><h5>{post.title }</h5>)):<h1>no post</h1>
        }  
          
      </>
  )
}

export default Post