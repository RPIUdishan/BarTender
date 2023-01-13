import React from 'react'
import MainImage from './mainImage'

const mainImages = () => {
    let titleCocktail = "Hundreds of Cocktails";
    let srcCocktail = "/cocktail.jpg";

    let titleGlass = "Super Glasses";
    let srcGlass = "/glass.jpg";

    let titleIngredients = "Delicious Ingredients";
    let srcIngredients = "/ingredients.jpg";

    let titleTypes = "Every Types";
    let srcTypes = "/types.jpg";

    return (
        <>
            <div>
                <p className="text-white font-mono font text-center mt-5 text-4xl">Search for Your Favourite Drink</p>
                <p className="text-white font-mono font text-center my-2 text-2xl">You can search any drink here</p>
            </div>
            <div className='flex justify-center items-center'>
                <MainImage src={srcCocktail} title={titleCocktail} />
                <MainImage src={srcGlass} title={titleGlass} />
                <MainImage src={srcIngredients} title={titleIngredients} />
                <MainImage src={srcTypes} title={titleTypes} />
            </div>
        </>
    )
}

export default mainImages