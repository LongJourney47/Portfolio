import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Home from 'Pages/Home'
import About from 'Pages/About'
import Projects from 'Pages/Projects'
import Skills from 'Pages/Skills'
import Error from 'Pages/Error'

const App = () => {
  
  // router is should be the highest tag in the file that will encompass all components
    return <Router>
      {/* ======== the nav bar appears on all pages  ======== */}
     
     <header> 
      <nav >
  <aside > 
  <span>
  <p>PlaceHolder</p>
  </span>
  
  </aside>
        <aside >
          <ul>
            <li>
            <Link  to="/" >
             Home 
              </Link>
            </li>
            
          
            <li>
            <Link  to="/About" > 
          <span>About </span> </Link>
            </li>
            
          <span>
            <li>
            <Link  to="/Skills" >
           Skills  </Link>
            </li>
            </span>
          
            <li>
            <Link  to="/Projects" >
            Projects </Link>
            </li>
            
  </ul>
        </aside >
      </nav>
     </header>


      <Routes>
        {/*=========== Each route is treated as a page    ============= */}
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/about" element={<About/>} ></Route>
        <Route path="/Projects" element={<Projects/>} ></Route>
        <Route path="/skills" element={<Skills/>} ></Route>
        {/* ========== The * symbol will catch any errors made by the users and redirect them to his page    ============= */}
        <Route path="/*" element={<Error/>} ></Route>
      </Routes>
    
    </Router>
  }



export default App;