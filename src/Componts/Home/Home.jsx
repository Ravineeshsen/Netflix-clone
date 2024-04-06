import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import Container2 from '../Container2/Cont';
import Container3 from '../Container3/Cont3';
import Container4 from '../Container4/Cont4';
import Container5 from '../Container5/Cont5'; // Corrected import
import Container6 from '../Container6/Container6';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <>
      <div className='img h-[100vh] w-full bg-no-repat bg-cover bg-center'>
        <Navbar />
        <div>
          <h1 className='show'><b>Unlimited movies, TV shows and more</b></h1>
          <p className='paragraph'>Watch anywhere. Cancel anytime.</p>
          <p className='paragraph'>Ready to watch? Enter your email to create or restart your membership.</p>
        </div>
        <div>
          <input className='Emailaddress' text='Email' autoComplete="email" minLength="5" placeholder='Email address' />
          <button className='GetStarted'>Get Started<i className="fa-solid fa-greater-than"></i></button>
        </div>
      </div>

      <div className='main-con'>
        <Container2 />
        <Container3 />
        <Container4 />
        <Container5 /> 
        <Container6 />
        <Footer/>
      </div>
    </>
  );
}

export default Home;
