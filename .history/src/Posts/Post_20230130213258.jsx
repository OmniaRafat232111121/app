import React from 'react'
import { useEffect,useState } from 'react'
const Post = () => {
    const { post, setPost } = useState([]);
    useEffect(() => {
        const getData = async () => {
            const response=await axios.get()
        }
    },[])
  return (
      <>
          
          
      </>
  )
}

export default Post