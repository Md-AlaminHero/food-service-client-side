import React from 'react';
import { Link } from 'react-router';

const FoodCard = ({ food }) => {
    const { food_name, _id, price, food_category, food_origin, description, food_image } = food;
    // const { title, description } = job;
    return (
        <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
                className="w-full h-48 object-cover"
                src={food_image}
                alt="Delicious Burger"
            />
            <div className="p-5">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{food_name}</h2>
                <p className="text-gray-600 text-sm mb-4">
                    {description}
                </p>
                <div className='py-2'>
                    <h2 className="text-xl">Category: {food_category}</h2>
                    <h1 className="text-xl">Country: {food_origin}</h1>
                    <p className='font-semibold'>Price: {price} TK</p>
                </div>
                <Link to={`/foods/${_id}`}><button className="bg-yellow-500 text-white px-4 py-2 rounded-xl hover:bg-yellow-600 transition-colors duration-200 cursor-pointer">View Details</button></Link>
            </div>
        </div>
    );
};

export default FoodCard;