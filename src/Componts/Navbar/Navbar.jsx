import React from 'react'
import Logo from './netflix-logo-1.png'
import './Navbar.css'

function Navbar() {
    return (
        <div className='navbar w-full h-[100px] bg-transparent flex justify-between items-center px-32 '>

            <img  className='h-[150px] ' src={Logo} />
            <div>
                <select className='border py-2 rounded px-5 bg-transparent text-zinc-50'>
                   <option> English</option>
                   <option>Himdi </option>
                </select> 

                <button className='bg-rose-600 py-2 rounded px-5 text-white ml-5' >Sing in</button>


            </div>
        </div>
    )
}

export default Navbar