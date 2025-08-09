import React from "react";
import { Link } from "react-router";

const FoodCard = ({ food }) => {
    const { food_name, _id, price, food_category, food_origin, description, food_image } = food;

    return (
        <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            <img
                className="w-full h-48 object-cover"
                src={food_image}
                alt={food_name}
            />
            <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{food_name}</h2>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {description}
                </p>
                <div className="py-2 text-primary space-y-1">
                    <h2 className="text-xl">
                        <span className="font-bold text-orange-400">Category:</span> {food_category}
                    </h2>
                    <h1 className="text-xl">
                        <span className="font-bold text-orange-400">Country:</span> {food_origin}
                    </h1>
                    <p className="font-semibold">
                        <span className="font-bold text-orange-400">Price:</span> {price} TK
                    </p>
                </div>
                <Link to={`/foods/${_id}`}>
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded-xl hover:bg-yellow-600 transition-colors duration-200 cursor-pointer mt-4">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FoodCard;
