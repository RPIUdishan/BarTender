import React from 'react'

const drink = (drink) => {
  return (
    <div className='box-content w-48 h-64 bg-black border-2 border-white border-solid p-2'>
      <img
        src="/cocktail.jpg"
        alt={drink.alter}
        className="w-48 h-48"
      />
      <div className='text-white mt-3 mb-2 flex-col justify-center items-center'>
        <div className='flex items-center justify-center'>
          <p className='text-2xl font-bold font-mono'>Magarita</p>
        </div>
        <div className='flex items-center justify-center'>
          <p className='text-xl font-mono'>Category</p>
        </div>
      </div>
    </div>
  )
}

export default drink