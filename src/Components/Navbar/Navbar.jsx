import React, { useContext, useState } from 'react'
import "./Navbar.css"
import logo from "../Assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'


export const Navbar = () => {

const [menu, setmenu ]= useState("shop");
const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
        <div className='nav-logo'>
          <img src={logo} alt='' />
        </div>
        <ul className='nav-menu'>
          <li onClick={()=>{setmenu("shop")}}><Link style={{textDecoration:'none'}} to='/LUBFIL-E-commerce/'>Shop</Link>{menu==="shop" ? <hr/> : <></>}</li>
          <li onClick={()=>{setmenu("car")}}><Link style={{textDecoration:'none'}} to='/carOil'>Car Oil</Link>{menu==="car" ? <hr/> : <></>}</li>
          <li onClick={()=>{setmenu("motor")}}><Link style={{textDecoration:'none'}} to='/motorcycleOil'>Motorcycle Oil</Link>{menu==="motor" ? <hr/> : <></>}</li>
          <li onClick={()=>{setmenu("filters")}}><Link style={{textDecoration:'none'}} to='/filters'>Filters</Link>{menu==="filters" ? <hr/> : <></>}</li>
        </ul>
        <div className="login-cart-logo">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><FontAwesomeIcon icon={ faCartShopping } className='cartIcon'  /></Link>
          <div className="cart-counter">{getTotalCartItems()}</div>
        </div>

    </div>
  )
}
