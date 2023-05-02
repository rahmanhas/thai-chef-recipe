import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ChefInfo = () => {

    const __id = useParams().id
    const [chef, setChef] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/chefinfo/${__id}`)
            .then(res => res.json())
            .then(data => setChef(data[0]))
    }, [])
    const { id, chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes, bio, recipe } = chef;
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={chefPicture} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{chefName}</h1>
                        <p className="py-6">{bio}</p>
                        <p className="py-6">{likes}</p>
                        <p className="py-6">{numberOfRecipes}</p>
                        <p className="py-6">{yearsOfExperience}</p>
                    </div>
                </div>
            </div>
            <div>
                {
                    
                }
            </div>
        </div>
    );
};

export default ChefInfo;