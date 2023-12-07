import React, { createContext, useState } from 'react'
import AllProducts from '../Components/Assets/AllProducts'

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < AllProducts.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    

    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    } 

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    } 
    
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = AllProducts.find((product)=>product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            } 
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItems = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItems += cartItems[item];
            } 
        }
        return totalItems;
    }
   
    const contextValue = {getTotalCartItems,getTotalCartAmount, AllProducts, cartItems, addToCart, removeFromCart};
    return (
        <ShopContext.Provider  value={contextValue} >
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider