import React from 'react'
import img from "./images/illustration-working.svg"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
function Header() {
    const [showMenu, setShowMenu] = useState(false)
    const handleMenuIconClick = () => {
        setShowMenu(!showMenu)

    }
  return (
    <header className='main-header'>
      <header className="flex  align-center">
                <div className="flex">
                    <h2 className="logo">Shortly</h2> 
                    
                </div>
                <MenuIcon className='menu-icon'onClick={handleMenuIconClick}/>
                <div className={showMenu ? 'menu flex justify-between' : "hidden menu flex justify-between'"}style={{width : "100%"}}>
                    <ul className="flex align-center">
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Resources</li>
                    </ul>
                    <div>
                        <button className="btn">Login</button>
                        <button className="btn btn-ouline ">Sign Up</button>
                    </div>
                   
                </div>
            </header>
                <div className="header__bottom flex justify-between align-center">
                    <div className="content">
                        <span className="large">More than just shorter links</span>
                        <p className="text">Build your brand recognition and get detailed insights on how your links are preforming.</p>
                        <button className="btn btn-ouline">Get Started</button>
                    </div>
                    <img src={img} alt="illustration-working" className="img"/>
                    
                </div>
    </header>
  )
}

export default Header
