import React from 'react'

import { useEffect } from 'react'
import { getAllPosts } from '../Api/PostsApi';
import { useDispatch, useSelector } from 'react-redux';

const Post = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.post.posts);
    const isLoading = useSelector(state => state.post.isLoading);
    const erorr = useSelector(state => state.post.eror);

    
    // const [ posts, setPosts ]= useState([]);
    // useEffect(() => {
    //     const getData = async () => {
    //         const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //         setPosts(response.data);
    //     }
    //     getData()
    // })

    useEffect(() => {
        dispatch(getAllPosts('https://jsonplaceholder.typicode.com/posts'))
    },[dispatch])
  return (
      <>
            {erorr !== null ? <h1>{erorr}</h1> : null}
           {
                isLoading ? <h1>Loading...</h1> : (posts.length >= 1 ? (posts.map(post => <h6>{post.title}</h6>)) : (<h6>no posts</h6>))
           }
      </>
  )
}

export default Post