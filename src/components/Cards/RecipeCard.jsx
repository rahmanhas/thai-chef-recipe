import React from 'react';

const RecipeCard = ({ recipe }) => {
    const { id, recipeName, ingredients, cookingMethod, rating } = recipe;
    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{recipeName}</h2>
                <ol className='text-left'>Ingredients:
                {
                    ingredients.map(item=><li>{item}</li>)
                }
                </ol>
                <p>Cooking Method: {cookingMethod}</p>
                <p>Rating: {rating}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Favourite</button>
                </div>
            </div>
        </div>

    );
};

export default RecipeCard;