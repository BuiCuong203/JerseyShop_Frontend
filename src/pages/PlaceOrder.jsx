import React, { useContext, useState } from 'react'
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/frontend_assets/assets';
import { ShopContext } from '../context/ShopContext';
import FormInfo from '../components/FormInfo'

const PlaceOrder = () => {

  const [method, setMethod] = useState('cod');
  const {navigate} = useContext(ShopContext);

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw]'>
      
      {/* Left Side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text={'THÔNG TIN VẬN CHUYỂN'} />
        </div>

        <FormInfo />
      </div>

      {/* Right Side */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>

        <div className='mt-12'>
          <Title text={'PHƯƠNG THỨC THANH TOÁN'} />
        
          {/* Payment Method Selection */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={() => setMethod('vnpay')} className='flex items-center gap-3 border border-gray-400 p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border border-gray-400 rounded-full ${method === 'vnpay' ? 'bg-green-600' : ''}`}></p>
              <img className='h-5 ml-4' src={assets.vnpay_logo} alt="" />
              <p className='text-gray-500 text-sm font-medium mr-4'>VN PAY</p>
            </div>

            <div onClick={() => setMethod('zalopay')} className='flex items-center gap-3 border border-gray-400 p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border border-gray-400 rounded-full ${method === 'zalopay' ? 'bg-green-600' : ''}`}></p>
              <img className='h-5 ml-4' src={assets.zalopay_logo} alt="" />
              <p className='text-gray-500 text-sm font-medium mr-4'>ZALO PAY</p>
            </div>

            <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border border-gray-400 p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border border-gray-400 rounded-full ${method === 'cod' ? 'bg-green-600' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>TIỀN MẶT</p>
            </div>
          </div>

          <div className='w-full text-end mt-8'>
            <button onClick={() => navigate('/order-success')} className='bg-black text-white px-16 py-3 text-sm cursor-pointer'>ĐẶT HÀNG</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
