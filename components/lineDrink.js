import React from 'react'

const lineDrink = ({ src, title, category }) => {
    return (
        <>
            <div className='w-auto h-48 bg-[#510578] ml-80 mr-80 my-10 p-2 rounded-xl'>
                <div className=' inline-flex '>
                    <div>
                        <img
                            src={src}
                            className="w-44 h-44 rounded-xl"
                        />
                    </div>
                    <div className='m-5'>
                        <div>
                            <p className='text-white font-mono text-3xl font-bold'>{title}</p>
                        </div>
                        <div>
                            <p className='text-white font-mono text-xl'>{category}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default lineDrink