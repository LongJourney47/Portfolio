import React from 'react'
import {  Link } from "react-router-dom";
import Styles from '../Styles/Navbar.module.css'
import Email from 'Components/Email'
import Social from 'Components/Social'


const Navbar = () => {
  return (
  <>
  <header> 
      <nav className={Styles.Navbar}>
  <aside className={Styles.Title}> 
  <span>
  <p>PlaceHolder</p>
  </span>
  
  </aside>
        <aside className={Styles.Links}>
          <ul>
            <li>
            <Link className={Styles.LinkStyles}  to="/" >
             Home 
              </Link>
            </li>
            
          
            <li>
            <Link className={Styles.LinkStyles}  to="/About" > 
          <span>About </span> </Link>
            </li>
            
          <span>
            <li>
            <Link className={Styles.LinkStyles}  to="/Skills" >
           Skills  </Link>
            </li>
            </span>
          
            <li>
            <Link className={Styles.LinkStyles}  to="/Projects" >
            Projects </Link>
            </li>
            
  </ul>
        </aside >
      </nav>
     </header>


     <Email/>
  <Social/>
   

  </>
  )
}



export default Navbar;