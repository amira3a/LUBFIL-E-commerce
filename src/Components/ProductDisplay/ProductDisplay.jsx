import React, { useContext } from 'react'
import './ProductDisplay.css'
import star from '../Assets/star.png'
import emstar from '../Assets/emstar.png'
import { ShopContext } from '../../Context/ShopContext'

export const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star} alt="" width={60} />
                <img src={star} alt="" width={60}/>
                <img src={star} alt="" width={60}/>
                <img src={star} alt="" width={60}/>
                <img src={emstar} alt="" width={60}/>
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-prices-old">${product.old_price}</div>
                <div className="productdisplay-right-prices-new">${product.new_price}</div>
            </div>
            <div className="produduct-right-description">
                Discription of product
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='produduct-right-category'><span>Ctegory: </span></p>
            <p className='produduct-right-category'><span>Tags: </span></p>
        </div>
    </div>
  )
}
