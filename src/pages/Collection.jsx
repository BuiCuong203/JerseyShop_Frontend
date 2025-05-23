import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'
import { RiArrowDropRightLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

const Collection = () => {

  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');
  const [search, setSearch] = useState('');

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, sortType]);

  const toggleCategory = (e) => {
    if(category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    var productsCopy = products.slice();

    if(search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if(subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    switch(sortType) {
      case 'low-high':
        setFilterProducts(productsCopy.sort((a, b) => (a.price - b.price)))
        break;
      case 'high-low':
        setFilterProducts(productsCopy.sort((a, b) => (b.price - a.price)))
        break;
      default:
        setFilterProducts(productsCopy)
        break;
    }

    setFilterProducts(productsCopy)
  }

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw]'>
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='prata-regular text-xl flex items-center cursor-pointer gap-2 mx-2'>Bộ lọc
          <RiArrowDropRightLine className={`text-[30px] sm:hidden ${showFilter? 'rotate-90': ''}`} />
        </p>

        <div className={`border border-gray-400 rounded-md mt-6 ${showFilter? '': 'hidden'} sm:block`}>
          <div className="flex items-center gap-2 px-4 py-3">
            <input className='flex-1 outline-none bg-inherit text-md' onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Tìm kiếm' />
            <CiSearch className='text-[20px] text-gray-500' />
          </div>
        </div>
        
        <div className={`border border-gray-400 rounded-md pl-5 py-3 mt-6 ${showFilter? '': 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Danh mục</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Men'} onChange={toggleCategory} />Men
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Women'} onChange={toggleCategory} />Women
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Kids'} onChange={toggleCategory} />Kids
            </p>
          </div>
        </div>

        <div className={`border border-gray-400 rounded-md pl-5 py-3 my-5 ${showFilter? '': 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Loại</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Topwear'} onChange={toggleSubCategory} /> Topwear
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Bottomwear'} onChange={toggleSubCategory} /> Bottomwear
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Winterwear'} onChange={toggleSubCategory} /> Winterwear
            </p>
          </div>
        </div>
      </div>

      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text={'SẢN PHẨM'} />

          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-400 text-sm px-2 rounded-md' name="" id="">
            <option value="relavent">Sắp xếp: Mặc định</option>
            <option value="low-high">Sắp xếp: Thấp - Cao</option>
            <option value="high-low">Sắp xếp: Cao - Thấp</option>
          </select>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-5'>
          {
            filterProducts.map((item, index) => (
              <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection
