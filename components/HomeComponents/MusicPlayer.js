import React from 'react'
import { useMusic } from '@/context/MusicContext'
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

import AudioPlayer from 'react-h5-audio-player';
import css from '@/styles/MusicPlayer.module.css'
export default function MusicPlayer() {
  const {isMusicSet, currentMusicInfo} = useMusic();
  console.log(currentMusicInfo);
  const {token} = useAuth();

    function toggleSongFavourite(){
        const favouriteMusicList = JSON.parse(localStorage.getItem('favMusic')) || [];
        console.log(favouriteMusicList);
        const isMusicPresent = favouriteMusicList.filter((song)=>{
            return song._id === currentMusicInfo._id
        })
        if(isMusicPresent.length > 0){
            const updatedSongs = favouriteMusicList.filter((song)=>{
                return song._id !== currentMusicInfo._id
            })
            localStorage.setItem('favMusic', JSON.stringify(updatedSongs));
            return;
        }
        favouriteMusicList.push(currentMusicInfo);
        localStorage.setItem('favMusic', JSON.stringify(favouriteMusicList));
    }

  if(!isMusicSet) return null;
  return (
    <>
        <div className={`${css.musicPlayer} flex`} >
            <div className={`${css.musicImgBox}`}>
                <img src={currentMusicInfo.thumbnail} />
            </div>
            <div className={`${css.musicData} flex`} >
                <span>{currentMusicInfo.title}</span>
                <span>{currentMusicInfo?.artist?.name}</span>
            </div>
            {/* integerate the cotrol component */}
            {!token ? 
                <div className='flex'>
                    <div>Please Login First</div>
                    <button><Link href="/login">Login Here!</Link></button>
                </div>
                :
                <>
                <AudioPlayer
                    autoPlay={false}
                    src={currentMusicInfo.audio_url}
                    onPlay={e => console.log("onPlay")}
                    // other props here
                />
                <div onClick={toggleSongFavourite}>Like Icon</div>
            </>
            }
            
        </div>
    </>
  )
}