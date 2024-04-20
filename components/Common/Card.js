import React from 'react'
import { useMusic } from '@/context/MusicContext'
import css from '@/styles/card.module.css'

export default function Card({img, songTitle, artistName, musicInfo}) {
    const {setMusicInfo} = useMusic()
  return (
    <div onClick={()=>setMusicInfo(musicInfo)}>
        <div className={`${css.imgBox}`}>
            <img src={img} alt="" />
        </div>
        <div className={`${css.content}`}>
            <div>{songTitle}</div>
            <div>{artistName}</div>
        </div>
    </div>
  )
}
