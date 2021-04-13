import { Grid } from '@material-ui/core'
import React,{useState} from 'react'
import './Topbar.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    Redirect
  } from "react-router-dom";
function Topbar(){
    let history = useHistory();
   // const [logout,setLogout] = useState(false);
    const myStore = window.localStorage;
    const user = JSON.parse(myStore.getItem('user'))
    const isLogin = ()=>{
        if(user!=null){
            return (
                <p className="login item mr-3"><i className="fa fa-user-circle fa-lg" aria-hidden="true"></i> {user.khachhang?.ho +' ' +  user.khachhang?.ten}</p>
            )
        }
        else
            return (
                <p onClick={()=>{history.push('/login')}} className="login item mr-3"><i className="fa fa-user-circle fa-lg" aria-hidden="true"></i> Đăng nhập</p>
            )
    }
    const isLogout = ()=>{
        if(user != null){            
            return (
                <p onClick={()=>{myStore.removeItem('user'); myStore.removeItem('jwt'); history.push("/") ;window.location.reload(false) }} className="login item ml-3"><i class="fa fa-sign-out fa-lg" aria-hidden="true"></i> Đăng xuất</p>
            )
        }
        else
            return '';
    }
    return (
        <div>
            <div className='d-none d-sm-block'>
                <div className='topbar d-flex justify-content-around'>
                    <div className='topbar__contact d-flex'>              
                        <p className='mr-3'>Hongquan080799@gmail.com</p>
                        <p>0336781801</p>
                    </div>
                    <div className='topbar__more d-flex'>
                        {isLogin()}
                        <Link to='/cart'>
                         <p className="cart item mr-3"><i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i><span className='index'>1</span> Giỏ hàng</p>
                        </Link>
                        <p className="login item"><i className="fa fa-bell fa-lg"></i><span className='index'>1</span> Thông báo</p>
                        {isLogout()}
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