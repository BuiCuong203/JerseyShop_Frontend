import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import EmptyCart from '../components/EmptyCart';
import { TiDeleteOutline } from "react-icons/ti";

const Cart = () => {

  const {products, currency, cartItems, updateQuantity, navigate} = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for(const item in cartItems){
      for(const size in cartItems[item]){
        if(cartItems[item][size] > 0 && size){
          tempData.push({
            _id: item,
            size: size,
            quantity: cartItems[item][size]
          });
        }
      }
    }
    setCartData(tempData)
  }, [cartItems])

  return cartData.length ? (
    <div className='border-t pt-14 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw]'>
      <div className='text-2xl mb-3'>
        <Title text={'GIỎ HÀNG'} />
      </div>

      <div>
        {
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);

            return (
              <div key={index} className='py-4 border-t border-b border-gray-300 text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                  <img className='w-16 sm:w-20' src={productData.image[0]} alt='' />

                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>

                    <div className='flex items-center gap-5 mt-2'>
                      <p>{productData.price}{currency}</p>
                      <p className='px-2 sm:px-3 sm:py-1 bg-slate-50'>{item.size}</p>
                    </div>
                  </div>
                </div>

                <div className='border border-gray-300 text-gray-500 text-2xl font-medium'>
                  <button onClick={() => updateQuantity(item._id, item.size, item.quantity - 1)} className='px-3 cursor-pointer'>-</button>
                  <input
                    onChange={(e) => updateQuantity(item._id, item.size, Number(e.target.value))}
                    className='w-15 text-gray-600 text-xl text-center focus:outline-none [&::-webkit-inner-spin-button]:appearance-none'
                    type="number"
                    min={1}
                    value={item.quantity}
                  />
                  <button onClick={() => updateQuantity(item._id, item.size, item.quantity + 1)} className='px-3 cursor-pointer'>+</button>
                </div>
              
                <TiDeleteOutline onClick={() => updateQuantity(item._id, item.size, 0)} className='text-[25px] cursor-pointer' />
              </div>
            );
          })
        }
      </div>

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
          <div className='w-full text-end'>
            <button onClick={() => navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3 cursor-pointer'>THANH TOÁN</button>
          </div>
        </div>
      </div>
    </div>
  ) : <EmptyCart />
}

export default Cart
