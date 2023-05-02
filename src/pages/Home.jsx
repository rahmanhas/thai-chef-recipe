import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefsCard from '../components/Cards/chefsCard';

const Home = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefinfo')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                {/* Banner Section */}
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://img.freepik.com/free-vector/chef-character-design_1322-128.jpg?w=740&t=st=1682968134~exp=1682968734~hmac=1856a512f527ba4efae561988c50269d635ecd8830464e57b02d10b7f4352871" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div>
                {/* Card Section */}
                {
                    chefs.map(chef => <ChefsCard
                        key={chef.id}
                        chef={chef}
                    ></ChefsCard>)
                }
            </div>
            <div>
                {/* 1 Extra Section: Partner Section */}
                <h1 className='text-2xl font-bold'>Our Partners</h1>
                <div className='flex justify-center items-center'>
                    <p>partner-1</p>
                    <p>partner-2</p>
                    <p>partner-3</p>
                    <p>partner-4</p>
                    <p>partner-5</p>
                </div>

            </div>
            <div className='flex justify-center items-center'>
                {/* Recipe Tips */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                </div>
            </div>
        </div>
    );
};

export default Home;