import React, {useState} from "react";
import {Link} from "react-router-dom"
import 'boxicons'

const Navbar = () => {
    // Toogle Menu
    const [MobileMenu, setMobileMenu] = useState(false)
    return (
      <>
        <header className='header'>
          <div className='container d_flex'>
            <div className='catgrories d_flex'>
              {/* <span class='fa-solid fa-border-all'></span> */}
              <h4>
                Categories <i className='fa fa-chevron-down'></i>
              </h4>
            </div>
  
            <div className='navlink'>
              <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
                <li>
                  <box-icon name='home' type='solid'></box-icon>
                  <Link to='/'>home</Link>
                </li>
                <li>
                  <box-icon name='book-open'></box-icon>
                  <Link to='/pages'>pages</Link>
                </li>
                <li>
                  <box-icon name='face'></box-icon>
                  <Link to='/user'>user account</Link>
                </li>
                <li>
                  <box-icon name='face' type='solid'></box-icon>
                  <Link to='/vendor'>vendor account</Link>
                </li>
                <li>
                  <box-icon name='shopping-bag'></box-icon>
                  <Link to='/track'>my order</Link>
                </li>
                <li>
                  <box-icon name='chat'></box-icon>
                  <Link to='/contact'>contact</Link>
                </li>
              </ul>
  
              <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
                {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
              </button>
            </div>
          </div>
        </header>
      </>
    )
  }

export default Navbar