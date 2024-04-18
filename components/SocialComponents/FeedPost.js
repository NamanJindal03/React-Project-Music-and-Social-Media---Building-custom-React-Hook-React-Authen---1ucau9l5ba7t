import React, {useState} from 'react'
import css from '@/styles/FeedPost.module.css'
import constants from '../../constants.js';

const {BASE_API_PATH, PROJECT_ID, APP_TYPE} = constants;


export default function FeedPost({post, getPostsFeed}) {
    const [isComment, setIsComment] = useState(false);
    const {
        title, 
        content, 
        images, 
        author, 
        likeCount, 
        commentCount, 
        isLiked
    } = post;
    const {name, profileImage} = author;

    function handlePostLike(){
        //if success getPostsFeed()
    }

  return (
    <div className={`${css.postContainer}`}>
        <div className={`flex ${css.postHead} ${css.rowFlexDirection}`}>
            <div className={`${css.imgBox}`}>
                <img src={profileImage} alt="" />
            </div>
            <div className={`flex ${css.postHeadContent}`}>
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
    </div>
  )
}
