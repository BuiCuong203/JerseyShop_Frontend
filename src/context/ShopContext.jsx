import React, { useState, createContext, useEffect } from 'react'
import { products } from '../assets/frontend_assets/assets';
import { toast } from 'react-toastify';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

  const currency = 'đ';
  const delivery_fee = 10;
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId, size) => {
    var cartData = structuredClone(cartItems);

    if(!size){
      toast.error("PLease select product size");
    }

    if(cartData[itemId]){
      if(cartData[itemId][size]){
        cartData[itemId][size] += 1;
      }else{
        cartData[itemId][size] = 1;
      }
    }else{
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);
  }

  const getCartCount = () => {
    let totalcount = 0;
    for(const item in cartItems){
      for(const size in cartItems[item]){
        if(cartItems[item][size] && size){
          totalcount += cartItems[item][size];
        }
      }
    }
    return totalcount;
  }

  const value = {
    products, currency, delivery_fee,
    cartItems, addToCart, getCartCount
  }

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );

}

export default ShopContextProvider;