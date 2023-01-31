import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllPosts} from "../Api/PostsApi";


export const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.post.posts);
    const isLoading = useSelector(state => state.post.isLoading);
    const erorr = useSelector(state => state.post.erorr);
   

    useEffect(() => {
        dispatch(getAllPosts("https://jsonplaceholder.typicode.com/posts"));
    }, [dispatch]);

    return (
       <>
           
            {posts.length >= 1 ? (posts.map(post => <h6>{post.title}</h6>)) : (<h6>no posts</h6>)}
           
       </div>
    );
}