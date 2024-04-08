import React, { useState } from 'react'
// import './Container6.css'


const Container6 = () => {
    const [Visibility, setVisibility] = useState({});
    const plusVisibility = (index) => {
        setVisibility(textVisibility => ({
            ...textVisibility,
            [index]: !textVisibility[index]

        }));



    }

    return (
        <div className=' bg-black h-[130vh] border-y-8 border-gray-800  pt-[4.7rem] flex justify-center'>
            <div className=''>
                <h1 className='text-white font-bold text-4xl pl-[15rem] '>Frequently Asked Questions</h1>

                <div onClick={() => plusVisibility(0)} className=' h-[8vh] w-[65vw] mr-5 bg-neutral-800 mt-10 flex justify-between items-center hover:bg-neutral-700'>
                    <h2 className='text-white text-xl px-4 '>What is Netflix ?</h2>
                    <i class={`fa-solid fa-plus  text-white text-3xl pr-5 transform ${Visibility[0] ? 'rotate-45' : ''}`}></i>
                </div>
                <div className={`faq-answer w-[65vw] text-xl text-white pl-3 px-4 transition-all duration-500 bg-neutral-700 ${Visibility
                [0] ? 'block opacity-100 mt-0.5'  : 'hidden opacity-0'}`}>

                    Netflix is a streaming service that offers a wide variety of award-winning TV shows,
                    movies, anime, documentaries and more – on thousands of internet-connected devices.

                    You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price.
                    There's always something new to discover, and new TV shows and movies are added every week!
                </div>




                <div onClick={() => plusVisibility(1)} className=' h-[8vh] w-[65vw] mr-5 bg-neutral-800 mt-4 flex justify-between items-center hover:bg-neutral-700'>
                    <h2 className='text-white text-xl px-4 '>How much does Netflix cost ?</h2>
                    <i class={`fa-solid fa-plus  text-white text-3xl pr-5 transform ${Visibility[1] ? 'rotate-45' : ''}`}></i>
                </div>
                <div className={`faq-answer w-[65vw] text-xl text-white pl-3 px-4 transition-all duration-500 bg-neutral-700 ${Visibility
                [1] ? 'block opacity-100 mt-0.5' : 'hidden opacity-0'}`}>

                    Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee.
                    Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.
                </div>




                <div onClick={() => plusVisibility(2)} className=' h-[8vh] w-[65vw] mr-5 bg-neutral-800 mt-4 flex justify-between items-center hover:bg-neutral-700'>
                    <h2 className='text-white text-xl px-4 '>Where can i watch ?</h2>
                    <i class={`fa-solid fa-plus  text-white text-3xl pr-5 transform ${Visibility[2] ? 'rotate-45' : ''}`}></i>
                </div>
                <div className={`faq-answer w-[65vw] text-xl text-white pl-3 px-4 transition-all duration-500 bg-neutral-700 ${Visibility
                [2] ? 'block opacity-100 mt-0.5' : 'hidden opacity-0'}`}>

                    Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com
                    from your personal computer or on any internet-connected device that offers the Netflix app,
                    including smart TVs, smartphones, tablets, streaming media players and game consoles.

                    You can also download your favourite shows with the iOS, Android, or Windows 10 app.
                    Use downloads to watch while you're on the go and without an internet connection.
                    Take Netflix with you anywhere.
                </div>




                <div onClick={() => plusVisibility(3)} className=' h-[8vh] w-[65vw] mr-5 bg-neutral-800 mt-4 flex justify-between items-center hover:bg-neutral-700'>
                    <h2 className='text-white text-xl px-4 '>How do i Cancel?</h2>
                    <i class={`fa-solid fa-plus  text-white text-3xl pr-5 transform ${Visibility[3] ? 'rotate-45' : ''}`}></i>
                </div>
                <div className={`faq-answer w-[65vw] text-xl text-white pl-3 px-4 transition-all duration-500 bg-neutral-700 ${Visibility
                [3] ? 'block opacity-100 mt-0.5' : 'hidden opacity-0'}`}>

                    Netflix is flexible. There are no annoying contracts and no commitments.
                    You can easily cancel your account online in two clicks.
                    There are no cancellation fees – start or stop your account anytime.
                </div>

                <div onClick={() => plusVisibility(4)} className=' h-[8vh] w-[65vw] mr-5 bg-neutral-800 mt-4 flex justify-between items-center hover:bg-neutral-700'>
                    <h2 className='text-white text-xl px-4 '>What can i watch on Netflix?</h2>
                    <i class={`fa-solid fa-plus  text-white text-3xl pr-5 transform ${Visibility[4] ? 'rotate-45' : ''}`}></i>
                </div>
                <div className={`faq-answer w-[65vw] text-xl text-white pl-3 px-4 transition-all duration-500 bg-neutral-700 ${Visibility
                [4] ? 'block opacity-100 mt-0.5' : 'hidden opacity-0'}`}>

                    Netflix has an extensive library of feature films, documentaries, TV shows, anime,
                    award-winning Netflix originals,
                    and more. Watch as much as you want, anytime you want.
                </div>



                <div onClick={() => plusVisibility(5)} className=' h-[8vh] w-[65vw] mr-5 bg-neutral-800 mt-4 flex justify-between items-center hover:bg-neutral-700'>
                    <h2 className='text-white text-xl px-4 '>Is Netflix good for kids?</h2>
                    <i class={`fa-solid fa-plus  text-white text-3xl pr-5 transform ${Visibility[5] ? 'rotate-45' : ''}`}></i>
                </div>
                <div className={`faq-answer w-[65vw] text-xl text-white pl-3 px-4 transition-all duration-500 bg-neutral-700 ${Visibility
                [5] ? 'block opacity-100 mt-0.5' : 'hidden opacity-0'}`}>

                    The Netflix Kids experience is included in your membership to give parents control
                     while kids enjoy family-friendly TV shows and films in their own space.

                    Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating 
                    of content kids can watch and block specific titles you don’t want kids to see.
                </div>



                <h3 className='text-white text-lg pl-[13rem] pt-[2rem]'>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className='flex justify-center'>
                    <input className='bg-transparent text-white bg-[#292827] rounded font-normal border h-[7vh] w-[18vw] border-white pl-2 mt-[1rem]' type="text" placeholder='Email address' />
                    <button className='bg-[rgb(229,9,20)] text-white h-[7vh] w-[12vw] rounded mt-[1rem] mx-4 text-2xl font-extrabold'>Get Started  <i class="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
        </div>


    );
};

export default Container6;



