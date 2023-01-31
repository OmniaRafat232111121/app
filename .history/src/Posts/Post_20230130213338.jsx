import React from 'react'
import { useEffect,useState } from 'react'
const Post = () => {
    const { post, setPost } = useState([]);
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            return response.data
        }
        get
    },[])
  return (
      <>
          
          
      </>
  )
}

export default Post