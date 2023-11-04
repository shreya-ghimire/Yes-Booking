import React from 'react'
import "./featuredProperties.css";

const FeaturedProperty = () => {
    return (
        <div className='fp'>
            <div className='fpItem'>
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o="
                    alt="" className='fpImg' />
                <span className='fpName'>Apartment Stare Miasto</span>
                <span className='fpCity'>Poland</span>
                <span className='fpPrice'>Starting from Rs 32000</span>
                <div className='fpRating'>
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div  className='fpItem'>
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o="
                    alt="" className='fpImg' />
                <span className='fpName'>7 Season Apartments Budapest</span>
                <span className='fpCity'>Hungary</span>
                <span className='fpPrice'>Starting from Rs24000</span>
                <div className='fpRating'>
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div  className='fpItem'>
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=c4092495705eab3fad626e8e1a43b1daf7c623e4ea41daf26a201b4417a71709&o="
                    alt="" className='fpImg' />
                <span className='fpName'>Oriente Palace Apartments</span>
                <span className='fpCity'>Madrid</span>
                <span className='fpPrice'>Starting from Rs 50000</span>
                <div className='fpRating'>
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div  className='fpItem'>
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=4ff5e29f3ad72c2c9f7170f60a043f01a158f26b38c55e9676439c18f3804179&o="
                    alt="" className='fpImg' />
                <span className='fpName'>numa | Vita Apartment</span>
                <span className='fpCity'>Florence</span>
                <span className='fpPrice'>Starting from Rs 45670</span>
                <div className='fpRating'>
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperty
