import React, { useState } from 'react'
import BoxDrink from './boxDrink'
import LineDrink from './lineDrink';

const itemsContainer = ({ items }) => {
    const [shape, setShape] = useState(true);

    const boxShape = () => {
        setShape(true)
    }

    const lineShape = () => {
        setShape(false)
    }
    return (
        <div>
            <div className='bg-[#ffede0] p-2 m-10'>
                <div className='flex justify-end'>
                    <div className='border-2 border-[#510578] border-solid p-1 mr-2 rounded-xl cursor-pointer' onClick={boxShape}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#510578]">
                            <path fillRule="evenodd" d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className='border-2 border-[#510578] border-solid p-1 ml-2 rounded-xl cursor-pointer' onClick={lineShape}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#510578]">
                            <path fillRule="evenodd" d="M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
                {shape ?

                    <div className='grid grid-cols-4 items-center justify-between'>
                        {items ? items.length > 0 ? (items.map(item => (
                            <div key={item.idDrink}>
                                <BoxDrink src={item.strDrinkThumb} title={item.strDrink} category={item.strCategory} />
                            </div>
                        ))) : null : <h3 className='text-3xl text-center font-mono font-bold'>No Data for Your Search</h3>
                        }
                    </div> :
                    <div>
                        {items ? items.length > 0 ? (items.map(item => (
                            <div key={item.idDrink}>
                                <LineDrink src={item.strDrinkThumb} title={item.strDrink} category={item.strCategory} />
                            </div>
                        ))) : null : null
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default itemsContainer