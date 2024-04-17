import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'
import css from '@/styles/Navbar.module.css'
import { useRouter } from 'next/router'
import useDebounce from '@/hooks/useDebounce'

export default function NavBar() {
    const {token, name} = useAuth();
    const router = useRouter();
    const musicQuery = router.query.music;

    const [musicSearch, setMusicSearch] = useState(musicQuery);

    const isRoot = router.pathname === '/';

    const musicQuerySearch = useDebounce(musicSearch, 1000)

    function handleSearch(musicSearchValue){
        // router.push({
        //     pathname: '/',
        //     query: {music: musicSearch}
        // })
        setMusicSearch(musicSearchValue)
    }

    useEffect(()=>{
        console.log('called')
        router.push({
            pathname: '/',
            query: {music: musicQuerySearch}
        })
    },[musicQuerySearch])

  return (
    <div className={`${css.navbar} flex ${css.container}`}> 
        <div className='brand-img'>Brand Image</div>
        <nav className={css.nav}>
            <ul className={`${css.navLinks} flex`}>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/social'}>Social</Link></li>
                <li><Link href={'/library'}>Library</Link></li>
            </ul>
        </nav>
        {isRoot &&
            <div className='input-bar'>
                <input type="text" value={musicSearch} onChange={(e)=>handleSearch(e.target.value)}/>
            </div>
        }
        <div>
            <Link href={'/login'}><button>human</button></Link>
            {token && <span>{name}</span>}
        </div>
    </div>
  )
}
