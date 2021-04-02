import React from 'react'
import Detail_Portfolio from './Detail_Portfolio'
import hoa from '../image/hoa4.jpg'
import './Cart.css'
export default function Cart(){
    return (
        <div>
            <div className='banner'>
                <h3>My Card</h3>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-4'>               
                        <Detail_Portfolio />
                        <Detail_Portfolio />
                    </div>
                    <div className='col-8'>  
                        <h4 className="cart-header">MY CART LIST</h4>            
                        <table className="table table-border table-cart">
                            <tr>
                                <td> <button className="btn btn-outline-danger">X</button> </td>
                                <td><img src={hoa} alt="picture" style={{width:"70px",marginRight:"30px"}} /> Hoa mẫu đơn chung tình</td>
                                <td style={{width:"15%"}}><input type="number" className="form-control" min="0" value="1"/></td>
                                <td><p className="text-danger">500.000đ</p></td>
                            </tr>
                            <tr>
                                <td> <button className="btn btn-outline-danger">X</button> </td>
                                <td><img src={hoa} alt="picture" style={{width:"70px",marginRight:"30px"}} /> Hoa mẫu đơn chung tình</td>
                                <td style={{width:"15%"}}><input type="number" className="form-control" min="0" value="1"/></td>
                                <td><p className="text-danger">500.000đ</p></td>
                            </tr>
                        </table>
                        <div className="cart-hr"></div>
                        <div className="cart-total text-success">
                            <h4>Total :</h4>
                            <h4>500.000đ</h4>
                        </div>
                        <button className="btn btn-success btn-lg mt-4">ORDER NOW</button>
                    </div>
                </div>
            </div>
        </div>
    )
}