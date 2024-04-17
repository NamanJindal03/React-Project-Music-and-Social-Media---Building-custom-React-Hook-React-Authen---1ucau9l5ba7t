import React from 'react'
import { useMusic } from '@/context/MusicContext'

export default function Card({img, songTitle, artistName, musicInfo}) {
    const {setMusicInfo} = useMusic()
  return (
    <div onClick={()=>setMusicInfo(musicInfo)}>
        <div>
            <img src={img} alt="" />
        </div>
        <div>
            <div>{songTitle}</div>
            <div>{artistName}</div>
        </div>
    </div>
  )
}
