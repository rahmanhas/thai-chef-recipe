import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const RecipeCard = ({ recipe }) => {
    const { id, recipeName, ingredients, cookingMethod, rating } = recipe;
    const [buttonDisable, setButtonDisable] = useState(true)
    const handleFavoriteButton = () => {
        toast('This recipe is your favorite');
        setButtonDisable(false);
    }
    return (
        <div className="card w-96 bg-green-50 text-green-700 shadow-xl border-2 border-green-900 text-left mx-auto max-h-fit lg:h-[700px] my-5">
            <div className="card-body font-bold">
                <h2 className="card-title font-extrabold">Recipe Name: </h2>
                <h2 className="card-title font-extrabold pb-8"> {recipeName}</h2>
                <ol className='text-left list-disk text-lg'><span className='text-xl underline'>Ingredients:</span>
                    {
                        ingredients.map(item => <li className='ps-3'>- {item}</li>)
                    }
                </ol>
                <p className='mt-3 text-lg underline'>Cooking Method:</p>
                <p className=''>{cookingMethod}</p>
                <p>
                    <span className='mr-3'>Rating: {rating}</span>

                    <Rating
                        placeholderRating={rating}
                        emptySymbol={<FaRegStar />}
                        placeholderSymbol={<FaStar />}
                        fullSymbol={<FaStar />}
                        readonly
                    />
                </p>
                <div className="card-actions justify-end">
                    <button onClick={handleFavoriteButton} className={buttonDisable ? "btn btn-primary bg-green-700 hover:bg-green-900 border-0" : "btn-disable border-2 p-3 bg-green-200 border-green-400 rounded-lg"} >Favorite</button>
                    <Toaster />
                </div>
            </div>
        </div>

    );
};

export default RecipeCard;