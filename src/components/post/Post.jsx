import React, { useState } from 'react'
import './post.scss'; 

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Link } from 'react-router-dom';
import Comments from '../comments/Comments';
import moment from 'moment';

export default function Post({post}) {

    const [openComment, setOpenComment] = useState(false);

    const liked = false;
  return (
    <div className='post'>
        <div className="container">
        <div className="user">
            <div className="userInfo">
                <img src={post.profilePic} alt="" />
                <div className="details">
                    <Link to={`/profile/${post.userId}`} style={{textDecoration:'none', color: 'inherit'}}>
                        <span className='name'>{post.name}</span>
                    </Link>
                        <span className='date'>{moment(post.createdAt).fromNow()}</span>
                </div>
            </div>
            <MoreHorizOutlinedIcon />
        </div>
        <div className="content">
            <p>{post.description}</p>
            <img src={"./upload/" + post.img} alt="" />
        </div>
        <div className="info">
            <div className="item">
                {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon /> }
                12 Likes                
            </div>
            
            <div className="item" onClick = {() => setOpenComment(!openComment)}>
                <TextsmsOutlinedIcon />
                12 Comments                
            </div>

            <div className="item">
            <ShareOutlinedIcon />
                Share
            </div>

        </div>
        {openComment && <Comments />}
        </div>
    </div>
  )
}
