import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeCard from '../components/Cards/RecipeCard';
import LazyLoad from 'react-lazy-load';
const ChefInfo = () => {

    const __id = useParams().id
    const [chef, setChef] = useState([]);
    useEffect(() => {
        fetch(`https://chef-recipe-hunter-server-rahmanhas.vercel.app/chefinfo/${__id}`)
            .then(res => res.json())
            .then(data => setChef(data[0]))
    }, [__id])
    const { chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes, bio, recipes } = chef;
    return (
        <div>
            <div className="my-12 hero min-h-fit bg-green-50 rounded-2xl">
                <div className="hero-content flex-col lg:flex-row">
                    
                    <LazyLoad height={300}>
                    <img src={chefPicture} className="max-w-sm rounded-lg shadow-2xl h-[300px] w-[300px]" />
                    </LazyLoad>
                    <div>
                        <h1 className="py-12 text-5xl font-bold text-green-700">{chefName}</h1>
                        <p className="pt-6 text-green-700">{bio}</p>
                        <p className="py-3 text-green-700">No of Likes: {likes}</p>
                        <p className="py-3 text-green-700">No of Recipes: {numberOfRecipes}</p>
                        <p className="py-3 text-green-700">Years of Experience: {yearsOfExperience}</p>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 my-12 justify-center items-center mx-auto'>
                {
                    recipes?.map(recipe => <RecipeCard
                        key={recipe._id}
                        recipe={recipe}
                    ></RecipeCard>)
                }
            </div>
        </div>
    );
};

export default ChefInfo;