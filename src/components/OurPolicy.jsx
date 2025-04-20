import React from 'react'
import { RiExchangeFundsFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { HiOutlineBadgeCheck } from "react-icons/hi";

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center pt-20 text-xs sm:text-sm md:text-base text-gray-700 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw]'>
      <div>
        <RiExchangeFundsFill className='text-[50px] m-auto mb-5' />
        <p className='font-semibold'>Đổi trả dễ dàng</p>
        <p className='text-gray-400'>Chúng tôi cung cấp chính sách đổi trả dễ dàng</p>
      </div>

      <div>
        <HiOutlineBadgeCheck className='text-[50px] m-auto mb-5' />
        <p className='font-semibold'>Hoàn hàng trong 7 ngày</p>
        <p className='text-gray-400'>Chúng tôi cung cấp chính sách trả hàng miễn phí trong 7 ngày</p>
      </div>

      <div>
        <BiSupport className='text-[50px] m-auto mb-5' />
        <p className='font-semibold'>Hỗ trợ tốt nhất</p>
        <p className='text-gray-400'>Chúng tôi cung cấp hỗ trợ khách hàng 24/7</p>
      </div>
    </div>
  )
}

export default OurPolicy
