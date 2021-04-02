import React from 'react'
import hoa from '../image/hoa4.jpg'
import quan from '../image/quan.jpg'
import './Detail_Product.css'
function Detail_Product({product}){
    return (
        <div className="row detail_product">
            <div className="col-5">
                <img src={hoa} alt="hoa picture" style={{width:"90%"}}/>
            </div>
            <div className="col-7">
                <h3>{product?.tensp}</h3>
                <h4 className="text-danger">{product?.dongia}</h4>
                <hr/>
                <div className="row">
                    <div className="col-6">
                        <p>Danh mục</p>
                    </div>
                    <div className="col-6 text-right">
                        <p>{product?.danhmuc?.madm}</p>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-6">
                        <p>Mô tả ngắn</p>
                    </div>
                    <div className="col-6 text-right">
                        <p>{product?.mota_ngan}</p>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-6">
                        <p>Hàng trong kho</p>
                    </div>
                    <div className="col-6 text-right">
                        <p>Còn : {product?.soluong}</p>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-6">
                        <input type="number" className="form-control" min="0"/>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-success"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Add to card</button>
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
                    <div className="tab-pane container active" id="home">{product?.mota_chitiet}</div>
                    <div className="tab-pane container fade" id="menu1">Sacombank Hongquan 0040232232</div>
                    <div className="tab-pane container fade" id="menu2">
                        <div className="row">
                            <div className="col-12 mb-4">
                                <p>0 Comment</p>
                                <hr></hr>
                            </div>
                            <div className="col-2 mt-4">
                                <img src={quan} alt="picture" style={{width:"90%"}} className="rounded-circle"/>
                            </div>
                            <div className="col-10 mt-4">
                                <textarea className="form-control" rows="4" placeholder="Write some comment !!!"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
         </div>
    )
}

export default Detail_Product;