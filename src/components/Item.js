import React from 'react'
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
  const header = {
    headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('jwt') //the token is a variable which holds the token
      }
  }
  let username = JSON.parse(myStorage.getItem('user'))?.username;

  const addCart = (masp)=>{
    if(username == null){
      history.push('/login');
    }
    else{
      axios.post(process.env.REACT_APP_API+`giohang/${username}/${masp}?soluong=1`,{},header)
    .then(Response => alert('Thêm thành công !!!'))
    .catch(error => {alert('Thêm thất bại ' + error);console.log(error)})
    }
  }
    return (
          <div className='myItem'>
            <div className="card" style={{width: '18rem'}}>
              <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={product.photo} alt="profile" style={{width:'100%'}}/>
                <div className="card-body" onClick={()=> history.push("/product/"+product.masp)}>
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