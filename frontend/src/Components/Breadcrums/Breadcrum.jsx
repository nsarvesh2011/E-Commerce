import React from 'react'
import './Breadcrum.css'
import arror_icon from '../Assets/breadcrum_arrow.png'

export const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
        HOME <img src={arror_icon} alt="" /> SHOP <img src={arror_icon} alt="" /> {product.category} <img src={arror_icon} alt="" /> {product.name}
    </div>
  )
}
