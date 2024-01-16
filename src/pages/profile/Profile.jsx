import React, { useContext } from 'react'
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
import {
  useQuery,
  useMutation,
  useQueryClient,
  
} from '@tanstack/react-query'
import { makeRequest} from '../../axios'
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

export default function Profile() {

  const {currentUser} = useContext(AuthContext);
  const userId = parseInt(useLocation().pathname.split('/')[2])

  const { isPending, error, data } = useQuery({
    queryKey: ['user'],
    queryFn: () =>
    makeRequest.get("/users/find/"+userId).then(res => {
        return res.data;
      })
  })

  console.log(data)

  return (
    <div className='profile'>
      {isPending ? "wait....." : <> <div className="images">
        <img className='cover' src={data.coverPic}  alt="" />
        <img className='profilePic' src={data.profilePic} alt="" />
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
            <span>{data.name}</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>{data.city}</span>
              </div>

              <div className="item">
                <LanguageIcon />
                <span>Urdu</span>
              </div>
            </div>
              {currentUser.id === userId ? <button>Update</button> :<button>Follow</button>}
            
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
          <Posts />
      </div></>}
    </div>
  )
}
