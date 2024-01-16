import React, { useContext, useState } from 'react'
import './comments.scss';
import {
    useQuery,
    useMutation,
    useQueryClient,
    
  } from '@tanstack/react-query'
import { makeRequest} from '../../axios'
import { AuthContext } from '../../context/authContext';
import moment from 'moment';

export default function Comments({postId}) {

    
    const [description, setDesc] = useState("");

    const {currentUser} = useContext(AuthContext);

    const { isPending, error, data } = useQuery({
        queryKey: ['comments'],
        queryFn: () =>
        makeRequest.get("/comments?postId="+postId).then(res => {
            return res.data;
          })
      })

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newComments) => {
        
      return makeRequest.post("/comments", newComments)
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['comments'] })   //use this to refresh see query key in posts.jsx
    },
  })


  const handleClick = (e) => {
    e.preventDefault();

    console.log(postId)
    mutation.mutate({description, postId})
    setDesc("")
  }
   
  return (
    <div className='comments'>
        <div className="write">
            <img src={currentUser.profilePic} alt="" />
            <input type="text" placeholder='write comment here' value={description} onChange={(e) => setDesc(e.target.value)}/>
            <button onClick={handleClick}>Send</button>
        </div>
        {isPending ? "wait...." : data.map((comment) => (
            <div className="comment">
                <img src={comment.profilePic} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.description}</p>
                </div>
                <span className='date'>{moment(comment.createdAt).fromNow()}</span>
            </div>
        ))}
    </div>
  )
}
