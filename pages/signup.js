import React, { useState } from 'react'
import css from '@/styles/Login.module.css'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext';
export default function signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const {login} = useAuth()

    function handleSignUp(){
        if(name.length <=0 || email.length <= 0 || password.length <= 0){
            alert('please enter all the details')
            return;
        }
        if(name.length < 5){
            alert('name cannot be less than 5 characters')
        }
        //all validations to the things

        //api call
        //api response -> if okay then redirect the user  to the login


    }
  return (
    <section className={`${css.container}`}>
        <div className={`flex ${css.login}`}>
            <label htmlFor="">Name</label>
            <input type="text" name='name' value={name} onChange={(e)=> setName(e.target.value)}/>
            <label htmlFor="">Email</label>
            <input type="text" name='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <label htmlFor="">Password</label>
            <input type="password" name='password'value={password} onChange={(e)=> setPassword(e.target.value)} />
            <button onClick={()=>{handleSignUp}}>Sign Up</button>
            <p>Already have an account?</p>
            <Link href='/login'><button>SignIn</button></Link>
        </div>

    </section>
  )
}
