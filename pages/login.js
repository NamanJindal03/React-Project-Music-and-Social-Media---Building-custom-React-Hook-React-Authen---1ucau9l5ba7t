import React, {useState} from 'react'
import Link from 'next/link'
import css from '@/styles/Login.module.css'
import constants from '../constants.js';
import { useRouter } from 'next/router.js';
import { useAuth } from '@/context/AuthContext';
const {BASE_API_PATH, PROJECT_ID, APP_TYPE} = constants;

export default function login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const {login} = useAuth();

    async function callLoginApi(){
        try{
            const response = await fetch(`${BASE_API_PATH}/api/v1/user/login`, {
                method: 'POST',
                headers: {
                    "Content-type": "application/json",
                    "projectId": PROJECT_ID
                },
                body: JSON.stringify({email, password, appType: APP_TYPE})
            });
            const data = await response.json();
            setEmail('');
            setPassword('');
            login(data.token, data?.data?.name)
            router.push('/')
        }
        catch(err){
            console.log(err)
        }
    }

    function handleLogin(e){
        e.preventDefault();
        if( email.length <= 0 || password.length <= 0){
            alert('please enter all the details')
            return;
        }
        //all validations to the things

        //api call
        //api response -> if okay then redirect the user  to the login
        callLoginApi();

    }
  return (
    <section className={`${css.container}`}>
        <form className={`flex ${css.login}`} onSubmit={handleLogin}>
            <label htmlFor="">Email</label>
            <input type="text" name='email' value={email} onChange={(e)=> setEmail(e.target.value)} />
            <label htmlFor="">Password</label>
            <input type="password" name='password' value={password} onChange={(e)=> setPassword(e.target.value)} />
            <button>Sign In</button>
            <p>Don't have an account</p>
            <Link href='/signup'><button>SignUp Here</button></Link>
        </form>

    </section>
  )
}
