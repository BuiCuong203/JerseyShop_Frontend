import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className='bg-[#FCFCFC] pt-40'>
            <hr />
            <div className='flex flex-col grid md:grid-cols-2 lg:grid-cols-4 gap-14 my-15 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw]'>
                <div>
                    <div>
                        <Link to='/'><img className='mb-5 w-40' src={assets.logo} alt='' /></Link>
                    </div>
                    
                    <div>
                        <p className='text-xl font-bold pb-2'>CHẤP NHẬN THANH TOÁN</p>
                        
                        <ul>
                            <li className='flex items-center gap-3 py-1'>
                                <p className='min-w-2.5 h-2.5 border border-gray-400 rounded-full'></p>
                                <p className='text-lg font-normal'>Chuyển khoản ngân hàng</p>
                            </li>
                            <li className='flex items-center gap-3 py-1'>
                                <p className='min-w-2.5 h-2.5 border border-gray-400 rounded-full'></p>
                                <p className='text-lg font-normal'>Quét mã Qr</p>
                            </li>
                            <li className='flex items-center gap-3 py-1'>
                                <p className='min-w-2.5 h-2.5 border border-gray-400 rounded-full'></p>
                                <p className='text-lg font-normal'>Thanh toán khi nhận hàng</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <p className='text-xl font-bold pb-2'>CỬA HÀNG</p>
                    <ul>
                        <li className='flex items-center gap-3 py-1 '>
                            <p className='min-w-2.5 h-2.5 border border-gray-400 rounded-full'></p>
                            <Link to='/'><p className='text-lg font-normal hover:opacity-60'>Trang chủ</p></Link>
                            
                        </li>
                        <li className='flex items-center gap-3 py-1'>
                            <p className='min-w-2.5 h-2.5 border border-gray-400 rounded-full'></p>
                            <Link to='/collection'><p className='text-lg font-normal hover:opacity-60'>Cửa hàng</p></Link>
                        </li>
                        <li className='flex items-center gap-3 py-1'>
                            <p className='min-w-2.5 h-2.5 border border-gray-400 rounded-full'></p>
                            <Link to='/about'><p className='text-lg font-normal hover:opacity-60'>Về chúng tôi</p></Link>
                        </li>
                        <li className='flex items-center gap-3 py-1'>
                            <p className='min-w-2.5 h-2.5 border border-gray-400 rounded-full'></p>
                            <Link to='/wishlist'><p className='text-lg font-normal hover:opacity-60'>Yêu thích</p></Link>
                        </li>
                        <li className='flex items-center gap-3 py-1'>
                            <p className='min-w-2.5 h-2.5 border border-gray-400 rounded-full'></p>
                            <Link to='/policy'><p className='text-lg font-normal hover:opacity-60'>Chính sách bảo hành</p></Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-bold pb-2'>LIÊN HỆ</p>
                    <div className='py-3'>
                        <FontAwesomeIcon icon={faFacebook} className='pr-4' size="2x" />
                        <FontAwesomeIcon icon={faInstagram} className='pr-4' size="2x" />
                    </div>
                    <ul>
                        <li className='flex items-center gap-3 py-1'>
                            <FontAwesomeIcon icon={faPhone} />
                            <p className='text-lg font-normal'>0334.940.224</p>
                        </li>
                        <li className='flex items-center gap-3 py-1'>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <p className='text-lg font-normal'>buimanhcuong2510@gmail.com</p>
                        </li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-bold pb-2'>MAP</p>
                    
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6594892033727!2d105.82082067508024!3d21.006282380637522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac816310f663%3A0xc503c892c6ef3cbb!2zMjYgUC4gS2jGsMahbmcgVGjGsOG7o25nLCBOZ8OjIFTGsCBT4bufLCDEkOG7kW5nIMSQYSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1744981006423!5m2!1svi!2s"
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>

            <div>
                <p className='border-t border-gray-300 py-3 text-md text-center'>Bản quyền © 2025 của JeyseyShop.com - Thiết kế bởi nhóm 9</p>
            </div>
        </div>
    )
}

export default Footer
