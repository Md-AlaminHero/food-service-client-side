import React from 'react';
import { Link, useLoaderData } from 'react-router';

const FoodDetails = () => {
    const food = useLoaderData();
    const { _id, food_name, description, price, food_image } = food;
    // console.log(job);

    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className="flex gap-2 shadow-sm w-3/6 mx-auto py-4">
                <div>
                    <img
                        src={food_image}
                        className='rounded-xl'
                        alt="Movie" />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{food_name}</h2>
                    <p>{description}</p>
                    <p className='text-2xl'>Price: {price} TK</p>
                    <div className="card-actions justify-end">
                        <Link to={`/purchase/${_id}`}>
                            <button className=' bg-yellow-500 text-white px-4 py-2 rounded-xl hover:bg-yellow-600 transition-colors duration-200 cursor-pointer'>Order Now</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FoodDetails;