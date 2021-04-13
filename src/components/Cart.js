import React,{useState,useEffect} from 'react'
import Detail_Portfolio from './Detail_Portfolio'
import hoa from '../image/hoa4.jpg'
import axios from 'axios'
import './Cart.css'
export default function Cart(){
    let myStorage = window.localStorage;
    const header = {
        headers: {
            Authorization: 'Bearer ' + window.localStorage.getItem('jwt') //the token is a variable which holds the token
          }
      }
      const [cart,setCart] = useState([])
      let username = JSON.parse(myStorage.getItem('user'))?.username;
      useEffect(()=>{
        axios.get(process.env.REACT_APP_API+`giohang/${username}`,header)
        .then(response => setCart(response.data))
        .catch(erro =>console.log(erro))
      },[])
      const totalMoney = ()=>{
          let total = 0;
          for(let i=0;i<cart.length;i++){
            total += cart[i].sanpham.dongia * cart[i].soluong;
          }
          return total;
      }
      const deleteCart= (masp)=>{
        axios.delete(process.env.REACT_APP_API+`giohang/${username}/${masp}`,header)
        .then(response => 
            axios.get(process.env.REACT_APP_API+`giohang/${username}`,header)
            .then(response => setCart(response.data))
            .catch(erro =>console.log(erro))    
        )
        .catch(erro =>console.log(erro))
      }
      const changeNum =(e,masp)=>{
        //   let num = e.target.value;
        //   const cc = {
        //       ...cart
        //   };
        //   for(let i=0;i<cc.length;i++){
        //     if(cc[i].sanpham.masp === masp){
        //         cc[i].soluong = num;
        //         console.log(cc)
        //         setCart(cc);
        //         return;
        //     }
        //   }
      }
    return (
        <div>
            <div className='banner'>
                <h3>GIỎ HÀNG</h3>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-4'>               
                        <Detail_Portfolio />
                        <Detail_Portfolio />
                    </div>
                    <div className='col-8'>  
                        <h4 className="cart-header">DANH SÁCH GIỎ HÀNG</h4>            
                        <table className="table table-border table-cart">
                            {cart.map(c=>(
                                <tr>
                                    <td><button className="btn btn-outline-danger" onClick={()=> deleteCart(c.sanpham.masp)}>X</button> </td>
                                    <td><img src={c.sanpham.photo} alt="picture" style={{width:"70px",marginRight:"30px"}} /> {c.sanpham.tensp}</td>
                                    <td style={{width:"15%"}}><input type="number" className="form-control" min="0" defaultValue={c.soluong} onChange={(e)=>changeNum(e,c.sanpham.masp)} /></td>
                                    <td><p className="text-danger">{c.sanpham.dongia * c.soluong} đ</p></td>
                                </tr>
                            ))}
                        </table>
                        <div className="cart-hr"></div>
                        <div className="cart-total text-success">
                            <h4>Total :</h4>
                            <h4>{totalMoney()}</h4>
                        </div>
                        <button className="btn btn-success btn-lg mt-4">ORDER NOW</button>
                    </div>
                </div>
            </div>
        </div>
    )
}