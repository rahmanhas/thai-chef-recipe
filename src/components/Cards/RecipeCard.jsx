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

        <div className="card w-96 bg-green-50 text-green-700 shadow-xl border-2 border-green-900 text-left">
            <div className="card-body font-bold">
                <h2 className="card-title font-extrabold py-5">Recipe Name: {recipeName}</h2>
                <ol className='text-left list-disk'>Ingredients:
                    {
                        ingredients.map(item => <li className='ps-3'>- {item}</li>)
                    }
                </ol>
                <p>Cooking Method:</p>
                <p>   {cookingMethod}</p>
                <p>Rating: {rating}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleFavoriteButton} className={buttonDisable ? "btn btn-primary bg-green-700 hover:bg-green-900 border-0": "btn-disable border-2 p-3 bg-green-200 border-green-400 rounded-lg"} >Favorite</button>
                    <Toaster />
                </div>
            </div>
        </div>

    );
};

export default RecipeCard;