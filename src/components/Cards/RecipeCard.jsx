import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const RecipeCard = ({ recipe }) => {
    const { id, recipeName, ingredients, cookingMethod, rating } = recipe;
    const [buttonDisable, setButtonDisable] =useState(true)
    const handleFavoriteButton = () => {
        toast('This recipe is your favorite');
        setButtonDisable(false);
    }
    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{recipeName}</h2>
                <ol className='text-left'>Ingredients:
                    {
                        ingredients.map(item => <li>{item}</li>)
                    }
                </ol>
                <p>Cooking Method: {cookingMethod}</p>
                <p>Rating: {rating}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleFavoriteButton} className={buttonDisable ? "btn btn-primary": "btn-disable"} >Favorite</button>
                    <Toaster />
                </div>
            </div>
        </div>

    );
};

export default RecipeCard;