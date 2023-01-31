import React from 'react'
import { useEffect,useState } from 'react'
const Post = () => {
    const { posts, setPosts } = useState([]);
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPost(response.data);
        }
        getData()
    },[])
  return (
      <>
          {
              postMessage.length>1 ?(posts.map(post)=>)
        }  
          
      </>
  )
}

export default Post