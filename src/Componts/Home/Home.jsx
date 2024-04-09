import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import Container1 from '../Container1/Cont';
import Container2 from '../Container2/Cont3';
import Container3 from '../Container3/Cont4';
import Container4 from '../Container4/Cont5'; 
import Container5 from '../Container5/Container6';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import Innerhome from '../Innercomp/Innerhome/Innerhome';

function Home() {
  return (
    <div className='main-con'>
      <div className='img h-[100vh] w-full bg-no-repeat bg-cover bg-center'>
        <Navbar />
        
        <div>
          <h1 className='show text-[3rem] mt-[8rem]'><b>Unlimited movies, TV shows and more</b></h1>
          <p className='paragraph text-[1.5rem] mt-1'>Watch anywhere. Cancel anytime.</p>
          <p className='paragraph text-[1.2rem]'>Ready to watch? Enter your email to create or restart your membership.</p>
        </div>
        <div>
          <input className='Emailaddress border py-2 rounded bg-transparent text-white' type='email' autoComplete="email" minLength="5" placeholder='Email address' />
         <Link to={'Innerhome'}>
          <button className='bg-[rgb(229,9,20)] text-white h-[2.9rem] w-[12rem] rounded mt-[1rem] mx-4 text-2xl font-extrabold'>Get Started  <i className="fa-solid fa-chevron-right"></i></button>
          </Link> 
        </div>
      </div>

      <Container1/>
      <Container2 />
      <Container3 />
      <Container4/> 
      <Container5 />
      <Footer/>
    </div>
  );
}

export default Home;
