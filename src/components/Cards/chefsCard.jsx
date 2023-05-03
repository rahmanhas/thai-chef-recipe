import React from 'react';
import { Link } from 'react-router-dom';

const ChefsCard = ({ chef }) => {
    
    const { id, chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes } = chef;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl mt-5 border-green-700 border">
                <figure><img className='h-[300px] w-[300px]' src={chefPicture} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="justify-center text-5xl text-green-900">Name: {chefName}</h2>
                    <p className='text-2xl text-green-900'>Experience: {yearsOfExperience} years</p>
                    <p className='text-xl text-green-900'>No. of Recipes: {numberOfRecipes}</p>
                    <p className='text-xl text-green-900'>Total Likes: {numberOfRecipes}</p>
                    <div className="card-actions justify-center">
                    <Link to={`/chefinfo/${id}`}><button className="btn btn-primary bg-green-700 hover:bg-green-900 border-0 ">View Recipes</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefsCard;