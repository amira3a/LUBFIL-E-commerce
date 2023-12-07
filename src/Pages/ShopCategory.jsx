import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import downArrow from '../Components/Assets/down-arrow.png'
import Item from '../Components/Item/Item'



export const ShopCategory = (props) => {
  const {AllProducts} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shopCategory-banner' src={props.banner} alt=""  height={300} />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1 -12</span> out of 36 products
        </p>
        <div className="shopCategory-sort">
          Sort by <img src={downArrow} alt='' width={20} />
        </div>
      </div>
      <div className="shopCategory-products">
        {AllProducts.map((item, i) =>{
            if (props.category === item.category) {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            }
            else{
              return null;
            }
        })}
      </div>
      <div className="shopCategory-loadmore">
        Explore more
      </div>
    </div>
  )
}
