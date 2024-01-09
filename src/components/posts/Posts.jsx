import React from 'react'
import './posts.scss';
import Post from '../post/Post';
export default function Posts() {

    const posts = [
        {
            id : 1,
            name : "Ahmed",
            userId : 1,
            desc : "Lorem ipsum dolor sit amet, consectetur adip",
            profilePic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH_lsI7PQgK6wt82XYo8f0osbKU60tDnBCBA&usqp=CAU",
            img : "https://static.vecteezy.com/system/resources/thumbnails/022/716/824/small/cute-cool-boy-dabbing-pose-cartoon-icon-illustration-people-fashion-icon-concept-isolated-generat-ai-free-photo.jpg",
        },
        {
            id : 2,
            name : "Akasha",
            userId : 2,
            desc : "lorem ipsum dolor sit lorem ipsum lorem ipsum lorem ipsum dolor sit lorem ipsum lorem ipsum lorem ipsum dolor sit lorem ipsum lorem ipsum",
            profilePic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH_lsI7PQgK6wt82XYo8f0osbKU60tDnBCBA&usqp=CAU",
            
        },
        
    ];

  return (
    <div className='posts'>
        {posts.map(post => (
            <Post post = {post} key={post.id} />
        ))}
    </div>
  )
}
