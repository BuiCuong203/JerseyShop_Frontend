import React from 'react';
import { Link } from 'react-router-dom'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const OrderSuccess = () => {
    return (
        <div className="border-t flex flex-col items-center p-40">
            <SentimentSatisfiedAltIcon style={{ fontSize: '150px' }} className="text-gray-200 mb-6" />
            <h1 className="text-3xl font-bold text-gray-700 mb-2">Đặt hàng thành công!</h1>
            <p className="text-gray-500 mb-6">Cảm ơn bạn đã mua hàng. Chúng tôi sẽ sớm liên hệ để xác nhận và giao hàng.</p>
            <Link to='/'><p className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer">Quay về trang chủ</p></Link>
        </div>
    );
};

export default OrderSuccess;