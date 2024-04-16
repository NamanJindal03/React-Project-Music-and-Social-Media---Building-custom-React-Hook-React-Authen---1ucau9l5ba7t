import React, { useReducer, useState } from 'react'
import css from '@/styles/Login.module.css'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext';
import constants from '../constants.js';
import { useRouter } from 'next/router.js';
const {BASE_API_PATH, PROJECT_ID, APP_TYPE} = constants;
export default function signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    // const {login} = useAuth()

    async function callSignUpApi(){
        console.log(BASE_API_PATH);
        console.log(PROJECT_ID)
        // console.log(constants);
        try{
            const response = await fetch(`${BASE_API_PATH}/api/v1/user/signup`, {
                method: 'POST',
                headers: {
                    "Content-type": "application/json",
                    "projectId": PROJECT_ID
                },
                body: JSON.stringify({name, email, password, appType: APP_TYPE})
            });
            const data = await response.json();
            setName('');
            setEmail('');
            setPassword('');
            router.push('/login')
        }
        catch(err){
            console.log(err)
        }
        
    }

    function handleSignUp(e){
        e.preventDefault();
        // if(name.length <=0 || email.length <= 0 || password.length <= 0){
        //     alert('please enter all the details')
        //     return;
        // }
        // if(name.length < 5){
        //     alert('name cannot be less than 5 characters')
        // }
        //all validations to the things

        //api call
        //api response -> if okay then redirect the user  to the login
        callSignUpApi();

    }
  return (
    <section className={`${css.container}`}>
        <form className={`flex ${css.login}`} onSubmit={handleSignUp}>
            <label htmlFor="">Name</label>
            <input type="text" name='name' value={name} onChange={(e)=> setName(e.target.value)}/>
            <label htmlFor="">Email</label>
            <input type="text" name='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <label htmlFor="">Password</label>
            <input type="password" name='password'value={password} onChange={(e)=> setPassword(e.target.value)} />
            <button type='submit'>Sign Up</button>
            <p>Already have an account?</p>
            <Link href='/login'><button>SignIn</button></Link>
        </form>

    </section>
  )
}
