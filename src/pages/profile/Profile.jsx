import React from 'react'
import './profile.scss';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from '../../components/posts/Posts' ;

export default function Profile() {
  return (
    <div className='profile'>
      <div className="images">
        <img className='cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpY1GKWgkzyM5bd39M-_ho8XzvFIW-d4kAQ&usqp=CAU"  alt="" />
        <img className='profilePic' src="https://t3.ftcdn.net/jpg/06/22/68/92/360_F_622689267_605FSl7IS7letDVEFUaTUNTjh8zVyDJv.jpg" alt="" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="https://">
              <FacebookTwoToneIcon fontSize='medium'/>
            </a>
            <a href="https://">
              <InstagramIcon fontSize='medium'/>
            </a>
            <a href="https://">
              <TwitterIcon fontSize='medium'/>
            </a>
            <a href="https://">
              <LinkedInIcon fontSize='medium'/>
            </a>
            <a href="https://">
              <PinterestIcon fontSize='medium'/>
            </a>
          </div>

          <div className="center">
            <span>Maaz Ali</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>Pakistan</span>
              </div>

              <div className="item">
                <LanguageIcon />
                <span>Urdu</span>
              </div>
            </div>
              <button>Follow</button>
            
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
          <Posts />
      </div>
    </div>
  )
}
