import React from 'react'
import Title from '../components/Title'
import OurPolicy from '../components/OurPolicy'

const Policy = () => {
    return (
        <div className='text-lg font-normal border-t px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw]'>
            <div className='text-2xl text-center pt-8'>
                <Title text={'CHÍNH SÁCH BẢO HÀNH'} />
            </div>

            <div>
                <p>Toàn bộ sản phẩm của JerseyShop được áp dụng chính sách đổi sản phẩm mới, hay trả sản phẩm hoàn tiền trong thời gian 7 ngày tính từ ngày bạn nhận được hàng. Xin lưu ý sản phẩm thuộc các danh mục sau không được áp dụng chính sách đổi trả</p>
                <p className='text-center py-5'>{'>>>'} <i className='text-red-500'>Sau thời hạn 7 ngày trên, chúng tôi sẽ không chịu trách nhiệm đổi trả</i> {'<<<'}</p>
                
                <div className='py-5'>
                    <h1 className='text-red-600 font-bold text-2xl'>Hướng Dẫn Sử Dụng Và Bảo Quản Quần Áo:</h1>

                    <div className='py-5'>
                        <h2 className='text-blue-900 font-bold text-xl'>1. GIẶT TAY:</h2>
                        <ul className='mx-5'>
                            <li className='flex items-start gap-3 py-1'>
                                <p className='min-w-1.5 h-1.5 mt-3 border border-black-400 bg-black rounded-full'></p>
                                <p>Lộn trái áo quần lại, sử dụng hai tay vò từ từ.</p>
                            </li>
                            <li className='flex items-start gap-3 py-1'>
                                <p className='min-w-1.5 h-1.5 mt-3 border border-black-400 bg-black rounded-full'></p>
                                <p>Hoà tan bột giặt, hay nước tẩy trước khi cho vào giặt. Nếu có thể, bạn nên sử dụng nước giặt hoà tan sẵn (có trong siêu thị. Ví dụ: OMO, VISO, TIDE, . . . ).</p>
                            </li>
                            <li className='flex items-start gap-3 py-1'>
                                <p className='min-w-1.5 h-1.5 mt-3 border border-black-400 bg-black rounded-full'></p>
                                <p>Giặt sạch, sau đó pha nước xả vải để làm mềm sợi vải.</p>
                            </li>
                        </ul>
                    </div>

                    <div className='py-5'>
                        <h2 className='text-blue-900 font-bold text-xl'>2. GIẶT MÁY:</h2>
                        <ul className='mx-5'>
                            <li className='flex items-start gap-3 py-1'>
                                <p className='min-w-1.5 h-1.5 mt-3 border border-black-400 bg-black rounded-full'></p>
                                <p>Chỉnh chế độ giặt mức trung bình, để tránh làm giãn áo quần.</p>
                            </li>
                            <li className='flex items-start gap-3 py-1'>
                                <p className='min-w-1.5 h-1.5 mt-3 border border-black-400 bg-black rounded-full'></p>
                                <p>Ngâm đồ trong khoảng thời gian ngắn.</p>
                            </li>
                            <li className='flex items-start gap-3 py-1'>
                                <p className='min-w-1.5 h-1.5 mt-3 border border-black-400 bg-black rounded-full'></p>
                                <p>Xin lưu ý giặt máy thường xuyên dễ làm cho đồ bị nhàu và giãn.</p>
                            </li>
                        </ul>
                    </div>

                    <div className='py-5'>
                        <h2 className='text-blue-900 font-bold text-xl'>3. DÙNG TAY VỖ NHẸ VÀO ÁO KHI PHƠI:</h2>
                        <ul className='mx-5'>
                            <li className='flex items-start gap-3 py-1'>
                                <p className='min-w-1.5 h-1.5 mt-3 border border-black-400 bg-black rounded-full'></p>
                                <p>Sau khi giặt xong, dùng tay vỗ nhẹ vào thân áo quần khi phơi để mau khô và không bị nhăn.</p>
                            </li>
                        </ul>
                    </div>

                    <div className='py-5'>
                        <h2 className='text-blue-900 font-bold text-xl'>4. TRÁNH VẮT ÁO:</h2>
                        <ul className='mx-5'>
                            <li className='flex items-start gap-3 py-1'>
                                <p className='min-w-1.5 h-1.5 mt-3 border border-black-400 bg-black rounded-full'></p>
                                <p>Hạn chế vắt áo quần mạnh tay, vì vải sẽ bị nhăn.</p>
                            </li>
                        </ul>
                    </div>

                    <div className='py-5'>
                        <h2 className='text-blue-900 font-bold text-xl'>5. NÊN PHƠI QUẦN ÁO Ở NƠI CÓ NHIỀU GIÓ:</h2>
                        <ul className='mx-5'>
                            <li className='flex items-start gap-3 py-1'>
                                <p className='min-w-1.5 h-1.5 mt-3 border border-black-400 bg-black rounded-full'></p>
                                <p>Nên phơi đồ ở nơi có nhiều gió hay thoáng khí.</p>
                            </li>
                            <li className='flex items-start gap-3 py-1'>
                                <p className='min-w-1.5 h-1.5 mt-3 border border-black-400 bg-black rounded-full'></p>
                                <p>Nên trải thẳng đồ khi phơi.</p>
                            </li>
                            <li className='flex items-start gap-3 py-1'>
                                <p className='min-w-1.5 h-1.5 mt-3 border border-black-400 bg-black rounded-full'></p>
                                <p>Tránh phơi đồ nơi có nhiều ánh nắng trực tiếp.</p>
                            </li>
                        </ul>
                    </div>

                    <div className='py-5'>
                        <h2 className='text-blue-900 font-bold text-xl'>6. KHÔNG NÊN PHƠI ÁO BẰNG MÓC:</h2>
                        <ul className='mx-5'>
                            <li className='flex items-start gap-3 py-1'>
                                <p className='min-w-1.5 h-1.5 mt-3 border border-black-400 bg-black rounded-full'></p>
                                <p>Phơi áo bằng móc có thể khiến cổ áo, vai áo bị giãn và biến dạng.</p>
                            </li>
                            <li className='flex items-start gap-3 py-1'>
                                <p className='min-w-1.5 h-1.5 mt-3 border border-black-400 bg-black rounded-full'></p>
                                <p>Hạn chế phơi áo dưới ánh nắng trực tiếp, sẽ khiến áo bạc màu theo thời gian nhanh hơn.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <OurPolicy />
        </div>
    )
}

export default Policy
