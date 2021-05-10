import React,{useState,useEffect} from 'react'
import hoa from '../image/hoa4.jpg'
import './Item.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import axios from 'axios'
export default function Item ({product}){
  let history = useHistory();
  let myStorage = window.localStorage;
  const [user,setUser] = useState({})
  let username = myStorage.getItem('username')

  useEffect(()=>{
    if(username)
    axios.get(process.env.REACT_APP_API +'khachhang/'+username)
    .then(response => setUser(response.data))
  },[])
  const addCart = (masp)=>{
    if(username == null){
      history.push('/login');
    }
    else{
      axios.post(process.env.REACT_APP_API+`giohang/${user.makh}/${masp}?soluong=1`,{})
    .then(Response => alert('Thêm thành công !!!'))
    .catch(error => {alert('Thêm thất bại ' + error);console.log(error)})
    }
  }
    return (
          <div className='myItem'>
            <div className="card" style={{width: '18rem'}}>
              <div className="card" style={{width: '18rem'}} onClick={()=> window.location.href="/product/"+product.masp}>
                <div className="image"><img className="card-img-top" src={product.photo} alt="profile"/></div>
                <div className="card-body my-card-body" >
                  <h5 className="card-title">{product.tensp}</h5>
                  <p className="card-text" style={{height:'55px',overflowY:'hidden',textOverflow:'ellipsis'}}>{product.mota_ngan}</p>
                  <p className="card-text text-danger">{product.dongia} $</p>
                  
                </div>
              </div>
              <button className='btn-addCart' onClick={()=>addCart(product.masp)}>THÊM GIỎ HÀNG</button>
            </div>
            
        </div>
    )
}