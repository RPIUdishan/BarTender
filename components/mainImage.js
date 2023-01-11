import React from 'react'

import Image from 'next/image'

const mainImage = ({ src, title }) => {
    return (
        <div className='w-fit h-auto bg-[#ffede0]'>
            <img className="w-96 h-96 p-2 hover:scale-125 transition ease-in-out duration-700" src={src} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center text-[#510578]">{title}</div>
            </div>
        </div>
    )
}

export default mainImage