import React,{useState} from 'react'
import './Admin.css'
import SanphamWorkplace from './SanphamWorkplace'

function Admin(){
    const [slide,setSlide] = useState(true)
    return(
        <div>
            <div className='header-admin'>       
                <h3 className="logo-admin"><span className="slide-button" onClick={toggleSlide}><i className="fa fa-bars" aria-hidden="true"></i></span>Quản lý kho <span className="logo-name">VẬT TƯ</span></h3>
                <a href="#" className="logout"><i className="fa fa-sign-out" aria-hidden="true"></i>Logout</a>
            </div>
            <div className='body-admin'>
                <div className={slide?"slide-bar":'slide-bar on-off'}  >
                    <div className={slide?"employee":"employee on-off-employee"}>
                        <div className="employee-image">
                            <i className="fa fa-user-circle" aria-hidden="true"></i>
                        </div>
                        <h4 className="employee-name">Trần Hồng Quân</h4>
                    </div>
                    <div className={slide?"slide-bar_list":"slide-bar_list on-off-menu"}>
                        <a href="#"><i className="fa fa-list-alt" aria-hidden="true"></i><span className="ml-2" >Danh sách sản phẩm</span></a>
                        <a href="#"><i className="fa fa-users" aria-hidden="true"></i><span className="ml-2">Danh sách người dùng</span></a>
                        <a href="#"><i className="fa fa-calendar-check-o" aria-hidden="true"></i><span className="ml-2">Danh sách hóa đơn</span></a>
                        <a href="#"><i className="fa fa-calendar" aria-hidden="true"></i><span className="ml-2">Thống kê</span></a>
                        <a href="#"><i className="fa fa-sign-out" aria-hidden="true"></i><span className="ml-2">Thoát</span></a>
                    </div>
                </div>
                <SanphamWorkplace slide={slide}/> 
            </div>
        </div>       
    )
    function toggleSlide(){
        setSlide(!slide)
    }
    
}

export default Admin