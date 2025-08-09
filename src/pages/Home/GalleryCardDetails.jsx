import React from "react";

const GalleryCardDetails = ({ food }) => {
    const { food_image } = food;

    return (
        <div className="">
            <img
                className="w-full h-48 object-cover rounded-2xl shadow-xl hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                src={food_image}
                alt="Delicious Food"
            />
        </div>
        
    );
};

export default GalleryCardDetails;
