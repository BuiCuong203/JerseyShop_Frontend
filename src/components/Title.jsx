import React from 'react'

const Title = ({text}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
      <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
      <p className='text-gray-700 font-medium'>{text}</p>
      <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
    </div>
  )
}

export default Title
