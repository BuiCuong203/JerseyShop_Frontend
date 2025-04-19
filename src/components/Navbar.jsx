import React, { useContext, useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {

    const [visible, setVisible] = useState(false);
    const {getCartCount} = useContext(ShopContext);

    return (
        <div className='flex items-center justify-between py-5 font-medium bg-[#FCFCFC] px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw]'>
            <Link to='/'><img src={assets.logo} className='w-36' alt="" /></Link>

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>TRANG CHỦ</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p>CỬA HÀNG</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p>VỀ CHÚNG TÔI</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/wishlist' className='flex flex-col items-center gap-1'>
                    <p>YÊU THÍCH</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>
                <div className='group relative'>
                    <Link to={'/login'}><img className='w-5 cursor-pointer' src={assets.profile_icon} alt='' /></Link>

                    <div className='absolute z-20 group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            <p className='cursor-pointer hover:text-black'> My Profile</p>
                            <Link to='/orders'><p className='cursor-pointer hover:text-black'>Đơn hàng</p></Link>
                            <p className='cursor-pointer hover:text-black'> Logout</p>
                        </div>
                    </div>
                </div>

                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5' alt='' />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>

                <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt='' />
            </div>

            <div className={`absolute top-0 right-0 bottom-0 z-20 overflow-hidden bg-white transition-all ${visible ? 'w-full': 'w-0'}`}>
                <div className='flex flex-col text-gray-600 cursor-pointer'>
                    <div  onClick={() => setVisible(false)} className='flex items-center gap-4 p-3'>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt='' />
                        <p>Back</p>
                    </div>

                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6' to='/'>TRANG CHỦ</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6' to='/collection'>CỬA HÀNG</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6' to='/about'>VỀ CHÚNG TÔI</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6' to='/wishlist'>YÊU THÍCH</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Navbar
