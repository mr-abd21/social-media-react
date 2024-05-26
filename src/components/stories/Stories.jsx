import React, { useContext } from 'react'
import './stories.scss';
import { AuthContext } from '../../context/authContext';

export default function Stories() {

    const {currentUser} = useContext(AuthContext)

    const stories = [
        {
            id : 1,
            name : "Ahmed",
            img : "https://images.pexels.com/photos/5634864/pexels-photo-5634864.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id : 2,
            name : "Sami Ullah",
            img : "https://images.pexels.com/photos/6953860/pexels-photo-6953860.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id : 3,
            name : "Ali",
            img : "https://images.pexels.com/photos/5635100/pexels-photo-5635100.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id : 4,
            name : "Akasha",
            img : "https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ];

  return (
    <div className='stories'>
        <div className="story">
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
        </div>  

        {stories.map((story) => (
            <div className="story" key={story.id}>
                <img src={story.img} alt="" />
                <span>{story.name}</span>
            </div>   
        ))}
    </div>
  )
}
