import React from 'react';
import { Link } from 'react-router-dom'
import { FaCircleCheck } from "react-icons/fa6";

const OrderSuccess = () => {
    return (
        <div className="border-t flex flex-col items-center px-4 py-16 sm:py-24 md:py-32 lg:py-40">
            <FaCircleCheck style={{ fontSize: '100px' }} className="text-green-500 mb-6" />
            <h1 className="text-3xl font-bold text-gray-700 mb-2 text-center">Đặt hàng thành công!</h1>
            <p className="text-gray-500 mb-6 text-center">Cảm ơn bạn đã mua hàng. Chúng tôi sẽ sớm liên hệ để xác nhận và giao hàng.</p>
            <Link to='/'><p className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer">Quay về trang chủ</p></Link>
        </div>
    );
};

export default OrderSuccess;