import React from 'react'


const search = () => {
    return (
        <div className='mx-[15px] my-[10px] relative'>
            <input type="search" name="search" placeholder="Search" class="bg-[#e4d2fc] h-12 w-full px-5 pr-20 rounded-full text-sm focus:outline-none" />
            <button className='bg-[#510578] w-36 h-12 rounded-3xl py-3 absolute right-0 top-0 bottom-0  flex items-center justify-center' type='submit'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 fill-current text-white">
                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    )
}

export default search