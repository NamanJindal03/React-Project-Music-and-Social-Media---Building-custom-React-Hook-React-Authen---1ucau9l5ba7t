import React, {useEffect, useState} from 'react'

import FeedPost from '@/components/SocialComponents/FeedPost'
import constants from '../constants';

const {BASE_API_PATH, PROJECT_ID, APP_TYPE} = constants;
export default function social() {
  const [postFeed, setPostFeed] = useState([]);

  async function getPostsFeed(){
    try{
        const response = await fetch(`${BASE_API_PATH}/api/v1/quora/post`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json",
                "projectId": PROJECT_ID
            },
        });
        const data = await response.json();
        setPostFeed(data.data);
    }
    catch(err){
        console.log(err)
    }
  }
  useEffect(()=>{
    getPostsFeed();
  },[])
  return (
    <section className='flex socialPostsContainer'>
      <section className='socialPosts '>
        {postFeed.map((post)=>{
          return (
            <FeedPost post={post} getPostsFeed={getPostsFeed}/>
          )
        })} 
      </section>
    </section>
  )
}
