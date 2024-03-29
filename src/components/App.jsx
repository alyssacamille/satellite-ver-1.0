import React from 'react';
import { useState } from 'react'; // Don't forget to import useState
import '../styles/App.css'
import Header from './Header'
import Search from './Search'
import Feed from './Feed.jsx'
import Footer from './Footer.jsx'
import {D1,D2,L1,L2,L3,L4,L5,L6,L7,LR1,LR2,S0,S1,S10,S11,S12,S13,S14,S15,S16,S2,S3,S4,S5,S6,S7,S8,S9} from './art'
import Navbar from './Navbar.jsx';


function App() {
 
return (
    <> 

      <Navbar/>
      {/* <Header/> */}
      {/* <Scroll/> */}
   
      {/* <p>You're at app.jsx</p> */}
      <div className='card card-small '>
        
      <Feed/> 
      
      </div>
      <Footer />
    </>
  );

  
}

export default App;
