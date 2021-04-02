import { Grid } from '@material-ui/core'
import React from 'react'
import './Topbar.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function Topbar(){
    return (
        <div>
            <div className='d-none d-sm-block'>
                <div className='topbar d-flex justify-content-around'>
                    <div className='topbar__contact d-flex'>              
                        <p className='mr-3'>Hongquan080799@gmail.com</p>
                        <p>0336781801</p>
                    </div>
                    <div className='topbar__more d-flex'>
                        <Link to='/login'>
                            <p className="login item mr-3"><i className="fa fa-user-circle fa-lg" aria-hidden="true"></i> Login</p>
                        </Link>
                        <Link to='/cart'>
                         <p className="cart item mr-3"><i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i><span className='index'>1</span> Cart</p>
                        </Link>
                        <p className="login item"><i className="fa fa-bell fa-lg"></i><span className='index'>1</span> Notification</p>
                    </div>
                </div>
            </div>
            <div className='d-block d-sm-none'>
                <div className='topbar d-flex justify-content-around'>
                    <div className='topbar__contact d-flex'>              
                        <p className='mr-3'>Hongquan080799@gmail.com</p>
                        <p>0336781801</p>
                    </div>
                    <div className='topbar__more d-flex'>
                         <p className="login item mr-3"><i className="fa fa-user-circle fa-lg" aria-hidden="true"></i></p>
                        <p className="cart item mr-3"><i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i><span className='index'>1</span></p>
                        <p className="login item"><i className="fa fa-bell fa-lg"></i><span className='index'>1</span></p>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Topbar;