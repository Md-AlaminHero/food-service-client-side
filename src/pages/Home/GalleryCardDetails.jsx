import React from "react";

const GalleryCardDetails = ({ food }) => {
    const { food_image } = food;

    return (
        <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
                className="w-full h-48 object-cover"
                src={food_image}
                alt="Delicious Food"
            />
        </div>
        
    );
};

export default GalleryCardDetails;
