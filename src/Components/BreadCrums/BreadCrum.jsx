import React from 'react'
import './BreadCrum.css'
import RightArrow from '../Assets/right-arrow.png'

export const BreadCrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
        HOME <img src={RightArrow} alt='' width={15} /> SHOP <img src={RightArrow} alt='' width={15} /> {product.category} <img src={RightArrow} alt='' width={15} /> {product.name}
    </div>
  )
}
