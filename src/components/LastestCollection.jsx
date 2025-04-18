import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LastestCollection = () => {

    const { products } = useContext(ShopContext);
    const [lastestProducts, setLastestProducts] = useState([]);

    useEffect(() => {
        setLastestProducts(products.slice(0, 10));
    }, [])

    return (
        <div className='my-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw]'>
            <div className='text-center py-8 text-3xl'>
                <Title text={'MỚI NHẤT'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    lastestProducts.map((item, index) => (
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>
        </div>
    )
}

export default LastestCollection
