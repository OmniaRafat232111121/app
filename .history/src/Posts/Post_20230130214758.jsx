import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { getAllPosts } from '../features/counter/counterSlice'
import { useDispatch, useSelector } from 'react-redux';
import {getAll}
const Post = () => {
    const dispatch = useDispatch();
    const postData=useSelector(state=>state.counter.posts)
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
              postMessage.length >= 1 ? (postData.map(post=><h5>{post.title }</h5>)):<h1>no post</h1>
        }  
          
      </>
  )
}

export default Post