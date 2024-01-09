import React from 'react'
import './home.scss';
import Post from '../../components/posts/Posts';
import Stories from '../../components/stories/Stories';

export default function Home() {
  return (
    <div className='home'>
      <Stories />
      <Post />
    </div>
  )
}
