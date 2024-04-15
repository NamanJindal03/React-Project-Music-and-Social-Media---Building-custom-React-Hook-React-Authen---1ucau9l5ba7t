import React from 'react'
import Link from 'next/link'
import css from '@/styles/Login.module.css'
export default function login() {
  return (
    <section className={`${css.container}`}>
        <div className={`flex ${css.login}`}>
            <label htmlFor="">Email</label>
            <input type="text" name='email' />
            <label htmlFor="">Password</label>
            <input type="password" name='password' />
            <button>Sign In</button>
            <p>Don't have an account</p>
            <Link href='/signup'><button>SignUp Here</button></Link>
        </div>

    </section>
  )
}
