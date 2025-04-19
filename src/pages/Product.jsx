import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const fetchProductData = () => {
    products.map((item) => {
      if(item._id === productId){
        setProductData(item)
        setImage(item.image[0])
        setSize('')
        setQuantity(1)
        return null;
      }
    })
  }

  useEffect(() =>{
    fetchProductData();
  }, [productId])

  return productData ? (
    <div className='border-t pt-10 transition-opacity ease-in duration-500 opacity-100 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw]'>
      
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        
        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full no-scroll'>
            {
              productData.image.map((item, index) => (
                <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
              ))
            }
          </div>

          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt='' />
          </div>
        </div>

        {/* Product Info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
            
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className='pl-2'>(122)</p>
          </div>

          <p className='mt-5 text-3xl font-medium'>{productData.price}{currency}</p>
        
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
        
          <div className='flex gap-4 my-8'>
            <p className='text-lg font-medium'>Kho:</p>
          </div>

          <div className='flex gap-4 my-8'>
            <p className='text-lg font-medium pt-1'>Kích thước:</p>

            <div className='flex gap-2'>
              {
                productData.sizes.map((item, index) => (
                  <button onClick={() => setSize(item)} className={`cursor-pointer py-2 px-4 bg-gray-100 ${item === size ? 'border' : ''}`} key={index}>{item}</button>
                ))
              }
            </div>
          </div>

          <div className='flex gap-4 my-8'>
            <p className='text-lg font-medium pt-2'>Số lượng:</p>

            <div className='border border-gray-300 text-gray-500 text-2xl font-medium py-1'>
              <button onClick={() => {quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)}} className='px-3 cursor-pointer'>-</button>
              <input onChange={(e) => setQuantity(Number(e.target.value))} className='w-15 text-gray-600 text-xl text-center focus:outline-none [&::-webkit-inner-spin-button]:appearance-none' type="number" min={1} value={quantity} />
              <button onClick={() => setQuantity(quantity + 1)} className='px-3 cursor-pointer'>+</button>
            </div>
          </div>

          <button onClick={() => addToCart(productData._id, size, quantity)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer'>THÊM VÀO GIỎ HÀNG</button>
          <hr className='mt-8 sm:w-4/5 opacity-10' />

          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>Sản phẩm chất lượng cao nhất thị trường</p>
            <p>Sản phẩm này có thể thanh toán bằng tiền mặt khi nhận hàng.</p>
            <p>Chính sách đổi trả dễ dàng trong vòng 7 ngày.</p>
          </div>
        </div>
      </div>

      {/* Description $ Review Section */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Mô tả</b>
          <p className='border px-5 py-3 text-sm'>Đánh giá (122)</p>
        </div>

        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.</p>
          <p></p>
        </div>
      </div>

      {/* Display related products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
