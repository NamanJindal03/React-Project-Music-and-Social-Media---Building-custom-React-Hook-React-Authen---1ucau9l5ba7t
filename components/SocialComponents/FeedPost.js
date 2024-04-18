import React, {useState} from 'react'
import css from '@/styles/FeedPost.module.css'
import constants from '../../constants.js';
import { useAuth } from '@/context/AuthContext.js';
import FeedComment from './FeedComment.js';
const {BASE_API_PATH, PROJECT_ID, APP_TYPE} = constants;


export default function FeedPost({post, getPostsFeed}) {
    const [isComment, setIsComment] = useState(false);
    const {token} = useAuth()
    const {
        title, 
        content, 
        images, 
        author, 
        likeCount, 
        commentCount, 
        isLiked,
        _id
    } = post;
    const {name, profileImage} = author;

    async function applyUserLike(){
        try{
            const response = await fetch(`${BASE_API_PATH}/api/v1/quora/like/${_id}`, {
                method: 'POST',
                headers: {
                    "Content-type": "application/json",
                    "projectId": PROJECT_ID,
                    "Authorization": `Bearer ${token}`
                },
            });
            await response.json();
            getPostsFeed()
        }
        catch(err){
            console.log(err)
        }
    }

    function handlePostLike(){
        //if success getPostsFeed()
        console.log('coming')
        console.log(isLiked)
        if(isLiked) {
            alert('aleady liked the post')
            return;
        }
        applyUserLike()
        
    }

  return (
    <div className={`${css.postContainer}`}>
        <div className={`flex ${css.postHead} `}>
            <div className={`${css.imgBox}`}>
                <img src={profileImage} alt="" />
            </div>
            <div className={`flex ${css.postHeadContent} ${css.colFlexDirection}`}>
                <div>{title}</div>
                <div>By: {name}</div>
            </div>
        </div>
        <div className={`flex ${css.postBody}`}>
            <div>{content}</div>
        </div>
        <div className={`flex ${css.postFoot}`}>
            <div className={`flex ${css.rowFlexDirection}`}>
                <div  className={`${css.imgBox}`}>
                    <img src={images} alt="" />
                </div>
                <div>Some random text</div>
            </div>
            <div>
                <span className={`${isLiked && css.liked}`} onClick={handlePostLike}>Like: {likeCount}</span>
                <span onClick={()=>setIsComment(!isComment)}>Comments: {commentCount}</span>
            </div>
        </div>
        {isComment && <FeedComment postId={_id}/>}
    </div>
  )
}
