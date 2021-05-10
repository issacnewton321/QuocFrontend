
import hoa from '../image/hoa4.jpg'
import quan from '../image/quan.jpg'
import './Detail_Product.css'
import React,{useState,useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useHistory
  } from "react-router-dom";
import axios from 'axios'
function Detail_Product(){
    let history = useHistory();
    let {masp} = useParams();
    const [sl,setSl] = useState(1);
    const [sanpham,setSanpham] =useState();
    const [user,setUser] = useState({})
    const username = window.localStorage.getItem('username')
    useEffect(()=>{
        axios.get(process.env.REACT_APP_API+'sanpham/'+masp)
        .then(response => setSanpham(response.data) )
        .catch(erro => console.log(erro))

        axios.get(process.env.REACT_APP_API +'khachhang/'+username)
        .then(response => setUser(response.data))
        .catch(error => console.log(error))
    },[])
    let myStorage = window.localStorage;
    const addCart = (masp)=>{
        console.log(masp + sl)
        if(username == null){
        history.push('/login');
        }
        else{
        axios.post(process.env.REACT_APP_API+`giohang/${user.makh}/${masp}?soluong=${sl}`,{})
        .then(Response => alert('Thêm thành công !!!'))
        .catch(error => {alert('Thêm thất bại ' + error);console.log(error)})
        }
    }
    return (
        
        <div className="row detail_product">
            <div className="col-6">
                <img src={sanpham?.photo} alt="hoa picture" style={{width:"90%"}}/>
            </div>
            <div className="col-6">
                <h3>{sanpham?.tensp}</h3>
                <h4 className="text-danger">{sanpham?.dongia}</h4>
                <hr/>
                <div className="row">
                    <div className="col-6">
                        <p>Danh mục</p>
                    </div>
                    <div className="col-6 text-right">
                        <p>{sanpham?.danhmuc?.madm}</p>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-6">
                        <p>Mô tả ngắn</p>
                    </div>
                    <div className="col-6 text-right">
                        <p>{sanpham?.mota_ngan}</p>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-6">
                        <p>Hàng trong kho</p>
                    </div>
                    <div className="col-6 text-right">
                        <p>Còn : {sanpham?.soluong}</p>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-6">
                        <input type="number" className="form-control" min="0" defaultValue="1" max={sanpham?.soluong} onChange={(e)=>{setSl(e.target.value)}} />
                    </div>
                    <div className="col-6">
                        <button className="btn btn-success" onClick={()=>addCart(sanpham.masp)}><i className="fa fa-shopping-cart" aria-hidden="true"></i> Add to card</button>
                    </div>
                </div>
            </div>
            <div className="col-12 toggle-nav">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#home">Chi tiết</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#menu1">Thông tin thanh toán</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#menu2">Đánh giá khách hàng</a>
                    </li>
                </ul>

                <div className="tab-content">
                    <div className="tab-pane container active" id="home">{sanpham?.mota_chitiet}</div>
                    <div className="tab-pane container fade" id="menu1">Sacombank Hongquan 0040232232</div>
                    <div className="tab-pane container fade" id="menu2">
                        <div className="row">
                            <div className="col-12 mb-4">
                                {/* <p>0 Bình luận</p>
                                <hr></hr> */}
                                <div class="fb-comments" data-href={"https://localhost:8080/"+masp} data-width="" data-numposts="5"></div>
                            </div>
                            {/* <div className="col-2 mt-4">
                                <img src={quan} alt="picture" style={{width:"90%"}} className="rounded-circle"/>
                            </div>
                            <div className="col-10 mt-4">
                                <textarea className="form-control" rows="4" placeholder="Để lại bình luận của bạn !!!"></textarea>
                            </div> */}
                        </div>
                    </div>
                </div>
              </div>
         </div>
    )
}

export default Detail_Product;