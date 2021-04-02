import React from 'react'
import hoa from '../image/hoa4.jpg'
import './Item.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Item ({product}){
    return (
        <div className='myItem'>
            <div className="card" style={{width: '18rem'}}>
              <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={product.photo} alt="profile" style={{height:'150px'}}/>
                <div className="card-body">
                  <h5 className="card-title">{product.tensp}</h5>
                  <p className="card-text" style={{height:'55px',overflowY:'hidden',textOverflow:'ellipsis'}}>{product.mota_ngan}</p>
                  <p className="card-text text-danger">{product.dongia} $</p>
                  
                </div>
              </div>
              <Link to='/product/detail'><button className='btn-addCart'>ADD TO CARD</button></Link>
            </div>
            
        </div>
    )
}