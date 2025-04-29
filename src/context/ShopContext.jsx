import React, { useState, createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { products } from '../assets/frontend_assets/assets';
import { toast } from 'react-toastify';
import { setCart, getCart } from '../service/localStorageService'

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

  const currency = 'đ';
  const delivery_fee = 10;
  const [cartItems, setCartItems] = useState(JSON.parse(getCart()) || {});
  const navigate = useNavigate();

  const setDataCartItems = (cartData) => {
    setCartItems(cartData);
    setCart(JSON.stringify(cartData));
  }

  const addToCart = (itemId, size, quantity) => {
    var cartData = structuredClone(cartItems);

    if(!size){
      toast.error("Bạn chưa chọn kích thước!!!");
    }

    if(cartData[itemId]){
      if(cartData[itemId][size]){
        cartData[itemId][size] += quantity;
      }else{
        cartData[itemId][size] = quantity;
      }
    }else{
      cartData[itemId] = {};
      cartData[itemId][size] = quantity;
    }
    setDataCartItems(cartData);
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

  const updateQuantity = (itemId, size, quantity) => {
    var cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;

    setDataCartItems(cartData)
  }

  const getCartAmount = () => {
    var totalAmount = 0;
    for(const item in cartItems){
      var itemInfo = products.find((product) => product._id === item);
      for(const size in cartItems[item]){
        if(cartItems[item][size] > 0 && size){
          totalAmount += itemInfo.price * cartItems[item][size];
        }
      }
    }
    return totalAmount;
  }

  const value = {
    products, currency, delivery_fee,
    cartItems, addToCart,
    getCartCount, updateQuantity,
    getCartAmount, navigate,
    setDataCartItems
  }

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );

}

export default ShopContextProvider;