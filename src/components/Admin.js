import React,{useState,useEffect} from 'react'
import './Admin.css'
import SanphamWorkplace from './SanphamWorkplace'
import DanhMucWorkplace from './DanhMucWorkplace'
import KhachhangWorkplace from './KhachhangWorkplace'
import NhanvienWorkplace from './NhanvienWorkplace'
import DonhangWorkplace from './Donhang_workplace'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
    Link,
    useParams,
    useHistory
  } from "react-router-dom";

function Admin(){
    let myStore = window.localStorage
    let quyen = myStore.getItem('quyen')
    let history = useHistory();
    useEffect(()=>{
        if(quyen != 1)
            history.push('/')
    })
    
    
    let {adminPage} = useParams();
    const [slide,setSlide] = useState(true)
    let Page = '';
    switch(adminPage){
        case 'sanpham':{
            Page = <SanphamWorkplace slide={slide}/>
            break;
        }
        case 'index':{
            Page = <div style={{maxWidth:'85%',height:'92vh'}}><img src="https://wallpaperaccess.com/full/825322.jpg" alt="picture" style={{width:'100%',height:'100%',overflowY:'hidden'}}/></div>
            break;
        }
        case 'danhmuc':{
            Page = <DanhMucWorkplace slide={slide}/>
            break;
        }
        case 'khachhang':{
            Page = <KhachhangWorkplace slide={slide}/>
            break;
        }
        case 'nhanvien':{
            Page = <NhanvienWorkplace slide={slide}/>
            break;
        }
        case 'donhang':{
            Page = <DonhangWorkplace slide={slide}/>
            break;
        }
    }
    return(
        <div>
            <div className='header-admin'>       
                <h3 className="logo-admin"><span className="slide-button" onClick={toggleSlide}><i className="fa fa-bars" aria-hidden="true"></i></span>TRANG QUẢN TRỊ</h3>
                <p onClick={()=>{myStore.removeItem('username') ; history.push("/")}} className="logout"><i className="fa fa-sign-out" aria-hidden="true"></i>Đăng xuất</p>
            </div>
            <div className='body-admin'>
                <div className={slide?"slide-bar":'slide-bar on-off'}  >
                    <div className={slide?"employee":"employee on-off-employee"}>
                        <div className="employee-image">
                            <img style={{width:'250px'}} src="https://scontent.fsgn1-1.fna.fbcdn.net/v/t1.18169-9/13900235_702741596543556_2970957999726811456_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=7bPiGJwFTWkAX_UdOhE&_nc_ht=scontent.fsgn1-1.fna&oh=faeee7aaeb0f7efe00e696e7bdf5bfd2&oe=60BFE964"/>
                        </div>
                        <h4 className="employee-name">ADMIN</h4>
                    </div>
                    <div className={slide?"slide-bar_list":"slide-bar_list on-off-menu"}>
                        <Link to="/admin/sanpham"><p><i className="fa fa-list-alt" aria-hidden="true"></i><span className="ml-2" >Danh sách sản phẩm</span></p></Link>
                        <Link to="/admin/danhmuc"><p><i className="fa fa-users" aria-hidden="true"></i><span className="ml-2">Danh sách danh mục</span></p></Link>
                        <Link to="/admin/khachhang"><p><i className="fa fa-calendar-check-o" aria-hidden="true"></i><span className="ml-2">Danh sách khách hàng</span></p></Link>
                        <Link to="/admin/nhanvien"><p><i className="fa fa-calendar" aria-hidden="true"></i><span className="ml-2">Danh sách nhân viên</span></p></Link>
                        <Link to="/admin/donhang"><p><i className="fa fa-calendar" aria-hidden="true"></i><span className="ml-2">Danh sách đơn hàng</span></p></Link>
                        <Link to="/admin/sanpham"><p><i className="fa fa-sign-out" aria-hidden="true"></i><span className="ml-2">Thoát</span></p></Link>
                    </div>
                    
                </div>
                {Page}
            </div>
        </div>       
    )
    function toggleSlide(){
        setSlide(!slide)
    }
    
}

export default Admin