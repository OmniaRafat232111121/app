import React from 'react'
import { useEffect,useState } from 'react'
const Post = () => {
    const { posts, setPosts } = useState([]);
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(response.data);
        }
        getData()
    },[])
  return (
      <>
          {
              postMessage.length>1 ?(posts.map(post)=><h5></h5>)
        }  
          
      </>
  )
}

export default Post