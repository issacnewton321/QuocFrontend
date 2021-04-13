import React,{useEffect,useState} from 'react'
import Item from './Item'
import './ItemList.css'
import axiosClient from '../API/AxiosClient'
export default function ItemList (){
    const [products,setProducts] = useState([])
    useEffect(async()=>{
        try {
          const data = await axiosClient.get('sanpham',null);
          setProducts(data);
        } catch (error) {
          console.log(error)
        }
    },[]) 
    return (
        <div className='container mt-4'>
            <h3 className='list-item__header'>DANH SÁCH HOA LÃNG MẠN</h3>
            <div className='row text-center'>
                {products.map(product=>{
                    return (
                        <div className='col-sm-12 col-md-6 col-lg-4'>
                            <Item product = {product} key={product.masp}/>
                        </div>
                    )
                })}
            </div>
            <nav aria-label="Page navigation example ">
              <ul className="pagination justify-content-center mt-4">
                <li className="page-item disabled">
                  <a className="page-link" to="/#" tabIndex={-1}>Previous</a>
                </li>
                <li className="page-item"><a className="page-link" to="/#">1</a></li>
                <li className="page-item"><a className="page-link" to="/#">2</a></li>
                <li className="page-item"><a className="page-link" to="/#">3</a></li>
                <li className="page-item">
                  <a className="page-link" to="/#">Next</a>
                </li>
              </ul>
            </nav>
            
        </div>
    )
}