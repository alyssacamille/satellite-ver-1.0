import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { BiPlanet } from "react-icons/bi";
import { TbMailFilled } from "react-icons/tb";
import { FaRocket } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
// import notification from "./assets/notification.svg"
// import "./footer.css"
import { useState } from 'react';

// Inline css, internal css, external css

{/* <img className='' src={notification}/>
          
          <img src={notification} style={{ height: "2rem", color:"purple"}}/> */}

const Footer = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div  className='footer py-5 px-3 fixed bottom-0 left-0 right-0 bg-white bottom-round flex justify-between'>
        
        {/* connected to */}
        
        <Link to="/Notifications">
          <IoNotifications className="icon" size={'24'} />
        </Link>

        {/* <IoNotifications className="icon" size={24} onClick={() => openModal(product)} /> */}

      <Link to={"/"} className={`icon ${isActive ? 'active' : ''}`}>
        <BiPlanet size={'24'} />
      </Link>

        <Link to={"/Messages"}>
        <TbMailFilled className="icon" size={'24'}/>
        </Link>
        
        <Link to={"/Explore"}>
        <FaRocket className="icon" size={'24'}/>
        </Link>

        <Link to={"/Profile"}>
        <CgProfile className="icon" size={'24'}/>
        </Link>

    </div>
  )
}

export default Footer