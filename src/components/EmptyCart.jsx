import React from 'react';
import { Link } from 'react-router-dom'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

const EmptyCart = () => {
    return (
        <div className="border-t flex flex-col items-center justify-center p-40">
            <RemoveShoppingCartIcon style={{ fontSize: '100px' }} className="text-gray-400 mb-6" />
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">Giỏ hàng của bạn đang trống</h1>
            <p className="text-gray-500 mb-6">Về trang cửa hàng để chọn mua sản phẩm bạn nhé!!</p>
            <Link to='/collection'><p className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer">Tiếp tục mua sắm</p></Link>
        </div>
    );
};

export default EmptyCart;
