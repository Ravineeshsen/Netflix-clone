import React from 'react'
import './Cont3.css'

function Cont3() {
  return (
    <div className='second-con py-20'>
      <div className='relative'>

        <img className='acquisition' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg' />
        <div className='stranger to-yellow-50 absolute top-1/2 bg-black'>
          <h1>Stranger Things</h1>
          <h1 className="blue">Downloading....</h1>
        </div>
      </div>

      <span>
        <h1 className='offine'><b>Downloadd your shows to<br></br> watch offine</b></h1>
        <p className='easily '>Save your favourites easily and always have<br></br>somthing to watch.</p>
      </span>
    </div>
  )
}

export default Cont3