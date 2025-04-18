import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
    return (
        <div className='bg-[#FCFCFC] pt-25'>
            <hr />
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-15 text-sm px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw]'>
                <div>
                    <img className='mb-5 w-32' src={assets.logo} alt='' />
                    <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>0334.940.224</li>
                        <li>buimanhcuong2510@gmail.com</li>
                    </ul>
                </div>
            </div>

            <div>
                
                <p className='border-t border-gray-300 py-3 text-md text-center'>Bản quyền © 2025 của JeyseyShop.com - Thiết kế bởi nhóm 9</p>
            </div>
        </div>
    )
}

export default Footer
