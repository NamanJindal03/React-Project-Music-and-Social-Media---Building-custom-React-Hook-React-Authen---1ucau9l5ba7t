import React from 'react'
import { useMusic } from '@/context/MusicContext'
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

import AudioPlayer from 'react-h5-audio-player';
import css from '@/styles/MusicPlayer.module.css'
export default function MusicPlayer() {
  const {isMusicSet, currentMusicInfo} = useMusic();
  const {token} = useAuth();

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
                <div>Like Icon</div>
            </>
            }
            
        </div>
    </>
  )
}