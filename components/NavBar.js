import React from 'react'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'
import css from '@/styles/Navbar.module.css'

export default function NavBar() {
    const {token, name} = useAuth();
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
        <div className='input-bar'>
            <input type="text" />
        </div>

        <div>
            <Link href={'/login'}><button>human</button></Link>
            {token && <span>{name}</span>}
        </div>
    </div>
  )
}
