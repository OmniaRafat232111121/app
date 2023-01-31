import React from 'react'
import { useEffect,useState } from 'react'
const Post = () => {
    const { post, setPost } = useState([]);
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPost(response.data);
        }
        getData()
    },[])
  return (
      <>
          
          
      </>
  )
}

export default Post