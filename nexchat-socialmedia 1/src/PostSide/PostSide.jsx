import React from 'react'
import Posts from '../components/Posts/Posts'
import PostShare from '../components/PostShare/PostShare'
import './PostSide.css'

const PostSide = () => {
  return (
    <div classname='PostSide'>
        <PostShare/>
        <Posts/>
      
    </div>
  )
}

export default PostSide