import React from 'react'
import './Container6.css'

function Container6() {
    return (
        <div className=' bg-black h-[150vh] border-y-8 border-gray-800  pt-[4.7rem] flex justify-center'>
            <div className=''>
                <h1 className='text-white font-bold text-5xl pl-[10rem] '>Frequently Asked Questions</h1>
                <div className='border border-none h-[10vh] w-[65vw] mr-5 bg-neutral-800 mt-7 flex justify-between items-center'>
                    <h2 className='text-white text-2xl px-4 '>What is Netflix ?</h2>
                    <i class="fa-solid fa-plus  text-white text-3xl pr-5"></i>

                </div>

                <div className=''>
                    <div className='border border-none h-[10vh] w-[65vw] mr-5 bg-neutral-800 mt-7 flex justify-between items-center'>
                        <h2 className='text-white text-2xl px-4 '>How much does Netflix cost?</h2>
                        <i class="fa-solid fa-plus  text-white text-3xl pr-5"></i>

                    </div>
                </div>

                <div className=''>
                    <div className='border border-none h-[10vh] w-[65vw] mr-5 bg-neutral-800 mt-7 flex justify-between items-center'>
                        <h2 className='text-white text-2xl px-4 '>Where I can Watch?</h2>
                        <i class="fa-solid fa-plus  text-white text-3xl pr-5"></i>

                    </div>
                </div>

                <div className=''>
                    <div className='border border-none h-[10vh] w-[65vw] mr-5 bg-neutral-800 mt-7 flex justify-between items-center'>
                        <h2 className='text-white text-2xl px-4 '>How do I cancel?</h2>
                        <i class="fa-solid fa-plus  text-white text-3xl pr-5"></i>

                    </div>
                </div>

                <div className=''>
                    <div className='border border-none h-[10vh] w-[65vw] mr-5 bg-neutral-800 mt-7 flex justify-between items-center'>
                        <h2 className='text-white text-2xl px-4'>What can I Watch on Netflix?</h2>
                        <i class="fa-solid fa-plus  text-white text-3xl pr-5"></i>

                    </div>
                </div>

                <div className=''>
                    <div className='border border-none h-[10vh] w-[65vw] mr-5 bg-neutral-800 mt-7 flex justify-between items-center'>
                        <h2 className='text-white text-2xl px-4 '>Is Netflix good for kids?</h2>
                        <i class="fa-solid fa-plus  text-white text-3xl pr-5"></i>
                    </div>
                </div>
                <h3 className='text-white text-2xl pl-[5rem] pt-[2rem]'>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className='flex justify-center'>
                    <input className='bg-transparent text-white bg-[#292827] rounded font-normal border h-[8vh] w-[25vw] border-white pl-2 mt-[1rem]' type="text" placeholder='Email address' />
                    <button className='bg-[rgb(229,9,20)] text-white h-[8vh] w-[15vw] rounded mt-[1rem] mx-4 text-2xl font-extrabold'>Get Started  <i class="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
        </div>


    )
}

export default Container6