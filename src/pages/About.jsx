import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../components/Title'
import OurPolicy from '../components/OurPolicy'
import { assets } from '../assets/frontend_assets/assets'

const About = () => {
  return (
    <div className='border-t px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw]'>
      <div className='text-2xl text-center pt-8'>
        <Title text={'VỀ CHÚNG TÔI'} />
      </div>

      <div className='mt-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[650px]' src={assets.about_img} alt='' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Chào mừng bạn đến với JerseyShop – điểm đến lý tưởng dành cho những người yêu bóng đá và đam mê thời trang thể thao!</p>
          <p>Chúng tôi chuyên cung cấp áo bóng đá đẹp nhất, áo fanclub, và áo thiết kế theo yêu cầu với chất lượng cao, giá cả hợp lý. Với sứ mệnh "Mang tinh thần bóng đá đến từng nhịp sống", chúng tôi luôn cập nhật những mẫu áo mới nhất từ các câu lạc bộ nổi tiếng trên thế giới cũng như các đội tuyển quốc gia.</p>
          <p>Tại JerseyShop, bạn không chỉ tìm thấy những chiếc áo đẹp mà còn cảm nhận được niềm đam mê, sự chuyên nghiệp và dịch vụ tận tâm từ đội ngũ của chúng tôi.</p>
          
          <Link to='/policy'><u className='text-lg font-normal hover:opacity-75'>Chính sách bảo hành</u></Link>

          <div>
            <b className='text-gray-800'>Liên hệ:</b>
            <p className='text-gray-500 font-bold'>Địa chỉ: <span className='text-gray-500 font-normal'>Số 26, Đường Khương Thượng, Đống Đa, Hà Nội</span></p>
            <p className='text-gray-500 font-bold'>Số điện thoại: <span className='text-gray-500 font-normal'>0334.940.224</span></p>
            <p className='text-gray-500 font-bold'>Email: <span className='text-gray-500 font-normal'>buimanhcuong2510@gmail.com</span></p>
          </div>
        </div>
      </div>

      <OurPolicy />

      <div className='text-xl pt-20'>
        <Title text={'TẠI SAO CHỌN CHÚNG TÔI?'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-5'>
        <div className='border px-10 md:px-16 py-5 sm:py-15 flex flex-col gap-5'>
          <b>Chất Lượng cao:</b>
          <p className='text-gray-600'>Cửa hàng chúng tôi cam kết mang đến những chiếc áo bóng đá chất lượng cao, từ chất liệu đến từng chi tiết nhỏ nhất. Hình ảnh và mô tả sản phẩm trên web luôn đúng thực tế, đảm bảo trải nghiệm mua sắm uy tín cho khách hàng.</p>
        </div>

        <div className='border px-10 md:px-16 py-5 sm:py-15 flex flex-col gap-5'>
          <b>Thuận tiện:</b>
          <p className='text-gray-600'>Chúng tôi ưu tiên sự thuận tiện với giao diện website dễ sử dụng, giúp mua sắm nhanh chóng chỉ trong vài bước. Hỗ trợ đa dạng phương thức thanh toán và giao hàng toàn quốc, đảm bảo khách hàng nhận sản phẩm nhanh và an toàn.</p>
        </div>

        <div className='border px-10 md:px-16 py-5 sm:py-15 flex flex-col gap-5'>
          <b>Chăm sóc khách hàng:</b>
          <p className='text-gray-600'>Chúng tôi luôn coi trọng việc chăm sóc khách hàng, sẵn sàng lắng nghe và hỗ trợ mọi thắc mắc một cách nhanh chóng, tận tâm. Đội ngũ tư vấn nhiệt tình, chuyên nghiệp giúp khách hàng lựa chọn sản phẩm phù hợp và luôn đồng hành trước – trong – sau khi mua hàng.</p>
        </div>
      </div>
    </div>
  )
}

export default About
