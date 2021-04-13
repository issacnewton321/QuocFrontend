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
    const [nhanvien,setnhanvien] = useState([]);
    useEffect(()=>{
        axios.get(process.env.REACT_APP_API+'nguoidung/',header)
        .then(response => setnhanvien(response.data.filter(nv => nv.nhanvien != null)))
        .catch(erro => console.log(erro))
    },[])
    const getDeleteNV = (manv)=>{
        let agree = window.confirm(`Bạn có muốn xóa manv = ${manv}?`);
        if (!agree)
        return
        axios.delete(process.env.REACT_APP_API+'nhanvien/'+manv,header)
        .then(response => {
            
            axios.get(process.env.REACT_APP_API+'nguoidung/',header)
            .then(response => {
                setnhanvien(response.data.filter(nv => nv.nhanvien != null))
                alert("Xóa thành công !!!")
            })
            .catch(erro =>alert('Xóa thất bại !!!'))
            
        } )
        .catch(erro => console.log(erro))
    }
    return(
        <div className={slide?"workplace":"on-off-workplace"}>
                <h3 className={!on?"form-head":"d-none"}>DANH SÁCH KHÁCH HÀNG</h3>  
                <ul className={!on?"form-func":"d-none"}>
                        <li className="setting_form"><i className="fa fa-cogs" aria-hidden="true"></i></li>
                        <li className="find_form_li"><i className="fa fa-search" aria-hidden="true"></i> <input type="text" className = "find_form"/> </li>
                </ul>
                <div className={!on?"workplace_display":"d-none"}>
                    <table className="table table-striped table-bordered table-hover">
                        <thead className="thead-success">
                            <tr>
                                <th>MÃ NHÂN VIÊN</th>
                                <th>HỌ TÊN NHÂN VIÊN</th>
                                <th>EMAIL</th>
                                <th>SỐ ĐIỆN THOẠI</th>
                                <th>GIỚI TÍNH</th>
                                <th>GHI CHÚ</th>
                                <th>ĐỊA CHỈ</th>
                                <th>USERNAME</th>
                                <th>PASSWORD</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {nhanvien.map(nv =>{
                                const gender = ()=>{
                                    if(nv.nhanvien.gioitinh == '0'){
                                        return 'Nữ'
                                    }
                                    else if(nv.nhanvien.gioitinh == '1')
                                        return 'Nam'
                                    else
                                        return 'Khác'
                                }
                                return (
                                    <tr key={nv.nhanvien.manv}>
                                       <td>{nv.nhanvien.manv}</td>
                                       <td>{nv.nhanvien.ho +' '+ nv.nhanvien.ten}</td>
                                       <td>{nv.nhanvien.email}</td>
                                       <td>{nv.nhanvien.sdt}</td>
                                       <td>{gender()}</td>
                                       <td>{nv.nhanvien.ghichu}</td>
                                       <td>{nv.nhanvien.diachi}</td>
                                       <td>{nv.username}</td>
                                       <td>{nv.password}</td>
                                       <td className="custom"><p className="custom-link" onClick={()=> getDeleteNV(nv.nhanvien.manv)}>Delete</p> </td>
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