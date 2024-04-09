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
      <div className='absolute top-0 left-0 right-0 flex text-slate-50 gap-4 items-center ml-[5rem] text-lg'>
        <img className='h-[13vh]' src={Logo} alt="Netflix Logo" />
        <Link to='/'>Home</Link>
        <Link to='/shows'>TV Shows</Link>
        <Link to='/movies'>Movies</Link>
        <Link to='/new-and-popular'>New & Popular</Link>
        <Link to='/my-list'>My List</Link>
        <Link to='/browse-by-languages'>Browse by Languages</Link>

        <div className='ml-[20rem] mt-[2rem]'>
          <Link to='/search'><i className="mr-[0.8rem] fa-sharp  fa-solid fa-magnifying-glass"></i></Link>
          <Link to='/children'>Children</Link>
          <Link to='/notifications'><i className="fa-solid fa-bell"></i></Link>
          <Link to='/account'><img className='h-[5vh] ml-[10rem] mt-[-2rem]' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA8FBMVEUkieX///////3///v///ogiOb//v////f///T///gAfuT///Ach+cAguYSheb//+709OPS3c/8+eEAfuhNk9I3icsghd4zito8j9s4i9wphtl3p8+70NHk59Pu79nS3eKtwMFglcyVttDP2dXu69B8qs0Lf96JrsrH1s1KldC9zMiduMUpiNGXtLfv9Ozc59X8+dxbmMhuptbd6N+iv9jI3OhRl+FppN1anN680NuWus6oxtKEsdaTtbDd38meusdnmLRnncSBqb6Eq76owr5znKvM1L/a5OSmt7Xe37hikr2au9ri5su8x73w7uV+nred3bqOAAAF/klEQVR4nO3ci1LbRhQGYLSr1X1XsmxkI4ztYJC5BhwoBNzGNaRNk0J4/7fprriMwTIFJCS383+TGTNMsnOO9iYpe7y0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8D/ApKpjUN4lDM/jPGq2Wk3hiEqzFFw0V1ZWYi68Yht24tX2WhAGnW7vQ1Jw26/AeGO93wnDcKO92eQFNuwlgzVbu+NvbXNRYOOvIJo7Lr0Lwwx2k8KGk7dXs2zDuGuaasE+r2Sk1lc/Uo3chUGIfhAXNJpYK3hoV7IpMUe8gpHq9Fyqa9MOh4WMVBavaXQqQ0qJbn11Su9FvmsRSqcTJPbhsIj5wvuPmk2b1v1J2VPRa4RPw5AOovyDSXyyCJnJ0DiKyu1ElvRnwtA0w1zPP06jbzqdydAm5q5TQNwvJyb2TBgyEPoz95Xmn00y24fyN0dRIZG/OI7+bBhyTTD0zbzDVBxnNKz4zTKHKYs/apmBkK28w5T/kp2gRj6VumGcWDRjlFJqdPLOlnjDyEhPNb5e5mrKT+zZ5UBlqPl5M4w6czLUjsvM0BnIOZexllLDfL8MS+1D73ROhpqVN0P+TctOkW6WmaH47GZfZ9LJvdKcZS9hmrtd5krjtbLuaNR2UcuboVglWX1ISFDufii6mReaaue5h5LciDLoZFTkA+i/E7/KnWG2C4m/kntb5qOZG2+VYbhd7q03izsZKw0lO/nDSJt+shURao/Lfl3Df7MpnX56Iuo5LmzkD4PxVX8mQ1L2o4Vca5ytxxnKR3FqDgqZK3zgPpkBpBNX8BqDf9HJdB/q1BwX84DD+CBMOy4dGvLDvFqu4FUUE80tW1cBpOSnVdwTHP+9ZlF1X0h1g5jBuPQhekte6o68jzHUYDU082BS3NsixqNh99BOV+er82Y1b9rSOJr7Bz5VS91h/4KJpSID8erx5GKwftNIKstPYU7SvLkYXE4YL34/Zp4QgnsV/88F8zwm41gq+qU+AAAAAAAAAAAAAAAAAAAAAAAsNiZ45eeX3hNLls+3rgcVnSGciuOdytu5s9cLKdH02l61KQon4e9wWprVl78G6VlaqtWSwpt/Oc+7PNvonrd4sUXDHm+NQs006O2B8/zVCG8X1+Q4Irrf/qPACn7BJ205PultbTm1Se7atbdLeiQtRiGqgr9exKrHPJ6s1tz0KDZJi5Xkp1tZhl7r4fw7JX5tWM/dj149Pl/zbcN+dKi+ugzFsT5dE+bWhlGe08VMJMM/Q3XK+3HhB81d9/RmvK9P1YQZhJob+y25Rb86S6ZGZ/R5dGTKZh5lSAjVgmFlh4XFsa09KeMxg53VyHnl2ufx+t7p1wNfy0CttWK+VeFNvIb7JEO5QRM32PkUO0Jukv/al0z2t3Cc5dWdQLaUUUBnaOE4qvK8txhkXHdV9BlsnS9zzsVzy6tMjjtJ66Z9ZVGiZ5eTh+2owr1QBSn2g5nIjNtaV/Pwy+hyGMt7ZzkzPdlZXkrIPyo1Lpqti3G3Y8l9gWbU4ROdyi2owSv/yiPe2HKzSvvUgNVs6h9+O+v9dXraaCw/aGyf7vd63W7Hp/qcMnn1z6ncYgv4Roy82JInGt99LSNJucrLzkznlm75fnAv9F0rLVAjhGRfG9WpWtBuLMyDk0gmtYy+oOorYOjDj/e/TWvHbnOjcxKUf+GwF1fx9ThzefUf31Wp0ryi91dQPe9/2XQqrUvKIuonxx09Z4pqubGto7+Hi5efwnhzsx8QI0+SxOq0J9WWlT1HbW/bu1fufXnk/GVy2t1cNFR6R6PT2FmY5SUb43x5vf/x0dryErYVXq03xEItLnPI3YPzaPP6ILQJeWa3ux+Wui4fnzu16x9Jvdp7l1fi9aSxed396T87VInmhkH3+vRDs/7fSi/FPHm3tncy6J11NwJf125v0O/2Qt10w86autc5aXKHqYm30HNvPianpSOSeGl4
        cXk+HqXG493LmyGLoqju1Ku/6SwGS2tvp3hveEYGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFgQ/wDS2WNlOUT6fAAAAABJRU5ErkJggg==' alt="Netflix Avatar" /></Link>
          <Link to='/profile'><i className="fa-solid fa-caret-down"></i></Link>
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
