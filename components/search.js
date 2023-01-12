import React, { useState } from 'react'

import ItemsContainer from './itemsContainer';

const search = () => {
    // const [load, setLoad] = useState(false);
    // const [itemData, setItemData] = useState([]);
    // const dummyCall =  (req, res) => {
    //         fetch('/api/test').then( response  =>
    //             setItemData(response.json())
    //         );
    //     console.log(itemData);
    // }


    // const searchFunction = () => {

    // }

    const data = [
        {
            "id": 1,
            "src": "/cocktail.jpg",
            "title": "Magarita",
            "category": "Category"
        },
        {
            "id": 2,
            "src": "/cocktail.jpg",
            "title": "Magarita",
            "category": "Category"
        },
        {
            "id": 3,
            "src": "/cocktail.jpg",
            "title": "Magarita",
            "category": "Category"
        },
        {
            "id": 4,
            "src": "/cocktail.jpg",
            "title": "Magarita",
            "category": "Category"
        },
        {
            "id": 5,
            "src": "/cocktail.jpg",
            "title": "Magarita",
            "category": "Category"
        },
        {
            "id": 6,
            "src": "/cocktail.jpg",
            "title": "Magarita",
            "category": "Category"
        },
    ]

    const [load, setLoad] = useState(false);

    const dataLoad = () => {
        setLoad(true);
    }

    return (
        <>
            <div className='mx-[15px] my-[10px] relative'>
                <input type="search" name="search" placeholder="Search" className="bg-[#e4d2fc] h-12 w-full px-5 pr-20 rounded-full text-sm focus:outline-none placeholder:text-black" />
                <button className='bg-[#510578] w-36 h-12 rounded-3xl py-3 absolute right-0 top-0 bottom-0  flex items-center justify-center' type='button' onClick={dataLoad}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-current text-white ">
                        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            {
                load ? <ItemsContainer items={data}/> : null
            }
        </>
    )
}

export default search