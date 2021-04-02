import Slider from 'react-material-ui-carousel'
import React from 'react'
import hoa1 from '../image/hoa1.jpg'
import hoa2 from '../image/hoa2.jpg'
import hoa3 from '../image/hoa3.jpg'
import './Carousel.css'
function Carousel(){
    return (
        <div className='container mt-4'>
            <Slider>
                <div className='slide-item'>
                    <img src={hoa1}/>
                </div>
                <div  className='slide-item'>
                    <img src={hoa2}/>
                </div>
                <div  className='slide-item'>
                    <img src={hoa3}/>
                </div>
            </Slider>
        </div>
    )
}
export default Carousel