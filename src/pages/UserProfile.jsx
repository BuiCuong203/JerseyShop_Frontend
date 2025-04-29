import React, { useState } from 'react'
import Title from '../components/Title'
import { Link } from 'react-router-dom'
import FormInfo from '../components/FormInfo'

const UserProfile = () => {
  const [edit, setEdit] = useState(false);

    const user = {
        name: "Bùi Mạnh Cường",
        email: "buimanhcuong2510@gmail.com",
        phone: "0334940224",
        bio: "Frontend developer with a passion for creating user-friendly interfaces.",
        province: "Thành phố Hà Nội",
        district: "Huyện Thanh Trì",
        ward: "Xã Tân Triều",
        location: "Triều Khúc",
      };

    return (
      <div className="border-t">
        <div className="max-w-5xl mx-auto">
          <div className="text-2xl font-bold mb-6">
            <Title text={'THÔNG TIN NGƯỜI DÙNG'} />
          </div>

          <div className="bg-white rounded-2xl shadow p-8">
            <div className="flex mb-6">
              <h3 className="text-lg font-bold mb-2">Tên người dùng:</h3>
              <p className="px-2 text-lg">{user.name}</p>
            </div>

            <div className="flex mb-6">
              <h3 className="text-lg font-bold mb-2">Email:</h3>
              <p className="px-2 text-lg">{user.email}</p>
            </div>

            <div className="flex mb-6">
              <h3 className="text-lg font-bold mb-2">Số điện thoại:</h3>
              <p className="px-2 text-lg">{user.phone}</p>
            </div>

            <div className="flex mb-6">
              <h3 className="text-lg font-bold mb-2">Địa chỉ:</h3>
              <p className="px-2 text-lg">{user.location},{user.ward},{user.district},{user.province}</p>
            </div>

            <div className="flex gap-4">
              <button onClick={() => setEdit(!edit)} className="bg-black text-white px-4 py-2 text-sm font-medium rounded-sm cursor-pointer">Chỉnh sửa</button>
              <Link to='/orders'><button className="bg-black text-white px-4 py-2 text-sm font-medium rounded-sm cursor-pointer">Đơn hàng</button></Link>
              <button className="bg-black text-white px-4 py-2 text-sm font-medium rounded-sm cursor-pointer">Đăng xuất</button>
            </div>
          </div>
        </div>

        {
          edit &&
          <div>
            <div className="flex justify-center pt-15">
              <FormInfo />
            </div>
            <div className='flex justify-center pt-5'>
            <button className="bg-black text-white px-4 py-2 text-sm font-medium rounded-sm cursor-pointer">Lưu</button>
            </div>
          </div>
        }
      </div>
    )
}

export default UserProfile
