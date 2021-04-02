import React from 'react'
import logo from './logo.png'
import './Navbar.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function Navbar(){
    return(
      
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <a className="navbar-brand d-block d-sm-none" to="/#">
            <img src={logo} className='logo'/>
         </a>
         <Link to='/'>
          <a className="navbar-brand d-none d-sm-block" to="/#">
              <img src={logo} className='logo'/>
              FLOWERS AND SEEDS
          </a>
         </Link>
        <form className='search input-group'>
            <input className='form-control' placeholder='Enter here to find more item . . .'/>
            <div className="input-group-append">
                <button className='btn btn-success'><i className="fa fa-search" aria-hidden="true"></i></button>
            </div>
        </form>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon" />
               </button>
               <div className="collapse navbar-collapse" id="navbarText">
                 <ul className="navbar-nav ml-auto">
                   <li className="nav-item">
                     <a className='nav-link'>HOME</a>
                   </li>
                   <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">PRODUCT PORTFOLIO</a>
                            <div className="dropdown-menu">
                                 <a className="dropdown-item" href="#">FLOWERS</a>
                                 <a className="dropdown-item" href="#">SEEDS</a>
                            </div>
                   </li>
                   <li className="nav-item">
                     <a className='nav-link'>CONTACT</a>
                   </li>
                   <li className="nav-item">
                     <a className='nav-link'>ABOUT</a>
                   </li>
                 </ul>
                 
               </div>
               
               
             </nav>
    )
}
export default Navbar;