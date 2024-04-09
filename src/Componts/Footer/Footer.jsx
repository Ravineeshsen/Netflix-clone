import React from 'react'
import { Link } from 'react-router-dom'
import Innerhome from '../Innercomp/Innerhome/Innerhome'

function Footer() {
  return (
    
    <div className=' bg-black h-[60vh] border-y-6 border-gray-800'>
                <div className='text-white text-1xl px-20 pt-6'>
                    <p><a href="">Questions? Call 000-800-919-1694</a></p>
                </div>
                <div className='flex justify-around'>
                    <ul className='text-white text-sm pt-6 px-6'>
                        <li className='pb-5'><a href="">FAQ</a></li>
                        <li className='pb-5'><a href="">Investor Relations</a></li>
                        <li className='pb-5'><a href="">Privacy</a></li>
                        <li className='pb-5'><a href="">Speed Test</a></li>
                        <li ><a href=""><select className='bg-transparent  outline-none bg-[#111112] text-white h-8 w-28 border border-gray-700 rounded mx-4' name="" id="">
                            <option value="English">English</option>
                            <option value="Hindi">Hindi</option>
                        </select></a></li>
                        

                    </ul>

                    <ul className='text-white text-sm pt-6 px-6  '>
                        <li className='pb-5'><a href="">Help Centre</a></li>
                        <li className='pb-5'><a href="">Jobs</a></li>
                        <li className='pb-5'><a href="">Cookie Preferences</a></li>
                        <li className='pb-5'><a href="">Legal Notices</a></li>


                    </ul>
                    <ul className='text-white text-sm pt-6 px-6'>
                        <li className='pb-5'><a href="">Account</a></li>
                        <li className='pb-5'><a href="">Jobs</a></li>
                        <li className='pb-5'><a href="">Corporate Information</a></li>
                        <li className='pb-5'><a href="">Only on Netflix</a></li>


                    </ul>
                    <ul className='text-white text-sm pt-6 px-6'>
                        <li className='pb-5'><a href="">Media Centre</a></li>
                        <li className='pb-5'><a href="">Terms of Use</a></li>
                        <li className='pb-5'><a href="">Contact Us</a></li>



                    </ul>
                    

                </div>
      {/* <div className='absolute mt-[-2rem] '>
       <Link to={'Innerhome'}>
      <button className='bg-rose-600 h-9 p py-2 rounded px-5 text-white ml-[15.5rem] pb-3 ' >Show More</button>
</Link> 
      </div> */}
      

      </div>
  )
}

export default Footer