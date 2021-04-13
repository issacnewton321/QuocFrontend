import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './SanphamWorkplace.css'
function Admin_workplace({slide}){
    const [on,setOn] = useState(false)
    const header = {
        headers: {
            Authorization: 'Bearer ' + window.localStorage.getItem('jwt') //the token is a variable which holds the token
          }
    }
    const [khachhang,setkhachhang] = useState([]);
    useEffect(()=>{
        axios.get(process.env.REACT_APP_API+'nguoidung/',header)
        .then(response => setkhachhang(response.data.filter(nv => nv.khachhang != null)))
        .catch(erro => console.log(erro))
    },[])
    const getDeleteKH = (makh)=>{
        let agree = window.confirm(`Bạn có muốn xóa khách hàng makh = ${makh}?`);
        if (!agree)
        return
        axios.delete(process.env.REACT_APP_API+'khachhang/'+makh,header)
        .then(response => {
            
            axios.get(process.env.REACT_APP_API+'nguoidung/',header)
            .then(response => 
                {
                    setkhachhang(response.data.filter(nv => nv.khachhang != null))
                    alert('Xóa thành công !!!')
                } )
            .catch(erro =>alert('Xóa thất bại !!!'))
            
        } )
        .catch(erro => console.log(erro))
    }
    return(
        <div className={slide?"workplace":"on-off-workplace"}>
                <h3 className={!on?"form-head":"d-none"}>DANH SÁCH KHÁCH HÀNG </h3>  
                <ul className={!on?"form-func":"d-none"}>
                        <li className="setting_form"><i className="fa fa-cogs" aria-hidden="true"></i></li>
                        <li className="find_form_li"><i className="fa fa-search" aria-hidden="true"></i> <input type="text" className = "find_form"/> </li>
                </ul>
                <div className={!on?"workplace_display":"d-none"}>
                    <table className="table table-striped table-bordered table-hover">
                        <thead className="thead-success">
                            <tr>
                                <th>MÃ KHÁCH HÀNG</th>
                                <th>HỌ TÊN KHÁCH HÀNG</th>
                                <th>ĐỊA CHỈ</th>
                                <th>SỐ ĐIỆN THOẠI</th>
                                <th>EMAIL</th>
                                <th>GIỚI TÍNH</th>
                                <th>NGÀY TẠO</th>
                                <th>USERNAME</th>
                                <th>PASSWORD</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {khachhang.map(kh =>{
                                const gender = ()=>{
                                    if(kh.khachhang.gioitinh == '0'){
                                        return 'Nữ'
                                    }
                                    else if(kh.khachhang.gioitinh == '1')
                                        return 'Nam'
                                    else
                                        return 'Khác'
                                }
                                return (
                                    <tr key={kh.khachhang.makh}>
                                       <td>{kh.khachhang.makh}</td>
                                       <td>{kh.khachhang.ho +' '+ kh.khachhang.ten}</td>
                                       <td>{kh.khachhang.diachi}</td>
                                       <td>{kh.khachhang.sdt}</td>
                                       <td>{kh.khachhang.email}</td>
                                       <td>{gender()}</td>
                                       <td>{kh.khachhang.ngaytaotk}</td>
                                       <td>{kh.username}</td>
                                       <td>{kh.password}</td>
                                       <td className="custom"><p className="custom-link" onClick={()=> getDeleteKH(kh.khachhang.makh)}>Delete</p> </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>         
                </div>
                <div>
                
            
        </div>
        </div>
    )
}
export default Admin_workplace