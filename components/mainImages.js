import React from 'react'
import MainImage from './mainImage'

const mainImages = () => {
    let titleCocktail = "Cocktail";
    let srcCocktail="/cocktail.jpg";

    let titleGlass = "Glass";
    let srcGlass="/glass.jpg";

    let titleIngredients = "Ingredients";
    let srcIngredients="/ingredients.jpg";
    
    let titleTypes = "Types";
    let srcTypes="/types.jpg";

    return (
        <div className='flex justify-center items-center'>
            <MainImage src={srcCocktail} title={titleCocktail} />
            <MainImage src={srcGlass} title={titleGlass} />
            <MainImage src={srcIngredients} title={titleIngredients} />
            <MainImage src={srcTypes} title={titleTypes} />
        </div>
    )
}

export default mainImages