import React from 'react';

const ChefsCard = ({ chef }) => {
    console.log(chef);
    const { id, chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes } = chef;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={chefPicture} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{chefName}</h2>
                    <p>Experience: {yearsOfExperience} years</p>
                    <p>No. of Recipes: {numberOfRecipes}</p>
                    <p>Likes: {numberOfRecipes}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Recipe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefsCard;