import React, { useEffect, useState } from 'react'
import constants from '../../constants.js';
import Card from '../Common/Card.js';
import { useRouter } from 'next/router'

const {BASE_API_PATH, PROJECT_ID, APP_TYPE} = constants;

export default function MusicList() {
  const [musicList, setMusicList] = useState([]);
  const router = useRouter();
  console.log(router.query)
  const musicQuery = router.query.music;

  async function getMusicList(){
    try{
        const response = await fetch(`${BASE_API_PATH}/api/v1/music/song`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json",
                "projectId": PROJECT_ID
            },
        });
        const data = await response.json();
        setMusicList(data.data);
    }
    catch(err){
        console.log(err)
    }
  }

  async function getSearchedMusic(){
    try{
      const sample = {title: musicQuery}
        const response = await fetch(`${BASE_API_PATH}/api/v1/music/song?search=${JSON.stringify(sample)}`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json",
                "projectId": PROJECT_ID
            },
        });
        if(!response.ok){
          setMusicList([]);
          return;
        }
        const data = await response.json();
        console.log(data);
        if(data?.data){
          setMusicList(data.data);
        }
    }
    catch(err){
        console.log(err);
        setMusicList([]);

    }
  }

  useEffect(()=>{
    console.log(musicQuery)
    if(musicQuery){
      getSearchedMusic()
    }
    else{
      getMusicList();
    }
  },[musicQuery])


  return (
    <>
      {musicList.map((musicInfo)=>{
        return (
          <Card 
            img={musicInfo.thumbnail}
            songTitle = {musicInfo.title}
            artistName = {musicInfo?.artist?.name}
            musicInfo= {musicInfo}
          />
        )
      })}
    </>
  )
}