import './App.css';
import { Route, Routes } from 'react-router-dom';
import Shows from './Componts/Innercomp/Movies/Shows';
import Innerhome from './Componts/Innercomp/Innerhome/Innerhome';
import Home from './Componts/Home/Home';
import Movies from './Componts/Innercomp/Movies/Movies';

function App() {
  return (
    <>

      <Routes>
      <Route exact path='/' element={<Home />} />

        {/* <Route exact path='/' element={<Main1 />} /> */}
        <Route exact path='/Innerhome' element={<Innerhome />} />
        <Route exact path='/Shows' element={<Shows />} />
        <Route exact path='/Movies' element={<Movies />} />

      </Routes>
    </>
  );
}

export default App;






// import React from 'react'
// import Main from './PracticeComponts/Main'

// function App() {
//   return (
//     <>
//       <Main />
//     </>
//   )
// }

// export default App