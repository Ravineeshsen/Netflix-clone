import React from 'react'
import Logo from './netflix-logo-1.png'
import './Navbar.css'


   
import { useEffect,useState } from 'react';

const Navbar=()=> {
  const [accessToken, setAccessToken] = useState('');

  const handleLogin = () => {
      const CLIENT_ID = '746930267944-8k7et1lm3lnm8nacl4fjpren9qg7r8e9.apps.googleusercontent.com';
      const REDIRECT_URI = 'http://localhost:3000/inbox'; // Redirect URI configured in Google Developers Console
      const SCOPE = 'https://mail.google.com/'
      const AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token`;

      window.location.href = AUTH_URL;
  };

  const getAccessToken = ()=>{
    const url =window.location.href
    const token = url.match(/access_token=([^&]+)/)
    localStorage.setItem("Token",token && token[1])
  }

  useEffect(()=>{
    getAccessToken()
  },[])


    return (
        <div className='navbar w-full h-[100px] bg-transparent flex justify-between items-center px-32 '>

            <img  className='h-[150px] ' src={Logo} />
            <div>
                <select className='border py-2 rounded px-5 bg-transparent text-zinc-50'>
                   <option className='bg-stone-700'> English</option>
                   <option className='bg-stone-700'>Himdi </option>
                </select> 
                <button className='bg-rose-600 py-2 rounded px-5 text-white ml-5' onClick={()=>handleLogin()}>Sing in</button>


            </div>
        </div>
    )
}

export default Navbar