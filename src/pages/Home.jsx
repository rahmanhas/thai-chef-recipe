import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ChefsCard from '../components/Cards/chefsCard';
import partner1 from '../assets/partner-1.jpg';
import partner2 from '../assets/partner-2.jpg';
import partner3 from '../assets/partner-3.jpg';
import partner4 from '../assets/partner-4.jpg';
import partner5 from '../assets/partner-5.png';
import LazyLoad from 'react-lazy-load';


const Home = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://chef-recipe-hunter-server-beryl.vercel.app/chefinfo')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
    return (
        <div>
            <div className="hero min-h-fit my-12 bg-base-100 rounded-2xl">
                {/* Banner Section */}
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <LazyLoad >

                            <img src="https://img.freepik.com/free-vector/chef-character-design_1322-128.jpg?w=740&t=st=1682968134~exp=1682968734~hmac=1856a512f527ba4efae561988c50269d635ecd8830464e57b02d10b7f4352871" className="max-w-sm rounded-lg shadow-2xl bg-green-700" />
                        </LazyLoad>
                    </div>
                    <div>
                        <h1 className="text-5xl lg:text-8xl font-bold lg:text-left text-green-700">Exclusive Thai Chef's Recipe Hunter</h1>
                        <p className="py-6 pe-10 text-justify lg:text-left text-lg lg:text-xl">Welcome to our Thai recipe website, where you can explore an array of authentic and flavorful Thai dishes from our team of talented Thai chefs. From classic favorites like Pad Thai and Tom Yum Soup to lesser-known gems, our website offers a wide selection of recipes to delight your taste buds.</p>
                        <Link to="/login"><button className="btn btn-primary flex justify-start bg-green-700 hover:bg-green-900 border-0">Get Started</button></Link>
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
            {/* Extra Section-1: Recipe Tips */}
            <div className='my-12'>
                <h1 className='text-2xl lg:text-6xl font-extrabold text-green-700'>Tips and Articles to Grow</h1>
                <div className='lg:flex justify-center items-center gap-6'>
                    <div className="card w-96 bg-base-100 shadow-xl my-5 mx-auto border border-green-700">
                        <div className="card-body">
                            <h2 className="card-title justify-center">Balance flavors</h2>
                            <p>Thai cuisine is known for its balance of sweet, sour, salty, and spicy flavors. To achieve this balance, Thai chefs often use a combination of ingredients such as palm sugar, lime juice, fish sauce, and chili peppers. Start with a small amount of each flavor and adjust to create a balance of flavors in your dish.</p>
                        </div>
                        {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl my-5 mx-auto border border-green-700">
                        <div className="card-body">
                            <h2 className="card-title justify-center">Use fresh ingredients</h2>
                            <p>Thai cuisine relies heavily on fresh herbs and spices, such as lemongrass, galangal, and kaffir lime leaves. Using fresh ingredients will not only enhance the flavor of your dish, but it will also give it a vibrant and aromatic quality that is the most important characteristic of Thai cuisine.</p>
                        </div>
                        {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl my-5 mx-auto border border-green-700">
                        <div className="card-body">
                            <h2 className="card-title justify-center">Practice knife skills</h2>
                            <p>Thai cuisine often involves a lot of chopping and slicing of ingredients, such as vegetables, herbs, and meats. Developing good knife skills will not only make your cooking more efficient, but it will also ensure that your ingredients are evenly cut and cooked properly. Take the time to learn proper cutting techniques.</p>
                        </div>
                        {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
                    </div>
                </div>
            </div>
            {/* 1 Extra Section: Partner Section */}
            <div className='my-12'>
                <h1 className='text-6xl font-extrabold text-green-700'>Our Partners</h1>
                <div className='lg:flex justify-between items-center my-12'>
                    <img className='mx-auto my-5 h-[150px] w-[150px] gap-4' src={partner1} />
                    <img className='mx-auto my-5 h-[150px] w-[150px] gap-4' src={partner3} />
                    <img className='mx-auto my-5 h-[150px] w-[150px] gap-4' src={partner2} />
                    <img className='mx-auto my-5 h-[150px] w-[150px] gap-4' src={partner4} />
                    <img className='mx-auto my-5 h-[150px] w-[150px] gap-4' src={partner5} />
                </div>

            </div>
        </div>
    );
};

export default Home;