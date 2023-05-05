import React from 'react';
import { Link } from 'react-router-dom';

const ChefsCard = ({ chef }) => {

    const { id, chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes } = chef;
    console.log(chefPicture);
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl my-12 mx-auto border-green-700 border">
                <figure><img className='my-3 h-[300px] w-[300px] rounded-lg shadow-2xl' src={chefPicture} alt="Album" /></figure>
                <div className="card-body mx-auto ">
                    <h2 className="my-3 justify-center text-5xl text-green-900">Name: {chefName}</h2>
                    <p className='my-3 text-2xl text-green-900'>Experience: {yearsOfExperience} years</p>
                    <p className='my-3 text-xl text-green-900'>No. of Recipes: {numberOfRecipes}</p>
                    <p className='my-3 text-xl text-green-900'>Total Likes: {numberOfRecipes}</p>
                    <div className="card-actions justify-center">
                        <div className=' my-5 flex justify-center lg:justify-end '>
                            <Link to={`/chefinfo/${id}`}><button className="btn btn-primary bg-green-700 hover:bg-green-900 border-0 ">View Recipes</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefsCard;