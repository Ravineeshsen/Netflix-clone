import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './netflix-logo-1.png';
import Shows from '../Movies/Shows';


function Innerhome() {
  return (
    <div>
      <div className='relative'>
        <img className='w-full h-[100vh]' src='https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVr3AdhNeyrkV5sEf77Or41uiW1k_PNS0dxk2LGzXXjDRAHhRYfBJqm0RlSKiOlnV-A-9fC_u1g3euupMaFmKo3uoHedUlwSwTKJ.jpg?r=850' alt="Netflix Background" />
      </div>
      <div className='absolute top-0 left-0 right-0 flex text-slate-50 gap-4 items-center ml-[3rem] text-lg '>
        <img className='h-[13vh]' src={Logo} alt="Netflix Logo" />
        <Link to='/'>Home</Link>
        <Link to='/shows'>TV Shows</Link>
        <Link to='/movies'>Movies</Link>
        <Link to='/new-and-popular'>New & Popular</Link>
        <Link to='/my-list'>My List</Link>
        <Link to='/browse-by-languages'>Browse by Languages</Link>

        <div className='ml-[20rem] mt-[2rem]  flex gap-1.5 items-center'>
          <Link to='/search'><i className=" fa-sharp  fa-solid fa-magnifying-glass"></i></Link>
          <Link to='/children'>Children</Link>
          <Link to='/notifications'><i className="fa-solid fa-bell"></i></Link>
          <Link to='/account'><img className='h-[5vh]' src='https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.webp'  alt="Netflix Avatar" /></Link>
          <Link to='/profile'><i className="  fa-solid fa-caret-down"></i></Link>
        </div>

      </div>
      <div className='absolute top-1/2 text-slate-50'>
        <img className='pl-[7rem] mt-[-10rem] h-[25.5vh]' src='https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRP0qVvk0eOlrejKsX2N38Ck4Fly_NIoCnn0rrVetBpPksJFkVc2jhRvvbkyPZeEDoAc7T7ZwEaSTCdwq88bBJ_QoUrKyRaeQT-RWHuJhIkZhW9ElzkPDvw5iVSaRfj_h6iQ7nxOfhDy0unpJ3WoiYV8SO7mF3ee-VlDji7QK-eh34OyLpfHsA.webp?r=c6a' alt="Netflix Show" />
        <p className='pl-[6rem] text-lg pt-2'>Two hometown sweethearts reunite after a scandal forces one of <br />them home in this "intimate, beautiful" drama hailed as a "comfort <br />watch" by NME.</p>
      </div>
      <div className='absolute top-[33rem] text-slate-50'>
        <button className='text-xl h-10 w-[15vh] text-black bg-slate-50 text-justify px-2 py-0 ml-[6rem] rounded mt-[-1rem] hover:bg-slate-700'><i className="pr-2 fa-solid fa-play"></i>Play</button>
        <button className='text-xl h-10 w-[20vh] text-slate-50 bg-stone-500 text-justify ml-[0.5rem] rounded pl-4 mt-[-1rem] hover:bg-neutral-800'><i className="pr-2 fa-regular fa-circle-info"></i>More info</button>
        <h3 className='text-xl mt-[7rem] ml-[6rem]'><b>Popular on Netflix</b></h3>
      </div>
      
    </div>
  );
}

export default Innerhome;
