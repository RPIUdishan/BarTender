import React from 'react'

const drink = ({ src, title, category }) => {
  return (
    <div className='box-content w-72 h-96 bg-black border-2 border-white border-solid p-2'>
      <img
        src={src}
        className="w-84 h-84"
      />
      <div className='text-white mt-3 mb-2 flex-col justify-center items-center'>
        <div className='flex items-center justify-center'>
          <p className='text-2xl font-bold font-mono'>{title}</p>
        </div>
        <div className='flex items-center justify-center'>
          <p className='text-xl font-mono'>{category}</p>
        </div>
      </div>
    </div>
  )
}

export default drink