import React, { useEffect, useState } from 'react'
import constants from '../../constants';
const {BASE_API_PATH, PROJECT_ID, APP_TYPE} = constants;

export default function FeedComment({postId}) {
    const [comments, setComments] = useState([]);
    async function getComments(){
        try{
            const response = await fetch(`${BASE_API_PATH}/api/v1/quora/post/${postId}/comments`, {
                method: 'GET',
                headers: {
                    "Content-type": "application/json",
                    "projectId": PROJECT_ID
                },
            });
            const data = await response.json();
            setComments(data.data);
        }
        catch(err){
            console.log(err)
        }
      }
    useEffect(()=>{
        getComments()
    },[])
  return (
    <div>
        {comments.map((comment)=>{
          return (
            <div>{comment.content}</div>
          )
        })} 
    </div>
  )
}
