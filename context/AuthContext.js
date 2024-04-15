import React, { createContext, useState, useContext, useEffect } from 'react'

const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [token, setToken] = useState('');
    const [name, setName] = useState('');

    function logout(){
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('loggedInUser');
    }

    function login(token, name){
        setToken(token);
        setName(name);
    }
    useEffect(()=>{
        setToken(sessionStorage.getItem('token'));
        setName(sessionStorage.getItem('loggedInUser'))
    },[])

    return(
        <AuthContext.Provider value={{token, name, logout, login}}>
            {children}
        </AuthContext.Provider>
    )
    
}

export const useAuth= () =>{
    return useContext(AuthContext)
}

